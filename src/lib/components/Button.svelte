<script lang="ts">
	import type { ButtonProps } from '$lib/components/props/ButtonProps';

	const { id, label, variant, type = 'button', classes, outline, onclick }: ButtonProps = $props();
</script>

<button
	{id}
	data-testid={id}
	name={id}
	{onclick}
	class={`hover:bg-primary-hover w-full btn btn-${variant} ${outline ? 'btn-outline' : ''} ${classes}`}
	{type}
>
	{label}
</button>
