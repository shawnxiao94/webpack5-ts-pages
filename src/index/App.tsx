/*
 * @Author: shawnxiao
 * @Date: 2020-12-11 10:15:21
 * @LastEditTime: 2021-04-05 13:26:24
 * @FilePath: /react-ts-pages/src/index/App.tsx
 */
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

const HomeComponent = loadable(() => import(/* webpackChunkName: "home" */ './views/Home'))
const AboutComponent = loadable(() => import(/* webpackChunkName: "about" */ './views/About'))

function App() {
  return (
    <div className="app">
      <Router>
        <ul>
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/about">To About</Link>
          </li>
        </ul>
        <Route exact path='/' component={HomeComponent}></Route>
        <Route path='/about' component={AboutComponent}></Route>
      </Router>
    </div>
  )
}

export default App
