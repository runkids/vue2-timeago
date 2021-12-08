import TimeAgo from './timeago'

const factory = (nowDate, { locale, type }) =>
  new TimeAgo(nowDate, locale, type).getTimeAgo()

export default factory
