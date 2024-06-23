<script lang="ts">
	import type { InputProps } from '$lib/components/props/InputProps';
	// import { FormErrorIcon } from '$lib/data/ui/icons';

	let {
		id,
		value = $bindable(),
		required,
		label,
		placeholder,
		errors,
		classes,
		type = 'text',
		constraints
	}: InputProps = $props();

	let valid = $derived(!errors && value);
</script>

<div class={classes || ''}>
	<div class="label">
		<label
			for={id}
			class:text-error={errors}
			class="label-text text-base-content text-sm font-bold tracking-wide">{label}</label
		>
		{#if errors}
			<span
				class:form-label-error={errors}
				class="label-text-alt text-error text-sm font-bold tracking-wider">{errors[0]}</span
			>
		{/if}
	</div>

	<label
		class="input input-bordered flex items-center gap-2"
		class:input-error={errors}
		class:form-placeholder-error={errors}
	>
		<input
			bind:value
			{required}
			{id}
			name={id}
			{type}
			placeholder={placeholder || label}
			class="grow"
			class:text-error={errors}
			aria-invalid={errors ? 'true' : undefined}
			{...constraints}
		/>
		{#if errors}
			<!-- <FormErrorIcon class="text-error" /> -->
		{/if}
	</label>
</div>
