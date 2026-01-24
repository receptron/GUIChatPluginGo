# CLAUDE.md

## Plugin Overview

Go (Baduk/Weiqi) game plugin for GUI Chat. Play Go against the LLM.

## Common Guidelines

For standard plugin development guidelines, see:
https://github.com/receptron/GUIChatPluginTemplate/blob/main/CLAUDE.md

## Plugin-Specific Notes

### Features
- Interactive Go game board
- User vs LLM gameplay
- Stone capture logic
- Territory scoring

### Game Pattern
Similar to Othello plugin - uses "User vs LLM" game pattern with `updating` and `instructionsRequired`.

### Dependencies
- `gui-chat-protocol`: Core protocol for GUI Chat plugins

## Updating This Document

When making spec changes through discussion with Claude, update this file to reflect new constraints or architectural decisions.
