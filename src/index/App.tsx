/*
 * @Author: shawnxiao
 * @Date: 2020-12-11 10:15:21
 * @LastEditTime: 2021-04-16 17:40:26
 * @FilePath: /webpack5-ts-pages/src/index/App.tsx
 */

import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Provider
} from 'react-keep-alive'
// 局部热更新
import { hot } from 'react-hot-loader/root'

import { IRoute } from './router/config'
import { layoutRouteList } from './router/utils'
import config from './config'

function App() {
  return (
    <Provider>
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router basename={config.BASENAME}>
        <Switch>
          {layoutRouteList.map((route: IRoute) => (
            <Route
              key={config.BASENAME + route.path}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </Router>
    </Suspense>
    </Provider>
  )
}

export default hot(App)
