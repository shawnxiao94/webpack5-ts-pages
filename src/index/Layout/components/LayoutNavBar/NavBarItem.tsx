/*
 * @Author: shawnxiao
 * @Date: 2021-04-16 09:54:24
 * @LastEditTime: 2021-04-16 09:54:26
 * @FilePath: /webpack5-ts-pages/src/index/Layout/components/LayoutNavBar/NavBarItem.tsx
 */
import React, { memo } from 'react'
import { Badge } from 'antd'
import { GithubOutlined, BellOutlined } from '@ant-design/icons'

interface NavBarItemProps {
  onClick: () => void;
  className?: string;
  icon: string;
  count: number;
  overflowCount?: number;
}

function SwtichIcon({ icon }: { icon: string }) {
  if (icon === 'github') {
    return <GithubOutlined />
  }

  if (icon === 'bell') {
    return <BellOutlined />
  }

  return null
}

function NavBarItem({ className, onClick, icon, ...badge }: NavBarItemProps) {
  return (
    <div className={className} onClick={onClick}>
      <Badge {...badge} style={{ boxShadow: 'none' }}>
        <div style={{ padding: '5px', fontSize: '16px' }}>
          <SwtichIcon icon={icon}></SwtichIcon>
        </div>
      </Badge>
    </div>
  )
}

export default memo(NavBarItem)
