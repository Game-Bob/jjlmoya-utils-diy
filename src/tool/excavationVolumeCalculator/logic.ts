import type { ExcavationInput, ExcavationOutput, SoilBand, SoilProfile } from './ui';

const SOIL_BANDS: Record<SoilProfile, SoilBand> = {
  sand: { low: 0.1, high: 0.15 },
  topsoil: { low: 0.15, high: 0.25 },
  clay: { low: 0.25, high: 0.4 },
  gravel: { low: 0.15, high: 0.25 },
};

export function getSoilBand(soil: SoilProfile): SoilBand {
  return SOIL_BANDS[soil];
}

export function calculateExcavation(input: ExcavationInput): ExcavationOutput {
  const dimensions = [input.length, input.width, input.depth].map((value) => Math.max(0, value));
  const bankVolume = dimensions.reduce((total, value) => total * value, 1);
  const soilBand = getSoilBand(input.soil);
  return {
    bankVolume,
    looseLow: bankVolume * (1 + soilBand.low),
    looseHigh: bankVolume * (1 + soilBand.high),
    soilBand,
    expansionLow: soilBand.low,
    expansionHigh: soilBand.high,
  };
}

export function convertDimension(value: number, from: 'metric' | 'imperial', to: 'metric' | 'imperial'): number {
  if (from === to) return value;
  return from === 'metric' ? value * 3.280839895 : value / 3.280839895;
}

export function convertVolume(value: number, system: 'metric' | 'imperial'): number {
  return system === 'metric' ? value : value * 35.31466672;
}
