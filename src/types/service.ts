import type { MovieDetail, MovieEpisode, MovieItem, Pagination } from '.'

// movieService.getList
export type GetMovieListParams = {
  page?: number
}
export type GetMovieListResponse = {
  status: boolean
  items: MovieItem[]
  pathImage: string
  pagination: Pagination
}

// movieService.getMovieDetail
export type GetMovieDetailResponse = {
  status: boolean
  msg: string
  movie: MovieDetail
  episodes: MovieEpisode[]
}
