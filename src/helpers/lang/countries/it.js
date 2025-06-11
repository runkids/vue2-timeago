function formatToLongString(time, type) {
  return `${time} ${type}${time > 1 ? 's' : ''} fa`
}

export default {
  short: {
    now: 'adesso',
    sec: 's',
    min: 'm',
    hour: 'h',
    day: 'g',
  },
  long: {
    now: 'adesso',
    sec: (time) => formatToLongString(time, 'secondo'),
    min: (time) => formatToLongString(time, 'minuto'),
    hour: (time) => formatToLongString(time, 'ora'),
    day: (time) => formatToLongString(time, 'giorno'),
  },
}
