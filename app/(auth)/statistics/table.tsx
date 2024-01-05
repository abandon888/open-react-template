'use client'

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from '@tremor/react'

interface User {
  id: number
  name: string
  username: string
  email: string
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table title="海洋观测站点信息" color="grey">
      <TableHead>
        <TableRow>
          <TableHeaderCell>观测站点</TableHeaderCell>
          <TableHeaderCell>海域</TableHeaderCell>
          <TableHeaderCell>观测时间</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.username}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
