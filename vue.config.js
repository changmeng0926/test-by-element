/* eslint-disable eol-last */
'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'test-by-element' // page title

const port = process.env.VUE_APP_PORT || 8080 // dev port

module.exports = {
  // publicPath: './',
  publicPath: '/test-by-element/',
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack(config) {
    config.plugins['delete']('preload') // TODO: need test
    config.plugins['delete']('prefetch') // TODO: need test
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
          // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
          patterns: './src/assets/less/index.less',
        })
        .end()
    })
    config.module
      .rule('')
      .test(/mxClient\.js$/)
      .use('element-ui', 'less', 'less-loader')
      .loader('element-ui', 'less', 'less-loader')
      .end()
    config.resolve.alias.set('@', resolve('src')).set('@assets', resolve('src/assets'))
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', (config) => config.devtool('source-map'))

    config.when(process.env.NODE_ENV !== 'development', (config) => {
      // config
      // .plugin('ScriptExtHtmlWebpackPlugin')
      // .after('html')
      // .use("script-ext-html-webpack-plugin", [
      //   {
      //     // `runtime` must same as runtimeChunk name. default is `runtime`
      //     inline: /runtime\..*\.js$/
      //   }
      // ])
      // .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      })
      config.optimization.runtimeChunk('single')
    })
  },
}
