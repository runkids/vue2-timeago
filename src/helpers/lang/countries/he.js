function formatToLongString(time, type) {
  return `לִפנֵי ${type} ${time}`
}

export default {
  short: {
    now: 'זֶה עַתָה',
    sec: 'שניות',
    min: 'דַקָה',
    hour: 'שָׁעָה',
    day: 'יְוֹם',
  },
  long: {
    now: 'זֶה עַתָה',
    sec: (time) => formatToLongString(time, 'שנייה'),
    min: (time) => formatToLongString(time, 'דַקָה'),
    hour: (time) => formatToLongString(time, 'שָׁעָה'),
    day: (time) => formatToLongString(time, 'יְוֹם'),
  },
}
