export interface StairCalculatorUI {
  labelGeometry: string;
  labelTotalHeight: string;
  labelAvailableLength: string;
  labelAvailableLengthHint: string;
  labelNumSteps: string;
  labelOptimize: string;
  labelWork: string;
  labelSlabThickness: string;
  labelFinishThickness: string;
  labelCeilingHeight: string;
  labelStairWidth: string;
  labelConcreteStrength: string;
  optionH150: string;
  optionH200: string;
  optionH250: string;
  labelRiser: string;
  labelTread: string;
  labelSlope: string;
  labelRealAdvance: string;
  labelLayoutTable: string;
  colStep: string;
  colConcreteHeight: string;
  colFinishedHeight: string;
  colAdvance: string;
  adjustedNote: string;
  labelMaterials: string;
  labelTotalConcrete: string;
  labelCement: string;
  labelSand: string;
  unitM3: string;
  unitBags: string;
  unitLiters: string;
  btnShare: string;
  btnPrint: string;
  statusOptimalComfort: string;
  statusMarginLimit: string;
  statusCriticalDesign: string;
  statusRiserError: string;
  msgInvalidValues: string;
  msgInsufficientSpace: string;
  msgDangerousTread: string;
  msgBlondelValue: string;
  msgOptimalStep: string;
  msgLowCeiling: string;
  msgCalculating: string;
  msgEnterMeasurements: string;
  shareTitle: string;
  shareMessage: string;
}

export const stairCalculatorUI: StairCalculatorUI = {
  labelGeometry: 'Geometría y Hueco',
  labelTotalHeight: 'Desnivel Total (H)',
  labelAvailableLength: 'Longitud Disponible (L)',
  labelAvailableLengthHint: 'Usa 0 para cálculo libre.',
  labelNumSteps: 'Nº Peldaños',
  labelOptimize: 'Optimizar (18cm)',

  labelWork: 'Obra e Instalación',
  labelSlabThickness: 'Losa (e)',
  labelFinishThickness: 'Acabado',
  labelCeilingHeight: 'Altura Techo (Opción)',
  labelStairWidth: 'Ancho Escalera',
  labelConcreteStrength: 'Resistencia Hormigón',
  optionH150: 'H-150 (Limpieza)',
  optionH200: 'H-200 (Vivienda)',
  optionH250: 'H-250 (Estructural)',

  labelRiser: 'Contrahuella',
  labelTread: 'Huella',
  labelSlope: 'Pendiente',
  labelRealAdvance: 'Avance Real',

  labelLayoutTable: 'Replanteo y Ejecución',
  colStep: 'Peldaño',
  colConcreteHeight: 'H. Hormigón',
  colFinishedHeight: 'H. Terminada',
  colAdvance: 'Avance',
  adjustedNote: 'Ajustado',

  labelMaterials: 'Cubicación y Pedido',
  labelTotalConcrete: 'Hormigón Total:',
  labelCement: 'Cemento (sacos/25kg):',
  labelSand: 'Arena necesaria:',
  unitM3: 'm³',
  unitBags: 'sacos',
  unitLiters: 'L',

  btnShare: 'Compartir',
  btnPrint: 'Imprimir PDF',

  statusOptimalComfort: 'Confort Óptimo',
  statusMarginLimit: 'Margen Límite',
  statusCriticalDesign: 'Diseño Crítico',
  statusRiserError: 'Error de Huella',

  msgInvalidValues: 'Valores inválidos',
  msgInsufficientSpace: 'ESPACIO INSUFICIENTE',
  msgDangerousTread: 'La huella de {val}cm es peligrosa.',
  msgBlondelValue: 'Blondel: {val}cm.',
  msgOptimalStep: 'Paso cómodo: {val}cm.',
  msgLowCeiling: 'CABECEO BAJO (<2m)',
  msgCalculating: 'Calculando...',
  msgEnterMeasurements: 'Ingresa medidas',

  shareTitle: 'Resumen Obra',
  shareMessage: 'Escalera: H={h}cm, N={n}, CH={ch}cm, Vol={vol}m3'
};
