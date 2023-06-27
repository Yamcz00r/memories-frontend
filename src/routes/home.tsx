import TokenProvider from "../components/TokenProvider";
import { useAppSelector } from "../store/hooks";
import { useGetUserQuery } from "../store/api/auth";
import Navbar from "../components/Home/Navbar";
export default function Home() {
  const token = useAppSelector((state) => state.auth.token);
  const { data, error, isLoading } = useGetUserQuery(token);

  return (
    <TokenProvider>
      <Navbar user={data} error={error} isLoading={isLoading} />
      <main className="bg-[#ECF3FF] h-full" style={{ height: "100vh" }}>
        <p>Your token: {token}</p>
      </main>
    </TokenProvider>
  );
}
