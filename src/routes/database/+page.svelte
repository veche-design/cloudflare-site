<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import barefootStoreImage from '$lib/assets/images/barefoot-store.jpg';
	import circularEconomyMallImage from '$lib/assets/images/circular-economy-mall.jpg';
	import digitalDetoxLoungeImage from '$lib/assets/images/digital-detox-lounge.jpg';
	import dumplingsImage from '$lib/assets/images/dumplings.jpg';
	import eisenbahnImage from '$lib/assets/images/eisenbahn.jpg';
	import ethiopianFoodBrandImage from '$lib/assets/images/ethiopian-food-brand.jpg';
	import functionalBeverageBarImage from '$lib/assets/images/functional-beverage-bar.jpg';
	import gesundheitskioskImage from '$lib/assets/images/gesundheitskiosk.jpg';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import kioskChainImage from '$lib/assets/images/kiosk-chain.jpg';
	import koreanJjimjilbangImage from '$lib/assets/images/korean-jjimjilbang.jpg';
	import lifeSkillsSchoolImage from '$lib/assets/images/life-skills-school.jpg';
	import microbiomStoreImage from '$lib/assets/images/microbiom-store.jpg';
	import mushroomFarmImage from '$lib/assets/images/mushroom-farm.jpg';
	import muslimFashionHouseImage from '$lib/assets/images/muslim-fashion-house.jpg';
	import muslimFemaleClubImage from '$lib/assets/images/muslim-female-club.jpg';
	import ogImage from '$lib/assets/images/og-image.jpg';
	import rabiaImage from '$lib/assets/images/rabia.jpg';
	import romantasyBookStoreImage from '$lib/assets/images/romantasy-book-store.jpg';
	import ukrainianFoodBrandImage from '$lib/assets/images/ukrainian-food-brand.jpg';
	import villageStoreFranchiseImage from '$lib/assets/images/village-store-franchise.jpg';
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
		{
			title: 'Dumpling Restaurant Franchise',
			industryTags: [m.database_industry_gastro()],
			image: dumplingsImage,
			imageAlt: 'Dumpling restaurant chain'
		},
		{
			title: 'Village Store Franchise',
			industryTags: [m.database_industry_retail()],
			image: villageStoreFranchiseImage,
			imageAlt: 'Village Store Franchise'
		},
		{
			title: 'Muslim Fashion House',
			industryTags: [m.database_industry_retail()],
			image: muslimFashionHouseImage,
			imageAlt: 'Muslim Fashion House'
		},
		{
			title: 'Circular Economy Mall',
			industryTags: [m.database_industry_crafts(), m.database_industry_retail()],
			image: circularEconomyMallImage,
			imageAlt: 'Circular Economy Mall'
		},
		{
			title: 'Kiosk Chain',
			industryTags: [m.database_industry_retail()],
			image: kioskChainImage,
			imageAlt: 'Kiosk Chain'
		},
		{
			title: 'Mushroom Farm',
			industryTags: [m.database_industry_food()],
			image: mushroomFarmImage,
			imageAlt: 'Mushroom Farm'
		},
		{
			title: 'Model Eisenbahn Store and Maker Club',
			industryTags: [m.database_industry_retail()],
			image: eisenbahnImage,
			imageAlt: 'Model Eisenbahn Store and Maker Club'
		},
		{
			title: 'Ethiopian Food Brand',
			industryTags: [m.database_industry_food()],
			image: ethiopianFoodBrandImage,
			imageAlt: 'Ethiopian Food Brand'
		},
		{
			title: 'Ukrainian Food Brand',
			industryTags: [m.database_industry_food(), m.database_industry_gastro()],
			image: ukrainianFoodBrandImage,
			imageAlt: 'Ukrainian Food Brand'
		},
		{
			title: 'Romantasy Book Store & Bar',
			industryTags: [m.database_industry_retail(), m.database_industry_gastro()],
			image: romantasyBookStoreImage,
			imageAlt: 'Romantasy Book Store & Bar'
		},
		{
			title: 'Muslim Female Club',
			industryTags: [m.database_industry_community()],
			image: muslimFemaleClubImage,
			imageAlt: 'Muslim Female Club'
		},
		{
			title: 'Microbiom Store',
			industryTags: [m.database_industry_health(), m.database_industry_retail()],
			image: microbiomStoreImage,
			imageAlt: 'Microbiom Store'
		},
		{
			title: 'Gesundheitskiosk',
			industryTags: [m.database_industry_health()],
			image: gesundheitskioskImage,
			imageAlt: 'Gesundheitskiosk'
		},
		{
			title: 'Functional Beverage Bar',
			industryTags: [m.database_industry_gastro(), m.database_industry_health()],
			image: functionalBeverageBarImage,
			imageAlt: 'Functional Beverage Bar'
		},
		{
			title: 'Korean Jjimjilbang',
			industryTags: [m.database_industry_health()],
			image: koreanJjimjilbangImage,
			imageAlt: 'Korean Jjimjilbang'
		},
		{
			title: 'Digital Detox / Focus Lounge',
			industryTags: [m.database_industry_health()],
			image: digitalDetoxLoungeImage,
			imageAlt: 'Digital Detox / Focus Lounge'
		},
		{
			title: 'Life Skills School for Kids',
			industryTags: [m.database_industry_community()],
			image: lifeSkillsSchoolImage,
			imageAlt: 'Life Skills School for Kids'
		},
		{ title: 'Walla Supermarket Franchise', industryTags: [m.database_industry_retail()] }
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
