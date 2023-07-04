import TokenProvider from "../components/TokenProvider";
import { useAppSelector } from "../store/hooks";
import { useGetUserQuery } from "../store/api/auth";
import { useGetPostsQuery } from "../store/api/posts";
import Footer from "../components/Footer";
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
    data,
    error: postsError,
    isLoading: postsIsLoading,
  } = useGetPostsQuery();

  return (
    <TokenProvider>
      <main className="bg-slate-100 w-full mb-10 min-h-screen">
        <Navbar user={user} error={userError} isLoading={userIsLoading} />
        <Posts posts={data?.posts} isLoading={postsIsLoading} />
        <Footer />
      </main>
    </TokenProvider>
  );
}
