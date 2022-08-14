<script setup lang="ts">
import Board from "./components/Board.vue"
import Menu from "./components/Menu.vue"
import type { GameState } from "@/types"
import { defaultGameState } from "@/defaultGameState"

import { ref } from "vue"

const gameState = ref<GameState>(defaultGameState)
const isResetInvoked = ref(false)

const setMenu = (gameStateParam: GameState) => {
  gameState.value = gameStateParam
}
</script>

<template>
  <div class="flex flex-col">
    <Menu :game-state="gameState" @reset-game="isResetInvoked = true" />
    <Board
      @game-state="setMenu"
      @set-reset="isResetInvoked = false"
      :isResetInvoked="isResetInvoked"
      class="mx-auto"
    />
  </div>
</template>
