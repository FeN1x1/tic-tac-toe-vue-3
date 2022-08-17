<script setup lang="ts">
import type { GameState } from "@/types"
import { computed } from "vue"

const props = defineProps<{
  gameState: GameState
}>()

const emit = defineEmits(["resetGame"])

const isPlayAvailable = computed(() => {
  return props.gameState.playingArray.includes(" ")
})

const isNoWinner = computed(() => {
  return props.gameState.winner === " "
})
</script>

<template>
  <div class="h-32 interface-background">
    <div class="flex">
      <button
        @click="emit('resetGame')"
        class="primary-button"
      >
        {{ isNoWinner ? "Reset game" : "Start new game" }}
      </button>
    </div>
    <div class="flex ml-auto">
      <div
        v-if="isNoWinner && isPlayAvailable"
        class="my-auto text-2xl font-semibold"
      >
        Player
        <span
          class="text-3xl font-extrabold"
          :class="
            gameState.currentPlayer === 'X' ? 'text-red-400' : 'text-green-400'
          "
          >{{ gameState.currentPlayer }}</span
        >
        has turn
      </div>
      <div
        v-else-if="isNoWinner && !isPlayAvailable"
        class="my-auto text-2xl font-semibold"
      >
        Game ended in a tie
      </div>
      <div v-else class="my-auto text-2xl font-semibold">
        Player
        <span
          class="text-3xl font-extrabold"
          :class="gameState.winner === 'X' ? 'text-red-400' : 'text-green-400'"
          >{{ gameState.winner }}</span
        >
        has Won!
      </div>
    </div>
  </div>
</template>
