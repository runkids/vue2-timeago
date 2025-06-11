import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-timeago/dist/vue2-timeago.css'

import App from './App.vue'
import ElementUI from 'element-ui'
// import { TimeAgo } from './components/index'
import { TimeAgo } from 'vue2-timeago'
import Vue from 'vue'

Vue.use(ElementUI)
Vue.component(TimeAgo.name, TimeAgo)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
