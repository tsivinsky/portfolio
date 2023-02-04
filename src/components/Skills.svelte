<script lang="ts">
  import Subtitle from "./Subtitle.svelte";

  const skills = [
    { name: "React.js", bgColor: "#149eca", color: "#ffffff" },
    { name: "Next.js", bgColor: "#000000", color: "#ffffff" },
    { name: "TypeScript", bgColor: "#3178c6", color: "#ffffff" },
    { name: "Go", bgColor: "#79d4fd", color: "#000000" },
  ];
</script>

<div class="mt-6">
  <Subtitle class="mb-2">Skills</Subtitle>
  <div class="flex gap-2 flex-wrap">
    {#each skills as skill, i (i)}
      <span
        style={`background-color: ${skill.bgColor}; color: ${skill.color}`}
        class="py-1 px-2 rounded-md font-medium font-inter">{skill.name}</span
      >
    {/each}
  </div>
</div>
