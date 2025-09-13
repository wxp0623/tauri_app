<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap: `${gapPx}px`,
      justifyContent: justifyContentValue,
      width: '100%',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  size?: "small" | "middle" | "large" | "xlarge" | "xxlarge" | number;
  direction?: "horizontal" | "vertical";
  justify?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}>();

const sizeMap = {
  small: 4,
  middle: 8,
  large: 16,
  xlarge: 20,
  xxlarge: 24,
};

const gapPx = computed(() => {
  if (typeof props.size === "number") return props.size;
  if (props.size && sizeMap[props.size]) return sizeMap[props.size];
  return 8; // 默认 middle
});

const direction = props.direction ?? "horizontal";

const justifyContentMap: Record<string, string> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
};

const justifyContentValue = computed(() => {
  return props.justify ? justifyContentMap[props.justify] ?? "flex-start" : "flex-start";
});
</script>
