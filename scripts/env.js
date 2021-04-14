/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:46:04
 * @LastEditTime: 2021-04-12 11:50:37
 * @FilePath: /webpack5-ts-pages/scripts/env.js
 */
// 环境变量值配置
module.exports = {
  'dev': {
    'APP_ENVO': 'dev',
    'BASEURL': 'https://baidu.dev.com/api/',
    // 跳转外部登录地址
    'APP_LOGIN_URL': 'https://baidu.dev.com/api/',
    'APP_BASE_API': 'https://baidu.dev.com/api/'
  },
  'test': {
    'APP_ENVO': 'test',
    'BASEURL': 'https://baidu.test.com/api/',
    'APP_LOGIN_URL': 'https://baidu.dev.com/api/',
    'APP_BASE_API': 'https://baidu.dev.com/api/'
  },
  'pre': {
    'APP_ENVO': 'pre',
    'BASEURL': 'https://baidu.pre.com/api/',
    // 跳转外部登录地址
    'APP_LOGIN_URL': 'https://baidu.dev.com/api/',
    'APP_BASE_API': 'https://baidu.dev.com/api/'
  },
  'prod': {
    'APP_ENVO': 'prod',
    'BASEURL': 'https://baidu.prod.com/api/',
    // 跳转外部登录地址
    'APP_LOGIN_URL': 'https://baidu.dev.com/api/',
    'APP_BASE_API': 'https://baidu.dev.com/api/'
  }
}
