/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 17:27:35
 * @LastEditTime: 2021-04-11 18:39:51
 * @FilePath: /webpack5-ts-pages/src/common/utils/cookie.ts
 */

export function setCookie(name:string, value:string, expires?:any) {
  expires = expires || 300 // 未传多少天则默认300天
  const expDays = expires * 24 * 60 * 60 * 1000
  const expDate = new Date()
  expDate.setTime(expDate.getTime() + expDays)
  const expString = expires ? ';expires=' + expDate.toUTCString() : ''
  document.cookie = name + '=' + encodeURI(value) + expString + ';path=/'
}
// 读取cookies
export function getCookie(name:string) {
  // eslint-disable-next-line init-declarations
  let arr
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) {
    return decodeURI(arr[2])
  }
  return null
}
// 删除cookies
export function removeCookie(name:string) {
  const exp = new Date(new Date().getTime() - 1)
  const cookieValue = getCookie(name)
  if (cookieValue !== null) {
    document.cookie = name + '=' + cookieValue + ';expires=' + exp.toUTCString() + ';path=/'
  }
}
