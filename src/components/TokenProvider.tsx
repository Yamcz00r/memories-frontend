import { useEffect, ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setToken } from "../store/slice/auth";
import { useNavigate } from "react-router-dom";
interface TokenProviderProps {
  children?: ReactNode;
  place?: string;
}

export default function TokenProvider({ children, place }: TokenProviderProps) {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("here");
    const exisitingToken = localStorage.getItem("token");
    if (!token) {
      if (!exisitingToken) {
        navigate("/");
      }
      dispatch(setToken(exisitingToken!));
    }

    if (place && token) {
      navigate("/home");
    }
  }, []);

  return <>{children}</>;
}
