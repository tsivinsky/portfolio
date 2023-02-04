<script lang="ts">
  import Repo from "../components/Repo.svelte";
  import GitHubLogo from "../components/GitHubLogo.svelte";
  import Projects from "../components/Projects.svelte";
  import Skills from "../components/Skills.svelte";
  import Placeholder from "../components/Placeholder.svelte";
  import { getLatestRepos } from "../api/repos";

  const numberOfRepos = 5;

  const placeholders = Array.from({ length: numberOfRepos }, (_, i) => i);

  let reposData = getLatestRepos(numberOfRepos);
</script>

<div class="flex gap-x-4">
  <h1 class="text-3xl sm:text-5xl">Dan Tsivinsky</h1>
  <a
    href="https://github.com/tsivinsky"
    target="_blank"
    rel="noopener noreferrer"
    class="transition-opacity duration-200 hover:opacity-50"
  >
    <GitHubLogo />
  </a>
</div>

<div class="mt-4">
  <h2 class="text-xl sm:text-3xl">Latest Repos</h2>
  <div class="flex flex-col gap-1">
    {#await reposData}
      {#each placeholders as _, i (i)}
        <Placeholder width="300px" height="24px" />
      {/each}
    {:then repos}
      {#each repos as repo (repo.id)}
        <Repo {repo} />
      {/each}
    {:catch error}
      <span>Error happened while fetching repos: {error.message}</span>
    {/await}
  </div>
</div>
<Projects />
<Skills />
