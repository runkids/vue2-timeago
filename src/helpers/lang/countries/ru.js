function formatToLongString(time, words) {
  let _time = time % 100

  if (_time > 19) {
    _time = _time % 10
  }

  switch (_time) {
    case 1: {
      return ` ${time} ${words[0]} назад`
    }
    case 2:
    case 3:
    case 4: {
      return ` ${time} ${words[1]} назад`
    }
    default: {
      return ` ${time} ${words[2]} назад`
    }
  }
}

export default {
  short: {
    now: 'только что',
    sec: 'с',
    min: 'м',
    hour: 'ч',
    day: 'дн',
  },
  long: {
    now: 'только что',
    sec: (time) => formatToLongString(time, ['секунда', 'секунды', 'секунд']),
    min: (time) => formatToLongString(time, ['минута', 'минуты', 'минут']),
    hour: (time) => formatToLongString(time, ['час', 'часа', 'часов']),
    day: (time) => formatToLongString(time, ['день', 'дня', 'дней']),
  },
}
