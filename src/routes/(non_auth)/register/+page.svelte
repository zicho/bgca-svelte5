<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Input from '$lib/components/Input.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import CenteredFormLayout from '$lib/ui/layouts/pages/CenteredFormLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CenteredFormLayout>
	<h1 class="text-center text-2xl text-zinc-600">Register</h1>
	<Input id="username-input" value="User" label="Username" />
	<Input id="password-input" value="Password" type="password" label="Password" />
	<Input id="confirm-password-input" value="Password" type="password" label="Confirm password" />
	<Button variant="primary" label="Register" id="sign-in-btn" type="submit" />
	<Divider classes="my-0" />
	<div class="w-full flex flex-col gap-y-4">
		<LinkButton
			href="/login"
			outline
			label="Already a member? Login!"
			id="register-btn"
			classes="text-zinc-600"
		/>
	</div>
</CenteredFormLayout>
