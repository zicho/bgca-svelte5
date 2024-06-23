// import logger from '$lib/logging/ServerLogger';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	try {
		const { user, session } = locals;

		return {
			user,
			session
		};
	} catch (err) {
		console.error(err);
	}
}) satisfies LayoutServerLoad;
