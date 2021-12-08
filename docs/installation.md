### NPM / Yarn

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
