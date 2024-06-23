<script lang="ts">
	import type { Snippet } from 'svelte';
	const { children, errorMessage }: { children: Snippet; errorMessage?: string } = $props();
</script>

<div class="full-height-minus-navbar flex flex-col items-center justify-center gap-y-0">
	<div
		class="p-8 drop-shadow-md shadow-inner rounded-lg flex flex-col gap-y-4 bg-base-100 border border-base-300 w-full md:max-w-lg mb-4"
	>
		{@render children()}
	</div>
	<div
		class:invisible={!errorMessage}
		class="py-4 drop-shadow-md shadow-inner rounded-lg flex flex-col gap-y-4 bg-red-300 border border-red-600 text-red-900 w-full md:max-w-lg"
	>
		<div class="w-full flex flex-col gap-y-4">
			<p class="text-center font-semibold">
				{errorMessage}
			</p>
		</div>
	</div>
</div>
