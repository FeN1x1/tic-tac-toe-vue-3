<script setup lang="ts">
import Board from "./components/Board.vue"
import Menu from "./components/Menu.vue"

const gameState = 

const setMenu = () => {

}
</script>

<template>
  <div class="flex flex-col">
    <Menu />
    <Board @game-state="setMenu" class="mx-auto" />
  </div>
</template>
