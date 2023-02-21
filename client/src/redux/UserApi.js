import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:8000"

export const userApi = createApi({
  reducerPath: "pokemonApi",
  tageTypes:['postList','postListById'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "all",
        method: "GET",
      }),
      providesTags:['postList']
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: "posts/12",
        method: "GET",
      }),
      providesTags:['postListById']
    }),
    createPost: builder.mutation({
      query: (requestData) => ({
        url: "add",
        method: "POST",
        body: requestData,
      }),
      invalidatesTags:['postListById']
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = userApi;
