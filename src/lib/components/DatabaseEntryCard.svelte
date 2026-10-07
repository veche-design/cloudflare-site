<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string | Snippet;
		image: string | null;
		imageAlt: string;
		industryTags?: readonly string[];
		status?: string;
		href?: Pathname;
		onselect?: () => void;
		credit?: string;
	};

	let {
		title,
		image,
		imageAlt,
		industryTags = [],
		status,
		href,
		onselect,
		credit
	}: Props = $props();
</script>

{#snippet content()}
	<div class="preview-img">
		{#if image}
			<img src={image} alt={imageAlt} />
		{:else}
			{m.image_place_holder()}
		{/if}
		{#if credit}<span class="image-credit">{credit}</span>{/if}
	</div>

	{#if industryTags.length > 0 || status}
		<div class="preview-meta">
			{#if industryTags.length > 0}
				<div class="preview-tags">
					{#each industryTags as tag (tag)}
						<span class="preview-tag">{tag}</span>
					{/each}
				</div>
			{/if}

			{#if status}
				<span class="preview-status">{status}</span>
			{/if}
		</div>
	{/if}

	<div class="preview-title">
		{#if typeof title === 'string'}
			{title}
		{:else}
			{@render title()}
		{/if}
		{#if onselect}<span class="more">{m.library_more()}</span>{/if}
	</div>
{/snippet}

{#if onselect}
	<button type="button" class="database-entry-card preview-box lift-card" onclick={onselect}
		>{@render content()}</button
	>
{:else if href}
	<a
		class="database-entry-card preview-box lift-card"
		href={resolve(localizeHref(href) as Pathname)}
	>
		{@render content()}
	</a>
{:else}
	<div class="database-entry-card preview-box lift-card">
		{@render content()}
	</div>
{/if}

<style>
	.database-entry-card {
		display: block;
		color: inherit;
		text-decoration: none;
	}

	button.database-entry-card {
		width: 100%;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
	}
	.preview-img {
		position: relative;
	}
	.image-credit {
		position: absolute;
		right: 6px;
		bottom: 6px;
		background: rgba(17, 17, 17, 0.6);
		color: white;
		font-size: 0.6rem;
		padding: 3px 6px;
	}
	button .preview-title {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 10px;
	}
	.more {
		display: block;
		font-size: 0.75rem;
		font-weight: 700;
		color: #c8332b;
		white-space: nowrap;
	}
	.database-entry-card:focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	.preview-img img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.preview-meta {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 10px;
	}

	.preview-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.preview-tag,
	.preview-status {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		line-height: 1;
		text-transform: uppercase;
	}

	.preview-tag {
		border: 1px solid rgba(17, 17, 17, 0.14);
		border-radius: 999px;
		color: #6e6e6e;
		padding: 6px 9px;
	}

	.preview-status {
		border: 1px solid rgba(200, 51, 43, 0.24);
		border-radius: 999px;
		color: #c8332b;
		padding: 6px 9px;
		white-space: nowrap;
	}
</style>
