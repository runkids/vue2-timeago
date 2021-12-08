<template>
  <span>{{ timeago }}</span>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, ref, watch } from 'vue'
import dateParser from '../../utils/dateParser'
import timer from '../../helpers/index'

const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7

export default defineComponent({
  name: 'Timeago',
  props: {
    datetime: {
      type: [String, Date, Number],
      default: () => new Date(),
    },
    locale: {
      type: String,
      default: 'en',
    },
    long: {
      type: Boolean,
      default: true,
    },
    minPeriod: {
      type: Number,
      default: 0,
    },
    maxPeriod: {
      type: Number,
      default: WEEK,
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    const timeago = ref('')
    const datetimeString = ref('')
    const timeoutId = ref(0)

    const timerConfig = computed(() => ({
      locale: props.locale,
      type: props.long ? 'long' : 'short',
    }))

    watch(ref(props), tick, { immediate: true, deep: true })

    function tick() {
      const then = dateParser(props.datetime).valueOf()
      if (!then) {
        console.warn('[vue2-timeago] Invalid Date provided')
        return
      }
      let {
        timeago: formateValue,
        nowString,
        timestamp,
      } = timer(props.datetime, timerConfig.value)
      const seconds = Math.round(Math.abs(Date.now() - then) / 1000)

      const unboundPeriod =
        seconds < MINUTE
          ? 1000
          : seconds < HOUR
          ? 1000 * MINUTE
          : seconds < DAY
          ? 1000 * HOUR
          : 1000 * WEEK

      const period = Math.min(
        Math.max(unboundPeriod, props.minPeriod * 1000),
        props.maxPeriod * 1000
      )

      timeago.value = formateValue
      datetimeString.value = nowString

      if (period) {
        if (timeoutId.value) {
          clearTimeout(timeoutId.value)
        }
        timeoutId.value = setTimeout(tick, period)
        emit('update', { timeago: formateValue, nowString, timestamp, seconds })
      }
    }

    onUnmounted(() => {
      if (timeoutId.value) {
        clearTimeout(timeoutId.value)
      }
    })

    return {
      timeago,
    }
  },
})
</script>
