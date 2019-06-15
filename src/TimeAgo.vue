<template>
  <el-tooltip :content="`${nowString}`" :placement="placement" :disabled="!tooltip">
    <span class="v-time-ago__text">{{timeago}}</span>
  </el-tooltip>
</template>

<script>
import timer from '../src/lib/index';
import { Tooltip } from 'element-ui';

export default {
  name: 'TimeAgo',
  props:{
    datetime: {
      type: [String, Date, Number],
      default: e => (new Date()),
    },
    locale:{
      type: String,
      default: 'en',
    },
    refresh: {
      type: [Number, Boolean],
      default: false,
    },
    long:{
      type: Boolean,
      default: false,
    },
    todo:{ 
      type: Function,
       default: e => {},
    },
    tooltip:{
      type: [String, Boolean],
      default: false,
    }
  },

  data(){
    return {
      timeago: '',

      nowString: '',

      intervalId: null,
    }
  },

  computed: {
    placement () {
      return typeof this.tooltip === 'string' ? this.tooltip : 'top'
    }
  },

  methods:{
    reloadTime(){
      let { timeago , nowString } = timer(this.datetime, this.locale, this.long?'long':'short' );
      this.timeago = timeago;
      this.nowString = nowString;
      if(this.intervalId) this.todo();
    }
  },

  mounted(){
    this.$nextTick(()=>{
      this.reloadTime();
      if(this.refresh){
        const refreshTime = this.refresh===true ? 60 : this.refresh
        this.intervalId = setInterval(this.reloadTime, this.refresh*1000);
      }
    });
  },

  destroyed() {
     if(this.intervalId) clearInterval(this.intervalId);
  },
  
}
</script>

<style scoped>
.v-time-ago__text{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  cursor: pointer;
  color: #657786;
  text-decoration: none;
  line-height: 20px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  letter-spacing: 0.1px;
}
</style>

