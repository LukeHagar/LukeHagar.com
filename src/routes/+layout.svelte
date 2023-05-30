<script lang="ts">
	import '$lib/theme-luke.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	// Import the Analytics package, and the SvelteKit dev variable.
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	// Inject the Analytics functionality
	inject({ mode: dev ? 'development' : 'production' });
</script>

<!-- Page Route Content -->
<slot />
