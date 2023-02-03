import type { Load } from "@sveltejs/kit";
import { getLatestRepos } from "../api/repos";
import type { PageData } from "./$types";

export const load: Load = async () => {
  const [repos] = await Promise.all([getLatestRepos()]);

  return {
    repos,
  } satisfies PageData;
};
