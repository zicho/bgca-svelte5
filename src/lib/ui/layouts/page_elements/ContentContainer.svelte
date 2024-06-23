<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, classes }: { children: Snippet; classes?: string } = $props();
</script>

<div
	class="p-8 drop-shadow-md shadow-inner rounded-lg flex flex-col bg-base-100 border border-base-300 {classes}"
>
	{@render children()}
</div>
