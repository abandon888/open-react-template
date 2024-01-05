'use client'

import { AreaChart, Card, Title } from '@tremor/react'

const chartdata = [
  {
    date: 'Jan 22',
    生物种类一: 2890,
    生物种类二: 2338,
  },
  {
    date: 'Feb 22',
    生物种类一: 2756,
    生物种类二: 2103,
  },
  {
    date: 'Mar 22',
    生物种类一: 3322,
    生物种类二: 2194,
  },
  {
    date: 'Apr 22',
    生物种类一: 3470,
    生物种类二: 2108,
  },
  {
    date: 'May 22',
    生物种类一: 3475,
    生物种类二: 1812,
  },
  {
    date: 'Jun 22',
    生物种类一: 3129,
    生物种类二: 1726,
  },
]

const valueFormatter = function (number: number) {
  return new Intl.NumberFormat('us').format(number).toString()
}

export default function Chart() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-purple-900">
      <Card>
        <Title color="purple">海洋观测数据图表</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={['生物种类一', '生物种类二']}
          //colors={['indigo', 'cyan']}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  )
}
