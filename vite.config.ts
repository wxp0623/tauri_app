import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    Components({
      resolvers: [VuetifyResolver()],
      dirs: ['src/components'], // 自动扫描的组件目录
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts', // 自动生成类型声明文件
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
