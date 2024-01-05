import './css/style.css'

import Header from '@/components/ui/header'
import { Providers } from './providers'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const architects_daughter = Architects_Daughter({
//   subsets: ['latin'],
//   variable: '--font-architects-daughter',
//   weight: '400',
//   display: 'swap',
// })

export const metadata = {
  title: '海纳百川',
  description: '海洋时空数据管理系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={` antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <Providers>{children}</Providers>
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
