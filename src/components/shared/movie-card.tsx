import type { MovieItem } from '@/types'
import { env } from '@/utils/env'
import Image from 'next/image'
import Link from 'next/link'

type MovieCardProps = {
  movie: MovieItem
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.slug}`}>
      <div className="card max-w-[400px]">
        <Image
          src={`${env.NEXT_PUBLIC_IMG_URL}/${movie.poster_url}`}
          alt={movie.name}
          width={400}
          height={400}
          className="!relative aspect-video w-full object-cover"
        />

        <div className="mt-4">
          <h2 className="line-clamp-2 text-center text-white">{movie.name}</h2>
        </div>
      </div>
    </Link>
  )
}
