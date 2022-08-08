<script setup lang="ts">
import type { Tile } from "@/types"
import { ref } from "vue"

const props = defineProps<{
  currentPlayer: Tile
  tileNumber: number
}>()

const emit = defineEmits(["playTile"])

const tileState = ref<Tile>(" ")

console.log(props)

const setTileState = (state: Tile) => {
  tileState.value = state
  emit("playTile", state, props.tileNumber)
}
</script>

<template>
  <div
    @click="setTileState(currentPlayer)"
    :class="tileState === ' ' ? '' : 'pointer-events-none'"
    class="m-2 cursor-pointer flex bg-slate-300 h-32 w-32 rounded-lg shadow-lg"
  >
    <div
      class="m-auto text-8xl font-extrabold"
      :class="tileState === 'X' ? 'text-red-400' : 'text-green-400'"
    >
      {{ tileState }}
    </div>
  </div>
</template>
