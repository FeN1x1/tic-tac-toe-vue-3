<script setup lang="ts">
import Board from "./components/Board.vue"
import Menu from "./components/Menu.vue"
import type { GameState } from "@/types"
import { ref } from "vue"

const defaultState: GameState = {
  playingArray: Array(9).fill(" "),
  currentPlayer: "X",
  winner: " ",
}
const gameState = ref<GameState>(defaultState)

const setMenu = (gameStateParam: GameState) => {
  gameState.value = gameStateParam
}

const resetGame = () => {
  gameState.value = defaultState
}
</script>

<template>
  <div class="flex flex-col">
    <Menu @reset-game="resetGame" :game-state="gameState" />
    <Board @game-state="setMenu" class="mx-auto" />
  </div>
</template>
