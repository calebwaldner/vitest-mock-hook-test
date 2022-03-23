import { ref } from "vue";

const activeItem = ref<string | null>(null);
const defaultItems = ref<null | string[]>([]);

export default function useHook() {
  return {
    activeItem,
    defaultItems,
  };
}
