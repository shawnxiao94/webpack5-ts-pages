/*
 * @Author: shawnxiao
 * @Date: 2020-12-11 10:15:21
 * @LastEditTime: 2021-04-10 22:38:45
 * @FilePath: /webpack5-ts-pages/src/index/App.tsx
 */

import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// 局部热更新
import { hot } from 'react-hot-loader/root'

import { IRoute } from './router/config'
import { layoutRouteList } from './router/utils'
import config from './config'

function App() {
  console.log(layoutRouteList)
  return (
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
  )
}

export default hot(App)
