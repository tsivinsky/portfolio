import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "$env/static/private";

export const github = new Octokit({
  auth: GITHUB_TOKEN,
});
