<script lang="ts">
  import type { LatestReposResult } from "../api/repos"

  export let repo: LatestReposResult[number]
</script>

<div class="w-fit">
  <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><h2>{repo.full_name}</h2></a>
</div>
