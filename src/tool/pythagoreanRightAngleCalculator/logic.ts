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

function determineStatus(deviation: number, deviationPercent: number, ui: Record<string, string>): StatusResult {
  const absDev = Math.abs(deviation);
  const fixStr = (val: number) => val.toFixed(1);
  const devDir = deviation > 0 ? (ui.descLarger || 'larger') : (ui.descSmaller || 'smaller');

  if (absDev < 0.5) {
    return { status: 'perfect', message: ui.statusPerfect || 'Perfect 90 degree angle', correction: '' };
  }
  if (deviationPercent < 0.5) {
    const action = deviation > 0 ? (ui.actionClose || 'Close') : (ui.actionOpen || 'Open');
    return {
      status: 'acceptable',
      message: ui.statusAcceptable || 'Acceptable deviation',
      correction: `${action} the angle slightly. Diagonal is ${fixStr(absDev)} ${devDir}.`
    };
  }
  if (deviationPercent < 1) {
    const action = deviation > 0 ? (ui.actionClose || 'Close') : (ui.actionOpen || 'Open');
    return {
      status: 'warning',
      message: ui.statusWarning || 'Minor deviation',
      correction: `${action} the angle. Diagonal is ${fixStr(absDev)} ${devDir}.`
    };
  }
  const angleState = deviation > 0 ? (ui.descLarger || 'OPEN') : (ui.descSmaller || 'CLOSED');
  return {
    status: 'error',
    message: ui.statusError || 'Out of square',
    correction: `${ui.descCorrection || 'Correction'}: diagonal ${fixStr(absDev)} ${devDir} than ideal.`
  };
}

export function calculateSquaring(
  sideA: number,
  sideB: number,
  measuredDiagonal: number | null = null,
  ui: Record<string, string> = {}
): SquaringCalculation {
  const baseResult: Omit<SquaringCalculation, 'status' | 'message' | 'correction'> = {
    sideA,
    sideB,
    hypotenuse: 0,
    measuredDiagonal: null,
    deviation: null,
    deviationPercent: null
  };

  if (sideA <= 0 || sideB <= 0) {
    return { ...baseResult, status: 'idle', message: '', correction: '' };
  }

  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
  baseResult.hypotenuse = hypotenuse;

  if (!measuredDiagonal || measuredDiagonal <= 0) {
    return { ...baseResult, status: 'acceptable', message: ui.msgIdealCalculated || 'Diagonal ideal calculated', correction: '' };
  }

  const deviation = measuredDiagonal - hypotenuse;
  const deviationPercent = (Math.abs(deviation) / hypotenuse) * 100;
  const { status, message, correction } = determineStatus(deviation, deviationPercent, ui);

  return { ...baseResult, measuredDiagonal, deviation, deviationPercent, status, message, correction };
}

export const PRESET_RULES = [
  { label: '3-4-5', a: 3, b: 4, c: 5 },
  { label: '6-8-10', a: 6, b: 8, c: 10 },
  { label: '30-40-50', a: 30, b: 40, c: 50 },
  { label: '15-20-25', a: 15, b: 20, c: 25 }
];
