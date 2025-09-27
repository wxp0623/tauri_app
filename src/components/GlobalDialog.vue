<template>
  <v-dialog v-model="isActive" :max-width="maxWidth">
    <v-card :title="title">
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="关闭" @click="closeDialog"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { VDialog, VCard, VCardText, VCardActions, VBtn, VSpacer } from 'vuetify/components'

const props = defineProps<{
  title?: string
  content?: string
  maxWidth?: number | string
}>()
const emit = defineEmits(['close'])
const isActive = ref(true)
function closeDialog() {
  isActive.value = false
  emit('close' )
}
</script>