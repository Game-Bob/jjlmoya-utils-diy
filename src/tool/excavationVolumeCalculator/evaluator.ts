import type { ExcavationOutput, SoilProfile } from './ui';

export type ExcavationStatus = 'low' | 'medium' | 'high';

export interface ExcavationEvaluation {
  status: ExcavationStatus;
  ratio: number;
  soil: SoilProfile;
}

export function evaluateExcavation(output: ExcavationOutput, soil: SoilProfile): ExcavationEvaluation {
  const ratio = output.expansionHigh;
  const status = getStatus(ratio);
  return { status, ratio, soil };
}

function getStatus(ratio: number): ExcavationStatus {
  if (ratio > 0.25) return 'high';
  if (ratio >= 0.15) return 'medium';
  return 'low';
}
