import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'sentry',
				project: 'lukehagar',
				url: 'https://sentry.plygrnd.org',
				authToken: process.env.SENTRY_AUTH_TOKEN
			}
		}),
		sveltekit()
	],

	ssr: {
		noExternal: ['tsparticles', 'tsparticles-slim', 'tsparticles-engine', 'svelte-particles'] // add all tsparticles libraries here, they're not made for SSR, they're client only
	}
};

export default config;
