import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: { apiKey: '0b0dad3ea15b43b282a25db6ef257fd7' },
})

export async function GET(pageNumber: number) {
  const pageSize = 10
  const response = await api.get('/top-headlines', {
    params: {
      country: 'us',
      pageSize,
      page: pageNumber,
    },
  })

  return response.data.articles
}
