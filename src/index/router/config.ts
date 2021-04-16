/*
 * @Author: shawnxiao
 * @Date: 2021-04-05 15:22:19
 * @LastEditTime: 2021-04-16 12:15:52
 * @FilePath: /webpack5-ts-pages/src/index/router/config.ts
 */
import React from 'react'

interface IRouteAuthBtn {
  code: string;
  name: string
}
export interface IRouteBase {
  // 路由路径
  path: string;
  name: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  // 路由信息
  meta: IRouteMeta;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
}

export interface IRouteMeta {
  title: string;
  icon?: string;
  btnAuth?:IRouteAuthBtn[]
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}

/**
 * routes 第一级路由负责最外层的路由渲染，比如 userLayout 和 Layout 的区分
 * 所有系统内部存在的页面路由都要在此地申明引入，而菜单栏的控制是支持异步请求控制的
 */

const routes: IRoute[] = [
  {
    path: '/user',
    name: 'User',
    component: React.lazy(() => import('../Layout/UserLayout')),
    meta: {
      title: '系统路由'
    },
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'Login',
        component: React.lazy(() => import('../views/User/Login/index')),
        meta: {
          title: '登录'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: React.lazy(() => import('../Layout/index')),
    meta: {
      title: '后台管理系统'
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'HomeIndex',
        component: React.lazy(() => import('../views/Home/index')),
        meta: {
          title: 'home'
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: React.lazy(() => import('../views/Dashboard/index')),
        meta: {
          title: 'Dashboard'
        }
      },
      // 系统管理
      {
        path: '/system',
        name: 'SystemManage',
        meta: {
          title: '系统管理'
        },
        redirect: '/system/user',
        children: [
          {
            path: '/system/user',
            name: 'SystemManageUser',
            component: React.lazy(() => import('../views/System/UserManage/index')),
            meta: {
              title: '人员管理'
            }
          },
          {
            path: '/system/role',
            name: 'SystemManageRole',
            component: React.lazy(() => import('../views/System/RoleManage/index')),
            meta: {
              title: '角色管理'
            }
          },
          {
            path: '/system/log',
            name: 'SystemManageLog',
            component: React.lazy(() => import('../views/System/LogManage/index')),
            meta: {
              title: '日志管理'
            }
          },
          {
            path: '/system/auth',
            name: 'SystemManageAuth',
            component: React.lazy(() => import('../views/System/AuthManage/index')),
            meta: {
              title: '角色管理'
            }
          }
        ]
      },
      // 以下的路由改动请小心，涉及权限校验模块
      {
        path: '/error',
        name: 'Error',
        meta: {
          title: '错误页面'
        },
        redirect: '/error/404',
        children: [
          {
            path: '/error/404',
            name: 'Error404',
            auth: false,
            component: React.lazy(() => import('../views/Error/404')),
            meta: {
              title: '页面不存在'
            }
          },
          {
            path: '/error/403',
            name: 'Error403',
            auth: false,
            component: React.lazy(() => import('../views/Error/403')),
            meta: {
              title: '暂无权限'
            }
          }
        ]
      },
      {
        path: '*',
        name: 'Error/*',
        meta: {
          title: '错误页面'
        },
        redirect: '/error/404'
      }
    ]
  },
  {
    path: '*',
    name: 'Error*',
    auth: false,
    component: React.lazy(() => import('../views/Error/404')),
    meta: {
      title: '页面不存在'
    }
  }
]

export default routes
