<script setup lang="ts">
import type { GameState } from "@/types"
import { useResetGame } from "@/composables/resetGame"

defineProps<{
  gameState: GameState
}>()

const emit = defineEmits(["restartGame"])
</script>

<template>
  <div
    class="h-32 flex my-8 max-w-lg mx-auto w-full bg-slate-200 rounded-lg shadow-lg"
  >
    <div
      v-if="gameState.winner === ' '"
      class="m-auto font-semibold text-3xl"
      :class="
        gameState.currentPlayer === 'X' ? 'text-red-700' : 'text-green-700'
      "
    >
      Player {{ gameState.currentPlayer }} has turn
    </div>
    <div
      v-else
      class="font-extrabold flex flex-col m-auto text-3xl text-green-400"
    >
      <div>
        Player
        <span
          :class="gameState.winner === 'X' ? 'text-red-700' : 'text-green-700'"
          >{{ gameState.winner }}
        </span>
        has WON! CONGRATS!
      </div>
      <div
        class="mx-auto cursor-pointer underline-offset-2 underline text-black font-semibold text-2xl mt-2"
        @click="useResetGame(true)"
      >
        Restart the game
      </div>
    </div>
  </div>
</template>
