import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return { env: import.meta.env, analyticsId: process.env.VERCEL_ANALYTICS_ID };
};