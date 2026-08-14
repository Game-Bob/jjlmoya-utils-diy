import { describe, it, expect } from 'vitest';
import { calculateDrywall } from './logic';

describe('calculateDrywall', () => {
  it('calculates metric materials correctly', () => {
    const res = calculateDrywall({
      unitSystem: 'metric',
      length: 5,
      height: 2.5,
      studSpacingCm: 60,
      layers: 1,
      doubleSided: true,
      boardType: 'standard',
      wastePercentage: 10,
    });

    expect(res.wallArea).toBe(12.5);
    expect(res.drywallBoards).toBe(12);
    expect(res.tracksStandardLengths).toBe(4);
    expect(res.studsCount).toBe(10);
    expect(res.jointCompoundWeight).toBe(22);
  });

  it('calculates imperial materials correctly', () => {
    const res = calculateDrywall({
      unitSystem: 'imperial',
      length: 16.4,
      height: 8.2,
      studSpacingCm: 60,
      layers: 1,
      doubleSided: true,
      boardType: 'standard',
      wastePercentage: 10,
    });

    expect(res.wallArea).toBeGreaterThan(130);
    expect(res.drywallBoards).toBeGreaterThanOrEqual(10);
  });
});
