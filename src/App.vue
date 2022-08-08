<script setup lang="ts">
import Board from "./components/Board.vue"
import Menu from "./components/Menu.vue"
import type { GameState } from "@/types"
import { ref } from "vue"

const gameState = ref<GameState>({
  playingArray: Array(9).fill(" "),
  currentPlayer: "X",
  winner: " ",
})

const setMenu = (gameStateParam: GameState) => {
  gameState.value = gameStateParam
}
</script>

<template>
  <div class="flex flex-col">
    <Menu :game-state="gameState" />
    <Board @game-state="setMenu" class="mx-auto" />
  </div>
</template>
