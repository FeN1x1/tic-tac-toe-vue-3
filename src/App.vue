<script setup lang="ts">
import Board from "./components/Board.vue"
import Menu from "./components/Menu.vue"
import type { GameState, Tile } from "@/types"
import { defaultGameState } from "@/defaultGameState"

import { ref } from "vue"
import History from "@/components/history/History.vue"

const gameState = ref<GameState>(defaultGameState)
const moveHistory = ref<Tile[][]>([defaultGameState.playingArray])
const isResetInvoked = ref(false)

const setMenu = (gameStateParam: GameState) => {
  gameState.value = gameStateParam
}

const setMoveHistory = (moveHistoryParam: Tile[][]) => {
  moveHistory.value = moveHistoryParam
}
</script>

<template>
  <div class="flex flex-col">
    <Menu :game-state="gameState" @reset-game="isResetInvoked = true" />
    <Board
      @game-state="setMenu"
      @move-history="setMoveHistory"
      @set-reset="isResetInvoked = false"
      :isResetInvoked="isResetInvoked"
      class="mx-auto"
    />
    <History :game-state="gameState" :move-history="moveHistory" />
  </div>
</template>
