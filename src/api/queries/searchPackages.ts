import { PackageSummary } from "../types/packageSummary";

interface SearchReponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  //recupere les données de term sur l'api
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );

  const data: SearchReponse = await res.json();
  const packages = data.objects.map((obj) => {
    return {
      name: obj.package.name,
      description: obj.package.description,
      version: obj.package.version,
      keywords: obj.package.keywords,
    };
  });

  return packages;
}
