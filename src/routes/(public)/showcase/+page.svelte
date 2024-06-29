<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col p-4 space-y-4 max-w-44">
	<Button classes="btn btn-primary" variant="primary" id="primary" label="primary" />
	<Button classes="btn btn-secondary" variant="secondary" id="secondary" label="secondary" />
	<Button classes="btn btn-accent" variant="accent" id="accent" label="accent" />
	<Button classes="btn btn-ghost" variant="ghost" id="ghost" label="ghost" />
	<Button classes="btn btn-success" variant="success" id="success" label="success" />
	<Button classes="btn btn-info" variant="info" id="info" label="info" />
	<Button classes="btn btn-warning" variant="warning" id="warning" label="warning" />
	<Button classes="btn btn-error" variant="error" id="error" label="error" />
</div>
