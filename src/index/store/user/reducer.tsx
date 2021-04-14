/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:42:48
 * @LastEditTime: 2021-04-13 22:50:25
 * @FilePath: /webpack5-ts-pages/src/index/store/user/reducer.tsx
 */
import { Reducer } from 'redux'
import { IAction } from '../types'
import { getStorage, setStorage, removeStorage } from '@/common/utils/storage'
import { getCookie, setCookie, removeCookie } from '@/common/utils/cookie'
import {getTokenKeyForPage} from '@/common/utils'

import * as constants from './constants'

export interface UserState {
  token: string;
  avatar: string | undefined;
  account: string;
  mobile: string;
  role: number;
  id: number;
}

// 依据页面html生成的token_key
const TokenKeyForPage = getTokenKeyForPage()

const defaultState: UserState = {
  avatar: undefined,
  account: '',
  mobile: '',
  role: 0,
  id: 0,
  ...getStorage(constants.USER_INFO_KEY),
  token: getCookie(TokenKeyForPage)
}

const reducer: Reducer<UserState, IAction<any>> = (state = defaultState, action: IAction<any>) => {
  const { type, payload } = action
  switch (type) {
    case constants.SET_USER_INFO:
      setCookie(TokenKeyForPage, payload.token)
      setStorage(constants.USER_INFO_KEY, payload)
      return {
        ...payload
      }
    case constants.SET_USER_LOGOUT:
      removeCookie(TokenKeyForPage)
      removeStorage(constants.USER_INFO_KEY)
      return {
        ...defaultState
      }
    default:
      return state
  }
}

export default reducer
