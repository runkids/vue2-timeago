function formatToLongString(time, type) {
  return `${time} ${time > 1 ? type[1] : type[0]} siden`
}

export default {
  short: {
    now: 'akkurat nå',
    sec: 's',
    min: 'm',
    hour: 't',
    day: 'd',
  },
  long: {
    now: 'akkurat nå',
    sec: (time) => formatToLongString(time, ['sekund', 'sekunder']),
    min: (time) => formatToLongString(time, ['minutt', 'minutter']),
    hour: (time) => formatToLongString(time, ['time', 'timer']),
    day: (time) => formatToLongString(time, ['dag', 'dager']),
  },
}
