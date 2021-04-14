/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 18:21:26
 * @LastEditTime: 2021-04-13 11:03:12
 * @FilePath: /webpack5-ts-pages/src/common/utils/index.ts
 */
import config from '../config'
// 获取页面的名称作为token key
export function getTokenKeyForPage() {
  const pathname = window.location.pathname
  let htmlName = pathname.substring(1, pathname.indexOf('.'))
  // 首字母大写
  htmlName = htmlName.charAt(0).toUpperCase() + htmlName.slice(1)
  // 取页面名来区分不同的token
  const tokenKeyPage = config.TOKEN_KEY + (htmlName ? `-${htmlName}` : '-Index')
  return tokenKeyPage
}

// 获取iframe父级URL
export function getParentUrl() {
  let url = null
  if (parent !== window) {
    try {
      url = parent.location.host
    } catch (e) {
      url = document.referrer
    }
  }
  return url
}

export function dataURLtoFile(dataUrl:any, filename = 'file') {
  if (typeof dataUrl === 'object') {
    return new File([dataUrl], `${filename}.jpg`, { type: 'jpg' })
  }
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const suffix = mime.split('/')[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime })
}

export const getRandomStr = () => {
  return new Date().getTime() + Math.random().toString(16).slice(2)
}

export function isFunction(fun:any) {
  return Object.prototype.toString.call(fun) === '[object Function]'
}
export function isObject(fun:any) {
  return Object.prototype.toString.call(fun) === '[object Object]'
}

// 获取链接参数
export function getQueryString(name:string) {
  const href = window.location.href
  if (href.includes('?') && href.includes(name)) {
    const arr:any[] = href.split('?').filter((x) => x.includes(name)).join().split('&')
    return arr.find((item) => {
        return item.includes(name)
      }).split('=')[1]
  }
  return null
}

/**
 * 获取URL参数并以对象数据形式返回
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url:string) {
  url = url ? url : window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj:any = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
