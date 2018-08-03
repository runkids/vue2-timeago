<template>
  <a :class="aTagStyle">
    <span v-if="tooltip" class="tooltiptext">{{nowString}}</span>
    <span class="v_time_ago_span">{{timeago}}</span>
  </a>
</template>

<script>
import timer from '../src/lib/index';

export default {
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
      type: Boolean,
      default: false,
    }
  },

  data(){
    return {
      timeago: '',

      nowString: '',

      intervalId: null,

      aTagStyle:{
        'v_time_ago_a': true,
        tooltip: this.tooltip
      },
      
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

<style>
.v_time_ago_a{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  cursor: pointer;
  color: #657786;
  text-decoration: none;
}

.v_time_ago_a:hover, .v_time_ago_a:focus, .v_time_ago_a:active{
  color: #1B95E0;
  text-decoration: underline;
}

.v_time_ago_span{
  line-height: 20px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  letter-spacing: 0.1px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  transition-delay: .5s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>

