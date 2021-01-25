import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { TimeAgo } from './components/index'
import { TimeAgo } from 'vue2-timeago'
import 'vue2-timeago/dist/vue2-timeago.css'

Vue.use(ElementUI)
Vue.component(TimeAgo.name, TimeAgo)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
