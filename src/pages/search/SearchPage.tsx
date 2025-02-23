import { useLoaderData } from "react-router-dom";
import type { searchLoaderResultat } from "./searchLoader";
import PackageListItems from "../../components/PackageListItems";

function SearchPage() {
  const data: searchLoaderResultat = useLoaderData();

  const renderSearchResult = data.searchResult.map((result) => {
    return <PackageListItems pack={result} key={result.name} />;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6 ">Search Result</h1>
      <div className="space-y-4 mt-4">{renderSearchResult}</div>
    </div>
  );
}

export default SearchPage;
