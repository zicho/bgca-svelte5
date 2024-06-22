<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Input from '$lib/components/Input.svelte';
	import CenteredFormLayout from '$lib/layouts/pages/CenteredFormLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CenteredFormLayout>
	<h1 class="text-center text-2xl">Register</h1>
	<Input id="username-input" value="User" label="Username" />
	<Input id="password-input" value="Password" type="password" label="Password" />
	<Input id="confirm-password-input" value="Password" type="password" label="Confirm password" />
	<Divider classes="my-0" />
	<Button variant="primary" label="Sign in" id="sign-in-btn" type="submit" />
	<Button variant="primary" outline label="Register" id="register-btn" type="submit" />
</CenteredFormLayout>
