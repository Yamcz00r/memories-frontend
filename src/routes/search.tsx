import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import { useGetUserQuery } from "../store/api/auth";
import { useAppSelector } from "../store/hooks";
import { selectToken } from "../store/slice/auth";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = useAppSelector(selectToken);
 
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery(token);
  
  d
  return (
    
  )
}
