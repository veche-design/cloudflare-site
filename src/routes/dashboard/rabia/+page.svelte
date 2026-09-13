<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import rabiaImage from '$lib/assets/images/rabia.png';
	import DashboardPhaseSection from '$lib/components/DashboardPhaseSection.svelte';
	import { rabiaPathway } from '$lib/dashboard/rabia';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const dashboardHref = resolve(localizeHref('/dashboard') as Pathname);
</script>

<svelte:head>
	<title>{m.dashboard_rabia_meta_title()}</title>
	<meta name="description" content={m.database_project_rabia_description()} />
</svelte:head>

<section class="dashboard-detail">
	<div class="dashboard-detail__wrap">
		<a class="dashboard-detail__back" href={dashboardHref}>
			← {m.dashboard_back_to_dashboard()}
		</a>

		<header class="dashboard-detail__header">
			<div class="dashboard-detail__header-copy">
				<p class="dashboard-detail__current-phase">
					<span>{m.dashboard_current_phase()}</span>
					Discover
				</p>
				<h1>{m.home_database_rabia()}</h1>
				<p class="dashboard-detail__description">
					{m.database_project_rabia_description()}
				</p>
			</div>

			<img
				class="dashboard-detail__image"
				src={rabiaImage}
				alt={m.home_database_rabia_image_alt()}
			/>
		</header>

		<p class="dashboard-detail__note">{m.dashboard_illustrative_data_note()}</p>

		<div class="dashboard-detail__pathway">
			{#each rabiaPathway as phase, index (phase.name)}
				<DashboardPhaseSection index={index + 1} {...phase} />
			{/each}
		</div>
	</div>
</section>

<style>
	.dashboard-detail {
		background: #f4f4f2;
		padding: clamp(36px, 6vw, 72px) 48px clamp(64px, 8vw, 96px);
	}

	.dashboard-detail__wrap {
		max-width: 900px;
		margin: 0 auto;
	}

	.dashboard-detail__back {
		display: inline-block;
		color: #c8332b;
		font-size: 0.78rem;
		font-weight: 700;
		text-decoration: none;
	}

	.dashboard-detail__back:hover {
		text-decoration: underline;
	}

	.dashboard-detail__back:focus-visible {
		outline: 3px solid rgba(200, 51, 43, 0.45);
		outline-offset: 4px;
	}

	.dashboard-detail__header {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(190px, 30%);
		gap: clamp(24px, 5vw, 48px);
		align-items: start;
		margin-top: 28px;
		padding-bottom: clamp(32px, 5vw, 48px);
		border-bottom: 1px solid rgba(17, 17, 17, 0.16);
	}

	.dashboard-detail__current-phase {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		color: #644c16;
		font-size: 0.78rem;
		font-weight: 800;
	}

	.dashboard-detail__current-phase span::after {
		content: ' ·';
	}

	.dashboard-detail h1 {
		margin-top: 10px;
		font-size: clamp(1.8rem, 3.5vw, 2.7rem);
		font-weight: 900;
		letter-spacing: -0.025em;
		line-height: 1.1;
	}

	.dashboard-detail__description {
		margin-top: 16px;
		color: #333;
		font-size: 0.96rem;
		line-height: 1.7;
	}

	.dashboard-detail__image {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.dashboard-detail__note {
		margin: 20px 0 clamp(36px, 5vw, 52px);
		color: #6e6e6e;
		font-size: 0.75rem;
		font-style: italic;
		line-height: 1.55;
	}

	.dashboard-detail__pathway {
		display: grid;
		gap: 40px;
	}

	@media (max-width: 900px) {
		.dashboard-detail {
			padding-right: 24px;
			padding-left: 24px;
		}
	}

	@media (max-width: 600px) {
		.dashboard-detail__header {
			grid-template-columns: 1fr;
		}

		.dashboard-detail__image {
			max-width: 280px;
		}
	}
</style>
