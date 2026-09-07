import { calculateLadder, convertLength } from './logic';
import type { LadderAngleReachUI, LadderInput, LadderOutput, LadderSolveMode, LadderUnitSystem } from './ui';

const initialState: LadderInput = { unitSystem: 'metric', mode: 'height-and-length', knownOne: 3, knownTwo: 4 };

export function mountLadderAngleReachCalculator(root: Element, ui: LadderAngleReachUI): void {
  const state = { ...initialState };
  bindModes(root, state, ui);
  bindUnits(root, state, ui);
  bindInputs(root, state, ui);
  updateControls(root, state, ui);
  render(root, state, ui);
}

function bindModes(root: Element, state: LadderInput, ui: LadderAngleReachUI): void {
  root.querySelectorAll('[data-la-mode]').forEach((button) => button.addEventListener('click', () => {
    const next = (button as HTMLElement).dataset.laMode as LadderSolveMode;
    if (next === state.mode) return;
    const current = calculateLadder(state);
    if (current.valid) Object.assign(state, applyOutputToMode(state, current.output, next));
    else state.mode = next;
    updateControls(root, state, ui);
    render(root, state, ui);
  }));
}

function applyOutputToMode(state: LadderInput, output: LadderOutput, mode: LadderSolveMode): LadderInput {
  if (mode === 'height-and-length') return { ...state, mode, knownOne: output.targetHeight, knownTwo: output.ladderLength };
  if (mode === 'height-and-base') return { ...state, mode, knownOne: output.targetHeight, knownTwo: output.baseDistance };
  return { ...state, mode, knownOne: output.ladderLength, knownTwo: output.baseDistance };
}

function bindUnits(root: Element, state: LadderInput, ui: LadderAngleReachUI): void {
  root.querySelectorAll('[data-la-unit]').forEach((button) => button.addEventListener('click', () => {
    const next = (button as HTMLElement).dataset.laUnit as LadderUnitSystem;
    if (next === state.unitSystem) return;
    state.knownOne = convertLength(state.knownOne, state.unitSystem, next);
    state.knownTwo = convertLength(state.knownTwo, state.unitSystem, next);
    state.unitSystem = next;
    updateControls(root, state, ui);
    render(root, state, ui);
  }));
}

function bindInputs(root: Element, state: LadderInput, ui: LadderAngleReachUI): void {
  root.querySelectorAll<HTMLInputElement>('[data-la-input]').forEach((input) => input.addEventListener('input', () => {
    const key = input.dataset.laInput as 'knownOne' | 'knownTwo';
    state[key] = Number(input.value);
    render(root, state, ui);
  }));
}

function updateControls(root: Element, state: LadderInput, ui: LadderAngleReachUI): void {
  root.querySelectorAll('[data-la-mode]').forEach((button) => {
    const element = button as HTMLElement;
    const active = element.dataset.laMode === state.mode;
    element.classList.toggle('la-active', active);
    element.setAttribute('aria-pressed', String(active));
  });
  root.querySelectorAll('[data-la-unit]').forEach((button) => {
    const element = button as HTMLElement;
    const active = element.dataset.laUnit === state.unitSystem;
    element.classList.toggle('la-active', active);
    element.setAttribute('aria-pressed', String(active));
  });
  const labels = getModeLabels(state.mode, ui);
  setText(root, '[data-la-field-one-label]', labels.one.label);
  setText(root, '[data-la-field-two-label]', labels.two.label);
  setText(root, '[data-la-field-one-help]', labels.one.help);
  setText(root, '[data-la-field-two-help]', labels.two.help);
  root.querySelectorAll<HTMLInputElement>('[data-la-input]').forEach((input) => {
    const key = input.dataset.laInput as 'knownOne' | 'knownTwo';
    input.value = Number.isFinite(state[key]) ? formatNumber(state[key]) : '';
  });
  root.querySelectorAll('[data-la-length-unit]').forEach((element) => { element.textContent = state.unitSystem === 'metric' ? ui.unitLengthMetric : ui.unitLengthImperial; });
}

function getModeLabels(mode: LadderSolveMode, ui: LadderAngleReachUI): { one: { label: string; help: string }; two: { label: string; help: string } } {
  if (mode === 'height-and-length') return { one: { label: ui.fieldHeight, help: ui.fieldHeightHelp }, two: { label: ui.fieldLength, help: ui.fieldLengthHelp } };
  if (mode === 'height-and-base') return { one: { label: ui.fieldHeight, help: ui.fieldHeightHelp }, two: { label: ui.fieldBase, help: ui.fieldBaseHelp } };
  return { one: { label: ui.fieldLength, help: ui.fieldLengthHelp }, two: { label: ui.fieldBase, help: ui.fieldBaseHelp } };
}

function render(root: Element, state: LadderInput, ui: LadderAngleReachUI): void {
  const result = calculateLadder(state);
  const error = root.querySelector<HTMLElement>('[data-la-error]');
  const resultWrap = root.querySelector('[data-la-verdict-wrap]');
  if (!error || !resultWrap) return;
  if (!result.valid) {
    error.textContent = getErrorCopy(result.error, ui);
    error.hidden = false;
    resultWrap.classList.add('la-hidden');
    return;
  }
  error.hidden = true;
  resultWrap.classList.remove('la-hidden');
  renderOutput(root, result.output, ui, state.unitSystem);
}

function getErrorCopy(error: 'positive-values' | 'base-too-far' | 'target-too-high', ui: LadderAngleReachUI): string {
  if (error === 'base-too-far') return ui.invalidBase;
  if (error === 'target-too-high') return ui.invalidTarget;
  return ui.invalidPositive;
}

function renderOutput(root: Element, output: LadderOutput, ui: LadderAngleReachUI, unitSystem: LadderUnitSystem): void {
  const calculated = getCalculatedCopy(output.derivedField, ui);
  setText(root, '[data-la-derived-label]', calculated.label);
  setText(root, '[data-la-derived-help]', calculated.help);
  setText(root, '[data-la-derived]', formatNumber(output.derivedValue));
  setText(root, '[data-la-angle]', formatNumber(output.angle, 1));
  setText(root, '[data-la-reach]', formatNumber(output.verticalReach));
  setText(root, '[data-la-target]', formatNumber(output.targetHeight));
  setText(root, '[data-la-guide-base]', formatNumber(output.guideBaseDistance));
  setText(root, '[data-la-required]', formatNumber(output.requiredLengthAtGuideAngle));
  const angleStatus = root.querySelector('[data-la-angle-status]');
  if (angleStatus) {
    const angleStatusText = getAngleStatusText(output.angleStatus, ui);
    angleStatus.textContent = angleStatusText;
    angleStatus.setAttribute('data-la-status', output.angleStatus);
    setText(root, '[data-la-angle-help]', angleStatusText);
  }
  setText(root, '[data-la-verdict]', output.reachesTarget ? ui.verdictReach : ui.verdictShort);
  setText(root, '[data-la-verdict-help]', output.reachesTarget ? ui.verdictReachHelp : ui.verdictShortHelp);
  renderScene(root, output, ui, unitSystem);
}

function getCalculatedCopy(field: LadderOutput['derivedField'], ui: LadderAngleReachUI): { label: string; help: string } {
  if (field === 'base-distance') return { label: ui.calculatedBase, help: ui.calculatedBaseHelp };
  if (field === 'ladder-length') return { label: ui.calculatedLength, help: ui.calculatedLengthHelp };
  return { label: ui.calculatedHeight, help: ui.calculatedHeightHelp };
}

function getAngleStatusText(status: LadderOutput['angleStatus'], ui: LadderAngleReachUI): string {
  if (status === 'too-flat') return ui.angleTooFlat;
  if (status === 'too-steep') return ui.angleTooSteep;
  return ui.angleWithinGuide;
}

function renderScene(root: Element, output: LadderOutput, ui: LadderAngleReachUI, unitSystem: LadderUnitSystem): void {
  const scene = root.querySelector('[data-la-scene]');
  if (!scene) return;
  const scale = Math.min(88, 180 / Math.max(output.baseDistance, output.guideBaseDistance, 1), 210 / Math.max(output.verticalReach, output.targetHeight, 1));
  const baseX = 138;
  const groundY = 264;
  const wallX = baseX + output.baseDistance * scale;
  const topY = groundY - output.verticalReach * scale;
  const targetY = groundY - output.targetHeight * scale;
  const guideBaseX = wallX - output.guideBaseDistance * scale;
  const angleRad = output.angle * Math.PI / 180;
  const arcR = 32;
  const unit = unitSystem === 'metric' ? ui.unitLengthMetric : ui.unitLengthImperial;
  scene.innerHTML = `<svg class="la-scene-svg" viewBox="0 0 520 320" role="img" aria-label="${ui.angleGuide}"><line class="la-wall" x1="${wallX.toFixed(1)}" y1="34" x2="${wallX.toFixed(1)}" y2="${groundY}"/><line class="la-ground" x1="70" y1="${groundY}" x2="450" y2="${groundY}"/><line class="la-guide" x1="${guideBaseX.toFixed(1)}" y1="${groundY}" x2="${wallX.toFixed(1)}" y2="${targetY.toFixed(1)}"/><line class="la-ladder" x1="${baseX}" y1="${groundY}" x2="${wallX.toFixed(1)}" y2="${topY.toFixed(1)}"/><line class="la-rail" x1="${(baseX + 8).toFixed(1)}" y1="${groundY}" x2="${(wallX + 8).toFixed(1)}" y2="${topY.toFixed(1)}"/><circle class="la-target-dot" cx="${wallX.toFixed(1)}" cy="${targetY.toFixed(1)}" r="5"/><line class="la-target" x1="${(wallX - 28).toFixed(1)}" y1="${targetY.toFixed(1)}" x2="${(wallX + 28).toFixed(1)}" y2="${targetY.toFixed(1)}"/><line class="la-dimension" x1="${(wallX + 24).toFixed(1)}" y1="${targetY.toFixed(1)}" x2="${(wallX + 24).toFixed(1)}" y2="${groundY}"/><line class="la-dimension" x1="${baseX}" y1="${groundY + 24}" x2="${wallX.toFixed(1)}" y2="${groundY + 24}"/><path class="la-arc" d="M ${baseX + arcR} ${groundY} A ${arcR} ${arcR} 0 0 0 ${(baseX + arcR * Math.cos(angleRad)).toFixed(1)} ${(groundY - arcR * Math.sin(angleRad)).toFixed(1)}"/><line class="la-guide" x1="365" y1="94" x2="392" y2="94"/><text class="la-svg-kicker" x="365" y="76">${ui.guideLabel}</text><text class="la-svg-label" x="365" y="116">1 : 4</text><text class="la-svg-label" x="40" y="34">${ui.ladderLabel}</text><text class="la-svg-label" x="${(wallX + 10).toFixed(1)}" y="52">${ui.wallLabel}</text><text class="la-svg-label" x="${(wallX + 34).toFixed(1)}" y="${(targetY - 5).toFixed(1)}">${ui.targetLabel}</text><text class="la-svg-label" x="${((baseX + wallX) / 2).toFixed(1)}" y="${groundY + 45}">${ui.baseLabel}</text><text class="la-svg-label" x="${(baseX + 8).toFixed(1)}" y="${groundY - 8}">${output.angle.toFixed(1)}°</text><text class="la-svg-label" x="${(wallX + 30).toFixed(1)}" y="${((targetY + groundY) / 2).toFixed(1)}">${formatNumber(output.targetHeight)} ${unit}</text></svg>`;
}

function setText(root: Element, selector: string, text: string): void {
  const element = root.querySelector(selector);
  if (element) element.textContent = text;
}

function formatNumber(value: number, decimals = 2): string {
  return Number.isFinite(value) ? value.toFixed(decimals) : '';
}
