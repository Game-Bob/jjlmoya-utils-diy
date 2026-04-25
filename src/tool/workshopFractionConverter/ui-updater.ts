import type { ConversionResult, Match, ReverseSearchResult } from './types-client';
import { formatFraction } from './converter';

function getDecimals(precision: string) {
  return precision === 'metal' ? 3 : 1;
}

function updateResultDisplay(fractionStr: string, inchesStr: string, mmStr: string) {
  const fractionEl = document.getElementById('wfc-result-fraction');
  if (fractionEl) fractionEl.textContent = fractionStr;
  const inchesEl = document.getElementById('wfc-result-inches');
  if (inchesEl) inchesEl.textContent = inchesStr;
  const mmEl = document.getElementById('wfc-result-mm');
  if (mmEl) mmEl.textContent = mmStr;
}

export function displayResult(result: ConversionResult, precision = 'carpentry', ui: Record<string, string> = {}) {
  document.getElementById('wfc-no-result')?.classList.add('wfc-hidden');
  document.getElementById('wfc-result-content')?.classList.remove('wfc-hidden');
  const decimals = getDecimals(precision);
  const fractionStr = formatFraction(result.fraction);
  const inchesStr = result.inches.toFixed(decimals) + '"';
  const mmStr = result.millimeters.toFixed(decimals) + ' mm';
  updateResultDisplay(fractionStr, inchesStr, mmStr);
  updateVisualScale(result.millimeters);
  if (result.closestFastener) updateFastenerMatch(result.closestFastener, ui);
  if (result.closestSocket) updateSocketMatch(result.closestSocket, ui);
}

export function displayReverseResult(result: ReverseSearchResult, precision = 'carpentry', ui: Record<string, string> = {}) {
  document.getElementById('wfc-no-result')?.classList.add('wfc-hidden');
  document.getElementById('wfc-result-content')?.classList.remove('wfc-hidden');
  const decimals = getDecimals(precision);
  const fractionStr = formatFraction(result.closest_fraction);
  const inchesStr = result.inches.toFixed(decimals) + '"';
  const mmStr = result.input_mm.toFixed(decimals) + ' mm';
  updateResultDisplay(fractionStr, inchesStr, mmStr);
  updateVisualScale(result.input_mm);
  if (result.closestFastener) updateFastenerMatch(result.closestFastener, ui);
  if (result.closestSocket) updateSocketMatch(result.closestSocket, ui);
}

function updateVisualScale(mm: number) {
  const inchPx = 96;
  const inches = mm / 25.4;
  const width = inches * inchPx;
  const indicator = document.getElementById('wfc-scale-indicator');
  if (indicator) {
    indicator.style.width = Math.min(width, 240) + 'px';
  }
  const scaleText = document.getElementById('wfc-scale-text');
  if (scaleText) {
    scaleText.textContent = mm.toFixed(2) + ' mm (' + inches.toFixed(2) + '")';
  }
}

function updateFastenerMatch(match: Match, ui: Record<string, string>) {
  const pct = Math.abs(match.difference_pct).toFixed(1);
  const badge = document.getElementById('wfc-fastener-badge');
  const badgeClass = getBadgeClass(pct);
  if (badge) {
    badge.className = 'wfc-match-badge ' + badgeClass;
    badge.textContent = pct + '%';
  }
  const nameEl = document.getElementById('wfc-fastener-name');
  if (nameEl) nameEl.textContent = match.name;
  const detailsEl = document.getElementById('wfc-fastener-details');
  if (detailsEl) {
    detailsEl.innerHTML = `<strong>${match.size_mm.toFixed(2)} mm</strong> (${match.size_inch})<br/>${ui.matchDifference || 'Difference'}: ${match.difference_mm.toFixed(2)} mm`;
  }
}

function updateSocketMatch(match: Match, ui: Record<string, string>) {
  const pct = Math.abs(match.difference_pct).toFixed(1);
  const badge = document.getElementById('wfc-socket-badge');
  const badgeClass = getBadgeClass(pct);
  if (badge) {
    badge.className = 'wfc-match-badge ' + badgeClass;
    badge.textContent = pct + '%';
  }
  const nameEl = document.getElementById('wfc-socket-name');
  if (nameEl) nameEl.textContent = match.name;
  const detailsEl = document.getElementById('wfc-socket-details');
  if (detailsEl) {
    detailsEl.innerHTML = `<strong>${match.size_mm.toFixed(2)} mm</strong> (${match.size_inch})<br/>${ui.matchDifference || 'Difference'}: ${match.difference_mm.toFixed(2)} mm`;
  }
}

function getBadgeClass(pct: string) {
  const numPct = parseFloat(pct);
  if (numPct < 2) return 'tight';
  if (numPct < 5) return '';
  return 'loose';
}
