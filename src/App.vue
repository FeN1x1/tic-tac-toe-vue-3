<script setup lang="ts">
import Board from "./components/Board.vue"
import Menu from "./components/Menu.vue"
import type { GameState } from "@/types"
import { defaultGameState } from "@/defaultGameState"

import { onMounted, ref } from "vue"

const gameState = ref<GameState>(defaultGameState)
const board = ref<null | any>(null)

const setMenu = (gameStateParam: GameState) => {
  gameState.value = gameStateParam
}
</script>

<template>
  <div class="flex flex-col">
    <Menu :game-state="gameState" />
    <Board @game-state="setMenu" class="mx-auto" ref="board" />
  </div>
</template>
