<script lang="ts">
	import type { NavbarLinkProps } from './props/LayoutProps';
	let { id, url, aria, displayText, icon, classes, active }: NavbarLinkProps = $props();
</script>

<li class:active class="flex justify-start {classes}" {id} data-testid={id}>
	<a href={url} aria-label={aria} class="lg:hover:text-neutral-content flex items-center w-full">
		<svelte:component this={icon} class="mr-4 md:mr-0" />
		{displayText}
	</a>
</li>

<style>
	a {
		color: inherit !important;
	}

	a:hover {
		color: inherit !important;
	}
</style>
