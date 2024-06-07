/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { AdvertCard } from '@/components/advertCard'
import { api } from '@/config/api'
import { formatDate, generateSlug } from '@/utils'

interface PageParams {
  params: {
    title: string
  }
}

interface Article {
  author?: string
  title: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content?: string
}

export default async function Page({ params }: PageParams) {
  const { data } = await api.get('/top-headlines', {
    params: {
      country: 'us',
      pageNumber: 100,
    },
  })

  const articles = data.articles
  const article = articles.find(
    (e: Article) => generateSlug(e.title) === params.title,
  )

  return (
    <div className="flex justify-between gap-8 animate-fadeIn">
      <AdvertCard />
      {article && (
        <div className="flex flex-col gap-8 max-w-[600px] mx-auto">
          <Link
            className="text-sm font-semibold hover:text-cyan-600 text-zinc-600"
            href="/"
          >
            / Home
          </Link>
          <h1 className="text-3xl font-semibold">{article?.title}</h1>
          <div className="flex gap-4">
            <span>{formatDate(article.publishedAt)}</span>
            <span className="font-semibold">{article?.author}</span>
          </div>

          {article.urlToImage && (
            <img width={600} src={article.urlToImage} alt="" />
          )}

          <div className="">{article?.content}</div>
          <a
            target="_blank"
            className="text-sm font-semibold hover:text-cyan-600 text-cyan-600"
            href={article?.url}
          >
            see full article
          </a>
        </div>
      )}
      <AdvertCard />
    </div>
  )
}
