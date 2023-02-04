<script lang="ts">
  import Subtitle from "./Subtitle.svelte";

  const projects = [
    {
      name: "Wishlify",
      url: "https://wishlify.ru",
    },
    {
      name: "Zatch",
      url: "https://github.com/tsivinsky/zatch",
    },
  ];
</script>

<div class="mt-6">
  <Subtitle class="mb-2">Projects</Subtitle>
  {#each projects as project, i (i)}
    <div class="w-fit">
      <a href={project.url} target="_blank" rel="noopener noreferrer"><h3>{project.name}</h3></a>
    </div>
  {/each}
</div>
