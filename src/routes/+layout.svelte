<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';
	import '$lib/css/app.css';
	import { setUserState } from '$lib/state/userState.svelte';
	import { MenuIcon } from '$lib/ui/layouts/data/icons';
	import generateNavbarLinks from '$lib/ui/layouts/data/navbarLinks';
	import NavbarLink from '$lib/ui/layouts/page_elements/NavbarLink.svelte';

	let { children, data } = $props();
	const { user } = $derived(data);
	setUserState(user);

	// const user = setUserState(data.user);
	// const session = setSessionState(data.session);

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
					{#if user}<li>{user.username}</li>{/if}
					{#each links as link}
						<NavbarLink {...link} active={$page.url.toString().includes(link.url)} />
					{/each}
				</ul>
			</div>
		</div>
		<div
			class="full-height-minus-navbar navbar-top-margin bg-gradient-to-br from-base-100 to-base-300"
		>
			{#if user}<Input id="test" type="text" label="Test" bind:value={user.username} />{/if}
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
