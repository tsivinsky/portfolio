<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<a href="/" class="mb-6 flex gap-2">back to home page</a>

<div class="mt-4">
  {#each data.articles as article (article.slug)}
    <div>
      <a href={`/blog/${article.slug}`}><h3>"{article.title}"</h3></a>
    </div>
  {/each}
</div>
