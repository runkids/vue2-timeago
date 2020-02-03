function formatToLongString (time, type) {
  if(type == 'zi') {
    return ` ${time == 1 ? 'o ' : time} ${ time == 1 ? '' : 'e'} în urmă`
  }
  
  return ` ${time == 1 ? 'o ' : time} ${type}${ time == 1 ? 'ă' : 'e'} în urmă`
}

export default {
  short: {
    now: 'chiar acum',
    sec:'s',
    min: 'm',
    hour: 'o',
    day: 'z',
  },
  long: {
    now: 'chiar acum',
    sec: time => formatToLongString(time, 'secund'),
    min: time => formatToLongString(time, 'minut'),
    hour: time => formatToLongString(time, 'or'),
    day: time => formatToLongString(time, 'zi'),
  }
}