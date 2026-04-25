export interface TwoStrokeMixtureCalculatorUI extends Record<string, string> {
  titleMain: string;
  labelFuelVolume: string;
  labelRatio: string;
  labelOilRequired: string;
  labelTotalMixture: string;
  labelRichness: string;
  labelPresets: string;
  labelCustomRatio: string;
  btnClear: string;
  btnCopyResults: string;
  btnSwitchMode: string;
  unitLiters: string;
  unitMilliliters: string;
  richLean: string;
  richBalanced: string;
  richRich: string;
  msgReady: string;
  msgMixtureReady: string;
  tooltipFuelVolume: string;
  tooltipRatio: string;
  recipientLabel: string;
  oilPercentage: string;
  labelVolume: string;
  labelRatioShort: string;
  labelOilTip: string;
  labelMixingTips: string;
  labelMixingTipsDesc: string;
  recipePrefix: string;
  recipeAt: string;
  recipeAdd: string;
  recipeOfOil: string;
  copyTextPrefix: string;
  copyTextFuel: string;
  copyTextOil: string;
  ratio25Desc: string;
  ratio33Desc: string;
  ratio40Desc: string;
  ratio50Desc: string;
}

export const twoStrokeMixtureCalculatorUI: TwoStrokeMixtureCalculatorUI = {
  titleMain: 'Two Stroke Fuel Mixture Calculator',
  labelFuelVolume: 'Fuel Volume',
  labelRatio: 'Mix Ratio',
  labelOilRequired: 'Oil Required',
  labelTotalMixture: 'Total Mixture',
  labelRichness: 'Mixture Richness',
  labelPresets: 'Common Ratios',
  labelCustomRatio: 'Custom Ratio (1:X)',
  btnClear: 'Clear',
  btnCopyResults: 'Copy Results',
  btnSwitchMode: 'Switch Mode',
  unitLiters: 'L',
  unitMilliliters: 'ml',
  richLean: 'Lean (less oil, risk of seizure)',
  richBalanced: 'Balanced (standard mix)',
  richRich: 'Rich (more oil, more smoke, engine protection)',
  msgReady: 'Ready',
  msgMixtureReady: 'Mixture calculated',
  tooltipFuelVolume: 'Enter the amount of gasoline',
  tooltipRatio: 'Enter ratio as 25, 33, 40, or 50 (for 1:25, 1:33, etc.)',
  recipientLabel: 'Mixture Container',
  oilPercentage: 'Oil %',
  labelVolume: 'Volume',
  labelRatioShort: 'Ratio',
  labelOilTip: '2% oil mix = 1:50 ratio',
  labelMixingTips: 'Mixing Tips',
  labelMixingTipsDesc: 'Mix in a clean container—gasoline first, add measured oil, then remaining fuel. Shake well (1-2 minutes) for homogeneous blend. Label with date and ratio.',
  recipePrefix: 'For',
  recipeAt: 'of fuel at',
  recipeAdd: 'add exactly',
  recipeOfOil: 'of 2-stroke oil.',
  copyTextPrefix: '2-Stroke Mix',
  copyTextFuel: 'fuel',
  copyTextOil: 'oil',
  ratio25Desc: 'Old machines',
  ratio33Desc: 'Classic models',
  ratio40Desc: 'Standard recommended',
  ratio50Desc: 'Modern chainsaws',
};
