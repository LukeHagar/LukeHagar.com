<script>
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
			color: {
				value: '#ffff'
			},
			links: {
				enable: true,
				color: '#ffff'
			},
			move: {
				enable: true
			}
		}
	};

	const onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	const particlesInit = async (engine) => {
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
			<p class="unstyled text-6xl font-bold !text-white">Hi,</p>
			<div class="flex flex-row gap-2">
				<p class="unstyled text-6xl font-bold !text-white">I'm</p>
				<GradientHeading
					class="text-6xl"
					tag="h1"
					direction="bg-gradient-to-r"
					from="from-primary-400"
					to="to-surface-400">Luke</GradientHeading
				>
			</div>
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
					class="custom-skill"
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
		@apply px-2;
	}
</style>
