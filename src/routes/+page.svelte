<script lang="ts">
	import foodLabFrankfurtImage from '#lib/assets/images/food-lab-frankfurt.jpg';
	import foodsImage from '#lib/assets/images/foods.jpg';
	import frankfurtImage from '#lib/assets/images/frankfurt.jpg';
	import microbiomStoreImage from '#lib/assets/images/microbiom-store.jpg';
	import ogImage from '#lib/assets/images/og-image.jpg';
	import restaurantsImage from '#lib/assets/images/restaurants.jpg';
	import SplitHero from '#lib/components/SplitHero.svelte';
	import { m } from '#lib/paraglide/messages.js';

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

<SplitHero
	title={homeHeroTitle}
	description={homeHeroDescription}
	image={frankfurtImage}
	imageAlt=""
/>

<section class="validate section-wrap">
	<div class="validate-head">
		<span class="section-tag">{m.home_validate_tag()}</span>
		<h2>{m.home_validate_title()}</h2>
	</div>

	<div class="validate-grid">
		<div class="validate-chart">
			<p class="validate-chart-label">{m.home_validate_chart_label()}</p>

			<div class="validate-bars">
				<div class="validate-bar-col">
					<span class="validate-bar-value">60%</span>
					<div class="validate-bar" style:height="75%"></div>
				</div>
				<div class="validate-bar-col">
					<span class="validate-bar-value">64%</span>
					<div class="validate-bar" style:height="80%"></div>
				</div>
				<div class="validate-bar-col">
					<span class="validate-bar-value">63%</span>
					<div class="validate-bar" style:height="78.8%"></div>
				</div>
			</div>

			<div class="validate-bar-labels">
				<p>{m.home_validate_sector_food()}</p>
				<p>{m.home_validate_sector_gastro()}</p>
				<p>{m.home_validate_sector_retail()}</p>
			</div>

			<p class="validate-chart-source">{m.home_validate_chart_source()}</p>
		</div>

		<div class="validate-causes">
			<p class="validate-causes-label">{m.home_validate_causes_label()}</p>

			<div class="validate-cause">
				<span class="validate-cause-num">01</span>
				<p>{m.home_validate_cause_1()}</p>
			</div>
			<div class="validate-cause">
				<span class="validate-cause-num">02</span>
				<p>{m.home_validate_cause_2()}</p>
			</div>
			<div class="validate-cause">
				<span class="validate-cause-num">03</span>
				<p>{m.home_validate_cause_3()}</p>
			</div>
			<div class="validate-cause">
				<span class="validate-cause-num">04</span>
				<p>{m.home_validate_cause_4()}</p>
			</div>
		</div>
	</div>
</section>

<section class="build section-wrap">
	<div class="build-head">
		<span class="section-tag">{m.home_build_tag()}</span>
		<h2>{m.home_build_title()}</h2>
		<p class="build-subtitle">{m.home_build_subtitle()}</p>
	</div>

	<div class="categories">
		<div class="category">
			<img class="cat-img" src={foodsImage} alt="" />
			<div class="cat-name">{m.home_build_food_health()}</div>
		</div>

		<div class="category">
			<img class="cat-img" src={restaurantsImage} alt="" />
			<div class="cat-name">{m.home_build_restaurants()}</div>
		</div>

		<div class="category">
			<img class="cat-img" src={microbiomStoreImage} alt="" />
			<div class="cat-name">{m.home_build_retail()}</div>
		</div>

		<div class="category">
			<img class="cat-img" src={foodLabFrankfurtImage} alt="" />
			<div class="cat-name">{m.home_build_innovation()}</div>
		</div>
	</div>
</section>

<section class="how section-wrap">
	<div class="how-head">
		<span class="section-tag">{m.home_how_tag()}</span>
		<h2>{m.home_how_title()}</h2>
	</div>

	<div class="hboxes">
		<div class="hbox lift-card">
			<div class="hbox-name">{m.home_how_young_business_title()}</div>
			<p>{m.home_how_young_business_text()}</p>
		</div>

		<div class="hbox lift-card">
			<div class="hbox-name">{m.home_how_new_business_title()}</div>
			<p>{m.home_how_new_business_text()}</p>
		</div>
	</div>
</section>

<section class="who section-wrap">
	<div class="who-head">
		<span class="section-tag">{m.home_who_tag()}</span>
		<h2>{m.home_who_title()}</h2>
		<p>{m.home_who_region()}</p>
	</div>

	<div class="who-boxes">
		<div class="who-box lift-card">
			<span class="who-name">{m.home_who_entrepreneurs_title()}</span>
			<span class="who-desc">{m.home_who_entrepreneurs_text()}</span>
		</div>

		<div class="who-box lift-card">
			<span class="who-name">{m.home_who_support_title()}</span>
			<span class="who-desc">{m.home_who_support_text()}</span>
		</div>

		<div class="who-box lift-card">
			<span class="who-name">{m.home_who_funders_title()}</span>
			<span class="who-desc">{m.home_who_funders_text()}</span>
		</div>
	</div>
</section>

<section class="contact section-wrap">
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
