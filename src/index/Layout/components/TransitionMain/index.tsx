/*
 * @Author: shawnxiao
 * @Date: 2021-04-12 13:50:55
 * @LastEditTime: 2021-04-16 14:24:47
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/TransitionMain/index.tsx
 */
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'

interface TransitionMainProps {
  children: React.ReactNode;
}

function TransitionMain({ children }: TransitionMainProps) {
  return (
    <Route
      render={({ location }) => {
        return (
          <TransitionGroup className="layout__route">
            <CSSTransition key={location?.pathname} classNames="layout__route" timeout={300}>
              <Switch location={location}>{children}</Switch>
            </CSSTransition>
          </TransitionGroup>
        )
      }}
    ></Route>
  )
}

export default TransitionMain
