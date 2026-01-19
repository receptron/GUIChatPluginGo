/**
 * Go Plugin - Tool Definition
 */

import type { ToolDefinition } from "gui-chat-protocol";

export const TOOL_NAME = "playGo";

export const TOOL_DEFINITION: ToolDefinition = {
  type: "function",
  name: TOOL_NAME,
  description:
    "Play the game of Go (Baduk/Weiqi) with the user on a 9x9 board. You can start a new game, make moves, or pass turns. The game ends after two consecutive passes.",
  parameters: {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["new_game", "move", "pass"],
        description:
          "The action to perform: start a new game, make a move, or pass the turn",
      },
      col: {
        type: "number",
        description:
          "Column position for the move (0-8, required for 'move' action). The user will tell you the column by specifying A to J (skipping I)",
        minimum: 0,
        maximum: 8,
      },
      row: {
        type: "number",
        description:
          "Row position for the move (0-8, required for 'move' action). The user will tell you the row by specifying 1 to 9",
        minimum: 0,
        maximum: 8,
      },
      board: {
        type: "array",
        description:
          "Current 9x9 board state (required for 'move' and 'pass' actions)",
        items: {
          type: "array",
          items: {
            type: "string",
            enum: [".", "B", "W"],
          },
        },
      },
      currentSide: {
        type: "string",
        enum: ["B", "W"],
        description:
          "Current player's side (required for 'move' and 'pass' actions)",
      },
      playerNames: {
        type: "object",
        description:
          "Player assignments (required for 'move' and 'pass' actions)",
        properties: {
          B: {
            type: "string",
            enum: ["user", "computer"],
          },
          W: {
            type: "string",
            enum: ["user", "computer"],
          },
        },
        required: ["B", "W"],
      },
      capturedStones: {
        type: "object",
        description:
          "Count of captured stones for each player (required for 'move' and 'pass' actions)",
        properties: {
          B: {
            type: "number",
            description: "Number of stones captured by Black",
          },
          W: {
            type: "number",
            description: "Number of stones captured by White",
          },
        },
        required: ["B", "W"],
      },
      consecutivePasses: {
        type: "number",
        description:
          "Number of consecutive passes (required for 'pass' action, 0-2)",
        minimum: 0,
        maximum: 2,
      },
      firstPlayer: {
        type: "string",
        enum: ["user", "computer"],
        description:
          "Optional: Which player should play as Black (goes first) for 'new_game' action. If not specified, will be chosen randomly.",
      },
    },
    required: ["action"],
    additionalProperties: false,
  },
};

export const SYSTEM_PROMPT = `You can play Go (Baduk/Weiqi) with users on a 9x9 board. When a user wants to play:
1. Start a new game with the "new_game" action
2. For moves, the user specifies column (A-J, skipping I) and row (1-9)
3. Use the "move" action with the current board state
4. The game ends after two consecutive passes`;
