// pages/index.js 或其他页面文件
import ArticleList from '@/components/articleList'
import React from 'react'

// 假设的文章数据
const articles = [
  {
    id: 1,
    imageUrl:
      'https://cdn.onc-prod.intergalactic.space/medium_Argo_NR_2023_1920x1080_6aebe9f312.jpg',
    title: '我国首个部级海洋可再生能源领域野外科学观测研究站获批',
    previewContent:
      '近日，以国家海洋技术中心为依托单位，联合浙江海洋大学、舟山力源海洋能源开发有限公司共建的自然资源部舟山潮流能野外科学观测研究站，顺利通过自然资源部组织的综合论证并获得批复建设……',
    link: 'https://aoc.ouc.edu.cn/2024/0104/c9828a453606/page.htm',
  },
  {
    id: 2,
    imageUrl:
      'https://aoc.ouc.edu.cn/_upload/article/images/ca/39/9582db1843638f55457e77b8c002/b8d3916f-81ed-4845-8bbd-a79da02efecb.jpg',
    title:
      '百年大变局中的海洋担当” ——中国海洋发展研究高端论坛在中国海洋大学召开',
    previewContent:
      '9月28日，由中国海洋大学、中国海洋发展研究中心（以下简称“中心”）共同主办的中国海洋发展研究高端论坛在中国海洋大学召开。本次论坛主题为“百年大变局中的海洋担当”。',
    link: 'https://aoc.ouc.edu.cn/2019/1008/c9885a270759/page.htm',
  },
  {
    id: 3,
    imageUrl:
      'https://aoc.ouc.edu.cn/_upload/article/images/f1/27/6012c9e847728e1b502cb7f10a8b/77c8c054-911f-48b7-b4c7-a7a71b9dbb1f.jpg',
    title:
      '“全球海洋法治与中国海洋战略”第五届中国海洋发展研究青年论坛在武汉召开',
    previewContent:
      '11月11日-12日，由中国海洋发展研究中心（以下简称“中心”）联合武汉大学国际法研究所、自然资源部海洋发展战略研究所、华东政法大学国际法学院暨军事法研究中心、南京大学中国南海研究协同创新中心，举办的主题为“全球海洋法治与中国海洋战略”的第五届中国海洋发展研究青年论坛在武汉召开。',
    link: 'https://aoc.ouc.edu.cn/2023/1116/c9827a448629/page.htm',
  },
]

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-10">海洋最新动态</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export default HomePage
