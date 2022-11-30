# vue2-timeago

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue2-timeago.svg)](https://www.npmjs.com/package/vue2-timeago)  [![npm](https://img.shields.io/npm/dt/vue2-timeago.svg)](https://www.npmjs.com/package/vue2-timeago) [![](https://data.jsdelivr.com/v1/package/npm/vue2-timeago/badge)](https://www.jsdelivr.com/package/npm/vue2-timeago) [![npm](https://img.shields.io/npm/l/vue2-timeago.svg)](https://github.com/runkids/vue2-timeago/blob/master/LICENSE)

# vue2-timeago V2

### 🔥 NEW [vue2-timeago for Vue 3](https://vue2-timeago.netlify.app/)

- Localization supported
- Show tooltip
- Auto refresh time
- When time refresh call a customizable function
- Formats a date/timestamp to:
  - just now
  - 5m
  - 3h
  - 2 days ago
  - 2017-08-03
- Rules:
  - less than 1 minute , show `just now`
  - 1 minute ~ 1 hour , show `** minutes ago`
  - 1 hour ~ 1 day , show `** hours ago`
  - 1 day ~ 1 month( 31 days ) , show `** days ago`
  - more than 1 month( 31 days ) , show `yyyy-mm-dd hh:mm`

##### FOR 1.X PLEASE GO TO [THE 1.x BRANCH](https://github.com/runkids/vue2-timeago/tree/v1)

## Navigation

- [Changelog](https://github.com/runkids/vue2-timeago/blob/master/CHANGELOG.md)
- [Installation](#Installation)
- [Usage](#Usage)
- [Examples](#Examples)
- [Props](#Props)
- [Contributions](#Contributions)

## Live Demo

[![Edit vue2_timeago_demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/myomwvkojj)

## Local Demo

```js
yarn
yarn serve
```

## Installation

Get from npm / yarn:

```js
npm i vue2-timeago@2.0.9
```

```js
yarn add vue2-timeago@2.0.9
```

or just include [vue2-timeago.umd.min.js](https://cdn.jsdelivr.net/npm/vue2-timeago@2.0.9/dist/vue2-timeago.umd.min.js) to your view like

```js
<script src='https://cdn.jsdelivr.net/npm/vue2-timeago@2.0.9/dist/vue2-timeago.umd.min.js'></script>
```

## Usage

Use this inside your app:

``` js
import { TimeAgo } from 'vue2-timeago'

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

or just include [vue2-timeago.css](https://cdn.jsdelivr.net/npm/vue2-timeago@2.0.9/dist/vue2-timeago.css)

##### HTML

```html
<time-ago :refresh="60" :datetime="new Date(2018, 7, 4, 0, 24, 0)" locale="zh_TW" tooltip></time-ago>
```

## Examples

##### 1. locale

Default locale is en, and the library supports en and zh_TW.

```html
<time-ago locale="en"></time-ago> 
<time-ago :locale="locale"></time-ago> use v-bind
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

##### 2. datetime

```html
<time-ago datetime="2018-08-03 15:47:00"></time-ago> 
<time-ago :datetime="new Date(2018, 7, 4, 0, 24, 0)"></time-ago> use v-bind
<time-ago :datetime="1533286641826"></time-ago> timestamp
```

- Note. Don't bind with `new Date()` when you use refresh property.
  Because every time refresh will get a new date value.

    ```html
    <time-ago :datetime="new Date(2018, 7, 4, 0, 24, 0)"></time-ago>  --> OK
    <time-ago refresh :datetime="new Date()"></time-ago> --> not OK
    ```

    If you want use new Date() , just remove datetime property.

    ```html
    <time-ago refresh></time-ago>
    ```

##### 3.  refresh

```html
<time-ago refresh></time-ago> Boolean , default refresh time 60/s
<time-ago :refresh="3600"></time-ago> bind value with a number
<time-ago :refresh="1"></time-ago> Refresh time 1 second
```

##### 4. tooltip

<img src="https://imgur.com/UAYxE4U.png"/>

- Base on [v-tooltip](https://github.com/Akryum/v-tooltip "v-tooltip"), you can use placement attribute that are allowed in v-tooltip.

```html
<time-ago tooltip></time-ago> Show tooltip 
<time-ago :tooltip="false"></time-ago> Disabled tooltip
```

##### 5. tooltip options

- Default options:

```javascript
{
  placement: 'top',
  content: {datetime string}
}
```

- Custom options

```html
<time-ago tooltip :tooltip-options="tooltipOptions"/>
```

```javascript
data () {
  return {
    tooltipOptions: {
      placement: 'bottom',
    }
  }
}
```

- More info see <https://github.com/Akryum/v-tooltip#other-options>.

##### 6. long

```html
<time-ago :datetime="datetime"></time-ago> show : 2d
<time-ago :datetime="datetime" long></time-ago> show : 2 days ago
```

##### 7. vue2-timeago event

You can do something when time refresh every time
<img src="https://i.imgur.com/V1K6Xa2.gif"/>

```html
<time-ago :refresh="1" :locale="locale" @update="timeRefresh" />
```

Parameters example:

```javascript
methods: {
  timeRefresh({ timeago, nowString, timestamp }) {
    console.log(timeago) // 51m
    console.log(nowString) // 2021-01-21 10:55
    console.log(timestamp) // Thu Jan 21 2021 10:55:18 GMT+0800 (台北標準時間)
  }
}
```

##### 8. native event

```html
<time-ago @click="todo"><time-ago/>
<time-ago @mouseover="todo"><time-ago/>
```

## Props

| Property  |  Type |  Default |  Description |
| ------------ | ------------ | ------------ | ------------ |
| datetime  |  Date, String, Number  |  new Date()  | The datetime to be formatted.|
| locale  |  String  |  en    | message language |
| refresh  |  Boolean, Number  |  false    | The period to update the component, in seconds. When true it will be 60s. Also you can bind a number.|
| long  |  Boolean  |  false    | Show long string with time message . ex. 3h -> 3 hours age|
| tooltip  |  Boolean  |  false    | Show tooltip.|
| tooltip-options  |  Object  | { placement: 'top', content: #datetime string }   |  tooltip options|

## Event

| Property  |   Description |
| ------------ | ------------ |
| update | After timer refreshed will trigger this event |

## Nuxt (global registration)

To install in nuxt run

```shell
npm i vue2-timeago
```

In `nuxt.config.js` add

```javascript
  plugins: [
    { src: '~/plugins/vue2-timeago' }
  ],
```

In `plugins/vue2-timeago.js` type:

```javascript
import Vue from 'vue';
import { TimeAgo } from 'vue2-timeago';

import 'vue2-timeago/dist/vue2-timeago.css';

Vue.component('time-ago', TimeAgo);
```

Then in components use as:

```html
<time-ago :datetime="new Date()" tooltip/>
```

## Contributions

locale translations: The component needs more locale translations. You can `Open an issue to write the locale translations, or submit a pull request`.
See example [here](https://github.com/runkids/vue2-timeago/blob/master/src/helpers/lang).

locale support list :

- English ( en )
- 繁體中文 ( zh_TW )
- 简体中文 ( zh_CN )
- 日本語 ( jp )
- Korean ( ko )
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
- Hebrew ( he )
- Thai ( th )
- Danish ( da )
- Norwegian ( no )
- Vietnam ( vi )

Thanks for help:

<a href="https://github.com/flromano">
  <img src="https://avatars1.githubusercontent.com/u/8169566?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/NathanFallet">
  <img src="https://avatars2.githubusercontent.com/u/30439790?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/waltergammarota">
  <img src="https://avatars0.githubusercontent.com/u/3790610?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/Mohammad-Ha">
  <img src="https://avatars0.githubusercontent.com/u/15388052?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/netvistor">
  <img src="https://avatars1.githubusercontent.com/u/26851628?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/aliemretaskin">
  <img src="https://avatars0.githubusercontent.com/u/12280383?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/Nisgrak">
  <img src="https://avatars3.githubusercontent.com/u/19597708?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/yunanhelmy">
  <img src="https://avatars0.githubusercontent.com/u/5515897?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/wdarins">
  <img src="https://avatars2.githubusercontent.com/u/40423022?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/jpunz">
  <img src="https://avatars2.githubusercontent.com/u/12137220?s=400&u=acfacd96e9cc4a39533f8d5061232ff20880a3c3&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/alarm3d">
  <img src="https://avatars0.githubusercontent.com/u/15848856?s=460&u=a51026b2eafc910d050dde97a2fb48896aaa62cb&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/mrvnklm">
  <img src="https://avatars2.githubusercontent.com/u/24477241?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/wowar">
  <img src="https://avatars0.githubusercontent.com/u/3638021?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/bvs92">
  <img src="https://avatars1.githubusercontent.com/u/11878696?s=460&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/ogunbaysal">
  <img src="https://avatars1.githubusercontent.com/u/33205381?s=460&u=422803b5e2e86741b2431d9adb13402b2e0ffbcb&v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/martlind">
  <img src="https://avatars.githubusercontent.com/u/1938955?v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/daankuhlmann25">
  <img src="https://avatars.githubusercontent.com/u/14232256?v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/harshgour">
  <img src="https://avatars.githubusercontent.com/u/60436404?v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/deepIify">
  <img src="https://avatars.githubusercontent.com/u/24931420?v=4" width="30" style="border-radius: 100%;"/>
</a>


<a href="https://github.com/kon3ko">
  <img src="https://avatars.githubusercontent.com/u/50349884?v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/Coreusa">
  <img src="https://avatars.githubusercontent.com/u/706874?v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/boskakke">
  <img src="https://avatars.githubusercontent.com/u/4995742?v=4" width="30" style="border-radius: 100%;"/>
</a>

<a href="https://github.com/vigstudio">
  <img src="https://avatars.githubusercontent.com/u/34742453?v=4" width="30" style="border-radius: 100%;"/>
</a>
