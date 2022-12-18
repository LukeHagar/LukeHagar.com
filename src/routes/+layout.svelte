<script>
  // import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "$lib/theme-luke.css";
  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/Header.svelte";
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <Header />
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
