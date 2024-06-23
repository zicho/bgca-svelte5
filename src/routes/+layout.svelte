<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '$lib/css/app.css';
	import { MenuIcon } from '$lib/ui/layouts/data/icons';
	import generateNavbarLinks from '$lib/ui/layouts/data/navbarLinks';
	import NavbarLink from '$lib/ui/layouts/page_elements/NavbarLink.svelte';
	import type { Snippet } from 'svelte';
	// import type { LayoutData } from './$types';

	// export let data: LayoutData;
	const { children }: { children: Snippet } = $props();

	const links = generateNavbarLinks();

	let open = $state(false);

	afterNavigate(() => {
		open = false;
	});
</script>

<div class="drawer">
	<input id="menu-drawer" type="checkbox" class="drawer-toggle" bind:checked={open} />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div
			class="w-full navbar shadow-md bg-primary text-primary-content navbar-height p-0 m-0 fixed"
		>
			<div class="flex-none lg:hidden">
				<label for="menu-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<MenuIcon />
				</label>
			</div>
			<div class="flex-1 pl-4 text-2xl font-light tracking-widest"><a href="/">BGCA</a></div>
			<div class="flex-none hidden lg:block h-full">
				<ul class="menu menu-horizontal p-0 m-0 h-full flex-1 items-center">
					{#each links as link}
						<NavbarLink {...link} active={$page.url.toString().includes(link.url)} />
					{/each}
				</ul>
			</div>
		</div>
		<div
			class="full-height-minus-navbar navbar-top-margin bg-gradient-to-br from-base-100 to-base-300"
		>
			{@render children()}
		</div>
	</div>
	<div class="drawer-side">
		{#if dev}
			<button class="btn btn-error"></button>
		{/if}
		<label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-0 m-0 w-80 min-h-full bg-base-200">
			{#each links as link}
				<NavbarLink {...link} active={$page.url.toString().includes(link.url)} classes="text-lg" />
			{/each}
		</ul>
	</div>
</div>
