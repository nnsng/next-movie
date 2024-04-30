export type Pagination = {
  totalItems: number
  totalItemsPerPage: number
  currentPage: number
  totalPages: number
}

export type MovieItem = {
  modified: {
    time: string
  }
  _id: string
  name: string
  slug: string
  origin_name: string
  thumb_url: string
  poster_url: string
  year: number
}

export type MovieDetail = {
  created: {
    time: string
  }
  modified: {
    time: string
  }
  _id: string
  name: string
  origin_name: string
  content: string
  type: string
  status: string
  thumb_url: string
  trailer_url: string
  time: string
  episode_current: string
  episode_total: string
  quality: string
  lang: string
  notify: string
  showtimes: string
  slug: string
  year: number
  view: number
  actor: string[]
  director: string[]
  category: {
    id: string
    name: string
    slug: string
  }[]
  country: {
    id: string
    name: string
    slug: string
  }[]
  is_copyright: boolean
  chieurap: boolean
  poster_url: string
  sub_docquyen: boolean
}

export type MovieEpisode = {
  server_name: string
  server_data: {
    name: string
    slug: string
    filename: string
    link_embed: string
    link_m3u8: string
  }
}
