function formatToLongString (time, type) {
  return `vor ${time} ${type}${ time > 1 ? type === 'Tag' ? 'en' : 'n' : ''}`
}

export default {
  short: {
    now: 'Gerade eben',
    sec: 'Sek.',
    min: 'Min.',
    hour: 'Std.',
    day: 'Tg',
  },
  long: {
    now: 'Gerade eben',
    sec: time => formatToLongString(time, 'Sekunde'),
    min: time => formatToLongString(time, 'Minute'),
    hour: time => formatToLongString(time, 'Stunde'),
    day: time => formatToLongString(time, 'Tag'),
  }
}
