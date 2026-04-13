export interface StairCalculation {
  riser: number;
  tread: number;
  angle: number;
  realLength: number;
  blondel: number;
  blondelStatus: 'success' | 'warning' | 'error';
  blondelTitleKey: string;
  blondelMessageKey: string;
  blondelMessageVal: number;
  tableRows: TableRow[];
  volume: number;
  cement: number;
  sand: number;
  spacingWarningKey: string;
}

export interface TableRow {
  step: number;
  concreteHeight: number;
  finishedHeight: number;
  horizontalDistance: number;
}

/* eslint-disable max-lines-per-function, complexity, max-params */
export function calculateStairs(
  totalHeight: number,
  availableLength: number,
  numSteps: number,
  slabThickness: number,
  finishThickness: number,
  ceilingHeight: number,
  stairWidth: number,
  cementFactor: number
): StairCalculation {
  if (totalHeight <= 0 || numSteps <= 0) {
    return {
      riser: 0,
      tread: 0,
      angle: 0,
      realLength: 0,
      blondel: 0,
      blondelStatus: 'error',
      blondelTitleKey: 'statusRiserError',
      blondelMessageKey: 'msgInvalidValues',
      blondelMessageVal: 0,
      tableRows: [],
      volume: 0,
      cement: 0,
      sand: 0,
      spacingWarningKey: ''
    };
  }

  const riser = totalHeight / numSteps;
  const targetTread = 63 - (2 * riser);
  const tread = availableLength > 0 ? (availableLength / (numSteps - 1)) : Math.max(24, targetTread);

  const blondel = (2 * riser) + tread;
  const realLength = tread * (numSteps - 1);

  const angleRad = Math.atan(totalHeight / (realLength || 1));
  const angle = angleRad * (180 / Math.PI);
  const hypo = Math.sqrt(totalHeight ** 2 + realLength ** 2);

  let spacingWarningKey = '';
  let blondelStatus: 'success' | 'warning' | 'error' = 'warning';
  let blondelTitleKey = 'statusMarginLimit';
  let blondelMessageKey = 'msgBlondelValue';
  let blondelMessageVal = blondel;

  if (availableLength > 0 && tread < 24) {
    spacingWarningKey = 'msgInsufficientSpace';
    blondelStatus = 'error';
    blondelTitleKey = 'statusRiserError';
    blondelMessageKey = 'msgDangerousTread';
    blondelMessageVal = tread;
  } else if (blondel >= 62 && blondel <= 64.5) {
    blondelStatus = 'success';
    blondelTitleKey = 'statusOptimalComfort';
    blondelMessageKey = 'msgOptimalStep';
    blondelMessageVal = blondel;
  } else {
    const level = (riser > 19 || tread < 25) ? 'error' : 'warning';
    blondelStatus = level as 'error' | 'warning';
    blondelTitleKey = level === 'error' ? 'statusCriticalDesign' : 'statusMarginLimit';
  }

  if (ceilingHeight > 0) {
    const minHead = ceilingHeight - totalHeight;
    if (minHead < 200) spacingWarningKey = 'msgLowCeiling';
  }

  const tableRows: TableRow[] = [];
  for (let i = 1; i <= numSteps; i++) {
    const finishedHeight = i * riser;
    let concreteHeight = finishedHeight;
    if (i === 1) concreteHeight = riser - finishThickness;

    const horizontalDistance = (i - 1) * tread;
    tableRows.push({ step: i, concreteHeight, finishedHeight, horizontalDistance });
  }

  const volSteps = (tread * riser / 2) * stairWidth * numSteps / 1000000;
  const volSlab = (hypo * slabThickness * stairWidth) / 1000000;
  const totalVol = volSteps + volSlab;

  const cement = Math.ceil(totalVol * cementFactor / 25);
  const sand = Math.round(totalVol * 0.5 * 1000);

  return {
    riser,
    tread,
    angle: isFinite(angle) ? angle : 90,
    realLength,
    blondel,
    blondelStatus,
    blondelTitleKey,
    blondelMessageKey,
    blondelMessageVal,
    tableRows,
    volume: totalVol,
    cement,
    sand,
    spacingWarningKey
  };
}
/* eslint-enable max-lines-per-function, complexity, max-params */
