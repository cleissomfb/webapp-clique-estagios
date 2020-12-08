import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'babel-polyfill'
// Imports do Fontawson - Não utilizados
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import da função que rola automaticamente as instituições parceiras
import './assets/js/scroller.js'

// Import do CSS do estilo o painelAdm
import './assets/css/estiloPainelAdm.css'

// Import do CSS do estilo da PaginaPrincipal
import './assets/css/estiloPaginaPrincipal.css'

// Import das resoluções 
import './assets/css/media500px.css'
import './assets/css/media720px.css'
import './assets/css/media1080px.css'
import './assets/css/media1200px.css'

// Import do bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import das maskaras de imput
import VueMask from 'v-mask'

// Import da validação dos campos
import Vuelidate from 'vuelidate'

// Import do slider para ver as vagas disponíveis index do site
import VueAwesomeSwiper from 'vue-awesome-swiper'

// Import do plugin vue-fragment
import { Plugin } from 'vue-fragment';

Vue.use(Plugin);
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
