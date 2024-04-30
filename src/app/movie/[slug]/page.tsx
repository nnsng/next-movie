import { movieService } from '@/services'

const getMovie = async (slug: string) => {
  try {
    const res = await movieService.getMovie(slug)
    if (!res.status) throw new Error('Failed to fetch movie')
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}

export default async function MoviePage({ params }: { params: { slug: string } }) {
  const movie = await getMovie(params.slug)

  return (
    <div>
      <h1 className="text-white">{JSON.stringify(movie, null, 8)}</h1>
    </div>
  )
}
