<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import barefootStoreImage from '$lib/assets/images/barefoot-store.png';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.png';
	import rabiaImage from '$lib/assets/images/rabia.png';
	import PhaseGrid from '$lib/components/PhaseGrid.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	type PhaseState = 'completed' | 'current' | 'future';

	type VenturePhase = {
		name: string;
		count: number;
		state: PhaseState;
	};

	type DashboardVenture = {
		name: string;
		subtitle: string;
		image: string;
		imageAlt: string;
		currentPhase: string;
		phases: readonly VenturePhase[];
		href?: Pathname;
	};

	const ventures: readonly DashboardVenture[] = [
		{
			name: m.home_database_rabia(),
			subtitle: m.dashboard_rabia_subtitle(),
			image: rabiaImage,
			imageAlt: m.home_database_rabia_image_alt(),
			currentPhase: 'Discover',
			href: '/dashboard/rabia',
			phases: [
				{ name: 'Discover', count: 3, state: 'current' },
				{ name: 'Feasibility', count: 1, state: 'future' },
				{ name: 'Product', count: 3, state: 'future' },
				{ name: 'Concept', count: 1, state: 'future' },
				{ name: 'Quality', count: 2, state: 'future' },
				{ name: 'Demand', count: 2, state: 'future' },
				{ name: 'Channel', count: 2, state: 'future' },
				{ name: 'Economics', count: 2, state: 'future' },
				{ name: 'Scale', count: 2, state: 'future' }
			]
		},
		{
			name: m.home_database_barefoot(),
			subtitle: m.dashboard_barefoot_subtitle(),
			image: barefootStoreImage,
			imageAlt: m.home_database_barefoot_image_alt(),
			currentPhase: 'Demand',
			href: '/dashboard/barefoot-store',
			phases: [
				{ name: 'Discover', count: 4, state: 'completed' },
				{ name: 'Concept', count: 2, state: 'completed' },
				{ name: 'Demand', count: 2, state: 'current' },
				{ name: 'Operate', count: 2, state: 'future' },
				{ name: 'Economics', count: 1, state: 'future' },
				{ name: 'Location', count: 2, state: 'future' },
				{ name: 'Retain', count: 2, state: 'future' }
			]
		},
		{
			name: m.home_database_herbal_pharmacy(),
			subtitle: m.dashboard_herbal_pharmacy_subtitle(),
			image: herbalPharmacyImage,
			imageAlt: m.home_database_herbal_pharmacy_image_alt(),
			currentPhase: 'Operate',
			href: '/dashboard/herbal-pharmacy',
			phases: [
				{ name: 'Gate', count: 2, state: 'completed' },
				{ name: 'Discover', count: 2, state: 'completed' },
				{ name: 'Payer', count: 1, state: 'completed' },
				{ name: 'Concept', count: 2, state: 'completed' },
				{ name: 'Deliver', count: 2, state: 'completed' },
				{ name: 'Operate', count: 1, state: 'current' },
				{ name: 'Economics', count: 2, state: 'future' },
				{ name: 'Location', count: 1, state: 'future' },
				{ name: 'Launch', count: 1, state: 'future' }
			]
		}
	];
</script>

{#snippet ventureCardContent(venture: DashboardVenture)}
	<img class="venture-card__image" src={venture.image} alt={venture.imageAlt} />

	<div class="venture-card__body">
		<div class="venture-card__heading">
			<h2>{venture.name}</h2>
			<p>{venture.subtitle}</p>
		</div>

		<p class="venture-card__current-phase">
			<span>{m.dashboard_current_phase()}</span>
			{venture.currentPhase}
		</p>

		<div class="venture-card__phases">
			<p>{m.dashboard_selected_experiments()}</p>
			<PhaseGrid phases={venture.phases} />
		</div>
	</div>
{/snippet}

<svelte:head>
	<title>{m.dashboard_meta_title()}</title>
	<meta name="description" content={m.dashboard_meta_description()} />
</svelte:head>

<section class="dashboard">
	<div class="dashboard__wrap">
		<header class="dashboard__intro">
			<h1>{m.dashboard_title()}</h1>
			<p>{m.dashboard_intro()}</p>
		</header>

		<div class="dashboard__grid">
			{#each ventures as venture (venture.name)}
				{#if venture.href}
					<a
						class="venture-card venture-card--link lift-card"
						href={resolve(localizeHref(venture.href) as Pathname)}
					>
						{@render ventureCardContent(venture)}
					</a>
				{:else}
					<article class="venture-card lift-card">
						{@render ventureCardContent(venture)}
					</article>
				{/if}
			{/each}

			<article class="own-idea-card lift-card">
				<div class="own-idea-card__heading">
					<h2>{m.dashboard_my_own_idea()}</h2>
					<p>{m.dashboard_my_own_idea_intro()}</p>
				</div>

				<dl class="own-idea-card__numbers">
					<div>
						<dt>292</dt>
						<dd>{m.dashboard_validation_methods()}</dd>
					</div>
					<div>
						<dt>18</dt>
						<dd>{m.dashboard_method_categories()}</dd>
					</div>
					<div>
						<dt>58</dt>
						<dd>{m.dashboard_venture_types()}</dd>
					</div>
				</dl>

				<p class="own-idea-card__status">{m.dashboard_pathway_not_selected()}</p>
			</article>
		</div>
	</div>
</section>

<style>
	.dashboard {
		background: #f4f4f2;
		padding: clamp(48px, 7vw, 84px) 48px clamp(64px, 8vw, 96px);
	}

	.dashboard__wrap {
		max-width: 1200px;
		margin: 0 auto;
	}

	.dashboard__intro {
		max-width: 620px;
		margin-bottom: clamp(32px, 5vw, 48px);
	}

	.dashboard__intro h1 {
		font-size: clamp(1.7rem, 3vw, 2.5rem);
		font-weight: 900;
		letter-spacing: -0.02em;
		line-height: 1.12;
	}

	.dashboard__intro p {
		margin-top: 12px;
		color: #555;
		font-size: 1rem;
		line-height: 1.65;
	}

	.dashboard__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 20px;
	}

	.venture-card {
		display: grid;
		grid-template-columns: minmax(150px, 31%) 1fr;
		min-width: 0;
	}

	.venture-card--link {
		color: inherit;
		text-decoration: none;
	}

	.venture-card--link:focus-visible {
		outline: 3px solid rgba(200, 51, 43, 0.45);
		outline-offset: 3px;
	}

	.venture-card__image {
		width: 100%;
		height: 100%;
		min-height: 210px;
		object-fit: cover;
	}

	.venture-card__body {
		display: flex;
		flex-direction: column;
		min-width: 0;
		padding: 22px;
	}

	.venture-card__heading h2,
	.own-idea-card__heading h2 {
		font-size: 1.1rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		line-height: 1.3;
	}

	.venture-card__heading p,
	.own-idea-card__heading p {
		margin-top: 5px;
		color: #5a5a5a;
		font-size: 0.82rem;
		line-height: 1.5;
	}

	.venture-card__current-phase {
		align-items: baseline;
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-top: 18px;
		color: #111;
		font-size: 0.82rem;
		font-weight: 700;
	}

	.venture-card__current-phase span::after {
		content: ' ·';
		color: #c8332b;
	}

	.venture-card__phases {
		margin-top: 14px;
	}

	.venture-card__phases > p {
		margin-bottom: 8px;
		color: #6e6e6e;
		font-size: 0.66rem;
		font-weight: 700;
		letter-spacing: 0.07em;
		line-height: 1.35;
		text-transform: uppercase;
	}

	.own-idea-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 280px;
		padding: 28px;
	}

	.own-idea-card__numbers {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		margin: 32px 0;
	}

	.own-idea-card__numbers div {
		border-left: 2px solid #c8332b;
		padding-left: 10px;
	}

	.own-idea-card__numbers dt {
		font-size: clamp(1.45rem, 3vw, 2rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.own-idea-card__numbers dd {
		margin-top: 6px;
		color: #5a5a5a;
		font-size: 0.7rem;
		font-weight: 600;
		line-height: 1.35;
	}

	.own-idea-card__status {
		align-self: flex-start;
		border: 1px solid rgba(17, 17, 17, 0.18);
		border-radius: 999px;
		color: #5a5a5a;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		line-height: 1;
		padding: 9px 11px;
	}

	@media (max-width: 900px) {
		.dashboard {
			padding-right: 24px;
			padding-left: 24px;
		}

		.venture-card {
			grid-template-columns: 145px 1fr;
		}
	}

	@media (max-width: 720px) {
		.dashboard__grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.venture-card {
			grid-template-columns: 1fr;
		}

		.venture-card__image {
			height: 175px;
			min-height: 0;
		}

		.venture-card__body,
		.own-idea-card {
			padding: 22px;
		}
	}
</style>
