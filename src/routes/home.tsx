import TokenProvider from "../components/TokenProvider";
import { useAppSelector } from "../store/hooks";
export default function Home() {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <TokenProvider>
      <p>Your token: {token}</p>
    </TokenProvider>
  );
}
