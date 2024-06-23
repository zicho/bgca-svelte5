<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Input from '$lib/components/Input.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import CenteredFormLayout from '../../../lib/layouts/pages/CenteredFormLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CenteredFormLayout>
	<h1 class="text-center text-2xl text-zinc-600">Login</h1>
	<Input id="username-input" value="User" label="Username" />
	<Input id="password-input" value="Password" type="password" label="Password" />
	<Button variant="primary" label="Sign in" id="sign-in-btn" type="submit" />
	<Divider classes="my-0" />
	<div class="w-full flex flex-col gap-y-4">
		<LinkButton href="/register" outline label="Wanna join? Register here!" id="register-btn" />
	</div>
</CenteredFormLayout>
