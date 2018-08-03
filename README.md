# vue2-timeago 
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue2-timeago.svg)](https://www.npmjs.com/package/vue2-timeago) [![npm](https://img.shields.io/npm/dt/vue2-timeago.svg)](https://www.npmjs.com/package/vue2-timeago) [![npm](https://img.shields.io/npm/l/vue2-timeago.svg)](https://github.com/runkids/vue2-timeago/blob/master/LICENSE)

- Localization supported
- Show tooltip 
- Auto refresh time
- When time refresh call a customizable function 
- Formats a date/timestamp to:
  -  just now
  -  5m
  -  3h
  -  2 days ago
  -  2017-08-03

[Live Demo](https://codesandbox.io/embed/myomwvkojj)

## Installation 
Get from npm / yarn:
```js
npm i vue2-timeago
```
```js
yarn add vue2-timeago
```
or just include [vue2-timeago.js](https://github.com/runkids/vue2-timeago/blob/master/dist/vue2-timeago.js) to your view like 

```js
<script src='./vue2-timeago.js'></script>
```

## Usage
Use this inside your app:
``` js
import TimeAgo from 'vue2-timeago'

export default {
  name: 'app',
  components: {
    TimeAgo,
  }
}
```

##### With Default CSS 
```js
import 'vue2-timeago/dist/vue2-timeago.css'
```
or just include [vue2-timeago.css](https://github.com/runkids/vue2-timeago/blob/master/dist/vue2-timeago.css)


##### HTML
```html
<TimeAgo :refresh="60" :datetime="new Date()" locale="zh_TW" tooltip></TimeAgo>
```
## Examples

1. locale
Default locale is en, and the library supports en and zh_TW.
```html
<TimeAgo locale="en"></TimeAgo> 
<TimeAgo :locale="locale"></TimeAgo> use v-bind
```
```js
export default {
  ...
  data(){
    return{
      locale:"zh_TW",
    }
  },
  ...
```
2. datetime
```html
<TimeAgo datetime="2018-08-03 15:47:00"></TimeAgo> 
<TimeAgo :datetime="new Date()"></TimeAgo> use v-bind
<TimeAgo :datetime="1533286641826"></TimeAgo> timestamp
```

3. refresh
```html
<TimeAgo refresh></TimeAgo> Boolean , default refresh time 60/s
<TimeAgo :refresh="3600"></TimeAgo> bind value with a number
```

4. tooltip
<img src="https://i.imgur.com/mRMt7Ps.png"/>

```html
<TimeAgo tooltip></TimeAgo> Show tooltip 
```

5. long
```html
<TimeAgo :datetime="datetime"></TimeAgo> show : 2d
<TimeAgo :datetime="datetime" long></TimeAgo> show : 2 days ago
```

6. todo
You can do something when time refresh every time
<img src="https://i.imgur.com/V1K6Xa2.gif"/>

```html
<TimeAgo :refresh="1" :locale="locale" :todo="()=> count+=1"></TimeAgo>
```
7. native event
```html
<TimeAgo @click.native="todo"></TimeAgo>
```
## Props

| Property  |  Type |  Default |  Description |
| ------------ | ------------ | ------------ | ------------ |
| datetime  |  Date, String, Number  |  new Date()  | The datetime to be formatted.|
| locale  |  String  |  en    | Show button when scrollY equals a number.|
| refresh  |  Boolean, Number  |  false    | The period to update the component, in seconds. When true it will be 60s. Also you can bind a number.|
| long  |  Boolean  |  false    | Show long string with time message . ex. 3h -> 3 hours age|
| tooltip  |  Boolean  |  false    | Show tooltip.|
| todo  |  Function  |  false    | You can call a function when time refresh every time.|

## Contributions
locale translations: The component needs more locale translations. You can `Open an issue to write the locale translations, or submit a pull request`. 
See example [here](https://github.com/runkids/vue2-timeago/blob/master/src/lib/lang).

locale support list : 
- en 
- zh_TW
- zh_CH
