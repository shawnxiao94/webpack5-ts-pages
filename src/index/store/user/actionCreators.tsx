/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 11:42:38
 * @LastEditTime: 2021-04-14 15:04:47
 * @FilePath: /webpack5-ts-pages/src/index/store/user/actionCreators.tsx
 */
import * as constants from './constants'
import { IAction } from '../types'
import {UserState} from './reducer'
// import {Dispatch} from 'redux'

import * as request from '@/index/apis/Login'
import { actionCreators } from '../app'
import { Modal } from 'antd'

export const setUserInfo = (user: UserState) => ({
  type: constants.SET_USER_INFO,
  payload: user
})

export const logout: () => IAction<null> = () => ({
  type: constants.SET_USER_LOGOUT,
  payload: null
})

export const getTokenFn = () => {
    return (dispatch:any) => {
      request.checkLoginToken({}).then((res:any) => {
        const status = !!(res?.data?.login && res?.data?.binding && res?.data?.tokenId)
        if (status) {
          dispatch(getUserInfoByToken(res.data.tokenId))
        }
      })
      .catch((err) => {
        Modal.error({
          title: '温馨提示！',
          content: err?.message || '请求失败!',
          okText: '确定',
          onOk() {
          }
        })
      })
    }
}
export const getUserInfoByToken:any = (token:string) => {
  return (dispatch:any) => {
    request.getUserInfoByToken({token}).then((res:any) => {
      if (res.data){
        dispatch(setUserInfo({...res.data, token}))
      }
    }).catch((err) => {
      Modal.error({
        title: '温馨提示！',
        content: err?.message || '获取用户信息失败!',
        okText: '确定',
        onOk() {
        }
      })
    }).finally(() => {
      // 获取路由数组
      dispatch(actionCreators.getMenuList())
    })
  }
}
