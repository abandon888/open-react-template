export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">欢迎</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      谷歌登录
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-700 border-dotted grow mr-3"
                aria-hidden="true"></div>
              <div className="text-gray-400">或邮箱登录</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name">
                    姓名 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="姓名"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company-name">
                    组织名称 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="组织名称"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email">
                    工作邮箱 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password">
                    密码 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="密码"
                    required
                  />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                我同意使用协议{' '}
                <Link
                  href="#"
                  className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">
                  协议
                </Link>
                .
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                    注册
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              已有账号？{' '}
              <Link
                href="/signin"
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                登录
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
