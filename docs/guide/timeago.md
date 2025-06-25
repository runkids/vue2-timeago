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
<timeago>
  <template #default="{ secondsElapsed, timeago }">
    {{ secondsElapsed < 60 ? dayjs().format('HH:mm:ss') : timeago }}
  </template>
</timeago>
```

| Slot             | Description                                   |
| :--------------- | :-------------------------------------------- |
| `secondsElapsed` | Seconds elapsed. Will update same as timeago. |
| `timeago`        | Timeago string.                               |

## Examples

##### 1. locale

Default locale is en, and the library supports en and zh_TW.

```html
<timeago locale="en" /> 

<timeago :locale="locale" />
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
<timeago /> default: new Date()
<timeago datetime="2018-08-03 15:47:00" />
<timeago :datetime="new Date(2018, 7, 4, 0, 24, 0)" />
<timeago :datetime="1533286641826" /> timestamp
```

##### 3. long

```html
<timeago :datetime="datetime" /> show : 2d
<timeago :datetime="datetime" long /> show : 2 days ago
```

##### 4. vue2-timeago event

You can do something after timeout.
<img src="https://i.imgur.com/V1K6Xa2.gif"/>

```html
<timeago :locale="locale" @update="update" />
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
  <timeagoExample />
</ClientOnly>

```vue
<timeago :locale="locale" :long="long" :datetime="date" />
```

<script setup>
import TimeagoExample from '../components/TimeagoExample.vue'
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
- Hebrew (he)
- Thai ( th )
- Danish ( da )
- Norwegian ( no )
- Vietnam ( vi )
- Italian ( it )
