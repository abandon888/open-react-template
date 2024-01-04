'use client'

import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import Link from 'next/link'

type articleProps = {
  id: number
  title: string
  previewContent: string
  imageUrl: string
  link: string
}

const ArticleItem = ({ article }: { article: articleProps }) => {
  return (
    <Link href={article.link}>
      <Card className="m-2 bg-purple-700 " isHoverable>
        <CardBody className="p-0">
          <Image
            src={article.imageUrl}
            width="100%"
            height={140}
            alt={article.title}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start justify-between p-4">
          <h4 className="text-lg font-semibold">{article.title}</h4>
          <p className="text-sm text-black-400">{article.previewContent}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}

const ArticleList = ({ articles }: { articles: articleProps[] }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
