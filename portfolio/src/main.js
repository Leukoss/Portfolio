import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OnScrollAnimation from './directives/on-scroll-animation';

const app = createApp(App)

app.use(router)

app.directive('on-scroll-animation', OnScrollAnimation);

app.mount('#app')
