import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { pacifico } from '@/config/fonts'

export const Header = () => {
  return (
    <div className="shadow-sm p-1 md:px-2 w-full">
      <div className="flex justify-center max-w-[1140px] m-auto py-1.5">
        <div>
          <Link
            href="/"
            className={twMerge(
              pacifico.className,
              'text-2xl font-bold text-cyan-600',
            )}
          >
            Online diary
          </Link>
        </div>
      </div>
    </div>
  )
}
