function formatToLongString(time, type) {
  return `${time} ${type}ที่แล้ว`
}

export default {
  short: {
    now: 'ขณะนี้',
    sec: 'วินาที',
    min: 'นาที',
    hour: 'ชั่วโมง',
    day: 'วัน',
  },
  long: {
    now: 'ขณะนี้',
    sec: (time) => formatToLongString(time, 'วินาที'),
    min: (time) => formatToLongString(time, 'นาที'),
    hour: (time) => formatToLongString(time, 'ชั่วโมง'),
    day: (time) => formatToLongString(time, 'วัน'),
  },
}
