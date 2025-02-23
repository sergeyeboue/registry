import { useLoaderData, Link } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

function HomePage() {
  const { featuredPackages }: HomeLoaderResult = useLoaderData();

  const renderPackage = featuredPackages.map((pack) => {
    return (
      <div
        key={pack.name}
        className="flex flex-col  justify-between gap-3 border rounded shadow p-4"
      >
        <div className="font-bold text-center">{pack.name}</div>
        <div className="text-sm text-gray-500">{pack.description}</div>
        <div className="text-sm text-gray-500">
          {pack.maintainers.length} -
          {pack.maintainers.length > 1 ? " Maintainers" : " Maintainer"}
        </div>
        <Link
          to={`package/${pack.name}`}
          className="border rounded border-gray-900 text-center"
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">THE NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for Javascript. Search and view packages
        </p>
        <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
          {renderPackage}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
