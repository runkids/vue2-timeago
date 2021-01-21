export default {
  short: {
    now: 'قبل قليل',
    sec: ' ثانية',
    min: ' دقيقة',
    hour: ' ساعة',
    day: ' يوم',
  },
  long: {
    now: 'قبل قليل',
    sec: (time) => ` قبل ${time} ثواني`,
    min: (time) => ` قبل ${time} دقائق`,
    hour: (time) => ` قبل ${time} ساعات`,
    day: (time) => ` قبل ${time} أيام`,
  },
}
