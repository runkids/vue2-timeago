function formatToLongString (time, type) {
  return ` ${time} ${type}${ time > 1 ? 's' : ''} atrás`
}

export default {
  short: {
    now: 'ahora mismo',
    sec:'s',
    min: 'm',
    hour: 'h',
    day: 'd',
  },
  long: {
    now: 'ahora mismo',
    sec: time => formatToLongString(time, 'segundo'),
    min: time => formatToLongString(time, 'minuto'),
    hour: time => formatToLongString(time, 'hora'),
    day: time => formatToLongString(time, 'dia'),
  }
}
