import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const positionsApi = createApi({
  reducerPath: "positionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:3001"
  }),
  endpoints: (builder) => ({
    getAllPositions: builder.query({
      query: () => 'positions',
    })
  })
})


export const {
  useGetAllPositionsQuery
} = positionsApi;
