export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function Page1() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">关于我们</h1>
          </div>
          <div className="max-w-3xl mx-auto whitespace-pre-wrap">
            在"数据链接海洋,
            洞悉地球奥秘"，我们致力于搭建一个数字桥梁，连接广大海洋爱好者与深海的神秘世界。我们的使命是通过数据的力量，揭开海洋的每一层面纱，让人们不仅了解海洋的美丽，更理解它的脆弱和我们对它的影响。
            我们的团队由一群对海洋科学充满热情的专业人士组成，包括海洋生物学家、数据分析师、教育工作者和环保活动家。我们相信，通过教育和知识的共享，我们能够激发更多人对海洋保护的热情，并采取行动以确保这个地球上宝贵的资源得以持续。
            网站上的每一篇文章、每一张照片和每一个数据点，都是我们对这个蓝色星球深处了解的反映。我们致力于提供最准确、最深入的内容，从海洋科学的最新进展到深海生物的奇妙生活，无一不是为了让你更接近海洋的真实状态。
            加入我们的旅程，一起探索、学习和保护我们的海洋。因为每一次点击、每一次分享，你都在帮助我们传播海洋的故事，并为海洋保护做出贡献。
            "数据链接海洋,
            洞悉地球奥秘"——这是一个故事的开始，也是我们共同责任的象征。欢迎你成为这个故事的一部分。
          </div>
        </div>
      </div>
    </section>
  )
}
