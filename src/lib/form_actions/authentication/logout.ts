import { lucia } from '$lib/server/auth';
import { redirect, type Cookies } from '@sveltejs/kit';

export const logout = async ({ locals, cookies }: { locals: App.Locals; cookies: Cookies }) => {
	if (!locals.session) {
		redirect(302, '/login');
	}

	await lucia.invalidateSession(locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();

	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});

	redirect(302, '/login');
};
