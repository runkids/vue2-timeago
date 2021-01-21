function formatToLongString(time, words) {
  let _time = time % 100

  if (_time > 19) {
    _time = _time % 10
  }

  switch (_time) {
    case 1: {
      return ` ${time} ${words[0]} тому`
    }
    case 2:
    case 3:
    case 4: {
      return ` ${time} ${words[1]} тому`
    }
    default: {
      return ` ${time} ${words[2]} тому`
    }
  }
}

export default {
  short: {
    now: 'щойно',
    sec: 'с',
    min: 'хв',
    hour: 'год',
    day: 'дн',
  },
  long: {
    now: 'щойно',
    sec: (time) => formatToLongString(time, ['секунда', 'секунди', 'секунд']),
    min: (time) => formatToLongString(time, ['хвилина', 'хвилини', 'хвилин']),
    hour: (time) => formatToLongString(time, ['година', 'години', 'годин']),
    day: (time) => formatToLongString(time, ['день', 'дні', 'днів']),
  },
}
