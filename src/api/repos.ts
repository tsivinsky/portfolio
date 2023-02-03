import { github } from "./github";

export const getLatestRepos = async () => {
  const resp = await github.repos.listForUser({
    username: "tsivinsky",
    sort: "updated",
    per_page: 5,
  });

  return resp.data;
};

export type LatestReposResult = Awaited<ReturnType<typeof getLatestRepos>>;
