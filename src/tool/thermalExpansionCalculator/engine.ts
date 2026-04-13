export type RiskType = 'low' | 'moderate' | 'critical';

export interface TeResult {
  deltaT: number;
  deltaLmm: number;
  finalLength: number;
  riskType: RiskType;
  minJoint: number;
}

function teRisk(deltaLmm: number): RiskType {
  if (deltaLmm > 10) return 'critical';
  if (deltaLmm > 5) return 'moderate';
  return 'low';
}

export function calculateExpansion(L0: number, alpha: number, T1: number, T2: number): TeResult {
  const deltaT = T2 - T1;
  const deltaL = L0 * alpha * deltaT;
  const deltaLmm = deltaL * 1000;
  const finalLength = L0 + deltaL;
  return { deltaT, deltaLmm, finalLength, riskType: teRisk(deltaLmm), minJoint: Math.ceil(Math.abs(deltaLmm) * 1.5) };
}
