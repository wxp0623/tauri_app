<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
    <v-layout>
      <Sidebar />
      <v-main style="height: 100vh">
        <RouterView />      
      </v-main>
    </v-layout>
</template>
