/*
 * @Author: shawnxiao
 * @Date: 2021-04-05 15:09:14
 * @LastEditTime: 2021-04-13 22:37:50
 * @FilePath: /webpack5-ts-pages/src/index/store/index.ts
 */
import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import reducer from './reducer'

const middleware: Middleware[] = [reduxThunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger)
}

function createMyStore() {
  const store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
      reducer,
        compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__({}))
      )
    : createStore(reducer, applyMiddleware(...middleware))

  return store
}

const store = createMyStore()

export default store
