import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import logo from '@/public/images/home/logo.jpg'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Image
              src={logo}
              width={64}
              height={64}
              alt="Logo"
              className="rounded-lg shadow-2xl"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  登录
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  注册
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
