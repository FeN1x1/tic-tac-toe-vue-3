<script setup lang="ts">
import type { Tile } from "@/types"
import { computed, ref, watch } from "vue"

const props = defineProps<{
  currentPlayer: Tile
  tileNumber: number
  winner: Tile
  winningTile: boolean
  isReset: boolean
}>()

const emit = defineEmits(["playTile", "resetStateChanged"])

const tileState = ref<Tile>(" ")

const isDisabled = computed(() => {
  return tileState.value !== " " || props.winner !== " "
})

const setTileState = (state: Tile) => {
  tileState.value = state
  emit("playTile", state, props.tileNumber)
}

watch(
  () => props.isReset,
  () => {
    if (props.isReset) {
      tileState.value = " "
    }
    emit("resetStateChanged")
  }
)
</script>

<template>
  <div
    @click="setTileState(currentPlayer)"
    :class="!isDisabled ? 'cursor-pointer' : 'pointer-events-none'"
    class="m-1"
  >
    <div
      :class="winningTile ? 'bg-gray-400' : 'bg-gray-300'"
      class="flex h-16 w-16 rounded-3xl shadow-2xl"
    >
      <div
        class="m-auto text-4xl font-extrabold"
        :class="tileState === 'X' ? 'text-red-400' : 'text-green-400'"
      >
        {{ tileState }}
      </div>
    </div>
  </div>
</template>
