<script lang="ts">
	import ContentContainer from '$lib/layouts/page_elements/ContentContainer.svelte';
	import StandardPageLayout from '$lib/layouts/pages/StandardPageLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<StandardPageLayout>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<ContentContainer>
			<article class="prose">
				<h1 class="font-extralight">Content container 1</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada. Sit
					amet nisl purus in mollis nunc sed. Pellentesque massa placerat duis ultricies lacus sed
					turpis tincidunt id. Purus semper eget duis at tellus. Eu nisl nunc mi ipsum faucibus
					vitae.
				</p>
			</article>
		</ContentContainer>
	</div>
</StandardPageLayout>
