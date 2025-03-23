<script>
import { onMount } from 'svelte';
import { cn } from '~/utils';

let { class: className, src, fallback, ...props } = $props();

let loading = $state(false);
onMount(() => {
	const img = new Image();
	img.src = src;
	loading = true;

	img.onload = () => {
		loading = false;
	};
});
</script>

{#if !loading}
	<img src={src} class={cn('aspect-square size-full rounded-full', className)} {...props} />
{:else}
	<div
		class={cn('bg-muted flex aspect-square size-full items-center justify-center rounded-full', className)}
		{...props}
	>
		{fallback}
	</div>
{/if}
