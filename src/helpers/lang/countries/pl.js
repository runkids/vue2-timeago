function formatToLongString(time, type) {
  return ` ${time} ${type}${time > 1 ? 's' : ''} temu`
}

export default {
  short: {
    now: 'przed chwilą',
    sec: 's',
    min: 'm',
    hour: 'g',
    day: 'd',
  },
  long: {
    now: 'przed chwilą',
    sec: (time) => formatToLongString(time, 'sekund'),
    min: (time) => formatToLongString(time, 'minut'),
    hour: (time) => formatToLongString(time, 'godzin'),
    day: (time) => formatToLongString(time, 'dni'),
  },
}
