'use client'

import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'
import { useRouter, usePathname } from 'next/navigation'

export default function DropDown() {
  const router = useRouter()
  const path = usePathname()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  //导航到页面底部，柔和滚动
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

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
              //判断是否为首页/，如果不是则跳转到首页
              if (path !== '/') {
                handleNavigation('/')
                //等待页面跳转完成后再滚动到底部
                setTimeout(() => {
                  scrollToBottom()
                }, 1000)
              } else {
                //window.scrollTo(0, document.body.scrollHeight)
                scrollToBottom()
              }
            }
          }>
          联系我们
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
