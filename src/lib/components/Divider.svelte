<script lang="ts">
	const { label, classes }: { label?: string; classes?: string } = $props();
</script>

<div class="divider {classes}">{label ?? ''}</div>
