export interface PythagoreanRightAngleCalculatorUI extends Record<string, string> {
  titleMain: string;
  labelInputData: string;
  labelUnitSelection: string;
  btnUnitInches: string;
  btnUnitFeet: string;
  btnUnitCentimeters: string;
  labelSideA: string;
  labelSideB: string;
  labelMeasuredDiagonal: string;
  labelResults: string;
  labelIdealDiagonal: string;
  labelDeviation: string;
  labelStatus: string;
  labelVerification: string;
  btnClear: string;
  btnCopyResults: string;
  labelPresets: string;
  unitInches: string;
  unitFeet: string;
  unitCentimeters: string;
  tooltipOptional: string;
  tooltipPresets: string;
  statusPerfect: string;
  statusAcceptable: string;
  statusWarning: string;
  statusError: string;
  statusReady: string;
  msgIdealCalculated: string;
  actionOpen: string;
  actionClose: string;
  descLarger: string;
  descSmaller: string;
  descCorrection: string;
}

export const pythagoreanRightAngleCalculatorUI: PythagoreanRightAngleCalculatorUI = {
  titleMain: 'Pythagorean Right Angle Calculator',
  labelInputData: 'Measurements',
  labelUnitSelection: 'Unit',
  btnUnitInches: 'inches',
  btnUnitFeet: 'feet',
  btnUnitCentimeters: 'centimeters',
  labelSideA: 'Side A',
  labelSideB: 'Side B',
  labelMeasuredDiagonal: 'Measured diagonal (optional)',
  labelResults: 'Results',
  labelIdealDiagonal: 'Ideal diagonal',
  labelDeviation: 'Deviation',
  labelStatus: 'Status',
  labelVerification: 'Square verification',
  btnClear: 'Clear',
  btnCopyResults: 'Copy results',
  labelPresets: 'Quick presets',
  unitInches: 'in',
  unitFeet: 'ft',
  unitCentimeters: 'cm',
  tooltipOptional: 'Enter your measured diagonal to verify perfect 90 degrees',
  tooltipPresets: '3-4-5 rule in different scales',
  statusPerfect: 'Perfect 90 degree angle',
  statusAcceptable: 'Acceptable deviation',
  statusWarning: 'Minor deviation',
  statusError: 'Out of square',
  statusReady: 'Ready',
  msgIdealCalculated: 'Diagonal ideal calculated',
  actionOpen: 'Open',
  actionClose: 'Close',
  descLarger: 'larger',
  descSmaller: 'smaller',
  descCorrection: 'Correction needed'
};
