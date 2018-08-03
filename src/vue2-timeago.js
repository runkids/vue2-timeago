import TimeAgo from './TimeAgo.vue';
export default TimeAgo;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue2-timeago', TimeAgo);
}