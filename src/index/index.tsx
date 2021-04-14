/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:14:22
 * @LastEditTime: 2021-04-05 15:18:52
 * @FilePath: /webpack5-ts-pages/src/index/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import App from './App'
import store from './store'
import './assets/styles/index.less'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register()
