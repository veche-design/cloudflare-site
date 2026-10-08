<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { getBusinessTags, type DatabaseProject } from '$lib/database/businesses';
	import {
		herbalPharmacyReferences,
		herbalPharmacyDraftFigures
	} from '$lib/database/herbal-pharmacy';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	let { business }: { business: DatabaseProject } = $props();
	const figureLabels = [m.library_revenue(), m.library_jobs(), m.library_investment()];
	const factors = [
		m.library_legal(),
		m.library_location(),
		m.library_team(),
		m.library_suppliers(),
		m.library_advice()
	];
</script>

<div class="business-material">
	<div class="material-tags">
		{#each getBusinessTags().filter((tag) => business.tags.includes(tag.id)) as tag (tag.id)}<span
				class="tag-pill">{tag.label}</span
			>{/each}
	</div>
	<h2>{business.title}</h2>
	{#if business.id === 'herbal'}
		<p>{m.library_herbal_concept()}</p>
		<div>
			<p class="draft-note">{m.library_draft()}</p>
			<dl class="figures">
				{#each herbalPharmacyDraftFigures as value, i (value)}<div>
						<dt>{figureLabels[i]}</dt>
						<dd>{value}</dd>
					</div>{/each}
			</dl>
		</div>
		<section>
			<h3>{m.library_factors()}</h3>
			<div class="factors">
				{#each factors as factor (factor)}<span>{factor}</span>{/each}
			</div>
		</section>
		<section>
			<h3>{m.library_benchmarks()}</h3>
			<p class="small">{m.workspace_reference_note()}</p>
			<div class="benchmarks">
				{#each herbalPharmacyReferences as business (business.name)}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- Benchmark URLs are external HTTPS websites, not application routes. -->
					<a href={business.url} target="_blank" rel="noreferrer"
						><strong>{business.name}</strong><span>{business.location} ↗</span></a
					>{/each}
			</div>
		</section>
		<section>
			<h3>{m.library_documents()}</h3>
			<div class="documents">
				<span>↓ {m.library_canvas()}</span><span>↓ {m.library_financials()}</span>
			</div>
			<p class="small">{m.library_document_note()}</p>
		</section>
		<div class="venture-bridge">
			<h3>{m.library_bridge()}</h3>
			<p>{m.library_bridge_copy()}</p>
			<a class="btn" href={resolve(localizeHref('/dashboard/herbal-pharmacy') as Pathname)}
				>{m.library_open_venture()}</a
			>
		</div>
	{:else}
		<p>{m.library_partial()}</p>
		{#if business.href}<a class="back-link" href={resolve(localizeHref(business.href) as Pathname)}
				>{business.title} →</a
			>{/if}
		<a class="btn" href={resolve(localizeHref('/dashboard/herbal-pharmacy') as Pathname)}
			>{m.library_open_venture()}</a
		>
	{/if}
</div>

<style>
	.material-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.material-tags .tag-pill {
		font-size: 0.65rem;
		padding: 6px 9px;
	}
	.business-material {
		display: grid;
		gap: 28px;
	}
	h2 {
		font-size: clamp(1.4rem, 2.4vw, 2rem);
		line-height: 1.15;
		font-weight: 900;
		letter-spacing: -0.015em;
	}
	p {
		font-size: 0.95rem;
		line-height: 1.65;
		color: #333;
	}
	h3 {
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-weight: 700;
		color: #6e6e6e;
		margin-bottom: 12px;
	}
	.draft-note {
		font-size: 0.65rem;
		color: #6e6e6e;
		margin-bottom: 10px;
	}
	.figures {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border: 1px solid rgba(17, 17, 17, 0.14);
	}
	.figures > div {
		padding: 18px 16px;
		border-right: 1px solid rgba(17, 17, 17, 0.14);
	}
	.figures > div:last-child {
		border: 0;
	}
	dt {
		font-size: 0.62rem;
		line-height: 1.35;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #6e6e6e;
	}
	dd {
		font-size: 1.15rem;
		font-weight: 900;
		color: #c8332b;
		margin-top: 6px;
	}
	.factors,
	.documents {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.factors span {
		background: #fbedec;
		color: #c8332b;
		border-radius: 999px;
		padding: 9px 16px;
		font-size: 0.8rem;
		font-weight: 700;
	}
	.benchmarks {
		margin-top: 14px;
		border-top: 1px solid rgba(17, 17, 17, 0.1);
	}
	.benchmarks a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		padding: 13px 0;
		border-bottom: 1px solid rgba(17, 17, 17, 0.1);
		text-decoration: none;
		color: #111;
	}
	.benchmarks strong {
		font-size: 0.9rem;
		font-weight: 700;
	}
	.benchmarks span {
		color: #6e6e6e;
		font-size: 0.75rem;
	}
	.documents span {
		border: 1.5px solid #111;
		border-radius: 999px;
		padding: 12px 20px;
		font-size: 0.75rem;
		font-weight: 700;
	}
	.small {
		font-size: 0.73rem;
		color: #6e6e6e;
		margin-top: 12px;
	}
	.venture-bridge {
		padding: 26px;
		background: #111;
		color: white;
	}
	.venture-bridge h3 {
		font-size: 1.05rem;
		line-height: 1.35;
		color: white;
		text-transform: none;
		letter-spacing: normal;
	}
	.venture-bridge p {
		color: #ddd;
		font-size: 0.85rem;
		margin-bottom: 20px;
	}
	.venture-bridge .btn {
		padding: 16px 24px;
	}
	a:focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	@media (max-width: 440px) {
		.figures {
			grid-template-columns: 1fr;
		}
		.figures > div {
			border-right: 0;
			border-bottom: 1px solid rgba(17, 17, 17, 0.14);
		}
		.benchmarks a {
			align-items: start;
			flex-direction: column;
			gap: 4px;
		}
		.btn {
			padding: 14px 20px;
		}
	}
</style>
