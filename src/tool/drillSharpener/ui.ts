export interface DrillSharpenerUI {
  labelMaterial: string;
  matSteel: string;
  matInox: string;
  matHard: string;
  matBrass: string;
  matPlastic: string;
  matWood: string;
  labelDiameter: string;
  unitMm: string;
  btnMinus: string;
  btnPlus: string;
  labelVelocity: string;
  unitRpm: string;
  labelCooling: string;
  btnDiagnosis: string;
  diagTitle: string;
  diagClose: string;
  diagIssue1: string;
  diagIssue1Desc: string;
  diagIssue2: string;
  diagIssue2Desc: string;
  diagIssue3: string;
  diagIssue3Desc: string;
  gaugeInstruction: string;
}

export const drillSharpenerUI: DrillSharpenerUI = {
  labelMaterial: 'Material del trabajo',
  matSteel: 'Acero',
  matInox: 'Inox',
  matHard: 'Duros',
  matBrass: 'Latón',
  matPlastic: 'Plástico',
  matWood: 'Madera',
  labelDiameter: 'Diámetro de broca (mm)',
  unitMm: 'mm',
  btnMinus: '-',
  btnPlus: '+',
  labelVelocity: 'Velocidad',
  unitRpm: 'RPM',
  labelCooling: 'Corte',
  btnDiagnosis: '¿No corta bien? Diagnóstico',
  diagTitle: 'Diagnóstico de Fallos',
  diagClose: 'Cerrar',
  diagIssue1: '1. Saca humo y no atraviesa',
  diagIssue1Desc: 'Falta Ángulo de Incidencia. El metal detrás del filo roza la pieza. Rebaja la parte trasera para que el labio sea lo más alto.',
  diagIssue2: '2. Agujero excéntrico o mayor',
  diagIssue2Desc: 'La Punta no está centrada. Los labios tienen longitudes diferentes. Asegura que la punta toque el centro exacto de la galga.',
  diagIssue3: '3. Filos quemados (Azules)',
  diagIssue3Desc: 'Velocidad excesiva. Revisa el cálculo de RPM de la herramienta para este diámetro y material.',
  gaugeInstruction: 'APOYA EL EJE EN LA LÍNEA VERTICAL'
};
