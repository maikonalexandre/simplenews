/* eslint-disable @next/next/no-img-element */
import { AdvertCard } from '@/components/advertCard'
import { AdvertCardSmall } from '@/components/advertCardSmall'
import { ArticleCard } from '@/components/articleCard'

import { api } from './api/articles/route'

interface Article {
  author?: string
  title: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content?: string
}

export default async function Home() {
  const res = await api.get('/top-headlines?sources=techcrunch')

  console.log(res.data)
  const articles = res.data.articles

  const asideArticleIndex =
    Math.floor(Math.random() * (articles.length - 5 + 1)) + 5

  return (
    <div className="flex justify-between gap-8 animate-fadeIn">
      <div className="hidden sm:flex flex-col gap-4">
        <div className="w-[224px] rounded-3xl border-2 p-2 px-4 border-cyan-500 flex flex-col items-center justify-center text-center">
          <div>
            <span className="font-semibold text-cyan-500">Subscribe</span>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-600">
              Support quality independent journalism, and have access unlimited
              access to all our content
            </p>
          </div>
        </div>

        <AdvertCardSmall />
        {articles[asideArticleIndex] &&
          articles[asideArticleIndex].urlToImage && (
            <div className="w-[224px] border-b border-b-zinc-600 pb-2 min-h-40 flex items-center justify-center">
              <div>
                <img
                  width={224}
                  src={articles[asideArticleIndex].urlToImage as string}
                  alt={articles[asideArticleIndex].title}
                />
                <span className="text-sm text-zinc-900 leading-3">
                  {articles[asideArticleIndex].title}
                </span>
              </div>
            </div>
          )}
      </div>

      <div className="flex flex-1 p-1 min-h-full flex-wrap gap-8">
        {articles.map((article: Article, i: number) => {
          if (
            article.description !== '[Removed]' &&
            article.description !== null
          ) {
            return (
              <ArticleCard
                key={article.publishedAt + i}
                description={article.description}
                title={article.title}
                urlToImage={article.urlToImage}
              />
            )
          }
          return ''
        })}
      </div>

      <AdvertCard />
    </div>
  )
}
