function formatToLongString (time, type) {
  return ` ${time} ${type}${ time > 1 ? 's' : ''} atrás`
}

export default {
  short: {
    now: 'agora',
    sec:'s',
    min: 'm',
    hour: 'h',
    day: 'd',
  },
  long: {
    now: 'agora',
    sec: time => formatToLongString(time, 'segundo'),
    min: time => formatToLongString(time, 'minuto'),
    hour: time => formatToLongString(time, 'hora'),
    day: time => formatToLongString(time, 'dia'),
  }
}
