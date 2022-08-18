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
  <div class="interface-background">
    <div class="mb-6 flex">
      <button
        @click="emit('resetGame')"
        class="mx-auto rounded-lg bg-slate-300 px-4 py-2 text-lg shadow-xl"
      >
        {{ isNoWinner ? "Reset game" : "Start new game" }}
      </button>
    </div>
    <div class="ml-auto flex">
      <div
        v-if="isNoWinner && isPlayAvailable"
        class="my-auto text-lg font-semibold"
      >
        Player
        <span
          class="text-xl font-extrabold"
          :class="
            gameState.currentPlayer === 'X' ? 'text-red-400' : 'text-green-400'
          "
          >{{ gameState.currentPlayer }}</span
        >
        has turn
      </div>
      <div
        v-else-if="isNoWinner && !isPlayAvailable"
        class="my-auto text-lg font-semibold"
      >
        Game ended in a tie
      </div>
      <div v-else class="my-auto text-lg font-semibold">
        Player
        <span
          class="text-xl font-extrabold"
          :class="gameState.winner === 'X' ? 'text-red-400' : 'text-green-400'"
          >{{ gameState.winner }}</span
        >
        has Won!
      </div>
    </div>
  </div>
</template>
