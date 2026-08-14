import type { DrywallInput, DrywallOutput } from './ui';

function getStudSpacingMeters(isImp: boolean, studSpacingCm: number): number {
  if (isImp) {
    return studSpacingCm === 40 ? 1.333 : 2;
  }
  return studSpacingCm / 100;
}

export function calculateDrywall(params: DrywallInput): DrywallOutput {
  const isImp = params.unitSystem === 'imperial';
  const wasteMult = 1 + (params.wastePercentage || 0) / 100;
  const wallArea = params.length * params.height;
  const totalArea = wallArea * (params.doubleSided ? 2 : 1) * params.layers;
  const boardArea = isImp ? 32 : 2.4;
  const spacing = getStudSpacingMeters(isImp, params.studSpacingCm);
  const studsCount = Math.ceil(params.length / spacing) + 1;
  const totalBoardsUnwasted = Math.ceil(totalArea / boardArea);

  return {
    wallArea,
    totalBoardArea: totalArea * wasteMult,
    drywallBoards: Math.ceil((totalArea * wasteMult) / boardArea),
    studsCount,
    tracksStandardLengths: Math.ceil((params.length * 2 * wasteMult) / (isImp ? 10 : 3)),
    drywallScrews: totalBoardsUnwasted * 30,
    framingScrews: studsCount * 4,
    jointTapeLength: Math.ceil(totalArea * 1.5 * wasteMult),
    jointCompoundWeight: Math.ceil(totalArea * (isImp ? 1.6 : 0.8) * wasteMult),
    acousticBandLength: Math.ceil((params.length * 2 + params.height * 2) * wasteMult),
    boardType: params.boardType,
  };
}
