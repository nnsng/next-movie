import { MovieCard } from '@/components/shared'
import { movieService } from '@/services'

const getMovieList = async () => {
  try {
    const res = await movieService.getList()
    if (!res.status) throw new Error('Failed to fetch movie list')
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}

export default async function HomePage() {
  const data = await getMovieList()
  return (
    <div className="container">
      <div>
        <h1 className="mb-4 text-2xl font-semibold text-white">Phim mới cập nhật</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data?.items.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
        </div>
      </div>
    </div>
  )
}
