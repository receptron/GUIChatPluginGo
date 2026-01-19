/**
 * Go Plugin - Vue Implementation
 */

import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { GoArgs, GoState } from "../core/types";
import { pluginCore } from "../core/plugin";
import { samples } from "../core/samples";
import View from "./View.vue";
import Preview from "./Preview.vue";

export const plugin: ToolPlugin<never, GoState, GoArgs> = {
  ...pluginCore,
  viewComponent: View,
  previewComponent: Preview,
  samples,
};

export type {
  Cell,
  Side,
  GoBoard,
  GoCellValue,
  GoPlayerType,
  GoArgs,
  GoState,
} from "../core/types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeGo,
  pluginCore,
  playGo,
} from "../core/plugin";

export { samples } from "../core/samples";

export { View, Preview };

export default { plugin };
