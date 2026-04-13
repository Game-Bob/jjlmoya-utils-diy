export interface DrillMaterial {
  id: string;
  angle: number;
  vc: number;
  label: string;
}

export interface SharpenerResult {
  angle: number;
  vc: number;
  diameter: number;
  rpm: number;
  cooling: string;
  material: string;
}

export const MATERIALS: DrillMaterial[] = [
  { id: 'steel', angle: 118, vc: 25, label: 'Acero / Hierro' },
  { id: 'inox', angle: 135, vc: 12, label: 'Inoxidable' },
  { id: 'hard', angle: 140, vc: 8, label: 'Aceros Duros' },
  { id: 'brass', angle: 90, vc: 40, label: 'Latón / Cobre' },
  { id: 'plastic', angle: 60, vc: 60, label: 'Plásticos' },
  { id: 'wood', angle: 80, vc: 35, label: 'Madera' }
];

export function calculateSharpener(materialId: string, diameter: number): SharpenerResult {
  const material = MATERIALS.find(m => m.id === materialId) || MATERIALS[0];
  const rpm = Math.round((material.vc * 1000) / (Math.PI * (diameter || 1)));

  let cooling = 'TALADRINA';
  if (material.angle >= 135) cooling = 'ACEITE CORTE';
  else if (material.angle <= 70) cooling = 'AIRE / AGUA';

  return {
    angle: material.angle,
    vc: material.vc,
    diameter,
    rpm,
    cooling,
    material: material.label
  };
}
