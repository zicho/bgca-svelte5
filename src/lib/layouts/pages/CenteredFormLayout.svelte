<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade class="full-height-minus-navbar w-full flex">
	<div
		class="p-8 drop-shadow-md shadow-inner rounded-lg flex flex-col gap-y-4 bg-base-100 border border-base-300 w-full md:max-w-lg m-auto"
	>
		<slot />
	</div>
</div>
