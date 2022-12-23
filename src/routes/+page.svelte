<script lang="ts">
	import AnimatedCounter from '$lib/AnimatedCounter.svelte';
	import { Avatar, GradientHeading } from '@skeletonlabs/skeleton';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	const counterList = [
		'a FullStack Developer',
		'a Frontend Nerd',
		'a Backend Geek',
		'an IAM Engineer',
		'a Cloud Support Engineer',
		'an Open Source Contributor',
		'a Skeleton Contributor',
		'a Svelte Enthusiast',
		'a Developer Advocate'
	];

	const particlesConfig = {
		particles: {
			// angle: {
			// 	value: 0,
			// 	offset: 30
			// },
			color: {
				value: ['#ffffff', '#0033a1', '#0071ce', '#54c0e8', '#cc27b0']
			},
			links: {
				enable: true,
				color: '#54c0e8'
			},
			move: {
				enable: true

				// gravity: {
				// 	enable: true
				// }
				// speed: { min: 5, max: 20 },
				// decay: 0.01
			},
			number: {
				value: 200
			}
		}
	};

	const onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	const particlesInit = async (engine: any) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	};
</script>

<div class="z-0">
	<Particles
		id="tsparticles"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
</div>
<div class="z-50 mx-auto flex h-full items-center justify-center md:p-0 p-4">
	<div class="card card-glass z-50 space-y-5 p-4 md:p-10">
		<span class="flex flex-row flex-wrap gap-2">
			<p class="unstyled text-6xl !text-white">Hi,</p>
			<p class="unstyled text-6xl !text-white">I'm Luke</p>
		</span>

		<div class="flex justify-center space-x-2" />
		<div class="space-y-2" />
		<Avatar src="/Luke.png" width="w-48" class="mx-auto" />

		<div class="flex flex-row justify-center">
			<div class="skills">
				I'm [<AnimatedCounter
					interval={1200}
					transitionInterval={700}
					values={counterList}
					random
					class="custom-skill px-2 text-secondary-500"
				/>]
			</div>
		</div>
	</div>
</div>

<style>
	.skills {
		display: flex;
		justify-items: start;
		align-items: center;
		flex-wrap: wrap;
	}

	:global(.custom-skill) {
		display: inline-block;
		text-align: center;
	}
</style>
