import type { PackageDetails } from "../types/packageDetails";

const FEACTURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFeaturedPackages() {
  const promises = FEACTURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });

  const data: PackageDetails[] = await Promise.all(promises);

  return data;
}
