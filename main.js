import Vue from 'vue'
/* import App from './App' */
import uView from "uview-ui";
Vue.use(uView)


// #ifndef VUE3
Vue.config.productionTip = false
// Vue.prototype.$baseUrl="http://192.168.1.2/api"   //线下接口  
Vue.prototype.$baseUrl="http://localhost:8080"   //线下接口  

App.mpType = 'app'
const app = new Vue({
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