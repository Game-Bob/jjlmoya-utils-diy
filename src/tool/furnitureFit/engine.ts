export type FitType = 'direct' | 'diagonal3d' | 'diagonalplane' | 'nope';

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface FitResult {
  fits: boolean;
  type: FitType;
  clearance: number;
  maxDiagonal: number;
}

function ffFitsDirect(obj: number[], con: number[]): boolean {
  return obj[0] <= con[0] && obj[1] <= con[1] && obj[2] <= con[2];
}

function ffFits3D(objMax: number, objOther: number[], con3D: number, conOther: number[]): boolean {
  return objMax <= con3D && objOther[0] <= conOther[0] && objOther[1] <= conOther[1];
}

function ffFitsPlane(objMax: number, maxPlane: number, obj0: number, con0: number): boolean {
  return objMax <= maxPlane && obj0 <= con0;
}

export function calculateFit(object: Dimensions, container: Dimensions, margin: number): FitResult {
  const adjW = container.width - margin;
  const adjH = container.height - margin;
  const adjD = container.depth - margin;
  const objDims = [object.width, object.height, object.depth].sort((a, b) => a - b);
  const conDims = [adjW, adjH, adjD].sort((a, b) => a - b);
  if (ffFitsDirect(objDims, conDims)) {
    const clearance = Math.min(conDims[0] - objDims[0], conDims[1] - objDims[1], conDims[2] - objDims[2]);
    return { fits: true, type: 'direct', clearance, maxDiagonal: 0 };
  }
  const con3D = Math.sqrt(adjW ** 2 + adjH ** 2 + adjD ** 2);
  const objMax = Math.max(...objDims);
  const objOther = objDims.slice(0, 2);
  const conOther = conDims.slice(0, 2);
  if (ffFits3D(objMax, objOther, con3D, conOther)) {
    return { fits: true, type: 'diagonal3d', clearance: con3D - objMax, maxDiagonal: con3D };
  }
  const planes = [Math.sqrt(adjW ** 2 + adjH ** 2), Math.sqrt(adjW ** 2 + adjD ** 2), Math.sqrt(adjH ** 2 + adjD ** 2)];
  const maxPlane = Math.max(...planes);
  if (ffFitsPlane(objMax, maxPlane, objOther[0], conOther[0])) {
    return { fits: true, type: 'diagonalplane', clearance: maxPlane - objMax, maxDiagonal: maxPlane };
  }
  return { fits: false, type: 'nope', clearance: 0, maxDiagonal: con3D };
}
