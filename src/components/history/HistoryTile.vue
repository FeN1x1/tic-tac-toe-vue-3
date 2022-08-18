<script setup lang="ts">
import type { Tile } from "@/types"

const props = defineProps<{
  tileState: Tile
}>()
</script>

<template>
  <div class="m-2">
    <div
      class="mx-auto rounded-lg bg-slate-300 px-4 py-2 text-xl shadow-xl"
      :class="false ? 'bg-slate-400' : 'bg-slate-300'"
    >
      <div
        class="m-auto text-6xl font-extrabold"
        :class="tileState === 'X' ? 'text-red-400' : 'text-green-400'"
      >
        {{ tileState }}
      </div>
    </div>
  </div>
</template>
