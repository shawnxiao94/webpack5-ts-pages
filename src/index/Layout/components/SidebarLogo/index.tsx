/*
 * @Author: shawnxiao
 * @Date: 2021-04-15 15:31:02
 * @LastEditTime: 2021-04-15 15:34:50
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/SidebarLogo/index.tsx
 */
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import AdminConfig from '@/index/config/index'
import './index.less'
import { Settings } from '@/index/store/settings/reducer'

interface LogoProps {
  opened: boolean;
  layout: Settings['layout'];
}

function SidebarLogo({ opened, layout }: LogoProps) {
  return (
    <div
      className={classnames('layout__side-bar-logo-wrap', {
        'layout__side-bar-logo-wrap--close': !opened
      })}
    >
      <Link to="/" className="layout__side-bar-link">
        {AdminConfig.logo && (
          <img src={AdminConfig.logo} className="layout__side-bar-logo" alt="logo"></img>
        )}
        {(!opened || layout === 'top') && (
          <h1 className="layout__side-bar-title">{AdminConfig.title}</h1>
        )}
      </Link>
    </div>
  )
}

export default memo(SidebarLogo)
