/**
 * Go Plugin - Main Entry Point
 */

export type {
  Cell,
  Side,
  GoBoard,
  GoCellValue,
  GoPlayerType,
  GoArgs,
  GoState,
  Command,
  NewGameCommand,
  MoveCommand,
} from "./core/types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeGo,
  pluginCore,
  playGo,
} from "./core/plugin";

export { samples } from "./core/samples";
