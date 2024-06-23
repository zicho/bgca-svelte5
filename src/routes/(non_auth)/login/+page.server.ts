import { login } from '$lib/form_actions/authentication/login';
import { loginUserSchema } from '$lib/validation/schemas/user/loginUserSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const form = await superValidate(zod(loginUserSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: login
};
