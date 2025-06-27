<script lang="ts">
	import '$lib/theme-luke.css';
	import '../app.postcss';

	import { onMount } from 'svelte';

	import { particlesInit } from '@tsparticles/svelte';
	import { loadFull } from 'tsparticles';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let ParticlesComponent = $state();

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

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

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
		// await loadSlim(engine);
	});
</script>

<ParticlesComponent id="tsparticles" options={particlesConfig} />
<!-- Page Route Content -->
{@render children?.()}
