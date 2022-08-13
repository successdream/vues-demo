const {
  defineConfig
} = require('@vue/cli-service');
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const webpack = require('webpack')


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
        MYO: JSON.stringify({
          a: 1
        }),
        OBJ3: {
          a: "1"
        },
        FN: () => {
          alert(1)
        },
        'typeof window': JSON.stringify({
          a: '1'
        }),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      // webpack 应该是取字符串里面的值
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
      // new HtmlWebpackPlugin({
      //   title: 'v3',
      //   filename: 'index.html',
      //   favicon: './liantong.ico'
      // })

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
  },
  css: {
    sourceMap: true
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://cctvalih5ca.v.myalicdn.com',
        ws: true,
        changeOrigin: true
      },
    }
    // overlay: {
    //   warnings: false,
    //   errors: true
    // }
  },
  // chainWebpack 修改vue 内置的webpack 配置
  chainWebpack: (config) => {
    // 修改 hmtl 的 title
    config.plugin("html").tap(args => {
      // console.log(args, 'zn-args')
      args[0].title = 'v3'
      return args
    })
  },
})