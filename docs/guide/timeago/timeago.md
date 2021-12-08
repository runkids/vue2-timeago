# Usage

```js
import { Timeago } from 'vue2-timeago'

export default {
  components: {
    Timeago,
  },
}
```

## Props

| Property    | Type                 | Default    | Description                                                                                         |
| :---------- | :------------------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| `datetime`  | Date, String, Number | new Date() | Datetime can be a Date Object, A UTC date-string or number of milliseconds since epoch time.        |
| `long`      | Boolean              | true       | Show long string with time message . ex. 3h -> 3 hours age                                          |
| `locale`    | String               | en         | message language                                                                                    |
| `minPeriod` | number               | 0          | The minimum number of seconds that the component should wait before updating.                       |
| `maxPeriod` | number               | 7 days     | The opposite of minPeriod. Use this to force dates to update more often than the default behaviour. |

| Event    | Description                           |
| :------- | :------------------------------------ |
| `update` | After timeout will trigger this event |

## Slots

```html
<Timeago>
  <template #default="{ secondsElapsed, timeago }">
    {{ secondsElapsed < 60 ? dayjs().format('HH:mm:ss') : timeago }}
  </template>
</Timeago>
```

| Slot             | Description                                   |
| :--------------- | :-------------------------------------------- |
| `secondsElapsed` | Seconds elapsed. Will update same as timeago. |
| `timeago`        | Timeago string.                               |

## Examples

##### 1. locale

Default locale is en, and the library supports en and zh_TW.

```html
<Timeago locale="en" /> <Timeago :locale="locale" />
```

```js
export default {
  ...
  setup(){
    const locale = ref("zh_TW")

    return{
      locale,
    }
  },
  ...
```

##### 2. datetime

```html
<Timeago /> default: new Date()
<Timeago datetime="2018-08-03 15:47:00" />
<Timeago :datetime="new Date(2018, 7, 4, 0, 24, 0)" />
<Timeago :datetime="1533286641826" /> timestamp
```

##### 3. long

```html
<Timeago :datetime="datetime" /> show : 2d
<Timeago :datetime="datetime" long /> show : 2 days ago
```

##### 4. vue2-timeago event

You can do something after timeout.
<img src="https://i.imgur.com/V1K6Xa2.gif"/>

```html
<Timeago :locale="locale" @update="update" />
```

Example:

```javascript
methods: {
  update({ timeago, nowString, timestamp, seconds }) {
    console.log(timeago) // 51m
    console.log(nowString) // 2021-01-21 10:55
    console.log(timestamp) // Thu Jan 21 2021 10:55:18 GMT+0800 (台北標準時間)
    console.log(seconds) // 51 * 60 seconds
  }
}
```

## Simple Demo

<ClientOnly>
  <TimeagoExample />
</ClientOnly>

```vue
<Timeago :locale="locale" :long="long" :datetime="date" />
```

<script setup>
import TimeagoExample from './TimeagoExample.vue'
</script>

## Locale Support List

- English ( en )
- 繁體中文 ( zh_TW )
- 简体中文 ( zh_CN )
- 日本語 ( jp )
- Portugal(Brazil) ( pt_BR )
- Spain ( es )
- Arabia ( ar )
- French ( fr )
- Polish ( pl )
- Turkish ( tr )
- Indonesian ( id )
- Romanian ( ro )
- Russian ( ru )
- Germany ( de )
- Ukrainian ( uk )
- Bulgarian ( bg )
- Swedish ( se )
- Dutch / Netherlands ( nl )
