import type { GetMovieDetailResponse, GetMovieListParams, GetMovieListResponse } from '@/types'
import apiClient from './api-client'

export const movieService = {
  getList: async (params?: GetMovieListParams): Promise<GetMovieListResponse> => {
    return apiClient.get('/danh-sach/phim-moi-cap-nhat', { params })
  },
  getMovieDetail: async (slug: string): Promise<GetMovieDetailResponse> => {
    return apiClient.get(`/phim/${slug}`)
  },
}
