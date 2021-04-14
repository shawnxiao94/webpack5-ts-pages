/*
 * @Author: shawnxiao
 * @Date: 2021-04-10 12:10:11
 * @LastEditTime: 2021-04-10 12:10:31
 * @FilePath: /webpack5-ts-pages/src/index/views/System/component/FormWrap.tsx
 */
import React, { memo } from 'react'

interface FormWrapProps {
  children: React.ReactNode;
  className?: string;
}

function FormWrap({ children, className }: FormWrapProps) {
  return (
    <div
      className={className}
      style={{
        width: '300px',
        margin: '80px auto 0'
      }}
    >
      {children}
    </div>
  )
}

export default memo(FormWrap)
