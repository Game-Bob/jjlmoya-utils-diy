export interface DrywallCalculatorUI extends Record<string, string> {
  unitSystemLabel: string;
  unitMetric: string;
  unitImperial: string;

  paramLengthLabel: string;
  paramHeightLabel: string;
  paramSpacingLabel: string;
  paramSpacing40Metric: string;
  paramSpacing60Metric: string;
  paramSpacing40Imperial: string;
  paramSpacing60Imperial: string;
  paramLayersLabel: string;
  paramSingleLayer: string;
  paramDoubleLayer: string;
  paramSidesLabel: string;
  paramDoubleSided: string;
  paramSingleSided: string;
  paramBoardTypeLabel: string;
  boardTypeStandard: string;
  boardTypeMoisture: string;
  boardTypeFire: string;
  boardTypeAcoustic: string;
  paramWasteLabel: string;

  summaryWallArea: string;
  summaryBoardArea: string;

  resBoardsLabel: string;
  resBoardsUnit: string;
  resStudsLabel: string;
  resStudsUnit: string;
  resTracksLabel: string;
  resTracksUnit: string;
  resDrywallScrewsLabel: string;
  resDrywallScrewsUnit: string;
  resFramingScrewsLabel: string;
  resFramingScrewsUnit: string;
  resJointTapeLabel: string;
  resJointTapeUnit: string;
  resJointCompoundLabel: string;
  resJointCompoundUnit: string;
  resAcousticBandLabel: string;
  resAcousticBandUnit: string;

  diagramWallTitle: string;
  diagramStudLegend: string;
  diagramTrackLegend: string;
  diagramBoardLegend: string;
  diagramModeStructure: string;
  diagramModeBoard: string;
}
