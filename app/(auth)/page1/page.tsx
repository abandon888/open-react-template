import { Card, Title, Text } from '@tremor/react'
import Search from './search'
import UsersTable from './table'

interface User {
  id: number
  name: string
  username: string
  email: string
}

const users: User[] = [
  {
    id: 1,
    name: 'User One',
    username: 'userone',
    email: 'userone@example.com',
  },
  {
    id: 2,
    name: 'User Two',
    username: 'usertwo',
    email: 'usertwo@example.com',
  },
  {
    id: 3,
    name: 'User Three',
    username: 'userthree',
    email: 'userthree@example.com',
  },
  // 你可以添加更多的用户...
]

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl mt-20">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  )
}
