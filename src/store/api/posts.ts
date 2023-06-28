import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Author, Comment } from "../../type";

interface Post {
  id: string;
  title: string;
  description: string;
  tag: string[];
  imageUrl: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  author: Author;
  reactions: number[];
}

const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/content" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/post",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;

export default postsApi;
