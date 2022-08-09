<script setup lang="ts">
import TileComponent from "@/components/Tile.vue"
import type { Tile } from "@/types"
import { ref } from "vue"

const emit = defineEmits(["gameState"])

const winningArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]
const startingPlayer = "X"

const playingArray = ref<Tile[]>(Array(9).fill(" "))
const currentPlayer = ref<Tile>(startingPlayer)
const winner = ref<Tile>(" ")

const setPlayingPlayer = (player: Tile, tileNumber: number) => {
  playingArray.value = playingArray.value.map((t, index) => {
    if (index + 1 === tileNumber && t === " ") {
      return player
    }
    return t
  })
  currentPlayer.value = player === "X" ? "O" : "X"
  checkForWinner()
}

const checkForWinner = () => {
  winningArray.forEach((i) => {
    if (
      playingArray.value[i[0] - 1] === playingArray.value[i[1] - 1] &&
      playingArray.value[i[1] - 1] === playingArray.value[i[2] - 1] &&
      playingArray.value[i[0] - 1] === playingArray.value[i[2] - 1]
    ) {
      if (playingArray.value[i[0] - 1] !== " ") {
        winner.value = playingArray.value[i[0] - 1]
      }
    }
  })
  emit("gameState", {
    playingArray: playingArray.value,
    currentPlayer: currentPlayer.value,
    winner: winner.value,
  })
}
</script>

<template>
  <div class="grid grid-cols-3">
    <TileComponent
      v-for="index in 9"
      :key="index"
      :current-player="currentPlayer"
      :tile-number="index"
      :winner="winner"
      @play-tile="setPlayingPlayer"
    />
  </div>
</template>
