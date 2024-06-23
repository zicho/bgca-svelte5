<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Input from '$lib/components/Input.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { loginUserSchema } from '$lib/validation/schemas/user/loginUserSchema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import CenteredFormLayout from '../../../lib/ui/layouts/pages/CenteredFormLayout.svelte';

	let { data } = $props();

	const { form, constraints, message, enhance, errors } = superForm(data.form, {
		clearOnSubmit: 'none',
		validators: zodClient(loginUserSchema),
		validationMethod: 'auto'
	});
</script>

<CenteredFormLayout errorMessage={$message}>
	<form use:enhance method="post" class="flex flex-col gap-y-4">
		<h1 class="text-center text-2xl text-zinc-600">Login</h1>
		<Input
			id="username"
			label="Username"
			bind:value={$form.username}
			errors={$errors.username}
			{...$constraints.username}
		/>
		<Input
			id="password"
			type="password"
			label="Password"
			bind:value={$form.password}
			errors={$errors.password}
			{...$constraints.password}
		/>
		<Input
			id="confirm_password"
			type="password"
			label="Password"
			bind:value={$form.confirm_password}
			errors={$errors.confirm_password}
			{...$constraints.confirm_password}
		/>
		<Button variant="primary" label="Register" id="register-btn" type="submit" />
	</form>
	<Divider classes="my-0" />
	<div class="w-full flex flex-col gap-y-4">
		<LinkButton href="/login" outline label="Already a member? Login!" id="register-btn" />
	</div>
</CenteredFormLayout>
