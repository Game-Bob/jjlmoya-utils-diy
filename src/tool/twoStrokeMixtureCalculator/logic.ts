export interface MixtureCalculation {
  fuelVolume: number;
  ratio: number;
  oilRequired: number;
  displayUnit: 'ml' | 'l';
  richness: 'lean' | 'balanced' | 'rich';
  totalMixture: number;
  status: 'idle' | 'calculated';
  message: string;
}

export interface PresetRatio {
  label: string;
  ratio: number;
}

function determineRichness(ratio: number): 'lean' | 'balanced' | 'rich' {
  if (ratio <= 40) return 'rich';
  if (ratio <= 50) return 'balanced';
  return 'lean';
}

function formatOilVolume(oilMl: number): { value: number; unit: 'ml' | 'l' } {
  return oilMl < 1000 ? { value: oilMl, unit: 'ml' } : { value: oilMl / 1000, unit: 'l' };
}

function createIdleResult(ui: Record<string, string>, fuelLiters: number, ratio: number): MixtureCalculation {
  return {
    fuelVolume: fuelLiters,
    ratio,
    oilRequired: 0,
    displayUnit: 'ml',
    richness: 'balanced',
    totalMixture: 0,
    status: 'idle',
    message: ui.msgReady || 'Ready to calculate',
  };
}

export function calculateMixture(
  fuelVolumeLiters: number,
  ratioValue: number,
  ui: Record<string, string> = {}
): MixtureCalculation {
  const fuelLiters = parseFloat(String(fuelVolumeLiters)) || 0;
  const ratio = parseFloat(String(ratioValue)) || 0;

  if (fuelLiters <= 0 || ratio <= 0) {
    return createIdleResult(ui, fuelLiters, ratio);
  }

  const oilRequiredMl = (fuelLiters * 1000) / ratio;
  const { value: displayValue, unit: displayUnit } = formatOilVolume(oilRequiredMl);

  return {
    fuelVolume: fuelLiters,
    ratio,
    oilRequired: displayValue,
    displayUnit,
    richness: determineRichness(ratio),
    totalMixture: fuelLiters + oilRequiredMl / 1000,
    status: 'calculated',
    message: ui.msgMixtureReady || 'Mixture calculated',
  };
}

export function calculateReverseRatio(
  oilVolumeMl: number,
  ratioValue: number
): { fuelRequired: number; unit: string } {
  const oil = parseFloat(String(oilVolumeMl)) || 0;
  const ratio = parseFloat(String(ratioValue)) || 0;

  if (oil <= 0 || ratio <= 0) {
    return { fuelRequired: 0, unit: 'L' };
  }

  const fuelRequiredMl = oil * ratio;
  const fuelRequiredL = fuelRequiredMl / 1000;

  return {
    fuelRequired: fuelRequiredL > 1 ? fuelRequiredL : fuelRequiredMl,
    unit: fuelRequiredL > 1 ? 'L' : 'ml',
  };
}

export const PRESET_RATIOS: PresetRatio[] = [
  { label: '1:25', ratio: 25 },
  { label: '1:33', ratio: 33 },
  { label: '1:40', ratio: 40 },
  { label: '1:50', ratio: 50 },
];
