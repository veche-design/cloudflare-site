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
	};

	let { title, image, imageAlt, industryTags = [], status, href }: Props = $props();
</script>

{#snippet content()}
	<div class="preview-img">
		{#if image}
			<img src={image} alt={imageAlt} />
		{:else}
			{m.image_place_holder()}
		{/if}
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
	</div>
{/snippet}

{#if href}
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
