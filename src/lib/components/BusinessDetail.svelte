<script lang="ts">
	import BusinessMaterial from '$lib/components/BusinessMaterial.svelte';
	import type { DatabaseProject } from '$lib/database/businesses';
	import { m } from '$lib/paraglide/messages.js';
	let { business, onclose }: { business: DatabaseProject; onclose: () => void } = $props();
	function open(element: HTMLDialogElement) {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		element.showModal();
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}
</script>

<dialog {@attach open} {onclose} aria-label={business.title}>
	<div class="detail-image">
		{#if business.image}<img
				src={business.image}
				alt={business.imageAlt ?? business.title}
			/>{/if}{#if business.credit}<span>{business.credit}</span>{/if}
		<form method="dialog"><button aria-label={m.library_close()}>×</button></form>
	</div>
	<div class="detail-body"><BusinessMaterial {business} /></div>
</dialog>

<style>
	dialog {
		position: fixed;
		inset: 0 0 0 auto;
		width: min(600px, 100%);
		max-width: 100%;
		height: 100dvh;
		max-height: 100dvh;
		margin: 0;
		padding: 0;
		border: 0;
		overflow-y: auto;
		background: white;
		color: #111;
	}
	dialog::backdrop {
		background: rgba(17, 17, 17, 0.45);
	}
	.detail-image {
		position: relative;
		height: 220px;
		background: #e6e3dc;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.detail-image > span {
		position: absolute;
		left: 12px;
		bottom: 10px;
		background: rgba(17, 17, 17, 0.6);
		color: #fff;
		font-size: 0.65rem;
		padding: 4px 8px;
	}
	form {
		position: absolute;
		right: 16px;
		top: 16px;
	}
	button {
		width: 44px;
		height: 44px;
		border: 0;
		border-radius: 50%;
		background: white;
		color: #111;
		font-family: inherit;
		font-size: 1.5rem;
		cursor: pointer;
	}
	button:focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 3px;
	}
	.detail-body {
		padding: 32px 36px 40px;
	}
	@media (max-width: 440px) {
		.detail-body {
			padding: 28px 24px;
		}
	}
</style>
