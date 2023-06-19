import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return <h1>{error.message}</h1>;
}
export default ErrorPage;
