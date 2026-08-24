export type ExcavationUnitSystem = 'metric' | 'imperial';
export type SoilProfile = 'sand' | 'topsoil' | 'clay' | 'gravel';

export interface ExcavationInput {
  unitSystem: ExcavationUnitSystem;
  length: number;
  width: number;
  depth: number;
  soil: SoilProfile;
}

export interface SoilBand {
  low: number;
  high: number;
}

export interface ExcavationOutput {
  bankVolume: number;
  looseLow: number;
  looseHigh: number;
  soilBand: SoilBand;
  expansionLow: number;
  expansionHigh: number;
}

export interface ExcavationCalculatorUI extends Record<string, string> {
  unitSystemLabel: string;
  unitMetric: string;
  unitImperial: string;
  onboarding: string;
  dimensionLabel: string;
  lengthLabel: string;
  widthLabel: string;
  depthLabel: string;
  soilLabel: string;
  soilSand: string;
  soilTopsoil: string;
  soilClay: string;
  soilGravel: string;
  soilSandBand: string;
  soilTopsoilBand: string;
  soilClayBand: string;
  soilGravelBand: string;
  bankVolumeLabel: string;
  bankVolumeHelp: string;
  looseVolumeLabel: string;
  looseVolumeHelp: string;
  expansionLabel: string;
  expansionHelp: string;
  sceneTitle: string;
  sceneBank: string;
  sceneLoose: string;
  sceneGround: string;
  sceneCut: string;
  interpretationTitle: string;
  interpretationText: string;
  warning: string;
  unitLengthMetric: string;
  unitLengthImperial: string;
  unitVolumeMetric: string;
  unitVolumeImperial: string;
  soilStatusLow: string;
  soilStatusMedium: string;
  soilStatusHigh: string;
  soilStatusLabel: string;
}
