<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import BusinessMaterial from '$lib/components/BusinessMaterial.svelte';
	import { getBusinesses } from '$lib/database/businesses';
	import SplitHero from '$lib/components/SplitHero.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const business = getBusinesses().find((item) => item.id === 'herbal')!;
	const projectUrl = new URL(
		resolve(localizeHref('/database/herbal-pharmacy') as Pathname),
		'https://veche.design'
	).href;
	const projectImageUrl = new URL(herbalPharmacyImage, 'https://veche.design').href;
</script>

<svelte:head>
	<title>{m.database_project_herbal_pharmacy_meta_title()}</title>
	<meta name="description" content={m.database_project_herbal_pharmacy_description()} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={projectUrl} />
	<meta property="og:title" content={m.database_project_herbal_pharmacy_meta_title()} />
	<meta property="og:description" content={m.database_project_herbal_pharmacy_description()} />
	<meta property="og:image" content={projectImageUrl} />
	<meta property="og:image:width" content="1536" />
	<meta property="og:image:height" content="1024" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.database_project_herbal_pharmacy_meta_title()} />
	<meta name="twitter:description" content={m.database_project_herbal_pharmacy_description()} />
	<meta name="twitter:image" content={projectImageUrl} />
</svelte:head>

<SplitHero
	variant="narrow"
	title={m.home_database_herbal_pharmacy()}
	description={m.dashboard_herbal_pharmacy_subtitle()}
	image={herbalPharmacyImage}
	imageAlt={m.home_database_herbal_pharmacy_image_alt()}
/>

<section class="business-page"><BusinessMaterial {business} /></section>

<style>
	.business-page {
		max-width: 1000px;
		padding: 56px 64px;
		margin: 0 auto;
	}
	@media (max-width: 700px) {
		.business-page {
			padding: 36px 24px;
		}
	}
</style>
