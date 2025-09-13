<script setup lang="ts">
import Layout from './components/Layout.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
theme.global.name.value = 'dark'
</script>

<template>
  <v-app>
    <v-main>
        <Layout msg="Vite + Vue" />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
