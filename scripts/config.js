/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:17:00
 * @LastEditTime: 2021-04-05 13:49:29
 * @FilePath: /webpack5-ts-pages/scripts/config.js
 */

const path = require('path')

const {
  APP_ENV
} = require('./constants')

const DOMAIN = 'https://baidu.yp.com'

// static resource domain（CDN）
const STATICDOMAIN = APP_ENV === 'prod' ? '.' : ''

module.exports = {
  // open http://localhost:devPort/
  devPort: 8080,
  // output html
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsPublicPath: APP_ENV === 'dev' ? '/' : `${STATICDOMAIN}/`,
  assetsSubDirectory: './',
  // page Pattern for workbox
  pagePattern: new RegExp(DOMAIN),
  // id you use CDN, change it!!!
  assetsPattern: new RegExp(`${DOMAIN.replace(/\//g, '\\/')}\\/static`),
  // production sourceMap for monitoring
  // 注意webpack4和5的区别
  sourceMap: APP_ENV === 'dev' ?
    'eval-source-map' : APP_ENV === 'prod' ?
    'source-map' : false,
  // 是否抽离css，把css样式从js文件中提取到单独的css文件中
  extractCss: APP_ENV !== 'dev',
  // 抽离css导致样式中的图片找不到问题需要复写的路径
  cssPublicPath: '../',
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report,
  // 页面cdn配置地址
  cdn: {
    // index页面的cdn
    index: {
      css: [],
      js: [
        // 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
      ]
    }
  },
  title: {
    // 页面标题
    index: 'webpack5-ts-pages'
  },
  //  如果配置了cdn那对应externals也要配置
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM'
  }
}
