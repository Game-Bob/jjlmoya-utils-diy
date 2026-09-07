import type { LadderCalculation, LadderInput, LadderOutput } from './ui';

export const GUIDE_ANGLE_DEGREES = 75.5;
export const GUIDE_ANGLE_TOLERANCE_DEGREES = 5.5;

export function convertLength(value: number, from: 'metric' | 'imperial', to: 'metric' | 'imperial'): number {
  if (from === to) return value;
  return from === 'metric' ? value * 3.280839895 : value / 3.280839895;
}

export function calculateLadder(input: LadderInput): LadderCalculation {
  if (!arePositiveMeasurements(input.knownOne, input.knownTwo)) return { valid: false, error: 'positive-values' };
  if (input.mode === 'height-and-length' && input.knownOne >= input.knownTwo) return { valid: false, error: 'target-too-high' };
  const values = resolveKnownValues(input);
  if (values.baseDistance >= values.ladderLength) return { valid: false, error: 'base-too-far' };

  const angle = Math.acos(values.baseDistance / values.ladderLength) * (180 / Math.PI);
  const verticalReach = Math.sqrt(Math.max(0, values.ladderLength ** 2 - values.baseDistance ** 2));
  const guideBaseDistance = values.targetHeight / 4;
  const requiredLengthAtGuideAngle = Math.sqrt(values.targetHeight ** 2 + guideBaseDistance ** 2);
  return {
    valid: true,
    output: {
      ...values,
      angle,
      verticalReach,
      guideBaseDistance,
      requiredLengthAtGuideAngle,
      extensionAboveTarget: Math.max(0, verticalReach - values.targetHeight),
      angleStatus: getAngleStatus(angle),
      reachesTarget: verticalReach >= values.targetHeight,
    },
  };
}

function resolveKnownValues(input: LadderInput): Pick<LadderOutput, 'ladderLength' | 'targetHeight' | 'baseDistance' | 'derivedValue' | 'derivedField'> {
  if (input.mode === 'height-and-length') {
    const targetHeight = input.knownOne;
    const ladderLength = input.knownTwo;
    const baseDistance = Math.sqrt(ladderLength ** 2 - targetHeight ** 2);
    return { ladderLength, targetHeight, baseDistance, derivedValue: baseDistance, derivedField: 'base-distance' };
  }
  if (input.mode === 'height-and-base') {
    const targetHeight = input.knownOne;
    const baseDistance = input.knownTwo;
    const ladderLength = Math.sqrt(targetHeight ** 2 + baseDistance ** 2);
    return { ladderLength, targetHeight, baseDistance, derivedValue: ladderLength, derivedField: 'ladder-length' };
  }
  const ladderLength = input.knownOne;
  const baseDistance = input.knownTwo;
  const targetHeight = Math.sqrt(Math.max(0, ladderLength ** 2 - baseDistance ** 2));
  return { ladderLength, targetHeight, baseDistance, derivedValue: targetHeight, derivedField: 'target-height' };
}

function arePositiveMeasurements(...values: number[]): boolean {
  return values.every((value) => Number.isFinite(value) && value > 0);
}

function getAngleStatus(angle: number): LadderOutput['angleStatus'] {
  const difference = angle - GUIDE_ANGLE_DEGREES;
  if (difference < -GUIDE_ANGLE_TOLERANCE_DEGREES) return 'too-flat';
  if (difference > GUIDE_ANGLE_TOLERANCE_DEGREES) return 'too-steep';
  return 'within-guide';
}
