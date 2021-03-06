/*
 * @Author: shawnxiao
 * @Date: 2021-04-06 10:15:17
 * @LastEditTime: 2021-04-06 10:34:27
 * @FilePath: /webpack5-ts-pages/src/index/views/Error/403.tsx
 */
import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

function Error403() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="系统提示：你暂无有访问该页面的权限，请联系管理员添加权限后使用"
      extra={
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      }
    />
  )
}

export default Error403
