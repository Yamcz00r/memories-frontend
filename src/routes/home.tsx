import TokenProvider from "../components/TokenProvider";
import { useAppSelector } from "../store/hooks";
import { useGetUserQuery } from "../store/api/auth";
import { useGetPostsQuery } from "../store/api/posts";
import PostContainer from "../components/Home/Container";
import Post from "../components/Home/Post";
import { useState } from "react";
import Navbar from "../components/Home/Navbar";
import Posts from "../components/Home/Posts";
export default function Home() {
  const token = useAppSelector((state) => state.auth.token);
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery(token);
  const {
    data: posts,
    error: postsError,
    isLoading: postsIsLoading,
  } = useGetPostsQuery();

  console.log(posts);

  return (
    <TokenProvider>
      <Navbar user={user} error={userError} isLoading={userIsLoading} />
      <main className="bg-slate-100 w-full" style={{ height: "100vh" }}>
        {postsIsLoading && "Loading..."}
        <Posts posts={posts} />
      </main>
    </TokenProvider>
  );
}
