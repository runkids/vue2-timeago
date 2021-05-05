function formatToLongString(time, type) {
  return `${time} ${time > 1 ? type[1] : type[0]} sen`
}

export default {
  short: {
    now: 'alldeles nyss',
    sec: 's',
    min: 'm',
    hour: 't',
    day: 'd',
  },
  long: {
    now: 'alldeles nyss',
    sec: (time) => formatToLongString(time, ['sekund', 'sekunder']),
    min: (time) => formatToLongString(time, ['minut', 'minuter']),
    hour: (time) => formatToLongString(time, ['timme', 'timmar']),
    day: (time) => formatToLongString(time, ['dag', 'dagar']),
  },
}
