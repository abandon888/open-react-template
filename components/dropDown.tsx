'use client'

import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useRouter as routerPath } from 'next/router'

export default function DropDown() {
  const router = useRouter()
  const nextRouter = routerPath()

  const handleNavigation = (path: string) => {
    router.push(path)
  }
  //判断是否为首页/，如果不是则跳转到首页

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary">打开导航列表</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" onClick={() => handleNavigation('/about')}>
          关于我们
        </DropdownItem>
        <DropdownItem key="copy" onClick={() => handleNavigation('/article')}>
          海洋要闻
        </DropdownItem>
        <DropdownItem
          key="edit"
          onClick={() => handleNavigation('/statistics')}>
          数据统计
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={
            //导航到页面底部

            () => {
              if (nextRouter.pathname !== '/') {
                handleNavigation('/')
                window.scrollTo(0, document.body.scrollHeight)
              } else {
                window.scrollTo(0, document.body.scrollHeight)
              }
            }
          }>
          联系我们
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
