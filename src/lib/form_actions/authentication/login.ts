import { lucia } from '$lib/server/auth';
import { getUser } from '$lib/server/database/queries/user/getUser';
import { loginUserSchema } from '$lib/validation/schemas/user/loginUserSchema';
import { redirect, type Cookies } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const login = async ({ request, cookies }: { request: Request; cookies: Cookies }) => {
	const form = await superValidate(request, zod(loginUserSchema));

	if (!form.valid) {
		return message(form, 'Could not authenticate', {
			status: 403
		});
	}

	const getUserOperation = await getUser({ username: form.data.username });

	if (!getUserOperation.success) {
		return message(form, getUserOperation.message, {
			status: 404
		});
	}

	const existingUser = getUserOperation.result!;

	const validPassword = await new Argon2id().verify(existingUser.pw_hash, form.data.password);

	if (!validPassword) {
		return setError(form, 'password', 'Password is incorrect');
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});

	redirect(303, '/dashboard');
};
