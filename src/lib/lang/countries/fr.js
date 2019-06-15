function formatToLongString (time, type) {
  return `il y a ${time} ${type}${ time > 1 ? 's' : ''}`
}

export default {
  short: {
    now: 'maintenant',
    sec: 's',
    min: 'm',
    hour: 'h',
    day: 'j',
  },
  long: {
    now: 'maintenant',
    sec: time => formatToLongString(time, 'seconde'),
    min: time => formatToLongString(time, 'minute'),
    hour: time => formatToLongString(time, 'heure') ,
    day: time => formatToLongString(time, 'jour'),
  }
}
