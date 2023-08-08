import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PostType, CommentType, PostDeleteResponse } from "../../type";

interface PostResponse {
  posts: {
    posts: PostType[];
  };
}

interface ReactionResponse {
  message: string;
  result: PostType;
}

interface CommentResponse {
  message: string;
  result: {
    id: string;
    content: string;
    postId: string;
    authorId: string;
  };
}

interface DeletePostBody {
  token: string | null;
  postId: string;
}

interface CommentBody {
  postId: string;
  content: string;
  token: string | null;
}

interface CreatePostBody {
  token: string | null;
  image: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
}

const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/content" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse, void>({
      query: () => "/post",
      providesTags: [{ type: "Post", id: "LIST" }],
    }),
    getPostById: builder.query<PostType, string>({
      query: (id) => `/post/${id}`,
    }),
    searchPost: builder.query<PostType[], string | null>({
      query: (q) => `/search?q=${q}`,
    }),
    postComment: builder.mutation<CommentResponse, CommentBody>({
      query: (body) => ({
        url: `/comment`,
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
        method: "POST",
        body: {
          postId: body.postId,
          content: body.content,
        },
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    deletePost: builder.mutation<PostDeleteResponse, DeletePostBody>({
      query: (body) => ({
        url: `/post/${body.postId}`,
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    addReaction: builder.mutation<ReactionResponse, string>({
      query: (id) => ({
        url: `/post/reaction/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddReactionMutation,
  usePostCommentMutation,
  useDeletePostMutation,
  useSearchPostQuery,
} = postsApi;

export default postsApi;
