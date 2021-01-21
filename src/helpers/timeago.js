import { getNow, getNowString, getNowMoreString, toTimestamp } from './helper'

import lang from './lang/index'

class TimeAgo {
  constructor(dateTime, locale, type) {
    this.dateTime = dateTime
    this.locale = locale || 'en'
    this.type = type || 'short'
  }

  setLocale(locale) {
    this.locale = locale
  }

  getTimeAgoString(timer, type) {
    return typeof type === 'string' ? `${timer}${type}` : type(timer)
  }

  getTimeAgo() {
    let { now, min, hour, day } = lang[this.locale][this.type]
    let timestamp = toTimestamp(this.dateTime) //轉成timestamp
    let nowTime = getNow()
    let timer = (nowTime - timestamp) / 1000 //轉成秒
    let timeago = ''

    if (timer <= 0 || Math.floor(timer / 60) <= 0) {
      timeago = now
    } else if (timer < 3600) {
      timeago = this.getTimeAgoString(Math.round(timer / 60), min)
    } else if (timer >= 3600 && Math.round(timer / 3600) < 24) {
      timeago = this.getTimeAgoString(Math.round(timer / 3600), hour)
    } else if (timer / 86400 <= 31) {
      timeago = this.getTimeAgoString(Math.round(timer / 86400), day)
    } else {
      timeago = getNowString(timestamp)
    }

    return {
      timeago,
      timestamp,
      nowString: getNowMoreString(timestamp),
    }
  }
}

export default TimeAgo
