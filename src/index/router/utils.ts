/*
 * @Author: shawnxiao
 * @Date: 2021-04-06 10:08:36
 * @LastEditTime: 2021-04-14 18:39:55
 * @FilePath: /webpack5-ts-pages/src/index/router/utils.ts
 */
import routes, { IRoute } from './config'
import config from '../config'

/**
 *
 * 将路由转换为一维数组
 * @param routeList 路由
 * @param deep 是否深层转化
 * @param auth 路由是否需要检查授权, 路由配置的auth优先级比这里高
 */

export function flattenRoute(routeList: IRoute[], deep: boolean, auth: boolean): IRoute[] {
  const result: IRoute[] = []

  for (let i = 0; i < routeList.length; i += 1) {
    const route = routeList[i]

    result.push({
      ...route,
      auth: typeof route.auth !== 'undefined' ? route.auth : auth
    })

    if (route?.children?.length && deep) {
      result.push(...flattenRoute(route.children, deep, auth))
    }
  }
  return result
}

function getLayoutRouteList(): IRoute[] {
  return flattenRoute(routes, false, false)
}

function getBusinessRouteList(): IRoute[] {
  const routeList = routes.filter(route => route.path === '/')

  if (routeList.length > 0) {
    return flattenRoute(routeList, true, true)
  }
  return []
}

function getUserRouteList(): IRoute[] {
  const routeList = [...routes.filter(route => route.path === '/user')]
  if (routeList.length > 0) {
    return flattenRoute(routeList, true, false)
  }
  return []
}
function getErrRouteList(): IRoute[] {
  const routeList = routes.filter(route => route.path === '/err')
  if (routeList.length > 0) {
    return flattenRoute(routeList, true, false)
  }
  return []
}

/**
 * 这里会将 config 中所有路由解析成三个数组
 * 第一个: 最外层的路由，例如  Layout UserLayout ...
 * 第二个: 系统路由, 例如 Login Register RegisterResult
 * 第三个: 业务路由，为 / 路由下的业务路由
 */

export const layoutRouteList = getLayoutRouteList()

export const businessRouteList = getBusinessRouteList()

export const userRouteList = getUserRouteList()
export const errRouteList = getErrRouteList()

function findRoutesByPaths(pathList: string[], routeList: IRoute[], basename?: string): IRoute[] {
  return routeList.filter(
    (child: IRoute) => pathList.indexOf((basename || '') + child.path) !== -1
  )
}

export function getPageTitle(routeList: IRoute[]): string {
  const route = routeList.find(child => child.path === window.location.pathname)

  return route ? route.meta.title : ''
}

export function getPagePathList(pathname?: string): string[] {
  return (pathname || window.location.pathname)
    .split('/')
    .filter(Boolean)
    .map((value, index, array) => '/'.concat(array.slice(0, index + 1).join('/')))
}

/**
 * 只有业务路由会有面包屑
 */
export function getBreadcrumbs(): IRoute[] {
  return findRoutesByPaths(getPagePathList(), businessRouteList, config.BASENAME)
}

/**
 * 对业务路由依据权限路由name进行过滤出一维权限数组
 */
export function getAuthFlattenRoute(arr:string[]): IRoute[] {
  const res:IRoute[] = []
  arr.forEach(name => {
    res.push(businessRouteList.find(item => item.name.includes(name)) as IRoute)
  })
  return res
}
