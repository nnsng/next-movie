import { env } from '@/utils/env'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use((response) => {
  return response.data
})

export default apiClient
