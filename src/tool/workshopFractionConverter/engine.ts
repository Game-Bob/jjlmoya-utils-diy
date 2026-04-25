export interface FractionInput {
  whole: number;
  numerator: number;
  denominator: number;
}

export interface ConversionResult {
  fraction: FractionInput;
  inches: number;
  millimeters: number;
  closestFastener: FastenerMatch | null;
  closestSocket: SocketMatch | null;
}

export interface FastenerMatch {
  name: string;
  size_mm: number;
  size_inch: string;
  difference_mm: number;
  difference_pct: number;
}

export interface SocketMatch {
  name: string;
  size_mm: number;
  size_inch: string;
  difference_mm: number;
  difference_pct: number;
}

export interface ReverseSearchResult {
  input_mm: number;
  closest_fraction: FractionInput;
  inches: number;
  closestFastener: FastenerMatch | null;
  closestSocket: SocketMatch | null;
}

const STANDARD_FASTENERS = [
  { name: '#0', inch: '1/80', mm: 0.318 },
  { name: '#1', inch: '1/73', mm: 0.346 },
  { name: '#2', inch: '3/32', mm: 2.362 },
  { name: '#3', inch: '7/64', mm: 2.778 },
  { name: '#4', inch: '7/64', mm: 2.819 },
  { name: '#5', inch: '1/8', mm: 3.175 },
  { name: '#6', inch: '9/64', mm: 3.556 },
  { name: '#8', inch: '5/32', mm: 4.191 },
  { name: '#10', inch: '3/16', mm: 4.826 },
  { name: '#12', inch: '7/32', mm: 5.461 },
  { name: '1/4"', inch: '1/4', mm: 6.35 },
  { name: '5/16"', inch: '5/16', mm: 7.938 },
  { name: '3/8"', inch: '3/8', mm: 9.525 },
  { name: '7/16"', inch: '7/16', mm: 11.113 },
  { name: '1/2"', inch: '1/2', mm: 12.7 },
  { name: '9/16"', inch: '9/16', mm: 14.288 },
  { name: '5/8"', inch: '5/8', mm: 15.875 },
  { name: '3/4"', inch: '3/4', mm: 19.05 },
  { name: '7/8"', inch: '7/8', mm: 22.225 },
  { name: '1"', inch: '1', mm: 25.4 },
];

const STANDARD_SOCKETS = [
  { name: '4mm', mm: 4.0, inch: '5/32' },
  { name: '4.5mm', mm: 4.5, inch: '3/16' },
  { name: '5mm', mm: 5.0, inch: '13/64' },
  { name: '5.5mm', mm: 5.5, inch: '7/32' },
  { name: '6mm', mm: 6.0, inch: '15/64' },
  { name: '7mm', mm: 7.0, inch: '9/32' },
  { name: '8mm', mm: 8.0, inch: '5/16' },
  { name: '9mm', mm: 9.0, inch: '23/64' },
  { name: '10mm', mm: 10.0, inch: '3/8' },
  { name: '11mm', mm: 11.0, inch: '7/16' },
  { name: '12mm', mm: 12.0, inch: '15/32' },
  { name: '13mm', mm: 13.0, inch: '1/2' },
  { name: '14mm', mm: 14.0, inch: '9/16' },
  { name: '15mm', mm: 15.0, inch: '19/32' },
  { name: '16mm', mm: 16.0, inch: '5/8' },
  { name: '17mm', mm: 17.0, inch: '11/16' },
  { name: '18mm', mm: 18.0, inch: '23/32' },
  { name: '19mm', mm: 19.0, inch: '3/4' },
  { name: '20mm', mm: 20.0, inch: '13/16' },
  { name: '1/4" socket', mm: 6.35, inch: '1/4' },
  { name: '5/16" socket', mm: 7.938, inch: '5/16' },
  { name: '3/8" socket', mm: 9.525, inch: '3/8' },
  { name: '7/16" socket', mm: 11.113, inch: '7/16' },
  { name: '1/2" socket', mm: 12.7, inch: '1/2' },
  { name: '9/16" socket', mm: 14.288, inch: '9/16' },
  { name: '5/8" socket', mm: 15.875, inch: '5/8' },
  { name: '11/16" socket', mm: 17.463, inch: '11/16' },
  { name: '3/4" socket', mm: 19.05, inch: '3/4' },
];

export function fractionToInches(input: FractionInput): number {
  if (input.denominator === 0) return 0;
  return input.whole + input.numerator / input.denominator;
}

export function inchesToMillimeters(inches: number): number {
  return inches * 25.4;
}

export function convertFraction(input: FractionInput): ConversionResult {
  const inches = fractionToInches(input);
  const mm = inchesToMillimeters(inches);
  const closestFastener = findClosestFastener(mm);
  const closestSocket = findClosestSocket(mm);

  return {
    fraction: input,
    inches,
    millimeters: mm,
    closestFastener,
    closestSocket,
  };
}

export function reverseSearch(millimeters: number): ReverseSearchResult {
  const inches = millimeters / 25.4;
  const fraction = mmToFraction(millimeters);
  const closestFastener = findClosestFastener(millimeters);
  const closestSocket = findClosestSocket(millimeters);

  return {
    input_mm: millimeters,
    closest_fraction: fraction,
    inches,
    closestFastener,
    closestSocket,
  };
}

export function findClosestFastener(mm: number): FastenerMatch | null {
  if (STANDARD_FASTENERS.length === 0) return null;

  let closest = STANDARD_FASTENERS[0];
  let minDiff = Math.abs(closest.mm - mm);

  for (const fastener of STANDARD_FASTENERS) {
    const diff = Math.abs(fastener.mm - mm);
    if (diff < minDiff) {
      minDiff = diff;
      closest = fastener;
    }
  }

  const pct = (minDiff / mm) * 100;
  return {
    name: closest.name,
    size_mm: closest.mm,
    size_inch: closest.inch,
    difference_mm: closest.mm - mm,
    difference_pct: pct,
  };
}

export function findClosestSocket(mm: number): SocketMatch | null {
  if (STANDARD_SOCKETS.length === 0) return null;

  let closest = STANDARD_SOCKETS[0];
  let minDiff = Math.abs(closest.mm - mm);

  for (const socket of STANDARD_SOCKETS) {
    const diff = Math.abs(socket.mm - mm);
    if (diff < minDiff) {
      minDiff = diff;
      closest = socket;
    }
  }

  const pct = (minDiff / mm) * 100;
  return {
    name: closest.name,
    size_mm: closest.mm,
    size_inch: closest.inch,
    difference_mm: closest.mm - mm,
    difference_pct: pct,
  };
}

export function mmToFraction(mm: number): FractionInput {
  const inches = mm / 25.4;
  const whole = Math.floor(inches);
  const fractional = inches - whole;

  const denominators = [2, 4, 8, 16, 32, 64];
  let bestNum = 0;
  let bestDenom = 1;
  let bestError = Math.abs(fractional);

  for (const denom of denominators) {
    const num = Math.round(fractional * denom);
    const error = Math.abs(fractional - num / denom);
    if (error < bestError) {
      bestError = error;
      bestNum = num;
      bestDenom = denom;
    }
  }

  if (bestNum === bestDenom) {
    return { whole: whole + 1, numerator: 0, denominator: 1 };
  }

  return {
    whole,
    numerator: bestNum,
    denominator: bestDenom,
  };
}

export function formatFraction(input: FractionInput): string {
  if (input.denominator === 0 || (input.numerator === 0 && input.denominator === 1)) {
    return `${input.whole}"`;
  }
  if (input.whole === 0) {
    return `${input.numerator}/${input.denominator}"`;
  }
  return `${input.whole} ${input.numerator}/${input.denominator}"`;
}

export function formatMillimeters(mm: number, precision: number = 2): string {
  return `${mm.toFixed(precision)} mm`;
}
