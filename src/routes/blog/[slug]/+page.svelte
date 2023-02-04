<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<a href="/blog" class="block mb-4">all articles</a>

<h1>{data.article.title}</h1>
<div class="unreset article">
  {@html data.article.body}
</div>
