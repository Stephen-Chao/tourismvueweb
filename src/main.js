// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from './utils/vue-axios'
import Paginate from 'vuejs-paginate'
import VueSweetalert2 from 'vue-sweetalert2'
import './style/theme.css'
import './style/characters.css'

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.component('paginate', Paginate)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC98rSctt45iS0J9YlLrnvXbMDRs0M89KY',
    libraries: 'places'
  },
  installComponents: true
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
