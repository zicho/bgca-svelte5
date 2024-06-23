import { register } from '$lib/form_actions/authentication/register';
import { registerUserSchema } from '$lib/validation/schemas/user/registerUserSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const form = await superValidate(zod(registerUserSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: register
};
