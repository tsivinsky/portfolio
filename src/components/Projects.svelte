<script lang="ts">
  const projects = [
    {
      name: "Wishlify",
      url: "https://wishlify.ru",
    },
    {
      name: "Zatch",
      url: "https://github.com/tsivinsky/zatch",
    },
  ]
</script>

<div class="mt-6">
  <h2 class="text-xl sm:text-3xl mb-2">Projects</h2>
  {#each projects as project, i (i)}
    <div>
      <a href={project.url} target="_blank" rel="noopener noreferrer"><h3>{project.name}</h3></a>
    </div>
  {/each}
</div>
