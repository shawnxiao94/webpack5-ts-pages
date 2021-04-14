/*
 * @Author: shawnxiao
 * @Date: 2021-04-06 10:15:17
 * @LastEditTime: 2021-04-06 10:34:36
 * @FilePath: /webpack5-ts-pages/src/index/views/Error/404.tsx
 */
import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="系统提示：您访问的页面不存在，请检查后重新使用"
      extra={
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      }
    />
  )
}

export default Error404
