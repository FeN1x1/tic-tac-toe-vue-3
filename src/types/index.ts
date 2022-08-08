export type Tile = "X" | "O" | " "
export type GameState = {
  playingArray: Tile[]
  currentPlayer: Tile
  winner: Tile
}
