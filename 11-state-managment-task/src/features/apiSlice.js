import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001', // Corrected URL (http instead of https)
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts']
    }),
    getPost: builder.query({
      query: (post) => `posts/${ post }`,
      invalidatesTags: ['Posts']
    }),
    addPost: builder.mutation({
      query: post => ({
        url: 'posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Posts']
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `posts/${ id }`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts']
    }),
    updatePost: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: updates
      }),
      invalidatesTags: ['Posts']
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
