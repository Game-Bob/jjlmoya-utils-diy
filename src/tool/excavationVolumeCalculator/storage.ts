import type { ExcavationInput, ExcavationUnitSystem, SoilProfile } from './ui';

const STORAGE_KEY = 'jjlmoya-excavation-volume-calculator';

interface StoredState {
  unitSystem: ExcavationUnitSystem;
  length: number;
  width: number;
  depth: number;
  soil: SoilProfile;
}

export function readExcavationState(fallback: ExcavationInput): ExcavationInput {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    if (!parsed.unitSystem || !parsed.soil) return fallback;
    return { ...fallback, ...parsed };
  } catch {}
  return fallback;
}

export function writeExcavationState(input: ExcavationInput): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
