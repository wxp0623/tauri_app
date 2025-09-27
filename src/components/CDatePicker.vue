<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template #activator="{ props: activatorProps }">
      <v-text-field v-bind="activatorProps" :model-value="modelValue" label="日期" readonly
        @update:modelValue="updateValue"></v-text-field>
    </template>
    <v-date-picker :model-value="modelValue" @update:modelValue="updateValueAndClose"></v-date-picker>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menu = ref(false);

defineProps<{ modelValue: string }>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

function updateValue(val: string) {
  emit('update:modelValue', val);
}
function updateValueAndClose(val: string) {
  emit('update:modelValue', val);
  menu.value = false;
}
</script>