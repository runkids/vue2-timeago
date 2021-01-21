<template>
  <span class="v-timeago" v-on="eventListeners">
    <slot :timeage="timeago" name="tooltip">
      <span v-tooltip="options" v-if="tooltip">{{ timeago }}</span>
      <span v-else>{{ timeago }}</span>
    </slot>
  </span>
</template>

<script>
import timer from '../helpers/index'
import { VTooltip } from 'v-tooltip'

export default {
  name: 'TimeAgo',
  directives: {
    tooltip: VTooltip,
  },
  props: {
    datetime: {
      type: [String, Date, Number],
      default: () => new Date(),
    },
    locale: {
      type: String,
      default: 'en',
    },
    refresh: {
      type: [Number, Boolean],
      default: false,
    },
    long: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: Boolean,
      default: false,
    },
    tooltipOptions: {
      // more info see https://github.com/Akryum/v-tooltip#other-options
      type: Object,
      default: () => ({
        placement: 'top',
      }),
    },
  },
  data() {
    return {
      timeago: '',
      datetimeString: '',
      timer: null,
    }
  },
  computed: {
    eventListeners() {
      return {
        ...this.$listeners,
      }
    },
    options() {
      return {
        content: this.datetimeString,
        ...this.tooltipOptions,
      }
    },
    timerConfig() {
      return {
        locale: this.locale,
        long: this.long ? 'long' : 'short',
      }
    },
  },
  watch: {
    timerConfig: {
      deep: true,
      handler: 'reloadTime',
    },
  },
  mounted() {
    this.createTimer()
  },
  beforeDestroy() {
    this.clearTimer()
  },
  methods: {
    createTimer() {
      this.$nextTick(() => {
        this.reloadTime()
        if (this.refresh) {
          const refreshTime = this.refresh === true ? 60 : this.refresh
          this.timer = setInterval(this.reloadTime, refreshTime * 1000)
        }
      })
    },
    clearTimer() {
      if (this.timer) clearInterval(this.timer)
    },
    reloadTime() {
      let { timeago, nowString, timestamp } = timer(this.datetime, this.timerConfig)
      this.timeago = timeago
      this.datetimeString = nowString
      if (this.timer) {
        this.$emit('update', { timeago, nowString, timestamp })
      }
    },
  },
}
</script>

<style>
.v-timeago {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

.tooltip {
  display: block !important;
  font-size: 12px;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: #303133;
  color: white;
  border-radius: 4px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #303133;
  z-index: 1;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 5px 30px rgba(#303133, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
