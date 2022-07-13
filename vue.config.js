const { defineConfig } = require('@vue/cli-service');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
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
