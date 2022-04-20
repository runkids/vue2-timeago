function formatToLongString(time, type) {
  return `${time} ${time > 1 ? type[1] : type[0]} sen`
}

export default {
  short: {
    now: 'lige nu',
    sec: 's',
    min: 'm',
    hour: 't',
    day: 'd',
  },
  long: {
    now: 'lige nu',
    sec: (time) => formatToLongString(time, ['sekund', 'sekunder']),
    min: (time) => formatToLongString(time, ['minut', 'minutter']),
    hour: (time) => formatToLongString(time, ['time', 'timer']),
    day: (time) => formatToLongString(time, ['dag', 'dage']),
  },
}
