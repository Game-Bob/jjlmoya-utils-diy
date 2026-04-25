import type { Fraction, HistoryEntry } from './types-client';
import { convertFraction, reverseSearch } from './converter';
import { displayResult, displayReverseResult } from './ui-updater';

export class WorkshopFractionConverter {
  history: HistoryEntry[] = [];
  currentMode = 'forward';
  currentPrecision = 'carpentry';
  constructor() {
    this.setupEventListeners();
    this.loadHistory();
  }
  setupEventListeners() {
    document.querySelectorAll('#wfc-mode-toggle .wfc-mode-btn').forEach((btn) => {
      btn.addEventListener('click', (e: Event) => this.handleModeToggle(e));
    });
    document.querySelectorAll('#wfc-precision-toggle .wfc-mode-btn').forEach((btn) => {
      btn.addEventListener('click', (e: Event) => this.handlePrecisionToggle(e));
    });
    document.querySelectorAll('.wfc-stepper-btn').forEach((btn) => {
      btn.addEventListener('click', (e: Event) => this.handleStepper(e));
    });
    document.querySelectorAll('.wfc-preset-btn').forEach((btn) => {
      btn.addEventListener('click', (e: Event) => this.handlePreset(e));
    });
    this.setupActionButtons();
    this.setupInputListeners();
  }
  setupActionButtons() {
    document.getElementById('wfc-convert-btn')?.addEventListener('click', () => this.convert());
    document.getElementById('wfc-clear-btn')?.addEventListener('click', () => this.clear());
    document.getElementById('wfc-copy-btn')?.addEventListener('click', () => this.copyResult());
    document.getElementById('wfc-save-btn')?.addEventListener('click', () => this.saveToHistory());
  }
  setupInputListeners() {
    document.getElementById('wfc-whole')?.addEventListener('change', () => this.convert());
    document.getElementById('wfc-numerator')?.addEventListener('change', () => this.convert());
    document.getElementById('wfc-denominator')?.addEventListener('change', () => this.convert());
    document.getElementById('wfc-reverse-mm')?.addEventListener('change', () => this.convert());
  }
  handleModeToggle(e: Event) {
    const target = e.target as HTMLElement;
    document.querySelectorAll('#wfc-mode-toggle .wfc-mode-btn').forEach((b) => b.classList.remove('active'));
    target.classList.add('active');
    this.currentMode = target.dataset.mode || 'forward';
    this.toggleMode(this.currentMode);
  }
  handlePrecisionToggle(e: Event) {
    const target = e.target as HTMLElement;
    document.querySelectorAll('#wfc-precision-toggle .wfc-mode-btn').forEach((b) => b.classList.remove('active'));
    target.classList.add('active');
    this.currentPrecision = target.dataset.precision || 'carpentry';
  }
  handleStepper(e: Event) {
    const target = e.target as HTMLElement;
    const stepper = target.dataset.stepper || '';
    const [field, direction] = stepper.split('-');
    let inputId = '';
    if (field === 'whole') inputId = 'wfc-whole';
    else if (field === 'num') inputId = 'wfc-numerator';
    else if (field === 'denom') inputId = 'wfc-denominator';
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    if (!input) return;
    const value = parseInt(input.value, 10) || 0;
    const newValue = direction === 'up' ? value + 1 : Math.max(0, value - 1);
    input.value = String(newValue);
    this.convert();
  }
  handlePreset(e: Event) {
    const target = e.target as HTMLElement;
    const preset = target.dataset.preset || '';
    const [num, denom] = preset.split('/').map((x) => parseInt(x, 10));
    const wholeInput = document.getElementById('wfc-whole') as HTMLInputElement | null;
    const numInput = document.getElementById('wfc-numerator') as HTMLInputElement | null;
    const denomInput = document.getElementById('wfc-denominator') as HTMLSelectElement | null;
    if (wholeInput) wholeInput.value = '0';
    if (numInput) numInput.value = String(num);
    if (denomInput) denomInput.value = String(denom);
    document.querySelectorAll('.wfc-preset-btn').forEach((btn) => btn.classList.remove('active'));
    target.classList.add('active');
    this.convert();
  }
  toggleMode(mode: string) {
    const forwardInput = document.getElementById('wfc-forward-input');
    const reverseInput = document.getElementById('wfc-reverse-input');
    if (mode === 'forward') {
      forwardInput?.classList.remove('wfc-hidden');
      reverseInput?.classList.add('wfc-hidden');
    } else {
      forwardInput?.classList.add('wfc-hidden');
      reverseInput?.classList.remove('wfc-hidden');
    }
  }
  convert() {
    if (this.currentMode === 'forward') {
      this.convertForward();
    } else {
      this.convertReverse();
    }
  }
  convertForward() {
    const whole = parseInt((document.getElementById('wfc-whole') as HTMLInputElement).value, 10) || 0;
    const numerator = parseInt((document.getElementById('wfc-numerator') as HTMLInputElement).value, 10) || 0;
    const denominator = parseInt((document.getElementById('wfc-denominator') as HTMLSelectElement).value, 10) || 1;
    const input: Fraction = { whole, numerator, denominator };
    displayResult(convertFraction(input), this.currentPrecision);
  }
  convertReverse() {
    const mm = parseFloat((document.getElementById('wfc-reverse-mm') as HTMLInputElement).value) || 0;
    if (mm === 0) {
      document.getElementById('wfc-no-result')?.classList.remove('wfc-hidden');
      document.getElementById('wfc-result-content')?.classList.add('wfc-hidden');
      return;
    }
    displayReverseResult(reverseSearch(mm), this.currentPrecision);
  }
  copyResult() {
    const fractionEl = document.getElementById('wfc-result-fraction');
    const mmEl = document.getElementById('wfc-result-mm');
    const fraction = fractionEl?.textContent || '';
    const mm = mmEl?.textContent || '';
    const text = `${fraction} = ${mm}`;
    navigator.clipboard.writeText(text);
  }
  saveToHistory() {
    const fractionEl = document.getElementById('wfc-result-fraction');
    const mmEl = document.getElementById('wfc-result-mm');
    const fraction = fractionEl?.textContent || '';
    const mm = mmEl?.textContent || '';
    const entry = { fraction, mm, time: Date.now() };
    this.history.unshift(entry);
    if (this.history.length > 20) this.history.pop();
    this.saveHistoryLocal();
    this.renderHistory();
  }
  loadHistory() {
    const stored = localStorage.getItem('wfc-history');
    if (stored) {
      this.history = JSON.parse(stored);
      this.renderHistory();
    }
  }
  saveHistoryLocal() {
    localStorage.setItem('wfc-history', JSON.stringify(this.history));
  }
  renderHistory() {
    const list = document.getElementById('wfc-history-list');
    if (!list) return;
    if (this.history.length === 0) {
      list.innerHTML = '<div style="text-align: center; color: #9ca3af; font-size: 0.85rem;">No measurements yet</div>';
      return;
    }
    list.innerHTML = this.buildHistoryHTML();
    this.attachHistoryHandlers(list);
  }
  buildHistoryHTML() {
    return this.history
      .map((item, idx) => `<div class="wfc-history-item"><span><span class="wfc-history-item-fraction">${item.fraction}</span> = ${item.mm}</span><button class="wfc-history-remove" data-idx="${idx}">Remove</button></div>`)
      .join('');
  }
  attachHistoryHandlers(list: HTMLElement) {
    list.querySelectorAll('.wfc-history-remove').forEach((btn) => {
      btn.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const idx = parseInt(target.dataset.idx || '0', 10);
        this.history.splice(idx, 1);
        this.saveHistoryLocal();
        this.renderHistory();
      });
    });
  }
  clear() {
    (document.getElementById('wfc-whole') as HTMLInputElement).value = '0';
    (document.getElementById('wfc-numerator') as HTMLInputElement).value = '0';
    (document.getElementById('wfc-denominator') as HTMLSelectElement).value = '1';
    (document.getElementById('wfc-reverse-mm') as HTMLInputElement).value = '';
    document.getElementById('wfc-no-result')?.classList.remove('wfc-hidden');
    document.getElementById('wfc-result-content')?.classList.add('wfc-hidden');
    document.querySelectorAll('.wfc-preset-btn').forEach((btn) => btn.classList.remove('active'));
  }
}
