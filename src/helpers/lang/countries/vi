function formatToLongString(time, type) {
  return `${time} ${type}${time > 1 ? 'giây' : ''} trước`
}

export default {
  short: {
    now: 'vừa xong',
    sec: 's',
    min: 'p',
    hour: 'g',
    day: 'N',
  },
  long: {
    now: 'Vừa xong',
    sec: (time) => formatToLongString(time, 'giây'),
    min: (time) => formatToLongString(time, 'phút'),
    hour: (time) => formatToLongString(time, 'giờ'),
    day: (time) => formatToLongString(time, 'ngày'),
  },
}
