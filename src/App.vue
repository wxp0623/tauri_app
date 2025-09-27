<template>
  <v-app>
    <v-main>
        <Layout msg="Vite + Vue" />
    </v-main>
    <GlobalDialog
        v-if="dialogObj.visible"
        :title="dialogObj.title"
        :max-width="dialogObj.maxWidth"
        @close="dialogObj.visible = false"
      >
        <component :is="dialogObj.component" v-bind="dialogObj.props" />
      </GlobalDialog>
  </v-app>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue'
import { useTheme } from 'vuetify'
import { reactive, provide } from 'vue'
import GlobalDialog from './components/GlobalDialog.vue'

const theme = useTheme()
theme.global.name.value = 'dark'

const dialogObj = reactive({
  visible: false,
  title: '',
  maxWidth: 500,
  component: null,
  props: {}
})

// 提供 showDialog 给全局
function showDialog(title: string, component: any, props: Record<string, any> = {}, maxWidth = 500) {
  dialogObj.title = title
  dialogObj.component = component
  dialogObj.props = props
  dialogObj.maxWidth = maxWidth
  dialogObj.visible = true
}

provide('showDialog', showDialog)
</script>

<style scoped>

</style>
