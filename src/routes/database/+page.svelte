<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import barefootStoreImage from '$lib/assets/images/barefoot-store.jpg';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import ogImage from '$lib/assets/images/og-image.jpg';
	import rabiaImage from '$lib/assets/images/rabia.jpg';
	import DatabaseEntryCard from '$lib/components/DatabaseEntryCard.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	type DatabaseProject = {
		title: string;
		industryTags: readonly string[];
		image?: string;
		imageAlt?: string;
		href?: Pathname;
	};

	// Provisional public list from Experiment_Library_v2.xlsx / Ventures.
	// Replace/reconcile it when the dedicated project-list workbook arrives.
	const projects: DatabaseProject[] = [
		{
			title: m.home_database_rabia(),
			industryTags: [m.database_industry_food()],
			image: rabiaImage,
			imageAlt: m.home_database_rabia_image_alt(),
			href: '/database/rabia'
		},
		{
			title: m.home_database_barefoot(),
			industryTags: [m.database_industry_retail()],
			image: barefootStoreImage,
			imageAlt: m.home_database_barefoot_image_alt(),
			href: '/database/barefoot-store'
		},
		{
			title: m.home_database_herbal_pharmacy(),
			industryTags: [m.database_industry_health(), m.database_industry_retail()],
			image: herbalPharmacyImage,
			imageAlt: m.home_database_herbal_pharmacy_image_alt(),
			href: '/database/herbal-pharmacy'
		},
		{ title: 'Dumpling Restaurant Franchise', industryTags: [m.database_industry_gastro()] },
		{ title: 'Soup Restaurant Franchise', industryTags: [m.database_industry_gastro()] },
		{ title: 'Village Store Franchise', industryTags: [m.database_industry_retail()] },
		{ title: 'Muslim Fashion House', industryTags: [m.database_industry_retail()] },
		{ title: 'Walla Supermarket Franchise', industryTags: [m.database_industry_retail()] },
		{
			title: 'Circular Economy Mall',
			industryTags: [m.database_industry_crafts(), m.database_industry_retail()]
		},
		{ title: 'Kiosk Chain', industryTags: [m.database_industry_retail()] },
		{ title: 'Mushroom Farm', industryTags: [m.database_industry_food()] },
		{
			title: 'Model Eisenbahn Store / Nerd & Board Game Cluster',
			industryTags: [m.database_industry_retail()]
		},
		{ title: 'Ethiopian Food Brand', industryTags: [m.database_industry_food()] },
		{
			title: 'Ukrainian Food Brand',
			industryTags: [m.database_industry_food(), m.database_industry_gastro()]
		},
		{ title: 'Central Ticket Shop for Frankfurt', industryTags: [m.database_industry_arts()] },
		{ title: 'Romantasy Book Store ++', industryTags: [m.database_industry_retail()] },
		{ title: 'Muslim Female Club', industryTags: [m.database_industry_community()] },
		{
			title: 'Microbiom Store',
			industryTags: [m.database_industry_health(), m.database_industry_retail()]
		},
		{ title: 'Gesundheitskiosk', industryTags: [m.database_industry_health()] },
		{ title: 'Wearable & CGM Fitting Studio', industryTags: [m.database_industry_health()] },
		{
			title: 'Functional Beverage Bar',
			industryTags: [m.database_industry_gastro(), m.database_industry_health()]
		},
		{ title: 'Korean Jjimjilbang', industryTags: [m.database_industry_health()] },
		{ title: 'Telemedicine Cabin', industryTags: [m.database_industry_health()] },
		{ title: 'Digital Detox / Focus Lounge', industryTags: [m.database_industry_health()] }
	];

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

<section class="doc database-doc">
	<div class="doc-wrap">
		<span class="section-tag">{m.database_page_tag()}</span>
		<h1>{m.database_page_title()}</h1>
		<p class="database-intro">{m.database_page_subtitle()}</p>

		<div class="preview-grid preview-grid-4 database-grid">
			{#each projects as project (project.title)}
				<DatabaseEntryCard
					title={project.title}
					image={project.image ?? null}
					imageAlt={project.imageAlt ?? project.title}
					industryTags={project.industryTags}
					href={project.href}
				/>
			{/each}
		</div>

		<a href={homeHref} class="back-link database-back-link">{m.database_back_home()}</a>
	</div>
</section>
