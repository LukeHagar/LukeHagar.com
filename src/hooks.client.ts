
// This file is used to initialize Sentry on the client side.
import { dev } from '$app/environment';
import * as Sentry from '@sentry/sveltekit';


Sentry.init({
  dsn: 'https://6b2d8c5156a83705bc7ffb4f0d16ba5f@sentry.plygrnd.org/2',

  tracesSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: dev ? 1.0 : 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,
  
  // If you don't want to use Session Replay, just remove the line below:
  integrations: [new Sentry.Replay()],
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = Sentry.handleErrorWithSentry();