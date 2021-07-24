function formatToLongString(time, type) {
  return `${time} ${type}${time > 1 ? 's' : ''} geleden`
}

export default {
  short: {
    now: 'zojuist',
    sec: 's',
    min: 'm',
    hour: 'h',
    day: 'd',
  },
  long: {
    now: 'zojuist',
    sec: (time) => formatToLongString(time, 'seconde'),
    min: (time) => formatToLongString(time, 'minuut'),
    hour: (time) => formatToLongString(time, 'uur'),
    day: (time) => formatToLongString(time, 'dag'),
  },
}
