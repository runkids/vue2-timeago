function formatToLongString(time, type) {
  return `${time} ${type}${time > 1 ? '초' : ''} 전`
}

export default {
  short: {
    now: '지금',
    sec: '초',
    min: '분',
    hour: '시간',
    day: '일',
  },
  long: {
    now: '지금',
    sec: (time) => formatToLongString(time, '초'),
    min: (time) => formatToLongString(time, '분'),
    hour: (time) => formatToLongString(time, '시간'),
    day: (time) => formatToLongString(time, '일'),
  },
}
