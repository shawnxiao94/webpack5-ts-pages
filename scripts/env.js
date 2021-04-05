/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:46:04
 * @LastEditTime: 2021-04-05 13:29:09
 * @FilePath: /react-ts-pages/scripts/env.js
 */
// 环境变量值配置
module.exports = {
  'dev': {
    'APP_ENVO': 'dev',
    'BASEURL': 'https://baidu.dev.com/api/'
  },
  'test': {
    'APP_ENVO': 'test',
    'BASEURL': 'https://baidu.test.com/api/'
  },
  'pre': {
    'APP_ENVO': 'pre',
    'BASEURL': 'https://baidu.pre.com/api/'
  },
  'prod': {
    'APP_ENVO': 'prod',
    'BASEURL': 'https://baidu.prod.com/api/'
  }
}
