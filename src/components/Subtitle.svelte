<script lang="ts">
  const className = $$props.class;
</script>

<h2 class={`text-xl sm:text-3xl ${className ?? ""}`}>
  <slot />
</h2>
