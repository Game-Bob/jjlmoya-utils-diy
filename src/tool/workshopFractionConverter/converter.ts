import type { Fraction, ConversionResult, ReverseSearchResult } from './types-client';
import { STANDARD_FASTENERS, STANDARD_SOCKETS } from './types-client';

export function fractionToInches(input: Fraction) {
  if (input.denominator === 0) return 0;
  return input.whole + input.numerator / input.denominator;
}

export function inchesToMillimeters(inches: number) {
  return inches * 25.4;
}

export function formatFraction(input: Fraction) {
  if (input.denominator === 0 || (input.numerator === 0 && input.denominator === 1)) {
    return `${input.whole}"`;
  }
  if (input.whole === 0) {
    return `${input.numerator}/${input.denominator}"`;
  }
  return `${input.whole} ${input.numerator}/${input.denominator}"`;
}

export function findClosestFastener(mm: number) {
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

export function findClosestSocket(mm: number) {
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

export function mmToFraction(mm: number): Fraction {
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
  return { whole, numerator: bestNum, denominator: bestDenom };
}

export function convertFraction(input: Fraction): ConversionResult {
  const inches = fractionToInches(input);
  const mm = inchesToMillimeters(inches);
  return {
    fraction: input,
    inches,
    millimeters: mm,
    closestFastener: findClosestFastener(mm),
    closestSocket: findClosestSocket(mm),
  };
}

export function reverseSearch(millimeters: number): ReverseSearchResult {
  const inches = millimeters / 25.4;
  const fraction = mmToFraction(millimeters);
  return {
    input_mm: millimeters,
    closest_fraction: fraction,
    inches,
    closestFastener: findClosestFastener(millimeters),
    closestSocket: findClosestSocket(millimeters),
  };
}
