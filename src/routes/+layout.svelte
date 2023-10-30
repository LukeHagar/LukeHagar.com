<script lang="ts">
	import '$lib/theme-luke.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	// Import the Analytics package, and the SvelteKit dev variable.
	import { browser, dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	import { webVitals } from '$lib/vitals';
	import Atropos from 'atropos';
	import 'atropos/css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let div: HTMLDivElement;

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}

	onMount(() => {
		// Initialize
		Atropos({
			el: div,
			activeOffset: 5,
			shadowScale: 0
		});
	});

	// Inject the Analytics functionality
	inject({ mode: dev ? 'development' : 'production' });

	const particlesConfig = {
		particles: {
			color: {
				value: ['#ffffff', '#0033a1', '#0071ce', '#54c0e8', '#cc27b0']
			},
			links: {
				enable: true,
				color: '#54c0e8'
			},
			move: {
				enable: true
			},
			number: {
				value: 200
			}
		}
	};

	const particlesInit = async (engine: any) => {
		await loadFull(engine);
	};
</script>

<!-- main Atropos container (required), add your custom class here -->
<div class="atropos h-full" bind:this={div}>
	<!-- scale container (required) -->
	<div class="atropos-scale">
		<!-- rotate container (required) -->
		<div class="atropos-rotate">
			<!-- inner container (required) -->
			<div class="atropos-inner">
				<Particles id="tsparticles" options={particlesConfig} {particlesInit} />
				<!-- Page Route Content -->
				<slot />
			</div>
		</div>
	</div>
</div>
