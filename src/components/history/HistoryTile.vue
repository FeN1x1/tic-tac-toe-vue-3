<script setup lang="ts">
import type { Tile } from "@/types"

const props = defineProps<{
  tileState: Tile
}>()
</script>

<template>
  <div class="m-2">
    <div
      class="flex h-20 w-20 rounded-lg shadow-lg"
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
