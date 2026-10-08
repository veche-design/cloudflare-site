<script lang="ts">
	import EvidenceComparison from '$lib/components/EvidenceComparison.svelte';
	import { herbalPharmacyPathway } from '$lib/dashboard/herbal-pharmacy';
	import { herbalPharmacyDraftFigures } from '$lib/database/herbal-pharmacy';
	import { m } from '$lib/paraglide/messages.js';
	let {
		selected,
		onvalidation,
		ondesign,
		ondiscuss
	}: {
		selected: string;
		onvalidation: (section: string) => void;
		ondesign: (section: string) => void;
		ondiscuss: (question: string) => void;
	} = $props();
	const titles = [
		{ id: 'validation', title: m.financing_validation(), copy: m.financing_validation_copy() },
		{ id: 'financial', title: m.financing_financial(), copy: m.financing_financial_copy() },
		{ id: 'package', title: m.financing_package(), copy: m.financing_package_copy() },
		{
			id: 'conversations',
			title: m.financing_conversations(),
			copy: m.financing_conversations_copy()
		},
		{ id: 'close', title: m.financing_close(), copy: m.financing_close_copy() }
	];
	const current = $derived(titles.find((item) => item.id === selected) ?? titles[0]);
	const signals = herbalPharmacyPathway.filter((phase) =>
		['Discover', 'Concept', 'Deliver'].includes(phase.name)
	);
	const figureLabels = [m.library_revenue(), m.library_jobs(), m.library_investment()];
</script>

<div class="financing">
	<header>
		<span class="section-tag">{m.workspace_financing()}</span>
		<h2>{current.title}</h2>
		<p>{m.financing_intro()}</p>
	</header>
	<section class="case lift-card">
		<span class="tag-pill">{m.workspace_working()}</span>
		<p class="statement">{current.copy}</p>
		{#if selected === 'validation'}
			<p>{m.financing_validation_note()}</p>
			{#each signals as phase (phase.name)}
				{@const result = phase.experiments[0]}
				<div class="signal">
					<h3>{result.method}</h3>
					<span class="status">{m.workspace_illustrative()}</span>
					{#if result.evidence}<EvidenceComparison comparisons={result.evidence} />{/if}
				</div>
			{/each}
			<button class="text-action" onclick={() => onvalidation('experiments')}
				>{m.financing_review_validation()}</button
			>
		{:else if selected === 'financial'}
			<p class="status">{m.library_draft()}</p>
			<dl class="figures">
				{#each herbalPharmacyDraftFigures as value, i (value)}<div>
						<dt>{figureLabels[i]}</dt>
						<dd>{value}</dd>
					</div>{/each}
			</dl>
			<p>{m.financing_financial_note()}</p>
			<button class="text-action" onclick={() => ondesign('economics')}
				>{m.financing_review_economics()}</button
			>
		{:else if selected === 'package'}
			<ul class="package">
				<li>{m.library_canvas()} <span>{m.workspace_working()}</span></li>
				<li>{m.library_financials()} <span>{m.library_draft()}</span></li>
				<li>{m.financing_evidence_package()} <span>{m.workspace_pending()}</span></li>
			</ul>
			<p>{m.financing_package_note()}</p>
		{:else}
			<h3>{m.financing_investors()}</h3>
			<div class="investors">
				{#each [1, 2, 3] as slot (slot)}<div>{m.financing_investor_placeholder()}</div>{/each}
			</div>
			<p>{selected === 'close' ? m.financing_close_note() : m.financing_no_conversations()}</p>
		{/if}
	</section>
	<div class="actions">
		<button class="btn" onclick={() => ondiscuss(m.financing_question())}
			>{m.financing_question()} ↗</button
		>
	</div>
</div>

<style>
	.financing {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 28px;
	}
	h2 {
		font-size: clamp(1.5rem, 2.5vw, 2.2rem);
		font-weight: 900;
		line-height: 1.2;
		letter-spacing: -0.015em;
	}
	header p {
		margin-top: 14px;
	}
	p {
		font-size: 0.88rem;
		line-height: 1.7;
		color: #555;
	}
	.case {
		padding: 28px;
	}
	.case > .tag-pill {
		display: inline-block;
		font-size: 0.65rem;
	}
	.statement {
		font-size: 1.2rem;
		font-weight: 600;
		color: #111;
		margin: 20px 0;
	}
	h3 {
		font-size: 1rem;
		font-weight: 900;
		margin-top: 24px;
	}
	.signal {
		margin-top: 24px;
		border-top: 1px solid rgba(17, 17, 17, 0.14);
	}
	.status {
		display: block;
		color: #c8332b;
		font-size: 0.65rem;
		margin-top: 10px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.figures {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
		margin: 20px 0 28px;
	}
	.figures > div {
		border-left: 2px solid #c8332b;
		padding-left: 12px;
	}
	dt {
		color: #6e6e6e;
		font-size: 0.65rem;
		text-transform: uppercase;
	}
	dd {
		font-size: 1.4rem;
		font-weight: 900;
		color: #c8332b;
	}
	.package {
		list-style: none;
		margin: 24px 0;
	}
	.package li {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
		padding: 16px 0;
		border-bottom: 1px solid rgba(17, 17, 17, 0.14);
		font-size: 0.85rem;
		font-weight: 600;
	}
	.package span {
		color: #6e6e6e;
		font-size: 0.7rem;
		font-weight: 400;
	}
	.investors {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
		margin: 20px 0;
	}
	.investors > div {
		min-height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f4f4f2;
		border: 1px dashed rgba(17, 17, 17, 0.2);
		padding: 16px;
		color: #8a847b;
		font-size: 0.7rem;
		text-align: center;
	}
	button {
		font-family: inherit;
		cursor: pointer;
	}
	.text-action {
		border: 0;
		background: transparent;
		color: #c8332b;
		text-align: left;
		font-size: 0.75rem;
		font-weight: 700;
		padding: 8px 0;
		margin-top: 20px;
	}
	.actions .btn {
		max-width: 100%;
		text-align: left;
	}
	button:focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	@media (max-width: 580px) {
		.case {
			padding: 20px;
		}
		.figures,
		.investors {
			grid-template-columns: 1fr;
		}
		.actions .btn {
			padding: 14px 20px;
			font-size: 0.75rem;
		}
	}
</style>
