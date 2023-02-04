import type { Repo } from "../types/repos";

export const getLatestRepos = async (numberOfRepos = 5) => {
  const resp = await fetch(`/api/repos?per_page=${numberOfRepos}`);
  const data = (await resp.json()) as Repo[];

  return data;
};
