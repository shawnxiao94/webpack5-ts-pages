/*
 * @Author: shawnxiao
 * @Date: 2021-04-16 09:59:39
 * @LastEditTime: 2021-04-16 10:00:38
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/Breadcrumb/index.tsx
 */
import React, { memo, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { IRoute } from '@/index/router/config'
import './index.less'
import { getBreadcrumbs } from '@/index/router/utils'

function Breadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState<IRoute[]>([])

  const history = useHistory()

  useEffect(() => {
    setBreadcrumbs(getBreadcrumbs())

    const unListen = history.listen(() => {
      setBreadcrumbs(getBreadcrumbs())
    })

    return () => {
      unListen()
    }
  }, [])

  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        {breadcrumbs.map((route: IRoute) => (
          <Breadcrumb.Item key={route.path}>{route.meta.title}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default memo(Breadcrumbs)
