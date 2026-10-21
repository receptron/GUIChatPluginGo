import { test, describe } from "node:test";
import assert from "node:assert";
import { isOnBoard } from "../src/core/position.js";
import { playGo } from "../src/core/logic.js";
import type { GoBoard } from "../src/core/types.js";

const SIZE = 9;
const emptyBoard = (): GoBoard => Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => "."));
const moveTo = (row: number, col: number) =>
  playGo({ action: "move", row, col, board: emptyBoard(), currentSide: "B", playerNames: { B: "user", W: "computer" }, capturedStones: { B: 0, W: 0 } });

describe("isOnBoard", () => {
  test("accepts every square, corners included", () => {
    [0, SIZE - 1].forEach((row) => [0, SIZE - 1].forEach((col) => assert.equal(isOnBoard(row, col, SIZE), true)));
    assert.equal(isOnBoard(4, 4, SIZE), true);
  });

  test("rejects positions just outside each edge", () => {
    [
      [-1, 0],
      [0, -1],
      [SIZE, 0],
      [0, SIZE],
    ].forEach(([row, col]) => assert.equal(isOnBoard(row, col, SIZE), false));
  });

  test("rejects values that are not whole numbers", () => {
    [0.5, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, -0.5].forEach((value) => {
      assert.equal(isOnBoard(value, 0, SIZE), false);
      assert.equal(isOnBoard(0, value, SIZE), false);
    });
  });

  test("rejects a non-number from an untyped caller", () => {
    const fromJson: { row: number } = JSON.parse('{"row":"__proto__"}');
    assert.equal(isOnBoard(fromJson.row, 0, SIZE), false);
  });
});

describe("playGo move coordinates", () => {
  test("a square on the board is played", () => {
    const state = moveTo(4, 4);
    assert.equal(state.error, undefined);
    assert.equal(state.board[4][4], "B");
  });

  test("a square off the board or between squares is an invalid move, not a throw", () => {
    [
      [-1, 0],
      [0, -1],
      [SIZE, 0],
      [0, SIZE],
      [1.5, 0],
      [0, 0.5],
      [Number.NaN, 0],
    ].forEach(([row, col]) => {
      const state = moveTo(row, col);
      assert.match(state.error ?? "", /Invalid move/);
      assert.deepEqual(state.board, emptyBoard());
    });
  });
});
