export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function About() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-5xl font-bold text-white mb-4">
              什么是海洋,为什么是我们
            </h1>
            <p className="text-xl text-purple-600">
              探索海洋的奥秘，了解它的重要性和我们对它的依赖。
            </p>
          </div>
          {/* Page Content */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                海洋的定义
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                海洋是地球上最大的生命体，覆盖了地球表面超过70%的面积。
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">重要性</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    海洋对地球气候系统、生物多样性和人类社会都有着重要影响。
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">威胁</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    海洋正面临着过度捕捞、污染和气候变化等多重威胁。
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Page Content2 */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                我们是？
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                通过海纳百川，我们致力于搭建一个数字桥梁，连接广大海洋爱好者与深海的神秘世界。我们的使命是通过数据的力量，揭开海洋的每一层面纱，让人们不仅了解海洋的美丽，更理解它的脆弱和我们对它的影响。
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    我们来自
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    我们的团队由一群对海洋科学充满热情的专业人士组成，包括海洋生物学家、数据分析师、教育工作者和环保活动家。
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">内容</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    我们致力于提供最准确、最深入的内容，从海洋科学的最新进展到深海生物的奇妙生活，无一不是为了让你更接近海洋的真实状态。
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    使命与你
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    这是一个故事的开始，也是我们共同责任的象征。欢迎你成为这个故事的一部分。加入我们的旅程，一起探索、学习和保护我们的海洋。
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
