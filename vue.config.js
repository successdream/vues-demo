const { defineConfig } = require('@vue/cli-service');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const webpack = require('webpack')
// import lodash from 'lodash'
const  lodash = require('lodash')
// console.log(lodash, 'zn-lodash')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // 引入全局变量
      // 直接取引号里面的值，
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        VERSION: JSON.stringify('5fa3b9'),
        BROWSER_SUPPORTS_HTML5: true,
        TWO: '1+1',
        MYO: JSON.stringify({a: 1}),
        OBJ3: {a:"1"},
        FN: () => { alert(1)},
        'typeof window': JSON.stringify({a: '1'}),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      // webpack 应该是取字符串里面的值
      new webpack.ProvidePlugin({
        _: 'lodash',
      })

    ],
    module: {
      rules: [
        // {
        //   test: /\.less$/i,
        //   use: [
        //     // compiles Less to CSS
        //     "style-loader",
        //     "css-loader",
        //     "less-loader",
        //   ],
        // },
      ],
    },
  }
})
