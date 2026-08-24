import type { ExcavationOutput, ExcavationCalculatorUI, SoilProfile } from './ui';
import { evaluateExcavation } from './evaluator';

const soilColors: Record<SoilProfile, string> = { sand: '#e6b86a', topsoil: '#86603b', clay: '#b8644b', gravel: '#8b9290' };

export function formatVolume(value: number): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

export function renderExcavationScene(root: Element, output: ExcavationOutput, soil: SoilProfile, ui: ExcavationCalculatorUI): void {
  const scene = root.querySelector('[data-ev-scene]');
  if (!scene) return;
  const color = soilColors[soil];
  const expansionWidth = Math.min(190, Math.max(40, output.looseHigh / Math.max(output.bankVolume, 0.01) * 105));
  scene.innerHTML = `<svg class="ev-scene-svg" viewBox="0 0 640 320" role="img" aria-label="${ui.sceneTitle}">
    <rect class="ev-sky" x="0" y="0" width="640" height="300" rx="20" />
    <path class="ev-contour" d="M32 62 C126 22 205 75 293 45 S470 24 610 62 M42 83 C130 48 203 96 304 68 S477 49 600 85" />
    <path class="ev-ground" d="M0 112 C120 102 190 119 290 108 C410 96 520 120 640 108 V300 H0Z" />
    <path class="ev-strata" d="M0 160 C120 150 190 168 290 156 C410 144 520 167 640 156 M0 212 C120 202 190 220 290 208 C410 196 520 219 640 208" />
    <path class="ev-cut" d="M150 112 V235 H405 V112" fill="${color}" />
    <path class="ev-cut-line" d="M150 112 V235 H405 V112" />
    <path class="ev-bank-fill" d="M178 142 H377 V214 H178Z" />
    <path class="ev-loose-fill" d="M455 244 Q474 207 494 224 Q518 177 542 222 Q570 194 594 225 Q610 211 ${455 + expansionWidth} 244Z" />
    <path class="ev-arrow" d="M420 178 C445 178 445 178 468 178 M458 168 L468 178 L458 188" />
    <path class="ev-measure" d="M128 112 V235 M122 112 H134 M122 235 H134" />
    <text class="ev-label ev-label-measure" x="105" y="181">D</text>
    <text class="ev-label ev-label-bank" x="178" y="132">${ui.sceneBank}</text>
    <text class="ev-label ev-label-loose" x="455" y="264">${ui.sceneLoose}</text>
    <text class="ev-label ev-label-cut" x="158" y="286">${ui.sceneCut}</text>
    <circle class="ev-sun" cx="570" cy="52" r="20" />
    <path class="ev-grass" d="M0 112 ${grassPath()}" />
  </svg>`;
}

function grassPath(): string {
  return Array.from({ length: 28 }, (_, index) => {
    const x = index * 24;
    return `M${x} 112 l4 -10 M${x + 8} 112 l-2 -8`;
  }).join(' ');
}

export function renderResults(root: Element, output: ExcavationOutput, soil: SoilProfile, ui: ExcavationCalculatorUI): void {
  setText(root, '[data-ev-bank]', formatVolume(output.bankVolume));
  setText(root, '[data-ev-loose-low]', formatVolume(output.looseLow));
  setText(root, '[data-ev-loose-high]', formatVolume(output.looseHigh));
  setText(root, '[data-ev-expansion]', `${Math.round(output.expansionLow * 100)}-${Math.round(output.expansionHigh * 100)}%`);
  const evaluation = evaluateExcavation(output, soil);
  const badge = root.querySelector('[data-ev-status]');
  if (badge) {
    badge.textContent = `${ui.soilStatusLabel}: ${ui[`soilStatus${capitalize(evaluation.status)}` as keyof ExcavationCalculatorUI]}`;
    badge.setAttribute('data-ev-status-level', evaluation.status);
  }
  renderExcavationScene(root, output, soil, ui);
}

function setText(root: Element, selector: string, value: string): void {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
