export interface CutRequest {
  id: string;
  length: number;
  width: number;
  quantity: number;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface OptimizedPiece {
  stockId: number;
  stockLength: number;
  stockWidth?: number;
  cuts: (number | Rect)[];
  waste: number;
  utilization: number;
}

export interface OptimizationResult {
  totalStockUsed: number;
  totalWaste: number;
  totalCuts: number;
  stockPieces: OptimizedPiece[];
}

interface BestFit {
  areaFit: number;
  shortSide: number;
  index: number;
  rotated: boolean;
  rect: Rect;
}

export interface Co2DCtx {
  stockLen: number;
  stockWid: number;
  kerf: number;
}

type FitResult = { areaFit: number; shortSide: number; rect: Rect } | null;

function fitDims(iw: number, ih: number, free: Rect, best: BestFit): FitResult {
  if (iw > free.w || ih > free.h) return null;
  const areaFit = free.w * free.h - iw * ih;
  const shortSide = Math.min(Math.abs(free.w - iw), Math.abs(free.h - ih));
  if (areaFit > best.areaFit) return null;
  if (areaFit === best.areaFit && shortSide >= best.shortSide) return null;
  return { areaFit, shortSide, rect: { x: free.x, y: free.y, w: iw, h: ih } };
}

function findBestFit(item: { w: number; h: number }, freeRects: Rect[]): BestFit {
  const best: BestFit = { areaFit: Infinity, shortSide: Infinity, index: -1, rotated: false, rect: { x: 0, y: 0, w: 0, h: 0 } };
  for (let i = 0; i < freeRects.length; i++) {
    const fitN = fitDims(item.w, item.h, freeRects[i], best);
    if (fitN) Object.assign(best, fitN, { index: i, rotated: false });
    const fitR = fitDims(item.h, item.w, freeRects[i], best);
    if (fitR) Object.assign(best, fitR, { index: i, rotated: true });
  }
  return best;
}

function splitFreeRect(free: Rect, placed: Rect, freeRects: Rect[], kerf: number): void {
  const wRem = free.w - placed.w - kerf;
  const hRem = free.h - placed.h - kerf;
  if (wRem > 0) freeRects.push({ x: free.x + placed.w + kerf, y: free.y, w: wRem, h: placed.h });
  if (hRem > 0) freeRects.push({ x: free.x, y: free.y + placed.h + kerf, w: free.w, h: hRem });
}

function placeItem(freeRects: Rect[], fit: BestFit, kerf: number): Rect {
  const freeRect = freeRects[fit.index];
  freeRects.splice(fit.index, 1);
  splitFreeRect(freeRect, fit.rect, freeRects, kerf);
  return fit.rect;
}

function tryFit2DExisting(
  item: { w: number; h: number; id: string },
  pieces: OptimizedPiece[],
  freeRectsMap: Map<number, Rect[]>,
  kerf: number
): boolean {
  for (let i = 0; i < pieces.length; i++) {
    const freeRects = freeRectsMap.get(i)!;
    const fit = findBestFit(item, freeRects);
    if (fit.index !== -1) {
      const placed = placeItem(freeRects, fit, kerf);
      (pieces[i].cuts as Rect[]).push(placed);
      return true;
    }
  }
  return false;
}

function tryFit2DNew(
  item: { w: number; h: number },
  pieces: OptimizedPiece[],
  freeRectsMap: Map<number, Rect[]>,
  ctx: Co2DCtx
): void {
  const fitsNormal = item.w <= ctx.stockLen && item.h <= ctx.stockWid;
  const fitsRotated = item.h <= ctx.stockLen && item.w <= ctx.stockWid;
  if (!fitsNormal && !fitsRotated) return;
  const id = pieces.length;
  const initial: Rect = { x: 0, y: 0, w: ctx.stockLen, h: ctx.stockWid };
  freeRectsMap.set(id, [initial]);
  const piece: OptimizedPiece = { stockId: id + 1, stockLength: ctx.stockLen, stockWidth: ctx.stockWid, cuts: [], waste: 0, utilization: 0 };
  pieces.push(piece);
  const rotated = !fitsNormal && fitsRotated;
  const placed: Rect = { x: 0, y: 0, w: rotated ? item.h : item.w, h: rotated ? item.w : item.h };
  (piece.cuts as Rect[]).push(placed);
  const freeRects = freeRectsMap.get(id)!;
  freeRects.splice(0, 1);
  splitFreeRect(initial, placed, freeRects, ctx.kerf);
}

function expand1DItems(cuts: CutRequest[]): number[] {
  const items: number[] = [];
  for (const req of cuts) {
    for (let i = 0; i < req.quantity; i++) items.push(req.length);
  }
  return items;
}

function find1DBestFit(pieces: OptimizedPiece[], cutLen: number, stockLen: number, kerf: number): number {
  let bestIdx = -1;
  let minWaste = Infinity;
  for (let i = 0; i < pieces.length; i++) {
    const curCuts = pieces[i].cuts as number[];
    const used = curCuts.reduce((a, b) => a + b, 0) + (curCuts.length > 0 ? (curCuts.length - 1) * kerf : 0);
    const rem = stockLen - used;
    const space = curCuts.length > 0 ? kerf + cutLen : cutLen;
    if (rem >= space) {
      const potRem = rem - space;
      if (potRem < minWaste) { minWaste = potRem; bestIdx = i; }
    }
  }
  return bestIdx;
}

function compute1DWaste(pieces: OptimizedPiece[], stockLen: number, kerf: number): number {
  let total = 0;
  for (const piece of pieces) {
    const cuts = piece.cuts as number[];
    const kerfLoss = cuts.length > 1 ? (cuts.length - 1) * kerf : 0;
    const used = cuts.reduce((a, b) => a + b, 0) + kerfLoss;
    piece.waste = piece.stockLength - used;
    piece.utilization = used / piece.stockLength;
    total += piece.waste;
  }
  return total;
}

export function optimize1D(cuts: CutRequest[], stockLen: number, kerf: number): OptimizationResult {
  const allCuts = expand1DItems(cuts);
  allCuts.sort((a, b) => b - a);
  const pieces: OptimizedPiece[] = [];
  for (const cutLen of allCuts) {
    if (cutLen > stockLen) continue;
    const idx = find1DBestFit(pieces, cutLen, stockLen, kerf);
    if (idx !== -1) {
      (pieces[idx].cuts as number[]).push(cutLen);
    } else {
      pieces.push({ stockId: pieces.length + 1, stockLength: stockLen, cuts: [cutLen], waste: 0, utilization: 0 });
    }
  }
  const totalWaste = compute1DWaste(pieces, stockLen, kerf);
  return { totalStockUsed: pieces.length, totalWaste, totalCuts: allCuts.length, stockPieces: pieces };
}

export function optimize2D(cuts: CutRequest[], stockLen: number, stockWid: number, kerf: number): OptimizationResult {
  const ctx: Co2DCtx = { stockLen, stockWid, kerf };
  const items: Array<{ w: number; h: number; id: string }> = [];
  for (const req of cuts) {
    for (let i = 0; i < req.quantity; i++) items.push({ w: req.length, h: req.width, id: req.id });
  }
  items.sort((a, b) => b.w * b.h - a.w * a.h);
  const pieces: OptimizedPiece[] = [];
  const freeRectsMap: Map<number, Rect[]> = new Map();
  for (const item of items) {
    if (!tryFit2DExisting(item, pieces, freeRectsMap, kerf)) {
      tryFit2DNew(item, pieces, freeRectsMap, ctx);
    }
  }
  let totalWaste = 0;
  for (const piece of pieces) {
    const curCuts = piece.cuts as Rect[];
    const usedArea = curCuts.reduce((acc, c) => acc + c.w * c.h, 0);
    const totalArea = stockLen * stockWid;
    piece.utilization = usedArea / totalArea;
    piece.waste = totalArea - usedArea;
    totalWaste += piece.waste;
  }
  return { totalStockUsed: pieces.length, totalCuts: items.length, totalWaste, stockPieces: pieces };
}
