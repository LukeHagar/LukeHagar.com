<script lang="ts">
	import AnimatedCounter from '$lib/AnimatedCounter.svelte';
	import DevTosvg from '$lib/DevTOSVG.svelte';
	import GitHubSvg from '$lib/GitHubSVG.svelte';
	import LinkedInSvg from '$lib/LinkedInSVG.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	const counterList = [
		'a Space Cowboy',
		'a FullStack Developer',
		'a Senior Software Engineer',
		'a Frontend Nerd',
		'a Backend Geek',
		'an IAM Engineer',
		'a Cloud Support Engineer',
		'an Open Source Contributor',
		'a Skeleton Contributor',
		'a Svelte Enthusiast',
		'a Developer Advocate'
	];
</script>

<svelte:head>
	<title>LukeHagar.com</title>
	<!-- Meta -->
	<meta name="title" content="LukeHagar.com" />
	<meta name="description" content="Nothing special, just something for me to link to :)" />
	<!-- Open Graph -->
	<meta property="og:title" content="LukeHagar.com" />
	<meta property="og:description" content="Nothing special, just something for me to link to :)" />
	<meta property="og:type" content="image/jpeg" />
	<meta property="og:url" content="https://lukehagar.com" />
	<meta property="og:image" content="/Luke.png" />
</svelte:head>

<div
	class="mx-auto flex h-full flex-col gap-2 items-center justify-center p-4"
	data-atropos-offset="+20"
>
	<div class="min-w-[380px] max-w-[500px] w-full card variant-glass-surface z-50 space-y-5 p-4">
		<span class="flex flex-row justify-center flex-wrap gap-2 text-3xl">
			<p>Hi, I'm Luke</p>
		</span>

		<div class="flex justify-center space-x-2"></div>
		<div class="space-y-2">
			<Avatar src="/Luke.png" width="w-48" class="mx-auto" />
		</div>

		<div class="flex flex-row justify-center">
			<div class="skills text-2xl">
				I'm <AnimatedCounter
					interval={1200}
					transitionInterval={700}
					values={counterList}
					random
					class="custom-skill px-2 text-2xl"
				/>
			</div>
		</div>
	</div>
	<div
		class="min-w-[380px] max-w-[500px] w-full flex flex-row flex-wrap justify-between card variant-glass-surface p-4"
	>
		<a
			class="unstyled grow text-center transition ease-in-out hover:scale-125 duration-200 subpixel-antialiased scale-110"
			target="_blank"
			rel="noreferrer"
			href="https://www.skeleton.dev"
		>
			<img alt="Skeleton.dev" class="mx-auto w-8 rounded-xl" src="/favicon.png" />
			Skeleton
		</a>

		<a
			class="unstyled grow text-center transition ease-in-out hover:scale-125 duration-200 subpixel-antialiased scale-110"
			target="_blank"
			rel="noreferrer"
			href="https://www.linkedin.com/in/lukehagar/"
		>
			<LinkedInSvg />
			Linkedin
		</a>

		<a
			class="unstyled grow text-center transition ease-in-out hover:scale-125 duration-200 subpixel-antialiased scale-110"
			target="_blank"
			rel="noreferrer"
			href="https://dev.to/lukehagar"
		>
			<DevTosvg />
			Dev
		</a>

		<a
			class="unstyled grow text-center transition ease-in-out hover:scale-125 duration-200 subpixel-antialiased scale-110"
			target="_blank"
			rel="noreferrer"
			href="https://github.com/LukeHagar"
		>
			<GitHubSvg />
			Personal
		</a>

		<a
			class="unstyled grow text-center scale-110 disabled opacity-50"
			target="_blank"
			rel="noreferrer"
			href="https://github.com/luke-hagar-sp"
		>
			<GitHubSvg />
			Work
		</a>
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

	a.disabled {
		pointer-events: none;
		cursor: default;
	}
</style>
