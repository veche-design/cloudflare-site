<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import barefootStoreImage from '$lib/assets/images/barefoot-store.jpg';
	import frankfurtImage from '$lib/assets/images/frankfurt.jpg';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import ogImage from '$lib/assets/images/og-image.jpg';
	import rabiaImage from '$lib/assets/images/rabia.jpg';
	import DatabaseEntryCard from '$lib/components/DatabaseEntryCard.svelte';
	import SplitHero from '$lib/components/SplitHero.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const databaseHref = resolve(localizeHref('/database') as Pathname);
	const dashboardHref = resolve(localizeHref('/dashboard') as Pathname);
	const ogImageUrl = new URL(ogImage, 'https://veche.design').href;
</script>

<svelte:head>
	<title>{m.home_meta_title()}</title>
	<meta name="description" content={m.home_meta_description()} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://veche.design/" />
	<meta property="og:title" content={m.home_meta_title()} />
	<meta property="og:description" content={m.home_meta_description()} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.home_meta_title()} />
	<meta name="twitter:description" content={m.home_meta_description()} />
	<meta name="twitter:image" content={ogImageUrl} />
</svelte:head>

{#snippet homeHeroTitle()}
	<h1 class="home-hero-title">{m.home_hero_title()}</h1>
{/snippet}

{#snippet homeHeroDescription()}
	<p class="home-hero-sub">
		<strong>{m.home_hero_sub_lead()}</strong>
		{m.home_hero_sub_rest()}
	</p>
{/snippet}

{#snippet homeHeroActions()}
	<a href={databaseHref} class="btn btn-outline">
		{m.cta_explore_tested_businesses()}
	</a>

	<a href={dashboardHref} class="btn btn-outline">
		{m.home_hero_test_business()}
	</a>
{/snippet}

<SplitHero
	title={homeHeroTitle}
	description={homeHeroDescription}
	actions={homeHeroActions}
	image={frankfurtImage}
	imageAlt=""
/>

<section class="problem">
	<div class="problem-head">
		<span class="section-tag">{m.home_problem_tag()}</span>
		<h2>{m.home_problem_title()}</h2>
	</div>

	<div class="pboxes pboxes-3">
		<div class="pbox lift-card">
			<div class="p-big">{m.home_problem_unemployed_title()}</div>
			<div class="p-reg">{m.home_problem_unemployed_text()}</div>
		</div>

		<div class="pbox lift-card">
			<div class="p-reg">{m.home_problem_found_lead()}</div>
			<div class="p-big">{m.home_problem_found_title()}</div>

			{#if m.home_problem_found_tail()}
				<div class="p-reg">{m.home_problem_found_tail()}</div>
			{/if}
		</div>

		<div class="pbox lift-card">
			<div class="p-reg">{m.home_problem_failure_lead()}</div>
			<div class="p-big">{m.home_problem_failure_title()}</div>
		</div>
	</div>
</section>

<section class="build">
	<div class="build-head">
		<span class="section-tag">{m.home_build_tag()}</span>
		<h2>{m.home_build_title()}</h2>
	</div>

	<div class="categories">
		<div class="category">
			<div class="cat-name">{m.home_build_crafts()}</div>
			<div class="cat-img cat-img-crafts"></div>
		</div>

		<div class="category">
			<div class="cat-name">{m.home_build_food()}</div>
			<div class="cat-img cat-img-foods"></div>
		</div>

		<div class="category">
			<div class="cat-name">{m.home_build_systems()}</div>
			<div class="cat-img cat-img-systems"></div>
		</div>
	</div>
</section>

<section class="db-section">
	<div class="db-head">
		<span class="section-tag">{m.home_database_tag()}</span>
		<h2>{m.home_database_title()}</h2>
		<div class="db-sub2">{m.home_database_subtitle()}</div>
	</div>

	<div class="preview-grid">
		<DatabaseEntryCard
			title={m.home_database_rabia()}
			image={rabiaImage}
			imageAlt={m.home_database_rabia_image_alt()}
			industryTags={[m.database_industry_food()]}
			href="/database/rabia"
		/>

		<DatabaseEntryCard
			title={m.home_database_barefoot()}
			image={barefootStoreImage}
			industryTags={[m.database_industry_retail()]}
			imageAlt={m.home_database_barefoot_image_alt()}
			href="/database/barefoot-store"
		/>

		<DatabaseEntryCard
			title={m.home_database_herbal_pharmacy()}
			image={herbalPharmacyImage}
			industryTags={[m.database_industry_health(), m.database_industry_retail()]}
			imageAlt={m.home_database_herbal_pharmacy_image_alt()}
			href="/database/herbal-pharmacy"
		/>
	</div>

	<div class="db-cta">
		<a href={databaseHref} class="btn btn-lg">
			{m.cta_explore_tested_businesses()}
		</a>
	</div>
</section>

<section class="how">
	<div class="how-head">
		<span class="section-tag">{m.home_how_tag()}</span>
		<h2>{m.home_how_title()}</h2>
		<p>{m.home_how_intro()}</p>
	</div>

	<div class="hboxes">
		<div class="hbox lift-card">
			<div class="hbox-name">{m.home_how_start_title()}</div>
			<p>{m.home_how_start_text()}</p>
		</div>

		<div class="hbox lift-card">
			<div class="hbox-name">{m.home_how_data_title()}</div>
			<p>{m.home_how_data_text()}</p>
		</div>

		<div class="hbox lift-card">
			<div class="hbox-name">{m.home_how_expert_title()}</div>
			<p>{m.home_how_expert_text()}</p>
		</div>

		<div class="hbox lift-card">
			<div class="hbox-name">{m.home_how_launch_title()}</div>
			<p>{m.home_how_launch_text()}</p>
		</div>
	</div>
</section>

<section class="who">
	<div class="who-head">
		<span class="section-tag">{m.home_who_tag()}</span>
		<h2>{m.home_who_title()}</h2>
		<p>{m.home_who_region()}</p>
	</div>

	<div class="who-boxes">
		<div class="who-box lift-card">
			<span class="who-name">{m.home_who_ecosystem_title()}</span>
			<span class="who-desc">{m.home_who_ecosystem_text()}</span>
		</div>

		<div class="who-box lift-card">
			<span class="who-name">{m.home_who_teams_title()}</span>
			<span class="who-desc">{m.home_who_teams_text()}</span>
		</div>

		<div class="who-box lift-card">
			<span class="who-name">{m.home_who_investors_title()}</span>
			<span class="who-desc">{m.home_who_investors_text()}</span>
		</div>
	</div>
</section>

<section class="contact">
	<div>
		<span class="section-tag">{m.home_contact_tag()}</span>

		<h2>
			{m.home_contact_title_before()}<em>{m.home_contact_title_emphasis()}</em
			>{m.home_contact_title_after()}
		</h2>

		<a href="mailto:hello@veche.design" class="btn">
			{m.home_contact_button()}
		</a>
	</div>
</section>

<style>
	.home-hero-title {
		max-width: 620px;
		font-size: clamp(1.4rem, 3vw, 2.6rem);
		font-weight: 900;
		letter-spacing: -0.015em;
		line-height: 1.18;
		text-transform: uppercase;
	}

	.home-hero-sub {
		max-width: 560px;
		color: rgba(255, 255, 255, 0.9);
		font-size: clamp(1.05rem, 1.6vw, 1.3rem);
		line-height: 1.6;
	}

	.home-hero-sub strong {
		color: #fff;
		font-weight: 800;
	}
</style>
