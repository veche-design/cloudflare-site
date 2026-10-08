<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import foodsImage from '$lib/assets/images/foods.jpg';
	import ogImage from '$lib/assets/images/og-image.jpg';
	import DatabaseEntryCard from '$lib/components/DatabaseEntryCard.svelte';
	import BusinessDetail from '$lib/components/BusinessDetail.svelte';
	import SplitHero from '$lib/components/SplitHero.svelte';
	import { getBusinesses, getBusinessTags, type DatabaseProject } from '$lib/database/businesses';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	const projects = getBusinesses();
	const tags = getBusinessTags();
	let activeTags = $state<string[]>([]);
	let detail = $state<DatabaseProject | null>(null);
	const visibleProjects = $derived(
		projects.filter(
			(project) => activeTags.length === 0 || activeTags.some((tag) => project.tags.includes(tag))
		)
	);
	function toggleTag(tag: string) {
		activeTags = activeTags.includes(tag)
			? activeTags.filter((item) => item !== tag)
			: [...activeTags, tag];
	}
	const dashboardHref = resolve(localizeHref('/dashboard') as Pathname);
	const homeHref = resolve(localizeHref('/') as Pathname);
	const databaseUrl = new URL(
		resolve(localizeHref('/database') as Pathname),
		'https://veche.design'
	).href;
	const ogImageUrl = new URL(ogImage, 'https://veche.design').href;
</script>

<svelte:head>
	<title>{m.database_meta_title()}</title>
	<meta name="description" content={m.database_meta_description()} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={databaseUrl} />
	<meta property="og:title" content={m.database_meta_title()} />
	<meta property="og:description" content={m.database_meta_description()} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.database_meta_title()} />
	<meta name="twitter:description" content={m.database_meta_description()} />
	<meta name="twitter:image" content={ogImageUrl} />
</svelte:head>

<SplitHero
	variant="narrow"
	title={m.database_page_title()}
	description={m.database_page_subtitle()}
	image={foodsImage}
	imageAlt={m.home_category_food()}
/>
<section class="library">
	<div class="library-filters" role="group" aria-label={m.library_filters()}>
		<button
			class="tag-pill"
			class:active={activeTags.length === 0}
			aria-pressed={activeTags.length === 0}
			onclick={() => (activeTags = [])}>{m.library_all()}</button
		>{#each tags as tag (tag.id)}<button
				class="tag-pill"
				class:active={activeTags.includes(tag.id)}
				aria-pressed={activeTags.includes(tag.id)}
				onclick={() => toggleTag(tag.id)}>{tag.label}</button
			>{/each}<span class="count" aria-live="polite"
			>{visibleProjects.length} {m.library_count()}</span
		>
	</div>
	<div class="library-grid">
		{#each visibleProjects as project (project.id)}<DatabaseEntryCard
				title={project.title}
				image={project.image ?? null}
				imageAlt={project.imageAlt ?? project.title}
				industryTags={tags.filter((tag) => project.tags.includes(tag.id)).map((tag) => tag.label)}
				credit={project.credit}
				onselect={() => (detail = project)}
			/>{/each}
	</div>
	{#if visibleProjects.length === 0}<p class="db-notice">{m.library_empty()}</p>{/if}
	<a href={homeHref} class="back-link database-back-link">{m.database_back_home()}</a>
</section>
{#if detail}<BusinessDetail business={detail} onclose={() => (detail = null)} />{/if}
<section class="contact">
	<div>
		<h2>{m.library_cta()}<br /><em>{m.library_cta_sub()}</em></h2>
		<a class="btn" href={dashboardHref}>{m.home_hero_test_business()} →</a>
	</div>
</section>

<style>
	.library {
		padding: clamp(56px, 7vw, 88px) 64px;
		background: #fff;
	}
	.library-filters {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
		margin-bottom: 32px;
	}
	.library-filters button {
		font-family: inherit;
		cursor: pointer;
		padding: 10px 18px;
		color: #111;
		border-color: rgba(17, 17, 17, 0.2);
	}
	.library-filters button.active {
		background: #c8332b;
		color: white;
		border-color: #c8332b;
	}
	.count {
		margin-left: auto;
		font-size: 0.85rem;
		font-weight: 500;
		color: #6e6e6e;
	}
	.library-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
		gap: 20px;
	}
	button:focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	@media (max-width: 900px) {
		.library {
			padding: 48px 24px;
		}
	}
</style>
