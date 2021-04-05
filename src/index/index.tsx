/*
 * @Author: shawnxiao
 * @Date: 2021-04-04 12:14:22
 * @LastEditTime: 2021-04-05 11:13:02
 * @FilePath: /react-ts-pages/src/index/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/index.less'
// 局部热更新
import { hot } from 'react-hot-loader/root'

const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById('app'))
}

render(hot(App))
