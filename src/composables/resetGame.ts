import { ref } from "vue"

export function useResetGame(resetGame: boolean) {
  const isResetGame = ref(resetGame)

  return { isResetGame }
}
