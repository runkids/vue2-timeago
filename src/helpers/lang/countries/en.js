function formatToLongString(time, type) {
  return `${time} ${type}${time > 1 ? 's' : ''} ago`
}

export default {
  short: {
    now: 'just now',
    sec: 's',
    min: 'm',
    hour: 'h',
    day: 'd',
  },
  long: {
    now: 'just now',
    sec: (time) => formatToLongString(time, 'second'),
    min: (time) => formatToLongString(time, 'minute'),
    hour: (time) => formatToLongString(time, 'hour'),
    day: (time) => formatToLongString(time, 'day'),
  },
}
