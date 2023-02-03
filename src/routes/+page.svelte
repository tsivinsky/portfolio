<script lang="ts">
  import Repo from "../components/Repo.svelte"
  import GitHubLogo from "../components/GitHubLogo.svelte"
  import Projects from "../components/Projects.svelte"
  import Skills from "../components/Skills.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
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
  {#each data.repos as repo (repo.id)}
    <Repo {repo} />
  {/each}
</div>
<Projects />
<Skills />
