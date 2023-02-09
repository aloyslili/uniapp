import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// import $H from './common/request.js'
// import store  from './store/index.js'
// Vue.prototype.$H = $H
// Vue.prototype.$store = $H
import $H from './common/request.js'
Vue.prototype.$H = $H

import store from './store/index.js'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif