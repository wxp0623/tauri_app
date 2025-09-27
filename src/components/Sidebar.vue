<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in menus"
        :key="index"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.path"
        @click="onMenuClick(item)"
      ></v-list-item> 
       
     
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useSidebar } from './Sidebar';

const { 
  drawer, 
  rail, 
  menus,  
  onMenuClick
} =  useSidebar();

</script>