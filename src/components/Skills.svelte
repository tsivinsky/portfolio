<script lang="ts">
  import Subtitle from "./Subtitle.svelte";

  const skills = [
    { name: "React.js", url: "https://reactjs.org", bgColor: "#149eca", color: "#ffffff" },
    { name: "Next.js", url: "https://nextjs.org", bgColor: "#000000", color: "#ffffff" },
    { name: "TypeScript", url: "https://typescriptlang.org", bgColor: "#3178c6", color: "#ffffff" },
    { name: "Tailwind", url: "https://tailwindcss.com", bgColor: "#38bdf8", color: "#ffffff" },
    { name: "Go", url: "https://go.dev", bgColor: "#79d4fd", color: "#000000" },
    { name: "Gorm", url: "https://gorm.io", bgColor: "#3f424a", color: "#ffffff" },
    { name: "fiber", url: "https://gofiber.io", bgColor: "#00acd7", color: "#ffffff" },
  ];
</script>

<div class="mt-6">
  <Subtitle class="mb-2">Skills</Subtitle>
  <div class="flex gap-2 flex-wrap">
    {#each skills as skill, i (i)}
      <a
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        style={`background-color: ${skill.bgColor}; color: ${skill.color}`}
        class="py-1 px-2 rounded-md font-medium font-inter transition-all hover:no-underline hover:opacity-70"
        >{skill.name}</a
      >
    {/each}
  </div>
</div>
