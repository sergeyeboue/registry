import { searchPackages } from "../../api/queries/searchPackages";

export async function searchLoader({ request }: { request: Request }) {
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
