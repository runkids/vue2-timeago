function formatToLongString (time, type) {
  return ` ${time} ${type} önce`
}


export default {
  short: {
    now: 'şimdi',
    sec:'sn',
    min: 'dk',
    hour: 's',
    day: 'g',
  },
  long: {
    now: 'şimdi',
    sec: time => formatToLongString(time, 'saniye'),
    min: time => formatToLongString(time, 'dakika'),
    hour: time => formatToLongString(time, 'saat'),
    day: time => formatToLongString(time, 'gün'),
  }
}
