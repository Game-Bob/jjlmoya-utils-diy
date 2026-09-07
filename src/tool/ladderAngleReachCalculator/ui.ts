export type LadderUnitSystem = 'metric' | 'imperial';
export type LadderSolveMode = 'height-and-length' | 'height-and-base' | 'length-and-base';
export type LadderDerivedField = 'base-distance' | 'ladder-length' | 'target-height';

export interface LadderInput {
  unitSystem: LadderUnitSystem;
  mode: LadderSolveMode;
  knownOne: number;
  knownTwo: number;
}

export type LadderErrorCode = 'positive-values' | 'base-too-far' | 'target-too-high';

export interface LadderOutput {
  ladderLength: number;
  targetHeight: number;
  baseDistance: number;
  angle: number;
  verticalReach: number;
  derivedValue: number;
  derivedField: LadderDerivedField;
  guideBaseDistance: number;
  requiredLengthAtGuideAngle: number;
  extensionAboveTarget: number;
  angleStatus: 'too-flat' | 'within-guide' | 'too-steep';
  reachesTarget: boolean;
}

export type LadderCalculation =
  | { valid: true; output: LadderOutput }
  | { valid: false; error: LadderErrorCode };

export interface LadderAngleReachUI extends Record<string, string> {
  unitSystemLabel: string;
  unitMetric: string;
  unitImperial: string;
  intro: string;
  solveTitle: string;
  modeHeightLength: string;
  modeHeightBase: string;
  modeLengthBase: string;
  modeHeightLengthHint: string;
  modeHeightBaseHint: string;
  modeLengthBaseHint: string;
  fieldHeight: string;
  fieldLength: string;
  fieldBase: string;
  fieldHeightHelp: string;
  fieldLengthHelp: string;
  fieldBaseHelp: string;
  calculatedTitle: string;
  calculatedBase: string;
  calculatedBaseHelp: string;
  calculatedLength: string;
  calculatedLengthHelp: string;
  calculatedHeight: string;
  calculatedHeightHelp: string;
  diagramTitle: string;
  angleTitle: string;
  angleUnit: string;
  angleGuide: string;
  reachTitle: string;
  reachHelp: string;
  targetTitle: string;
  targetHelp: string;
  baseTitle: string;
  baseHelp: string;
  guideDistanceTitle: string;
  guideDistanceHelp: string;
  requiredLengthTitle: string;
  requiredLengthHelp: string;
  verdictReach: string;
  verdictShort: string;
  verdictReachHelp: string;
  verdictShortHelp: string;
  angleTooFlat: string;
  angleWithinGuide: string;
  angleTooSteep: string;
  ladderLabel: string;
  wallLabel: string;
  targetLabel: string;
  baseLabel: string;
  groundLabel: string;
  guideLabel: string;
  invalidPositive: string;
  invalidBase: string;
  invalidTarget: string;
  warning: string;
  unitLengthMetric: string;
  unitLengthImperial: string;
}
