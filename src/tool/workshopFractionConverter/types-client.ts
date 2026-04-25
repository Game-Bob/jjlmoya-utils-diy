export interface Fraction {
  whole: number;
  numerator: number;
  denominator: number;
}

export interface ConversionResult {
  fraction: Fraction;
  inches: number;
  millimeters: number;
  closestFastener: Match | null;
  closestSocket: Match | null;
}

export interface Match {
  name: string;
  size_mm: number;
  size_inch: string;
  difference_mm: number;
  difference_pct: number;
}

export interface ReverseSearchResult {
  input_mm: number;
  closest_fraction: Fraction;
  inches: number;
  closestFastener: Match | null;
  closestSocket: Match | null;
}

export interface HistoryEntry {
  fraction: string;
  mm: string;
  time: number;
}

export const STANDARD_FASTENERS = [
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

export const STANDARD_SOCKETS = [
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
