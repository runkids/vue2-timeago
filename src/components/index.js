import TimeAgo from './TimeAgo.vue'

const components = {
  TimeAgo,
}

export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
  })
}

const plugin = {
  install,
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default components
export { TimeAgo }
