/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 13:23:55
 * @LastEditTime: 2021-04-11 18:33:44
 * @FilePath: /webpack5-ts-pages/src/common/utils/storage.ts
 */
import config from '../config'
const err = 'Error:保存到本地存储失败!'
const overLimit = 'Error:本地存储超过限制!'

export function getStorage(key:string) {
  const keyStr = key || config.TOKEN_KEY
  if (window.localStorage.getItem(keyStr)) {
    const valStr:string = window.localStorage.getItem(keyStr) || ''
    const dataObj = JSON.parse(valStr)
    // 如果当前时间 - 存储元素在创建时设置得时间 大于过期时间
    const isTimed = new Date().getTime() - dataObj.time > dataObj.expires
    if (isTimed) {
      // 存储已经过期
      window.localStorage.removeItem(keyStr)
      return null
    }
      return dataObj.value
  }
    return null
}

export function setStorage(key:string, value:any, expires?:any, type?:string) {
  return new Promise(() => {
    // 过期时间默认7天(毫秒)，获取当前时间，转换成JSON字符串序列
    const valueDate = JSON.stringify({
      value,
      time: new Date().getTime(),
      expires: expires || 60 * 60 * 24 * 7 * 1000,
      type: type || ''
    })
    try {
      window.localStorage.setItem(key || config.TOKEN_KEY, valueDate)
    } catch (e) {
      if (isQuotaExceeded(e)) {
        window.localStorage.clear()
        throw overLimit
      } else {
        throw err
      }
    }
  })
}

export function removeStorage(key:string) {
  try {
    window.localStorage.removeItem(key || config.TOKEN_KEY)
  } catch (e) {
    throw err
  }
}

function isQuotaExceeded(e:any) {
  let flag = false
  if (e) {
    if (e.code) {
      // eslint-disable-next-line default-case
      switch (e.code) {
        case 22:
          flag = true
          break
        // fireFox
        case 1014:
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            flag = true
          }
          break
      }
    } else if (e.number === -2147024882) {
      // ie
      flag = true
    }
  }
  return flag
}
