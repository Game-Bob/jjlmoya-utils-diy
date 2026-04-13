import type { ToolDefinition } from './types';
import { CLAY_CALCULATOR_TOOL } from './tool/clayCalculator/index';
import { EPOXY_CALCULATOR_TOOL } from './tool/epoxyCalculator/index';
import { BALUSTER_CALCULATOR_TOOL } from './tool/balusterCalculator/index';
import { MORTAR_CALCULATOR_TOOL } from './tool/mortarCalculator/index';
import { PASSEPARTOUT_CALCULATOR_TOOL } from './tool/passepartoutCalculator/index';
import { CONCRETE_CALCULATOR_TOOL } from './tool/concreteCalculator/index';

export const ALL_TOOLS: ToolDefinition[] = [CLAY_CALCULATOR_TOOL, EPOXY_CALCULATOR_TOOL, BALUSTER_CALCULATOR_TOOL, MORTAR_CALCULATOR_TOOL, PASSEPARTOUT_CALCULATOR_TOOL, CONCRETE_CALCULATOR_TOOL];
