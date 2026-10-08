<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import frankfurtImage from '$lib/assets/images/frankfurt.jpg';
	import foodImage from '$lib/assets/images/foods.jpg';
	import restaurantImage from '$lib/assets/images/restaurant-reference.jpg';
	import microbiomImage from '$lib/assets/images/microbiom-store.jpg';
	import foodLabImage from '$lib/assets/images/food-lab-frankfurt.jpg';
	import neighbourhoodImage from '$lib/assets/images/neighbourhood-kitchens.jpg';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import ogImage from '$lib/assets/images/og-image.jpg';
	import SplitHero from '$lib/components/SplitHero.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const categories = [
		{ title: m.home_category_food(), image: foodImage },
		{ title: m.home_category_restaurant(), image: restaurantImage },
		{ title: m.home_category_health(), image: microbiomImage },
		{ title: m.home_category_infrastructure(), image: foodLabImage },
		{ title: m.home_category_retail(), image: herbalPharmacyImage },
		{ title: m.home_category_social(), image: neighbourhoodImage, credit: '© Diana Djeddi' }
	];
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
	variant="home"
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

	<div class="failure-grid">
		<div class="failure-stat lift-card">
			<div class="failure-ring"><strong>80%</strong></div>
			<div>
				<h3>{m.home_failure()}</h3>
				<p>{m.home_stat_note()}</p>
			</div>
		</div>
		<div class="failure-reasons lift-card">
			<span class="eyebrow">{m.home_reasons()}</span>
			<div class="reason-heading">
				<h3>{m.home_poor_fit()}</h3>
				<strong>44%</strong>
			</div>
			<div class="reason-bar"><span></span></div>
			<p>{m.home_fit_note()}</p>
			{#each [m.home_reason_2(), m.home_reason_3()] as reason (reason)}<div
					class="placeholder-reason"
				>
					<span>{reason}</span><strong>–</strong>
				</div>
				<div class="reason-bar"></div>{/each}
		</div>
	</div>
</section>

<section class="build">
	<div class="build-head">
		<span class="section-tag">{m.home_build_tag()}</span>
		<h2>{m.home_build_title()}</h2>
	</div>

	<p class="jobs-note">{m.home_jobs_note()}</p>
	<div class="categories home-categories">
		{#each categories as category (category.title)}<div class="category">
				<div class="category-image">
					<img src={category.image} alt={category.title} />{#if category.credit}<span
							>{category.credit}</span
						>{/if}
				</div>
				<h3 class="cat-name">{category.title}</h3>
			</div>{/each}
	</div>
</section>

<section class="how">
	<div class="how-head">
		<span class="section-tag">{m.home_how_tag()}</span>
		<h2>{m.home_how_title()}</h2>
		<p>{m.home_how_intro()}</p>
	</div>

	<div class="hboxes home-steps">
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

	.failure-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 20px;
	}
	.failure-stat {
		display: flex;
		align-items: center;
		gap: 36px;
		flex-wrap: wrap;
		padding: 40px 32px;
	}
	.failure-stat > div:last-child {
		flex: 1;
		min-width: 180px;
	}
	.failure-ring {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		background: conic-gradient(#c8332b 0 80%, #eceae5 80% 100%);
		padding: 22px;
		flex-shrink: 0;
	}
	.failure-ring strong {
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 50%;
		width: 100%;
		height: 100%;
		color: #c8332b;
		font-size: 2.6rem;
		font-weight: 900;
		letter-spacing: -0.03em;
	}
	.failure-stat h3 {
		font-size: clamp(1.3rem, 2.2vw, 1.7rem);
		font-weight: 900;
		line-height: 1.15;
		letter-spacing: -0.01em;
	}
	.failure-stat p {
		margin-top: 10px;
		font-size: 0.95rem;
		line-height: 1.6;
		color: #555;
	}
	.failure-reasons {
		padding: 40px 32px;
		display: grid;
		gap: 10px;
	}
	.eyebrow {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #6e6e6e;
		margin-bottom: 16px;
	}
	.reason-heading,
	.placeholder-reason {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
	}
	.reason-heading h3 {
		font-size: 1.05rem;
		font-weight: 700;
	}
	.reason-heading strong {
		font-size: 1.8rem;
		font-weight: 900;
		letter-spacing: -0.02em;
		color: #c8332b;
	}
	.reason-bar {
		height: 14px;
		background: #eceae5;
	}
	.reason-bar span {
		display: block;
		width: 44%;
		height: 100%;
		background: #c8332b;
	}
	.failure-reasons p {
		font-size: 0.88rem;
		line-height: 1.55;
		color: #555;
	}
	.placeholder-reason {
		margin-top: 16px;
		color: #9a948b;
		font-size: 1.05rem;
		font-weight: 700;
	}
	.placeholder-reason strong {
		color: #c9c4bb;
		font-size: 1.8rem;
	}
	.build {
		padding-top: clamp(56px, 7vw, 88px);
		padding-bottom: clamp(56px, 7vw, 88px);
	}
	.build-head {
		margin-bottom: 14px;
	}
	.jobs-note {
		font-size: clamp(1rem, 1.4vw, 1.15rem);
		font-weight: 500;
		color: #555;
		margin-bottom: 40px;
	}
	.home-categories {
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
		gap: 24px;
	}
	.category-image {
		position: relative;
		margin-bottom: 12px;
	}
	.category-image img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		display: block;
		border: 1px solid rgba(17, 17, 17, 0.1);
	}
	.category-image span {
		position: absolute;
		right: 6px;
		bottom: 6px;
		font-size: 0.6rem;
		color: white;
		background: rgba(17, 17, 17, 0.6);
		padding: 3px 6px;
	}
	.cat-name {
		font-size: clamp(0.95rem, 1.4vw, 1.1rem);
		min-height: 0;
		margin: 0;
	}
	.home-steps {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media (max-width: 850px) {
		.failure-grid {
			grid-template-columns: 1fr;
		}
		.home-steps {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 480px) {
		.failure-stat,
		.failure-reasons {
			padding: 28px 24px;
		}
	}
</style>
