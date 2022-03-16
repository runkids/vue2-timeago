# vue2-timeago

[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/) [![Version](https://img.shields.io/npm/v/vue2-timeago/next.svg)](https://www.npmjs.com/package/vue2-timeago) [![npm](https://img.shields.io/npm/dt/vue2-timeago.svg)](https://www.npmjs.com/package/vue2-timeago) [![npm](https://img.shields.io/npm/l/vue2-timeago.svg)](https://github.com/runkids/vue2-timeago/blob/master/LICENSE)

# vue2-timeago for Vue 3

### FOR Vue 2 PLEASE GO TO [THE master BRANCH](https://github.com/runkids/vue2-timeago)

- Localization supported
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

## Navigation

- [Changelog](https://github.com/runkids/vue2-timeago/blob/next/CHANGELOG.md)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)

## Local Docs

```js
yarn
yarn dev
```

## Installation

Get from npm / yarn:

```js
npm i vue2-timeago@next
```

```js
yarn add vue2-timeago@next
```

##### 🛠  With webpack and Vue CLI please using the following code in vue.config.js

```js
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  }
}
```

## Usage

See [docs](https://vue2-timeago.netlify.app/)

## Contributions

locale translations: The component needs more locale translations. You can `Open an issue to write the locale translations, or submit a pull request`.
See example [here](https://github.com/runkids/vue2-timeago/blob/master/src/helpers/lang).

locale support list :

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

<a href="https://github.com/kon3ko">
  <img src="https://avatars.githubusercontent.com/u/50349884?v=4" width="30" style="border-radius: 100%;"/>
</a>
