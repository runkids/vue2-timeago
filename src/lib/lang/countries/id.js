function formatToLongString (time, type) {
  return ` ${time} ${type} yg lalu`
}

export default {
  short: {
    now: 'baru saja',
    sec:'dtk',
    min: 'mnt',
    hour: 'jam',
    day: 'hari',
  },
  long: {
    now: 'baru saja',
    sec: time => formatToLongString(time, 'detik'),
    min: time => formatToLongString(time, 'menit'),
    hour: time => formatToLongString(time, 'jam'),
    day: time => formatToLongString(time, 'hari'),
  }
}
