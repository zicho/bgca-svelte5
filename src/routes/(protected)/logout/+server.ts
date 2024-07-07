import { logout } from '$lib/form_actions/authentication/logout';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, cookies }) => {
	return logout({ locals, cookies });
};
