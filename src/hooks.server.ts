import { sequence } from "@sveltejs/kit/hooks";
import { handleErrorWithSentry, sentryHandle } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://6b2d8c5156a83705bc7ffb4f0d16ba5f@sentry.plygrnd.org/2',
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0, // Profiling sample rate is relative to tracesSampleRate
  
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle());

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
