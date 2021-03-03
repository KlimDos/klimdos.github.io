import Vue from 'vue'
import App from './App.vue'
import VueYandexMetrika from 'vue-yandex-metrika'


Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 72339736,
  env: "production"
  // other options
})

new Vue({
  render: h => h(App),
}).$mount('#app')

