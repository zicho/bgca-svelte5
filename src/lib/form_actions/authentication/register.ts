import { InvalidUsernameFormat } from '$lib/data/strings/FormattedValidationMessages';
import { UsernameTaken } from '$lib/data/strings/ValidationMessages';
import { lucia } from '$lib/server/auth';
import { getUser } from '$lib/server/database/queries/user/getUser';
import { registerUser } from '$lib/server/database/queries/user/registerUser';
import { registerUserSchema } from '$lib/validation/schemas/user/registerUserSchema';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const register = async ({ request, cookies }: { request: Request; cookies: Cookies }) => {
	const form = await superValidate(request, zod(registerUserSchema));

	if (!form.valid) {
		if (form.errors['username']) {
			return message(form, InvalidUsernameFormat, {
				status: 403
			});
		}

		return fail(400, { form });
	}

	const existingUser = await getUser({ username: form.data.username });

	if (existingUser.success && existingUser.result != null) {
		return message(form, UsernameTaken, {
			status: 403
		});
	}

	const id = generateId(15);
	const hashedPassword = await new Argon2id().hash(form.data.password);

	const registerUserOperation = await registerUser({
		id,
		username: form.data.username,
		pw_hash: hashedPassword
	});

	if (registerUserOperation.success) {
		const session = await lucia.createSession(id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '/',
			...sessionCookie.attributes
		});

		throw redirect(303, '/dashboard');
	} else {
		return message(form, registerUserOperation.message, {
			status: 500
		});
	}
};
