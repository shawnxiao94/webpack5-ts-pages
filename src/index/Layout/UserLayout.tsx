/*
 * @Author: shawnxiao
 * @Date: 2021-04-05 18:26:33
 * @LastEditTime: 2021-04-10 21:13:21
 * @FilePath: /webpack5-ts-pages/src/index/Layout/UserLayout.tsx
 */
import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import {
  Route,
  Redirect,
  Switch,
  Link } from 'react-router-dom'
import { Spin, Result, Button, Layout, Typography } from 'antd'
import { getPageTitle, userRouteList } from '../router/utils'

import {
  IRoute
} from '../router/config'
import './UserLayout.less'

interface UserLayoutState {
  isError: boolean;
}

class UserLayout extends React.PureComponent<any, UserLayoutState> {
  state: UserLayoutState = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true }
  }

  componentDidCatch() {
    // 上报错误
  }

  render() {
    if (this.state.isError) {
      return (
        <Result
          status="warning"
          title="系统错误，请联系管理员"
          extra={
            <Button type="primary" key="console">
              Go Contact
            </Button>
          }
        />
      )
    }

    const title = getPageTitle(userRouteList)
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title} />
        </Helmet>
        <div className="container">
          <div className="content">
            <div className="top">
              <Typography.Title className="header">
                <Link to="/">
                  <span className="title">React Ant Admin </span>
                </Link>
              </Typography.Title>
              <div className="desc">React Ant Admin 基于webpack5 ts</div>
            </div>
            <Suspense fallback={<Spin className="layout__loading" />}>
              <Switch>
                {userRouteList.map((menu: IRoute) => (
                   menu?.redirect ?
                     <Route path={menu.path} exact render={() => <Redirect to={menu.redirect as string} />} key={menu.path} /> :
                     <Route exact key={menu.path} path={menu.path} component={menu.component}/>
                ))}
              </Switch>
            </Suspense>
          </div>
          <Layout.Footer style={{ textAlign: 'center' }}>
            React Ant Admin 管理系统
          </Layout.Footer>
        </div>
      </>
    )
  }
}

export default UserLayout
