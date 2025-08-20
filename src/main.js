// src/main.js

import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n' // Import createI18n
import App from './App.vue'
import router from './router'

import en from './locales/en.json'
import fr from './locales/fr.json'

// 2. Configure Vue I18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')