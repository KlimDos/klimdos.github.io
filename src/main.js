import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// your main.js
import VueYandexMetrika from 'vue-yandex-metrika'                               

Vue.use(VueYandexMetrika, {
    id: 72339736,
    env: "production"
    // other options
})
