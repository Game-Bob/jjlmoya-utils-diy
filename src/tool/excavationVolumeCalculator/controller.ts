import { calculateExcavation, convertDimension } from './logic';
import { renderResults } from './dom-views';
import { readExcavationState, writeExcavationState } from './storage';
import type { ExcavationCalculatorUI, ExcavationInput, ExcavationUnitSystem, SoilProfile } from './ui';

const initialState: ExcavationInput = { unitSystem: 'metric', length: 4.8, width: 3.2, depth: 0.65, soil: 'topsoil' };

export function mountExcavationCalculator(root: Element, ui: ExcavationCalculatorUI): void {
  const state = readExcavationState(initialState);
  setControls(root, state);
  bindUnitButtons(root, state, ui);
  bindDimensionInputs(root, state, ui);
  bindSoilButtons(root, state, ui);
  render(root, state, ui);
}

function bindUnitButtons(root: Element, state: ExcavationInput, ui: ExcavationCalculatorUI): void {
  root.querySelectorAll('[data-ev-unit]').forEach((button) => button.addEventListener('click', () => {
    const next = (button as HTMLElement).dataset.evUnit as ExcavationUnitSystem;
    if (next === state.unitSystem) return;
    ['length', 'width', 'depth'].forEach((key) => {
      const value = state[key as keyof ExcavationInput] as number;
      state[key as 'length' | 'width' | 'depth'] = convertDimension(value, state.unitSystem, next);
    });
    state.unitSystem = next;
    setControls(root, state);
    render(root, state, ui);
  }));
}

function bindDimensionInputs(root: Element, state: ExcavationInput, ui: ExcavationCalculatorUI): void {
  root.querySelectorAll<HTMLInputElement>('[data-ev-dimension]').forEach((input) => input.addEventListener('input', () => {
    const key = input.dataset.evDimension as 'length' | 'width' | 'depth';
    state[key] = Number(input.value) || 0;
    render(root, state, ui);
  }));
}

function bindSoilButtons(root: Element, state: ExcavationInput, ui: ExcavationCalculatorUI): void {
  root.querySelectorAll('[data-ev-soil]').forEach((button) => button.addEventListener('click', () => {
    state.soil = (button as HTMLElement).dataset.evSoil as SoilProfile;
    setControls(root, state);
    render(root, state, ui);
  }));
}


function setControls(root: Element, state: ExcavationInput): void {
  root.querySelectorAll('[data-ev-unit]').forEach((button) => button.classList.toggle('ev-active', (button as HTMLElement).dataset.evUnit === state.unitSystem));
  root.querySelectorAll<HTMLInputElement>('[data-ev-dimension]').forEach((input) => {
    const key = input.dataset.evDimension as 'length' | 'width' | 'depth';
    input.value = String(roundInput(state[key]));
  });
  root.querySelectorAll('[data-ev-soil]').forEach((button) => button.classList.toggle('ev-active', (button as HTMLElement).dataset.evSoil === state.soil));
  root.querySelectorAll('[data-ev-unit-label]').forEach((element) => { element.textContent = state.unitSystem === 'metric' ? 'm' : 'ft'; });
  root.querySelectorAll('[data-ev-volume-unit]').forEach((element) => { element.textContent = state.unitSystem === 'metric' ? 'm³' : 'ft³'; });
}

function render(root: Element, state: ExcavationInput, ui: ExcavationCalculatorUI): void {
  const output = calculateExcavation(state);
  const system = state.unitSystem;
  renderResults(root, output, state.soil, ui);
  writeExcavationState(state);
  root.dataset.evSystem = system;
}

function roundInput(value: number): number {
  return Math.round(value * 100) / 100;
}
