import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../../type";

const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/content" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/post",
      providesTags: ["Post"],
    }),

    getPostById: builder.query<Post, string>({
      query: (id) => `/post/${id}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;

export default postsApi;
