;(function (c, r) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? r(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], r)
    : ((c = typeof globalThis != 'undefined' ? globalThis : c || self),
      r((c['vue2-timeago'] = {}), c.Vue))
})(this, function (c, r) {
  'use strict'
  function x(e) {
    const n = new Date(e)
    if (!Number.isNaN(n.valueOf())) return n
    const t = String(e).match(/\d+/g)
    if (t == null || t.length <= 2) return n
    {
      const [a, o, ...s] = t.map((u) => parseInt(u)),
        d = [a, o - 1, ...s]
      return new Date(Date.UTC(...d))
    }
  }
  function C() {
    return new Date().getTime()
  }
  function O(e) {
    let n = new Date(e),
      t = n.getMonth() + 1,
      a = t < 10 ? `0${t}` : t,
      o = n.getDate() < 10 ? `0${n.getDate()}` : n.getDate()
    return `${n.getFullYear()}-${a}-${o}`
  }
  function U(e) {
    let n = new Date(e),
      t = n.getMonth() + 1,
      a = t < 10 ? `0${t}` : t,
      o = n.getDate() < 10 ? `0${n.getDate()}` : n.getDate(),
      s = n.getHours() < 10 ? `0${n.getHours()}` : n.getHours(),
      d = n.getMinutes() < 10 ? `0${n.getMinutes()}` : n.getMinutes()
    return `${n.getFullYear()}-${a}-${o} ${s}:${d}`
  }
  function B(e) {
    return !isNaN(e) || /^\d+$/.test(e)
      ? e
      : e instanceof Date
      ? e.getTime()
      : ((e = (e || '')
          .trim()
          .replace(/\.\d+/, '')
          .replace(/-/, '/')
          .replace(/-/, '/')
          .replace(/(\d)T(\d)/, '$1 $2')
          .replace(/Z/, ' UTC')
          .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2')),
        new Date(e).getTime())
  }
  var E = {
      short: {
        now: '\u525B\u525B',
        sec: ' \u79D2',
        min: ' \u5206',
        hour: ' \u5C0F\u6642',
        day: ' \u5929',
      },
      long: {
        now: '\u525B\u525B',
        sec: ' \u79D2\u9418\u524D',
        min: ' \u5206\u9418\u524D',
        hour: ' \u5C0F\u6642\u524D',
        day: ' \u5929\u524D',
      },
    },
    H = {
      short: {
        now: '\u521A\u521A',
        sec: ' \u79D2',
        min: ' \u5206',
        hour: ' \u5C0F\u65F6',
        day: ' \u5929',
      },
      long: {
        now: '\u521A\u521A',
        sec: ' \u79D2\u949F\u524D',
        min: ' \u5206\u949F\u524D',
        hour: ' \u5C0F\u65F6\u524D',
        day: ' \u5929\u524D',
      },
    }
  function m(e, n) {
    return `${e} ${n}${e > 1 ? 's' : ''} ago`
  }
  var I = {
      short: { now: 'just now', sec: 's', min: 'm', hour: 'h', day: 'd' },
      long: {
        now: 'just now',
        sec: (e) => m(e, 'second'),
        min: (e) => m(e, 'minute'),
        hour: (e) => m(e, 'hour'),
        day: (e) => m(e, 'day'),
      },
    },
    Y = {
      short: {
        now: '\u3059\u3053\u3057\u524D',
        sec: ' \u79D2',
        min: ' \u5206',
        hour: ' \u6642\u9593',
        day: ' \u65E5',
      },
      long: {
        now: '\u3059\u3053\u3057\u524D',
        sec: ' \u79D2\u524D',
        min: ' \u5206\u524D',
        hour: ' \u6642\u9593\u524D',
        day: ' \u65E5\u524D',
      },
    }
  function g(e, n) {
    return ` ${e} ${n}${e > 1 ? 's' : ''} atr\xE1s`
  }
  var F = {
    short: { now: 'ahora mismo', sec: 's', min: 'm', hour: 'h', day: 'd' },
    long: {
      now: 'ahora mismo',
      sec: (e) => g(e, 'segundo'),
      min: (e) => g(e, 'minuto'),
      hour: (e) => g(e, 'hora'),
      day: (e) => g(e, 'dia'),
    },
  }
  function l(e, n) {
    return ` ${e} ${n}${e > 1 ? 's' : ''} atr\xE1s`
  }
  var G = {
      short: { now: 'agora', sec: 's', min: 'm', hour: 'h', day: 'd' },
      long: {
        now: 'agora',
        sec: (e) => l(e, 'segundo'),
        min: (e) => l(e, 'minuto'),
        hour: (e) => l(e, 'hora'),
        day: (e) => l(e, 'dia'),
      },
    },
    R = {
      short: {
        now: '\u0642\u0628\u0644 \u0642\u0644\u064A\u0644',
        sec: ' \u062B\u0627\u0646\u064A\u0629',
        min: ' \u062F\u0642\u064A\u0642\u0629',
        hour: ' \u0633\u0627\u0639\u0629',
        day: ' \u064A\u0648\u0645',
      },
      long: {
        now: '\u0642\u0628\u0644 \u0642\u0644\u064A\u0644',
        sec: (e) => ` \u0642\u0628\u0644 ${e} \u062B\u0648\u0627\u0646\u064A`,
        min: (e) => ` \u0642\u0628\u0644 ${e} \u062F\u0642\u0627\u0626\u0642`,
        hour: (e) => ` \u0642\u0628\u0644 ${e} \u0633\u0627\u0639\u0627\u062A`,
        day: (e) => ` \u0642\u0628\u0644 ${e} \u0623\u064A\u0627\u0645`,
      },
    }
  function h(e, n) {
    return `il y a ${e} ${n}${e > 1 ? 's' : ''}`
  }
  var V = {
    short: { now: 'maintenant', sec: 's', min: 'm', hour: 'h', day: 'j' },
    long: {
      now: 'maintenant',
      sec: (e) => h(e, 'seconde'),
      min: (e) => h(e, 'minute'),
      hour: (e) => h(e, 'heure'),
      day: (e) => h(e, 'jour'),
    },
  }
  function f(e, n) {
    return ` ${e} ${n}${e > 1 ? 's' : ''} temu`
  }
  var W = {
    short: {
      now: 'przed chwil\u0105',
      sec: 's',
      min: 'm',
      hour: 'g',
      day: 'd',
    },
    long: {
      now: 'przed chwil\u0105',
      sec: (e) => f(e, 'sekund'),
      min: (e) => f(e, 'minut'),
      hour: (e) => f(e, 'godzin'),
      day: (e) => f(e, 'dni'),
    },
  }
  function $(e, n) {
    return ` ${e} ${n} \xF6nce`
  }
  var q = {
    short: { now: '\u015Fimdi', sec: 'sn', min: 'dk', hour: 's', day: 'g' },
    long: {
      now: '\u015Fimdi',
      sec: (e) => $(e, 'saniye'),
      min: (e) => $(e, 'dakika'),
      hour: (e) => $(e, 'saat'),
      day: (e) => $(e, 'g\xFCn'),
    },
  }
  function w(e, n) {
    return ` ${e} ${n} yg lalu`
  }
  var K = {
    short: { now: 'baru saja', sec: 'd', min: 'm', hour: 'j', day: 'h' },
    long: {
      now: 'baru saja',
      sec: (e) => w(e, 'detik'),
      min: (e) => w(e, 'menit'),
      hour: (e) => w(e, 'jam'),
      day: (e) => w(e, 'hari'),
    },
  }
  function y(e, n) {
    return n == 'zi'
      ? e == 1
        ? 'o zi \xEEn urm\u0103'
        : e + ' zile \xEEn urm\u0103'
      : ` ${e == 1 ? 'o ' : e} ${n}${e == 1 ? '\u0103' : 'e'} \xEEn urm\u0103`
  }
  var Z = {
    short: { now: 'chiar acum', sec: 's', min: 'm', hour: 'o', day: 'z' },
    long: {
      now: 'chiar acum',
      sec: (e) => y(e, 'secund'),
      min: (e) => y(e, 'minut'),
      hour: (e) => y(e, 'or'),
      day: (e) => y(e, 'zi'),
    },
  }
  function T(e, n) {
    let t = e % 100
    switch ((t > 19 && (t = t % 10), t)) {
      case 1:
        return ` ${e} ${n[0]} \u043D\u0430\u0437\u0430\u0434`
      case 2:
      case 3:
      case 4:
        return ` ${e} ${n[1]} \u043D\u0430\u0437\u0430\u0434`
      default:
        return ` ${e} ${n[2]} \u043D\u0430\u0437\u0430\u0434`
    }
  }
  var J = {
    short: {
      now: '\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E',
      sec: '\u0441',
      min: '\u043C',
      hour: '\u0447',
      day: '\u0434\u043D',
    },
    long: {
      now: '\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E',
      sec: (e) =>
        T(e, [
          '\u0441\u0435\u043A\u0443\u043D\u0434\u0430',
          '\u0441\u0435\u043A\u0443\u043D\u0434\u044B',
          '\u0441\u0435\u043A\u0443\u043D\u0434',
        ]),
      min: (e) =>
        T(e, [
          '\u043C\u0438\u043D\u0443\u0442\u0430',
          '\u043C\u0438\u043D\u0443\u0442\u044B',
          '\u043C\u0438\u043D\u0443\u0442',
        ]),
      hour: (e) =>
        T(e, [
          '\u0447\u0430\u0441',
          '\u0447\u0430\u0441\u0430',
          '\u0447\u0430\u0441\u043E\u0432',
        ]),
      day: (e) =>
        T(e, [
          '\u0434\u0435\u043D\u044C',
          '\u0434\u043D\u044F',
          '\u0434\u043D\u0435\u0439',
        ]),
    },
  }
  function S(e, n) {
    return `vor ${e} ${n}${e > 1 ? (n === 'Tag' ? 'en' : 'n') : ''}`
  }
  var Q = {
    short: {
      now: 'Gerade eben',
      sec: 'Sek.',
      min: 'Min.',
      hour: 'Std.',
      day: 'Tg',
    },
    long: {
      now: 'Gerade eben',
      sec: (e) => S(e, 'Sekunde'),
      min: (e) => S(e, 'Minute'),
      hour: (e) => S(e, 'Stunde'),
      day: (e) => S(e, 'Tag'),
    },
  }
  function v(e, n) {
    let t = e % 100
    switch ((t > 19 && (t = t % 10), t)) {
      case 1:
        return ` ${e} ${n[0]} \u0442\u043E\u043C\u0443`
      case 2:
      case 3:
      case 4:
        return ` ${e} ${n[1]} \u0442\u043E\u043C\u0443`
      default:
        return ` ${e} ${n[2]} \u0442\u043E\u043C\u0443`
    }
  }
  var X = {
    short: {
      now: '\u0449\u043E\u0439\u043D\u043E',
      sec: '\u0441',
      min: '\u0445\u0432',
      hour: '\u0433\u043E\u0434',
      day: '\u0434\u043D',
    },
    long: {
      now: '\u0449\u043E\u0439\u043D\u043E',
      sec: (e) =>
        v(e, [
          '\u0441\u0435\u043A\u0443\u043D\u0434\u0430',
          '\u0441\u0435\u043A\u0443\u043D\u0434\u0438',
          '\u0441\u0435\u043A\u0443\u043D\u0434',
        ]),
      min: (e) =>
        v(e, [
          '\u0445\u0432\u0438\u043B\u0438\u043D\u0430',
          '\u0445\u0432\u0438\u043B\u0438\u043D\u0438',
          '\u0445\u0432\u0438\u043B\u0438\u043D',
        ]),
      hour: (e) =>
        v(e, [
          '\u0433\u043E\u0434\u0438\u043D\u0430',
          '\u0433\u043E\u0434\u0438\u043D\u0438',
          '\u0433\u043E\u0434\u0438\u043D',
        ]),
      day: (e) =>
        v(e, [
          '\u0434\u0435\u043D\u044C',
          '\u0434\u043D\u0456',
          '\u0434\u043D\u0456\u0432',
        ]),
    },
  }
  function p(e, n) {
    return e > 1
      ? `\u043F\u0440\u0435\u0434\u0438 ${e} ${n[1]}`
      : `\u043F\u0440\u0435\u0434\u0438 ${e} ${n[0]}`
  }
  var ee = {
    short: {
      now: '\u0441\u0435\u0433\u0430',
      sec: '\u0441',
      min: '\u043C',
      hour: '\u0447',
      day: '\u0434',
    },
    long: {
      now: '\u0441\u0435\u0433\u0430',
      sec: (e) =>
        p(e, [
          '\u0441\u0435\u043A\u0443\u043D\u0434\u0430',
          '\u0441\u0435\u043A\u0443\u043D\u0434\u0438',
        ]),
      min: (e) =>
        p(e, [
          '\u043C\u0438\u043D\u0443\u0442\u0430',
          '\u043C\u0438\u043D\u0443\u0442\u0438',
        ]),
      hour: (e) => p(e, ['\u0447\u0430\u0441', '\u0447\u0430\u0441\u0430']),
      day: (e) => p(e, ['\u0434\u0435\u043D', '\u0434\u043D\u0438']),
    },
  }
  function D(e, n) {
    return `${e} ${e > 1 ? n[1] : n[0]} sen`
  }
  var ne = {
    short: { now: 'alldeles nyss', sec: 's', min: 'm', hour: 't', day: 'd' },
    long: {
      now: 'alldeles nyss',
      sec: (e) => D(e, ['sekund', 'sekunder']),
      min: (e) => D(e, ['minut', 'minuter']),
      hour: (e) => D(e, ['timme', 'timmar']),
      day: (e) => D(e, ['dag', 'dagar']),
    },
  }
  function M(e, n) {
    return `${e} ${n}${e > 1 ? 's' : ''} geleden`
  }
  var te = {
    short: { now: 'zojuist', sec: 's', min: 'm', hour: 'h', day: 'd' },
    long: {
      now: 'zojuist',
      sec: (e) => M(e, 'seconde'),
      min: (e) => M(e, 'minuut'),
      hour: (e) => M(e, 'uur'),
      day: (e) => M(e, 'dag'),
    },
  }
  function L(e, n) {
    return `\u05DC\u05B4\u05E4\u05E0\u05B5\u05D9 ${n} ${e}`
  }
  var oe = {
    short: {
      now: '\u05D6\u05B6\u05D4 \u05E2\u05B7\u05EA\u05B8\u05D4',
      sec: '\u05E9\u05E0\u05D9\u05D5\u05EA',
      min: '\u05D3\u05B7\u05E7\u05B8\u05D4',
      hour: '\u05E9\u05C1\u05B8\u05E2\u05B8\u05D4',
      day: '\u05D9\u05B0\u05D5\u05B9\u05DD',
    },
    long: {
      now: '\u05D6\u05B6\u05D4 \u05E2\u05B7\u05EA\u05B8\u05D4',
      sec: (e) => L(e, '\u05E9\u05E0\u05D9\u05D9\u05D4'),
      min: (e) => L(e, '\u05D3\u05B7\u05E7\u05B8\u05D4'),
      hour: (e) => L(e, '\u05E9\u05C1\u05B8\u05E2\u05B8\u05D4'),
      day: (e) => L(e, '\u05D9\u05B0\u05D5\u05B9\u05DD'),
    },
  }
  function _(e, n) {
    return `${e} ${n}${e > 1 ? '\uCD08' : ''} \uC804`
  }
  var re = {
      short: {
        now: '\uC9C0\uAE08',
        sec: '\uCD08',
        min: '\uBD84',
        hour: '\uC2DC\uAC04',
        day: '\uC77C',
      },
      long: {
        now: '\uC9C0\uAE08',
        sec: (e) => _(e, '\uCD08'),
        min: (e) => _(e, '\uBD84'),
        hour: (e) => _(e, '\uC2DC\uAC04'),
        day: (e) => _(e, '\uC77C'),
      },
    },
    ae = {
      zh_TW: E,
      zh_CN: H,
      en: I,
      jp: Y,
      ko: re,
      pt_BR: G,
      es: F,
      ar: R,
      fr: V,
      pl: W,
      tr: q,
      he: oe,
      id: K,
      ro: Z,
      ru: J,
      de: Q,
      uk: X,
      bg: ee,
      se: ne,
      nl: te,
    }
  class ie {
    constructor(n, t, a) {
      ;(this.dateTime = n),
        (this.locale = t || 'en'),
        (this.type = a || 'short')
    }
    setLocale(n) {
      this.locale = n
    }
    getTimeAgoString(n, t) {
      return typeof t == 'string' ? `${n}${t}` : t(n)
    }
    getTimeAgo() {
      let { now: n, min: t, hour: a, day: o } = ae[this.locale][this.type],
        s = B(this.dateTime),
        i = (C() - s) / 1e3,
        u = ''
      return (
        i <= 0 || Math.floor(i / 60) <= 0
          ? (u = n)
          : i < 3600
          ? (u = this.getTimeAgoString(Math.round(i / 60), t))
          : i >= 3600 && Math.round(i / 3600) < 24
          ? (u = this.getTimeAgoString(Math.round(i / 3600), a))
          : i / 86400 <= 31
          ? (u = this.getTimeAgoString(Math.round(i / 86400), o))
          : (u = O(s)),
        { timeago: u, timestamp: s, nowString: U(s) }
      )
    }
  }
  const se = (e, { locale: n, type: t }) => new ie(e, n, t).getTimeAgo()
  var ue = (e, n) => {
    const t = e.__vccOpts || e
    for (const [a, o] of n) t[a] = o
    return t
  }
  const b = 60,
    j = b * 60,
    N = j * 24,
    z = N * 7,
    ce = r.defineComponent({
      name: 'Timeago',
      props: {
        datetime: { type: [String, Date, Number], default: () => new Date() },
        locale: { type: String, default: 'en' },
        long: { type: Boolean, default: !0 },
        minPeriod: { type: Number, default: 0 },
        maxPeriod: { type: Number, default: z },
      },
      emits: ['update'],
      setup(e, { emit: n }) {
        const t = r.ref(''),
          a = r.ref(''),
          o = r.ref(0),
          s = r.computed(() => ({
            locale: e.locale,
            type: e.long ? 'long' : 'short',
          }))
        r.watch(r.ref(e), d, { immediate: !0, deep: !0 })
        function d() {
          const i = x(e.datetime).valueOf()
          if (!i) {
            console.warn('[vue2-timeago] Invalid Date provided')
            return
          }
          let {
            timeago: u,
            nowString: P,
            timestamp: ge,
          } = se(e.datetime, s.value)
          const k = Math.round(Math.abs(Date.now() - i) / 1e3),
            le = k < b ? 1e3 : k < j ? 1e3 * b : k < N ? 1e3 * j : 1e3 * z,
            A = Math.min(Math.max(le, e.minPeriod * 1e3), e.maxPeriod * 1e3)
          ;(t.value = u),
            (a.value = P),
            A &&
              (o.value && clearTimeout(o.value),
              (o.value = setTimeout(d, A)),
              n('update', {
                timeago: u,
                nowString: P,
                timestamp: ge,
                seconds: k,
              }))
        }
        return (
          r.onUnmounted(() => {
            o.value && clearTimeout(o.value)
          }),
          { timeago: t }
        )
      },
    })
  function de(e, n, t, a, o, s) {
    return (
      r.openBlock(),
      r.createElementBlock('span', null, r.toDisplayString(e.timeago), 1)
    )
  }
  var me = ue(ce, [['render', de]])
  ;(c.Timeago = me),
    Object.defineProperty(c, '__esModule', { value: !0 }),
    (c[Symbol.toStringTag] = 'Module')
})
