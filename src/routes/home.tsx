import TokenProvider from "../components/TokenProvider";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useGetUserQuery } from "../store/api/auth";
import { useGetPostsQuery } from "../store/api/posts";
import { setLoggedInUserId } from "../store/slice/auth";
import Footer from "../components/Footer";
import Navbar from "../components/Home/Navbar";
import Posts from "../components/Home/Posts";
import AddPostContainer from "../components/Home/AddPostConatiner";
import { selectToken } from "../store/slice/auth";
export default function Home() {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
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
  dispatch(setLoggedInUserId(user?.userInfo.id));
  return (
    <TokenProvider>
      <main className="bg-slate-100 w-full mb-10 min-h-screen">
        <Navbar user={user} error={userError} isLoading={userIsLoading} />
        <AddPostContainer userName={user?.userInfo.userName} />
        <Posts posts={data?.posts} isLoading={postsIsLoading} />
        <Footer />
      </main>
    </TokenProvider>
  );
}
