import { ref } from 'vue'

export function useSidebar() {
  const drawer = ref(true)
  const rail = ref(false)
  return { drawer, rail }
}