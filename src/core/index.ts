/**
 * Go Plugin - Core Entry Point
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
} from "./types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeGo,
  pluginCore,
  playGo,
} from "./plugin";

export { samples } from "./samples";
