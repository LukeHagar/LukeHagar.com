<script lang="ts">
	import type { PageData } from './$types';
	import '$lib/theme-luke.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/Header.svelte';
	import { inject } from '@vercel/analytics';
	import { browser, dev } from '$app/environment';
	import { webVitals } from '$lib/vitals';
	import { page } from '$app/stores';

	export let data: PageData;
	const { analyticsId } = data;

	if (!dev) inject();

	$: if (browser && analyticsId && !dev) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
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
