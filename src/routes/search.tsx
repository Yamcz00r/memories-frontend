import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Posts from "../components/Home/Posts";
import Footer from "../components/Footer";
import { useGetUserQuery } from "../store/api/auth";
import { useSearchPostQuery } from "../store/api/posts";
import { useAppSelector } from "../store/hooks";
import { selectToken } from "../store/slice/auth";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = useAppSelector(selectToken);
  const storageToken = localStorage.getItem("token");
  const query = searchParams.get("q");
  const loggedInUserId = useAppSelector()
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery(storageToken);
  const { data, error, isLoading } = useSearchPostQuery(query);

  return (
    <>
      <main className="bg-slate-100 w-full mb-10 min-h-screen">
        <Navbar user={user} error={userError} isLoading={userIsLoading} />
        <Posts posts={data} isLoading={isLoading} loggedInUserId=""/>
        <Footer />
      </main>
    </>
  );
}
