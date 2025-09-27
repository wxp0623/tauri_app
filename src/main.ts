// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import router from './router';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { dark: false },
      dark: { dark: true },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})

async function bootstrap() {
  const resolvedRouter = await router;
  createApp(App)
    .use(resolvedRouter)
    .use(vuetify)
    .mount('#app')
}

bootstrap();
