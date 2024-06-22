<script lang="ts">
	import ContentContainer from '$lib/layouts/page_elements/ContentContainer.svelte';
	import StandardPageLayout from '$lib/layouts/pages/StandardPageLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<StandardPageLayout>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<ContentContainer>Hej</ContentContainer>
	</div>
</StandardPageLayout>
