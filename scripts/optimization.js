/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 18:21:17
 * @LastEditTime: 2021-04-05 11:17:43
 * @FilePath: /react-ts-pages/scripts/optimization.js
 */
/* eslint-disable camelcase */

const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const constants = require('./constants')

module.exports =
  constants.APP_ENV === 'dev' ?
  {} :
  {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all', // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
      minSize: 30000, // 模块超过30k自动被抽离成公共模块
      minChunks: 1, // 模块被引用>=1次，便分割
      automaticNameDelimiter: '~', // 命名分隔符
      name: 'vendors', // 自定义打包后的文件名 
      cacheGroups: {
        default: { // 模块缓存规则，设置为false，默认缓存组将禁用
          minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
          priority: -20, // 优先级
          reuseExistingChunk: true // 默认使用已有的模块
        },
        // commons: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'vendor',
        //   chunks: 'all'
        // },
        vendors: {
          // 过滤需要打入的模块
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor', // 自定义打包后的文件名
          // minChunks: 1,
          priority: -10, // 确定模块打入的优先级
          reuseExistingChunk: true, // 使用复用已经存在的模块
          enforce: true
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd/,
          name: 'antd',
          priority: 15,
          reuseExistingChunk: true
        },
        echarts: {
          test: /[\\/]node_modules[\\/]echarts/,
          name: 'echarts',
          priority: 16,
          reuseExistingChunk: true
        }
      }
    },
    minimize: true,
    minimizer: [
      // 多进程压缩
      new TerserPlugin({
        exclude: /\/excludes/,
        // 4个进程
        parallel: 4,
        test: /\.(j|t)sx?$/i,
        // cache: true,
        terserOptions: {
          // Must be set to true if using source-maps in production
          sourceMap: true,
          compress: {
            warnings: true,
            // 删除所有的 `console` 语句
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'] // 移除console
          }
        }
      }),
      // 压缩css
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          reduceIdents: false,
          autoprefixer: false
        }
      })
    ]
  }
