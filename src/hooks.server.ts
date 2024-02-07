import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import { dev } from '$app/environment';

Sentry.init({
	environment: dev ? 'development' : 'production',
	dsn: 'https://132cfeda18443f305824133b96e8bc0e@sentry.plygrnd.org/2',
	tracesSampleRate: 1.0,
	profilesSampleRate: 1.0 // Profiling sample rate is relative to tracesSampleRate
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle());

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
