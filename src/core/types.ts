/**
 * Go Plugin - Type Definitions
 */

export type Cell = "." | "B" | "W";
export type Side = "B" | "W";
export type GoBoard = Cell[][]; // 9x9

export type GoCellValue = Cell;
export type GoPlayerType = "user" | "computer";

export interface GoArgs {
  action: "new_game" | "move" | "pass";
  col?: number;
  row?: number;
  board?: GoCellValue[][];
  currentSide?: Side;
  playerNames?: { B: GoPlayerType; W: GoPlayerType };
  capturedStones?: { B: number; W: number };
  consecutivePasses?: number;
  firstPlayer?: GoPlayerType;
}

export type NewGameCommand = {
  action: "new_game";
  playerNames: { B: string; W: string };
};

export type MoveCommand =
  | {
      action: "move";
      row: number;
      col: number;
      board: GoBoard;
      currentSide: Side;
      playerNames: { B: string; W: string };
      capturedStones: { B: number; W: number };
    }
  | {
      action: "pass";
      board: GoBoard;
      currentSide: Side;
      playerNames: { B: string; W: string };
      capturedStones: { B: number; W: number };
      consecutivePasses: number;
    };

export type Command = NewGameCommand | MoveCommand;

export interface GoState {
  board: GoBoard;
  currentSide: Side;
  playerNames: { B: string; W: string };
  capturedStones: { B: number; W: number };
  counts: { B: number; W: number; empty: number };
  isTerminal: boolean;
  winner: Side | "draw" | null;
  consecutivePasses: number;
  lastAction:
    | { type: "new_game" }
    | { type: "move"; row: number; col: number; captured: number }
    | { type: "pass" };
  error?: string;
}

/**
 * Data passed from handleCellClick for testing/debugging
 */
export interface GoClickData {
  row: number;
  col: number;
  currentState: GoState;
}
