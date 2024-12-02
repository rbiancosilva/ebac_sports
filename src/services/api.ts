import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProduto: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutoQuery } = apiService  

export default apiService