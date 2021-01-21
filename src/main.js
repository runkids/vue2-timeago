import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { TimeAgo } from './components/index'

Vue.use(ElementUI)
Vue.component(TimeAgo.name, TimeAgo)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
