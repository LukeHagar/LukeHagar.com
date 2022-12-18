import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return { analyticsId: process.env.VERCEL_ANALYTICS_ID };
};
