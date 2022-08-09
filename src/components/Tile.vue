<script setup lang="ts">
import type { Tile } from "@/types"
import { computed, ref } from "vue"

const props = defineProps<{
  currentPlayer: Tile
  tileNumber: number
  winner: Tile
}>()

const emit = defineEmits(["playTile"])

const tileState = ref<Tile>(" ")

const isDisabled = computed(() => {
  return tileState.value !== " " || props.winner !== " "
})

const setTileState = (state: Tile) => {
  tileState.value = state
  emit("playTile", state, props.tileNumber)
}
</script>

<template>
  <div
    @click="setTileState(currentPlayer)"
    :class="!isDisabled ? 'cursor-pointer' : 'pointer-events-none'"
    class="m-2 flex bg-slate-300 h-32 w-32 rounded-lg shadow-lg"
  >
    <div
      class="m-auto text-8xl font-extrabold"
      :class="tileState === 'X' ? 'text-red-400' : 'text-green-400'"
    >
      {{ tileState }}
    </div>
  </div>
</template>
