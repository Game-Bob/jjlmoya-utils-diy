export interface SquaringCalculation {
  sideA: number;
  sideB: number;
  hypotenuse: number;
  measuredDiagonal: number | null;
  deviation: number | null;
  deviationPercent: number | null;
  status: 'perfect' | 'acceptable' | 'warning' | 'error' | 'idle';
  message: string;
  correction: string;
}

interface StatusResult {
  status: 'perfect' | 'acceptable' | 'warning' | 'error';
  message: string;
  correction: string;
}

function getStatusLevel(absDev: number, deviationPercent: number): 'perfect' | 'acceptable' | 'warning' | 'error' {
  if (absDev < 0.5) return 'perfect';
  if (deviationPercent < 0.5) return 'acceptable';
  if (deviationPercent < 1) return 'warning';
  return 'error';
}

function getStatusMessage(status: 'perfect' | 'acceptable' | 'warning' | 'error', ui: Record<string, string>): string {
  const msgs = {
    perfect: ui.statusPerfect || 'Perfect 90 degree angle',
    acceptable: ui.statusAcceptable || 'Acceptable deviation',
    warning: ui.statusWarning || 'Minor deviation',
    error: ui.statusError || 'Out of square'
  };
  return msgs[status];
}

function getCorrection(status: 'perfect' | 'acceptable' | 'warning' | 'error', params: { absDev: number; devDir: string; action: string; unit: string; ui: Record<string, string> }): string {
  const fixStr = (val: number) => val.toFixed(1);
  const { absDev, devDir, action, unit, ui } = params;
  const corrections = {
    perfect: '',
    acceptable: `${action} the angle slightly. Diagonal is ${fixStr(absDev)}${unit} ${devDir}.`,
    warning: `${action} the angle. Diagonal is ${fixStr(absDev)}${unit} ${devDir}.`,
    error: `${ui.descCorrection || 'Correction'}: diagonal ${fixStr(absDev)}${unit} ${devDir} than ideal.`
  };
  return corrections[status];
}

function determineStatus(deviation: number, deviationPercent: number, unit: string, ui: Record<string, string>): StatusResult {
  const absDev = Math.abs(deviation);
  const devDir = deviation > 0 ? (ui.descLarger || 'larger') : (ui.descSmaller || 'smaller');
  const action = deviation > 0 ? (ui.actionClose || 'Close') : (ui.actionOpen || 'Open');
  const status = getStatusLevel(absDev, deviationPercent);

  return {
    status,
    message: getStatusMessage(status, ui),
    correction: getCorrection(status, { absDev, devDir, action, unit, ui })
  };
}

function createIdleResult(sideA: number, sideB: number): SquaringCalculation {
  return { sideA, sideB, hypotenuse: 0, measuredDiagonal: null, deviation: null, deviationPercent: null, status: 'idle', message: '', correction: '' };
}

function createAcceptableResult(sideA: number, sideB: number, hypotenuse: number, ui: Record<string, string>): SquaringCalculation {
  return { sideA, sideB, hypotenuse, measuredDiagonal: null, deviation: null, deviationPercent: null, status: 'acceptable', message: ui.msgIdealCalculated || 'Diagonal ideal calculated', correction: '' };
}

function validateInput(sideA: number, sideB: number): boolean {
  return sideA > 0 && sideB > 0;
}

function calculateDeviation(measuredDiagonal: number, hypotenuse: number, unit: string, ui: Record<string, string>): Pick<SquaringCalculation, 'measuredDiagonal' | 'deviation' | 'deviationPercent' | 'status' | 'message' | 'correction'> {
  const deviation = measuredDiagonal - hypotenuse;
  const deviationPercent = (Math.abs(deviation) / hypotenuse) * 100;
  const { status, message, correction } = determineStatus(deviation, deviationPercent, unit, ui);
  return { measuredDiagonal, deviation, deviationPercent, status, message, correction };
}

export function calculateSquaring(
  sideA: number,
  sideB: number,
  measuredDiagonal: number | null = null,
  options: { unit?: string; ui?: Record<string, string> } = {}
): SquaringCalculation {
  const unit = options.unit || '';
  const ui = options.ui || {};
  if (!validateInput(sideA, sideB)) return createIdleResult(sideA, sideB);

  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
  if (!measuredDiagonal || measuredDiagonal <= 0) return createAcceptableResult(sideA, sideB, hypotenuse, ui);

  const deviation = calculateDeviation(measuredDiagonal, hypotenuse, unit, ui);
  return { sideA, sideB, hypotenuse, ...deviation };
}

export const PRESET_RULES = [
  { label: '3-4-5', a: 3, b: 4, c: 5 },
  { label: '6-8-10', a: 6, b: 8, c: 10 },
  { label: '30-40-50', a: 30, b: 40, c: 50 },
  { label: '15-20-25', a: 15, b: 20, c: 25 }
];
