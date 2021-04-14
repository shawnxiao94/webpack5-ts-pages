/*
 * @Author: shawnxiao
 * @Date: 2021-04-12 11:11:48
 * @LastEditTime: 2021-04-12 22:06:38
 * @FilePath: /webpack5-ts-pages/src/common/utils/auth.ts
 */
/* eslint-disable default-case */
import { removeCookie } from './cookie'
import { getTokenKeyForPage, getParentUrl } from './index'

export function loginOutCas() {
  // 注销登出
  removeCookie(getTokenKeyForPage())
  const url = getParentUrl()
  window.location.href = url || `${process.env.APP_LOGIN_URL}`
}
