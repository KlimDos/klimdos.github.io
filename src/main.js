import Vue from 'vue'
import App from './App.vue'
import VueYandexMetrika from 'vue-yandex-metrika'
import './assets/tailwind.css'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueYandexMetrika, {
    id: 72339736,
    env: 'production',
  })
}

new Vue({
  render: (h) => h(App),
}).$mount('#app')
