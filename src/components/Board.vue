<script setup lang="ts">
import TileComponent from "@/components/Tile.vue"
import type { Tile, GameState } from "@/types"
import { defaultGameState } from "@/defaultGameState"

import { ref, watch } from "vue"

const emit = defineEmits(["gameState", "setReset"])

const props = defineProps<{
  isResetInvoked: boolean
}>()

const winningArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]
const startingPlayer = "X"

const gameState = ref<GameState>(defaultGameState)
const winningTiles = ref<number[]>([])
const isReset = ref(false)

const setPlayingPlayer = (player: Tile, tileNumber: number) => {
  gameState.value.playingArray = gameState.value.playingArray.map(
    (t, index) => {
      if (index + 1 === tileNumber && t === " ") {
        return player
      }
      return t
    }
  )
  gameState.value.currentPlayer = player === "X" ? "O" : "X"
  checkForWinner(gameState.value.playingArray, winningArray)
}

const resetGame = () => {
  gameState.value.currentPlayer = startingPlayer
  gameState.value.playingArray = gameState.value.playingArray.map(() => " ")
  gameState.value.winner = " "
  winningTiles.value = []
  isReset.value = true
  emitGameState()
}

const checkForWinner = (playingArray: Tile[], winningsArray: number[][]) => {
  winningsArray.forEach((i) => {
    if (
      playingArray[i[0] - 1] === playingArray[i[1] - 1] &&
      playingArray[i[1] - 1] === playingArray[i[2] - 1] &&
      playingArray[i[0] - 1] === playingArray[i[2] - 1]
    ) {
      if (playingArray[i[0] - 1] !== " ") {
        gameState.value.winner = playingArray[i[0] - 1]
        winningTiles.value = i
      }
    }
  })
  emitGameState()
}

const emitGameState = () => {
  emit("gameState", {
    playingArray: gameState.value.playingArray,
    currentPlayer: gameState.value.currentPlayer,
    winner: gameState.value.winner,
  })
}

watch(
  () => props.isResetInvoked,
  () => {
    if (props.isResetInvoked) {
      resetGame()
    }
    emit("setReset")
  }
)
</script>

<template>
  <div class="grid grid-cols-3">
    <TileComponent
      v-for="index in 9"
      :key="index"
      :current-player="gameState.currentPlayer"
      :tile-number="index"
      :winning-tile="winningTiles.includes(index)"
      :winner="gameState.winner"
      :is-reset="isReset"
      @play-tile="setPlayingPlayer"
      @reset-state-changed="isReset = false"
    />
  </div>
</template>
