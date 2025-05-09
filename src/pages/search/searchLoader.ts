import type { PackageSummary } from "../../api/types/packageSummary";

import { searchPackages } from "../../api/queries/searchPackages";

export interface searchLoaderResultat {
  searchResult: PackageSummary[];
}

interface SearchLoaderArgs {
  request: Request;
}

export async function searchLoader({
  request,
}: SearchLoaderArgs): Promise<searchLoaderResultat> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("pas de term !");
  }
  const searchResult = await searchPackages(term);

  return {
    searchResult,
  };
}
