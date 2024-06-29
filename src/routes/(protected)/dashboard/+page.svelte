<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getUserState } from '$lib/state/userState.svelte';
	import ContentContainer from '$lib/ui/layouts/page_elements/ContentContainer.svelte';
	import StandardPageLayout from '$lib/ui/layouts/pages/StandardPageLayout.svelte';

	// export let data: PageData;
	const user = getUserState();
</script>

<StandardPageLayout>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<ContentContainer>
			<article class="prose">
				<h1 class="font-extralight">Content container 1</h1>
				<p>
					{user?.username}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada. Sit amet nisl
					purus in mollis nunc sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
					id. Purus semper eget duis at tellus. Eu nisl nunc mi ipsum faucibus vitae.
				</p>
			</article>
			<Input id="test" type="text" label="Test" bind:value={user.username} />
		</ContentContainer>
	</div>
</StandardPageLayout>
