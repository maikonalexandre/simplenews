/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { generateSlug } from '@/utils'

interface ArticleProps {
  title: string
  urlToImage: string | null
  description: string
}

export const ArticleCard = (article: ArticleProps) => {
  return (
    <div className="min-w-[224px] ">
      <Link
        href={`/${generateSlug(article.title)}`}
        className="flex flex-col gap-2 cursor-pointer"
      >
        {article.urlToImage && (
          <img
            className="overflow-hidden rounded-md"
            width={600}
            height={300}
            src={article.urlToImage}
            alt=""
          />
        )}

        <span className="text-xl font-semibold text-zinc-900">
          {article.title}
        </span>
        <div>
          <span className="text-md text-zinc-700">{article.description}</span>
        </div>
      </Link>
    </div>
  )
}
