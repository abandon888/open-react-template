import { Card, Title, Text } from '@tremor/react'
import Search from './search'
import UsersTable from './table'
import Chart from './chart'

interface User {
  id: number
  name: string
  username: string
  email: string
}

const users: User[] = [
  {
    id: 1,
    name: '站点一',
    username: '南海海域',
    email: '2023-12-31 23:59:59',
  },

  // 你可以添加更多的用户...
]

export default async function Statistics() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl mt-20">
      <Title>数据统计</Title>
      {/* <Text></Text> */}
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
      <Card className="mt-6">
        <Chart />
      </Card>
    </main>
  )
}
