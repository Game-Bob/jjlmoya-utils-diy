import { describe, expect, it } from 'vitest';
import { calculateExcavation, convertDimension, convertVolume, getSoilBand } from './logic';

describe('calculateExcavation', () => {
  it('calculates bank and loose volume for a sand excavation', () => {
    const result = calculateExcavation({ unitSystem: 'metric', length: 4, width: 3, depth: 0.5, soil: 'sand' });
    expect(result.bankVolume).toBe(6);
    expect(result.looseLow).toBeCloseTo(6.6);
    expect(result.looseHigh).toBeCloseTo(6.9);
  });

  it('clamps negative dimensions and returns the clay band', () => {
    const result = calculateExcavation({ unitSystem: 'metric', length: -2, width: 3, depth: 1, soil: 'clay' });
    expect(result.bankVolume).toBe(0);
    expect(result.soilBand).toEqual({ low: 0.25, high: 0.4 });
  });

  it('exposes the documented band for each soil profile', () => {
    expect(getSoilBand('topsoil')).toEqual({ low: 0.15, high: 0.25 });
    expect(getSoilBand('gravel')).toEqual({ low: 0.15, high: 0.25 });
  });
});

describe('unit conversion', () => {
  it('round-trips dimensions and converts cubic metres to cubic feet', () => {
    expect(convertDimension(convertDimension(2, 'metric', 'imperial'), 'imperial', 'metric')).toBeCloseTo(2);
    expect(convertVolume(1, 'imperial')).toBeCloseTo(35.3147, 3);
  });
});
