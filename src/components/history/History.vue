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
  <div class="h-28 interface-background">
    <div class="m-auto flex">
      <div v-for="(move, index) in moveHistory" :key="index" class="flex">
        <!-- <button class="primary-button">
          {{ index + 1 }}
        </button> -->

        <DialogHistoryBoard
          v-if="index > 1"
          :board-state="moveHistory[index - 1]"
          :turn="index - 2"
        />
      </div>
      <div
        v-if="moveHistory.length < 3"
        class="px-2 my-auto text-2xl font-semibold"
      >
        No history yet
      </div>
    </div>
  </div>
</template>
