import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/api' }), 
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos', 
    })
  })
})

export const { useGetProdutosQuery } = api
export default api