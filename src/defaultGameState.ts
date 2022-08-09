import type { GameState } from "./types"

export const defaultGameState = {
  playingArray: Array(9).fill(" "),
  currentPlayer: "X",
  winner: " ",
} as GameState
