import { describe, expect, it } from 'vitest';
import { calculateLadder, convertLength, GUIDE_ANGLE_DEGREES } from './logic';

describe('calculateLadder', () => {
  it('calculates the base distance from target height and ladder length', () => {
    const result = calculateLadder({ unitSystem: 'metric', mode: 'height-and-length', knownOne: 3, knownTwo: 4 });
    expect(result.valid).toBe(true);
    if (!result.valid) return;
    expect(result.output.derivedField).toBe('base-distance');
    expect(result.output.derivedValue).toBeCloseTo(Math.sqrt(4 ** 2 - 3 ** 2), 2);
    expect(result.output.guideBaseDistance).toBeCloseTo(0.75, 2);
    expect(result.output.requiredLengthAtGuideAngle).toBeCloseTo(Math.sqrt(3 ** 2 + 0.75 ** 2), 2);
    expect(result.output.angle).toBeCloseTo(48.6, 1);
    expect(result.output.reachesTarget).toBe(true);
  });

  it('calculates the minimum ladder length from height and base distance', () => {
    const result = calculateLadder({ unitSystem: 'metric', mode: 'height-and-base', knownOne: 3, knownTwo: 0.78 });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.output.derivedField).toBe('ladder-length');
      expect(result.output.derivedValue).toBeCloseTo(3.1, 1);
      expect(result.output.angle).toBeCloseTo(GUIDE_ANGLE_DEGREES, 0);
    }
  });

  it('calculates the reachable height from ladder length and base distance', () => {
    const result = calculateLadder({ unitSystem: 'metric', mode: 'length-and-base', knownOne: 4, knownTwo: 1 });
    expect(result.valid).toBe(true);
    if (result.valid) expect(result.output.derivedValue).toBeCloseTo(Math.sqrt(15), 5);
  });

  it('rejects empty measurements and an impossible triangle', () => {
    expect(calculateLadder({ unitSystem: 'metric', mode: 'height-and-length', knownOne: 0, knownTwo: 4 })).toEqual({ valid: false, error: 'positive-values' });
    expect(calculateLadder({ unitSystem: 'metric', mode: 'height-and-length', knownOne: 4, knownTwo: 3 })).toEqual({ valid: false, error: 'target-too-high' });
    expect(calculateLadder({ unitSystem: 'metric', mode: 'length-and-base', knownOne: 2, knownTwo: 2 })).toEqual({ valid: false, error: 'base-too-far' });
  });
});

describe('length conversion', () => {
  it('round-trips metric and imperial lengths', () => {
    expect(convertLength(convertLength(4, 'metric', 'imperial'), 'imperial', 'metric')).toBeCloseTo(4);
  });
});
