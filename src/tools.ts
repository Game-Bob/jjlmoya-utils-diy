export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { CLAY_CALCULATOR_TOOL } from './tool/clayCalculator/index';
import { EPOXY_CALCULATOR_TOOL } from './tool/epoxyCalculator/index';
import { BALUSTER_CALCULATOR_TOOL } from './tool/balusterCalculator/index';
import { MORTAR_CALCULATOR_TOOL } from './tool/mortarCalculator/index';
import { PASSEPARTOUT_CALCULATOR_TOOL } from './tool/passepartoutCalculator/index';
import { CONCRETE_CALCULATOR_TOOL } from './tool/concreteCalculator/index';
import { CUT_OPTIMIZER_TOOL } from './tool/cutOptimizer/index';
import { VOLTAGE_DROP_CALCULATOR_TOOL } from './tool/voltageDropCalculator/index';
import { FURNITURE_FIT_TOOL } from './tool/furnitureFit/index';
import { THERMAL_EXPANSION_CALCULATOR_TOOL } from './tool/thermalExpansionCalculator/index';
import { DRILL_CALCULATOR_TOOL } from './tool/drillCalculator/index';
import { STAIR_CALCULATOR_TOOL } from './tool/stairCalculator/index';
import { DRILL_SHARPENER_TOOL } from './tool/drillSharpener/index';

export const ALL_TOOLS: ToolDefinition[] = [CLAY_CALCULATOR_TOOL, EPOXY_CALCULATOR_TOOL, BALUSTER_CALCULATOR_TOOL, MORTAR_CALCULATOR_TOOL, PASSEPARTOUT_CALCULATOR_TOOL, CONCRETE_CALCULATOR_TOOL, CUT_OPTIMIZER_TOOL, VOLTAGE_DROP_CALCULATOR_TOOL, FURNITURE_FIT_TOOL, THERMAL_EXPANSION_CALCULATOR_TOOL, DRILL_CALCULATOR_TOOL, STAIR_CALCULATOR_TOOL, DRILL_SHARPENER_TOOL];

