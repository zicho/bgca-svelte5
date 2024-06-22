<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/css/app.css';
	import generateNavbarLinks from '$lib/layouts/data/navbarLinks';
	// import type { LayoutData } from './$types';

	// export let data: LayoutData;

	const links = generateNavbarLinks();
</script>

<div class="drawer">
	<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-primary text-primary-content h-16 p-0 m-0">
			<div class="flex-none lg:hidden">
				<label for="menu-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					>
				</label>
			</div>
			<div class="flex-1 pl-4 text-2xl font-light tracking-widest"><a href="/">BGCA</a></div>
			<div class="flex-none hidden lg:block p-0 m-0 h-full">
				<ul class="menu menu-horizontal p-0 m-0 h-full flex-1 items-center">
					{#each links as link}
						<li class:active={$page.url.toString().includes(link.url)}>
							<a href={link.url}>{link.displayText}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<slot />
	</div>
	<div class="drawer-side">
		<label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-0 m-0 w-80 min-h-full bg-base-200">
			{#each links as link}
				<li class:active={$page.url.toString().includes(link.url)} class="text-lg">
					<a href={link.url}>{link.displayText}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
