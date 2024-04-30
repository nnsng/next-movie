import { movieService } from '@/services'

const getMovieList = async () => {
  try {
    return await movieService.getList()
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default async function HomePage() {
  const data = await getMovieList()
  return <main>{JSON.stringify(data, null, 8)}</main>
}
