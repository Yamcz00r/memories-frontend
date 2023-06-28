import TokenProvider from "../components/TokenProvider";
import { useAppSelector } from "../store/hooks";
import { useGetUserQuery } from "../store/api/auth";
import { useGetPostsQuery } from "../store/api/posts";
import PostContainer from "../components/Home/Container";
import Post from "../components/Home/Post";
import Navbar from "../components/Home/Navbar";
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
  return (
    <TokenProvider>
      <Navbar user={user} error={userError} isLoading={userIsLoading} />
      <main className="bg-slate-100 w-full" style={{ height: "100vh" }}>
        {postsIsLoading ? "Loading..." : ""}
        {posts?.map((post) => {
          return (
            <PostContainer>
              <Post
                imageUrl={post.imageUrl}
                reactions={post.reactions}
                description={post.description}
                createdAt={post.createdAt}
                author={post.author}
                comments={post.comments}
                tag={post.tag}
                id={post.id}
                key={post.id}
              />
            </PostContainer>
          );
        })}
      </main>
    </TokenProvider>
  );
}
