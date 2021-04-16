/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 20:26:52
 * @LastEditTime: 2021-04-16 12:42:40
 * @FilePath: /webpack5-ts-pages/src/index/Layout/AsyncRoutes.tsx
 */
import React, { memo } from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import { IStoreState } from '../store/types'
import TransitionMain from './components/TransitionMain'
import { actionCreators as userActionCreators } from '@/index/store/user'

const { getUserInfoByToken, getTokenFn } = userActionCreators

import { getQueryString } from '@/common/utils'

interface AsyncRoutesProps {
  children: React.ReactNode;
  init: boolean;
  token: string;
  // eslint-disable-next-line no-unused-vars
  getUserInfoByToken: (token:string) => void;
  getTokenFn: () => void;
}

// function formatMenuToRoute(menus: any[]): IRoute[] {
//   const result: IRoute[] = []

//   menus.forEach(menu => {
//     const route: IRoute = {
//       path: menu.url,
//       meta: {
//         title: menu.name,
//         icon: menu.icon
//       }
//     }
//     if (menu.children) {
//       route.children = formatMenuToRoute(menu.children)
//     }
//     result.push(route)
//   })

//   return result
// }

function AsyncRoutes(props: AsyncRoutesProps) {
  if (!props.init) {
    if (getQueryString('token')) {
      // url带token场景
      // 获取用户信息及更新本地token
      props.getUserInfoByToken( getQueryString('token'))
    } else {
      if (!props.token){
        props.getTokenFn()
      } else {
        props.getUserInfoByToken(props.token)
      }
    }
    return <Spin className="layout__loading" />
  }
  return <TransitionMain>{props.children}</TransitionMain>
}

export default connect(({ app, user }: IStoreState) => ({ init: app.init, token: user.token }), { getUserInfoByToken, getTokenFn })(
  memo(AsyncRoutes)
)
