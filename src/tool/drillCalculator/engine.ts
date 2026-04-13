export interface DrillMaterial {
  id: string;
  vcHss: number;
  vcCarbide: number;
  fz: number;
}

export interface DrillResult {
  idealRpm: number;
  displayRpm: number;
  feed: number;
  warning: string;
}

export interface DrillContext {
  lips: number;
  fz: number;
  maxRpm: number;
  isLimited: boolean;
}

export const MATERIALS: DrillMaterial[] = [
  { id: 'steel', vcHss: 25, vcCarbide: 100, fz: 0.1 },
  { id: 'inox', vcHss: 12, vcCarbide: 55, fz: 0.05 },
  { id: 'alu', vcHss: 120, vcCarbide: 400, fz: 0.15 },
  { id: 'brass', vcHss: 70, vcCarbide: 220, fz: 0.1 },
  { id: 'castiron', vcHss: 18, vcCarbide: 80, fz: 0.2 },
  { id: 'wood', vcHss: 200, vcCarbide: 500, fz: 0.3 },
  { id: 'plastic', vcHss: 50, vcCarbide: 150, fz: 0.15 },
];

function dcWarningLevel(idealRpm: number): string {
  if (idealRpm > 15000) return 'outofrange';
  return '';
}

export function calculateDrill(diameter: number, toolType: 'hss' | 'carbide', material: DrillMaterial, ctx: DrillContext): DrillResult {
  const vc = toolType === 'hss' ? material.vcHss : material.vcCarbide;
  const idealRpm = Math.round((vc * 1000) / (Math.PI * diameter));
  let displayRpm = idealRpm;
  let warning = '';

  if (ctx.isLimited && idealRpm > ctx.maxRpm) {
    displayRpm = ctx.maxRpm;
    warning = 'limited';
  } else {
    warning = dcWarningLevel(idealRpm);
  }

  const actualFz = ctx.fz || material.fz;
  const feed = Math.round(displayRpm * actualFz * ctx.lips);

  return { idealRpm, displayRpm, feed, warning };
}

export function findClosestSpeed(ideal: number, available: number[]): number {
  if (available.length === 0) return ideal;
  return available.reduce((prev, curr) => Math.abs(curr - ideal) < Math.abs(prev - ideal) ? curr : prev);
}

export function getSpeedDifference(closest: number, ideal: number): number {
  return Math.abs(closest - ideal) / ideal * 100;
}
