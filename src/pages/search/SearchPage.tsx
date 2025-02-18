import { useLoaderData } from "react-router-dom";
function SearchPage() {
  const loader = useLoaderData();

  console.log(loader);

  return <div>SearchPage</div>;
}

export default SearchPage;
