<script setup lang="ts">
import type { GameState, Tile } from "@/types"
import { watch } from "vue"
import DialogHistoryBoard from "@/components/history/DialogHistoryBoard.vue"

const props = defineProps<{
  gameState: GameState
  moveHistory: Tile[][]
}>()
</script>
<template>
  <div class="interface-background">
    <div class="flex w-40 overflow-x-auto">
      <div
        v-for="(move, index) in moveHistory"
        :key="index"
        class="mx-auto flex py-4"
      >
        <DialogHistoryBoard
          v-if="index > 1"
          :board-state="moveHistory[index - 1]"
          :turn="index - 2"
        />
      </div>
      <div
        v-if="moveHistory.length < 3"
        class="m-auto px-4 py-2 text-lg font-semibold"
      >
        No history yet
      </div>
    </div>
  </div>
</template>
