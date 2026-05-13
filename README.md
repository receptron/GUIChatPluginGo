# @gui-chat-plugin/go

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fgo.svg)](https://www.npmjs.com/package/@gui-chat-plugin/go)

Go (Baduk/Weiqi) game plugin for GUI Chat applications. Play Go on a 9x9 board against an AI assistant.

## Features

- Full Go game implementation on 9x9 board
- Interactive board with clickable intersections
- Stone capture detection and counting
- Territory calculation for scoring
- Game end detection (two consecutive passes)
- Suicide rule enforcement

## Installation

```bash
yarn add @gui-chat-plugin/go
```

## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import GoPlugin from "@gui-chat-plugin/go/vue";

const pluginList = [
  // ... other plugins
  GoPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/go/style.css";
```

### Core-only Usage

```typescript
import { executeGo, playGo, TOOL_DEFINITION } from "@gui-chat-plugin/go";

// Start a new game
const result = await executeGo(context, {
  action: "new_game",
  firstPlayer: "user",
});

// Use the game logic directly
import { playGo } from "@gui-chat-plugin/go";

const state = playGo({
  action: "new_game",
  playerNames: { B: "user", W: "computer" },
});
```

## API

### GoArgs

```typescript
interface GoArgs {
  action: "new_game" | "move" | "pass";
  col?: number;        // 0-8 for move action
  row?: number;        // 0-8 for move action
  board?: Cell[][];    // Current board state
  currentSide?: Side;  // "B" or "W"
  playerNames?: { B: GoPlayerType; W: GoPlayerType };
  capturedStones?: { B: number; W: number };
  consecutivePasses?: number;
  firstPlayer?: GoPlayerType;  // "user" or "computer"
}
```

### GoState

```typescript
interface GoState {
  board: GoBoard;      // 9x9 grid of ".", "B", or "W"
  currentSide: Side;   // Whose turn is next
  playerNames: { B: string; W: string };
  capturedStones: { B: number; W: number };
  counts: { B: number; W: number; empty: number };
  isTerminal: boolean;
  winner: Side | "draw" | null;
  consecutivePasses: number;
  lastAction: { type: "new_game" | "move" | "pass"; ... };
  error?: string;
}
```

## Development

```bash
# Install dependencies
yarn install

# Run demo
yarn dev

# Build
yarn build

# Lint
yarn lint
```

## Test Prompts

Try these prompts to test the plugin:

1. "Let's play Go! I'll take black"
2. "Start a new Go game, you play first"
3. "Place my stone at position E5"

## License

MIT

## Related

- Protocol spec: [gui-chat-protocol](https://github.com/receptron/gui-chat-protocol)
- Reference implementations using this protocol: [mulmoclaude](https://github.com/receptron/mulmoclaude) · [MulmoChat](https://github.com/receptron/MulmoChat)
