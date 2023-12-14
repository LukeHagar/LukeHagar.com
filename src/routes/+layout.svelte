<script lang="ts">
	import '$lib/theme-luke.css';
	import '../app.postcss';

	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

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

<Particles id="tsparticles" options={particlesConfig} {particlesInit} />
<!-- Page Route Content -->
<slot />
