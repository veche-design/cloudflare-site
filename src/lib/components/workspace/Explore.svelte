<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { herbalPharmacyReferences, herbalPharmacyCoverage } from '$lib/database/herbal-pharmacy';
	let {
		onquestion,
		onhypotheses
	}: { onquestion: (question: string) => void; onhypotheses: () => void } = $props();
	const prompts = [
		m.workspace_prompt_gap(),
		m.workspace_prompt_similar(),
		m.workspace_prompt_cities()
	];
	const descriptions = [
		m.workspace_benchmark_0(),
		m.workspace_benchmark_1(),
		m.workspace_benchmark_2(),
		m.workspace_benchmark_3(),
		m.workspace_benchmark_4()
	];
	const alternatives = [
		m.workspace_alt_0(),
		m.workspace_alt_1(),
		m.workspace_alt_2(),
		m.workspace_alt_3(),
		m.workspace_alt_4(),
		m.workspace_alt_5(),
		m.workspace_alt_6()
	];
	let question = $state<string>(m.workspace_initial_question());
	let activePrompt = $state(2);
	let industry = $state('health');
	let foodFunction = $state('herbal');
	let format = $state('shop');
	let region = $state('europe');
	let compare = $state(true);
	function activate(value: string, index = -1) {
		question = value;
		activePrompt = index;
		industry = 'health';
		foodFunction = 'herbal';
		format = index === 1 ? 'online' : 'shop';
		region = 'europe';
		compare = index !== 1;
		onquestion(value);
	}
	function coverage(value: number) {
		return value === 1
			? m.workspace_full()
			: value === 0.5
				? m.workspace_half()
				: value === 0.25
					? m.workspace_quarter()
					: m.workspace_none();
	}
</script>

<div class="exploration">
	<header>
		<span class="section-tag">{m.workspace_explore()}</span>
		<h2>{m.workspace_explore_title()}</h2>
		<p>{m.workspace_explore_intro()}</p>
	</header>
	<section class="intent" aria-label={m.workspace_intent()}>
		<div class="starters">
			{#each prompts as prompt, i (prompt)}<button
					type="button"
					class:chosen={activePrompt === i}
					aria-pressed={activePrompt === i}
					onclick={() => activate(prompt, i)}>{prompt}<span aria-hidden="true">↗</span></button
				>{/each}
		</div>
		<form
			onsubmit={(event) => {
				event.preventDefault();
				if (question.trim()) activate(question.trim());
			}}
		>
			<label for="explore-question">{m.workspace_intent()}</label><textarea
				id="explore-question"
				bind:value={question}
				rows="2"
				required></textarea><button class="btn" type="submit">{m.workspace_activate()} →</button>
		</form>
		<div class="brief" aria-label={m.workspace_filters()}>
			<span class="tag-pill"
				>{industry === 'health' ? m.workspace_health() : m.workspace_retail()}</span
			><span class="tag-pill"
				>{foodFunction === 'herbal' ? m.workspace_herbal() : m.workspace_gut()}</span
			><span class="tag-pill">{format === 'shop' ? m.workspace_shop() : m.workspace_online()}</span
			><span class="tag-pill"
				>{region === 'europe' ? m.workspace_europe() : m.workspace_world()}</span
			>
		</div>
		<details>
			<summary>{m.workspace_filters()}</summary>
			<div class="filters">
				<label
					>{m.workspace_industry()}<select bind:value={industry}
						><option value="health">{m.workspace_health()}</option><option value="retail"
							>{m.workspace_retail()}</option
						></select
					></label
				>
				<label
					>{m.workspace_function()}<select bind:value={foodFunction}
						><option value="herbal">{m.workspace_herbal()}</option><option value="gut"
							>{m.workspace_gut()}</option
						></select
					></label
				>
				<label
					>{m.workspace_format()}<select bind:value={format}
						><option value="shop">{m.workspace_shop()}</option><option value="online"
							>{m.workspace_online()}</option
						></select
					></label
				>
				<label
					>{m.workspace_region()}<select bind:value={region}
						><option value="europe">{m.workspace_europe()}</option><option value="world"
							>{m.workspace_world()}</option
						></select
					></label
				>
			</div>
			<p class="small">{m.workspace_filter_note()}</p>
		</details>
		<label class="compare"
			><input type="checkbox" bind:checked={compare} />{m.workspace_compare()}</label
		>
	</section>
	<section>
		<span class="section-tag">{m.workspace_shortlist()}</span>
		<h3>{m.workspace_benchmarks()}</h3>
		<p class="small">{m.workspace_reference_note()}</p>
		<div class="benchmarks">
			{#each herbalPharmacyReferences as business, i (business.name)}<article
					class="benchmark lift-card"
				>
					<span class="tag-pill">{business.location}</span>
					<h4>{business.name}</h4>
					<p>{descriptions[i]}</p>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- Benchmark URLs are external HTTPS websites, not application routes. -->
					<a href={business.url} target="_blank" rel="noreferrer">{m.workspace_website()}</a>
				</article>{/each}
		</div>
	</section>
	{#if compare}<section>
			<span class="section-tag">{m.workspace_gap_label()}</span>
			<h3>{m.workspace_gap_question()}</h3>
			<div class="gap">
				<span>{m.workspace_gap_badge()}</span>
				<h3>{m.workspace_gap_title()}</h3>
			</div>
			<p>{m.workspace_gap_text()}</p>
			<p class="small">{m.workspace_gap_verification()}</p>
			<div class="local-evidence">
				<h3>{m.explore_local()}</h3>
				<p>{m.explore_local_copy()}</p>
				<a
					href="https://www.google.com/maps/search/Kr%C3%A4uterapotheke+Frankfurt/"
					target="_blank"
					rel="noreferrer">{m.explore_map_link()}</a
				>
				<p class="small">{m.explore_map_note()}</p>
			</div>
			<h3 class="comparison-heading">{m.workspace_comparison()}</h3>
			<p class="small">{m.workspace_comparison_note()}</p>
			<div class="table-scroll" role="region" aria-label={m.workspace_comparison()}>
				<table>
					<thead
						><tr
							><th scope="col">{m.workspace_alternative()}</th
							>{#each [m.workspace_expertise(), m.workspace_blends(), m.workspace_advice(), m.workspace_product_focus(), m.workspace_price_level(), m.workspace_online(), m.workspace_experience()] as label (label)}<th
									scope="col">{label}</th
								>{/each}</tr
						></thead
					><tbody
						>{#each herbalPharmacyCoverage as row, i (i)}<tr class:target={i === 0}
								><th scope="row">{alternatives[i]}</th>{#each row as value, j (j)}<td
										>{#if typeof value === 'string'}{value}{:else}<span
												class="dot"
												style:--coverage={`${value * 100}%`}
												aria-label={coverage(value)}
												role="img"
											></span>{/if}</td
									>{/each}</tr
							>{/each}</tbody
					>
				</table>
			</div>
			<button type="button" class="btn next" onclick={onhypotheses}
				>{m.workspace_next_step()}</button
			>
		</section>{/if}
	<a class="back-link" href={resolve(localizeHref('/database') as Pathname)}
		>{m.workspace_database_source()}</a
	>
</div>

<style>
	.exploration {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 36px;
	}
	h2 {
		font-size: clamp(1.5rem, 2.5vw, 2.2rem);
		font-weight: 900;
		line-height: 1.2;
		letter-spacing: -0.015em;
		max-width: 680px;
	}
	header p {
		margin-top: 14px;
	}
	p {
		font-size: 0.88rem;
		line-height: 1.65;
		color: #555;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 900;
		line-height: 1.3;
		margin-bottom: 12px;
	}
	.intent {
		padding: 24px;
		background: #fff;
		border: 1px solid rgba(17, 17, 17, 0.14);
	}
	button,
	textarea,
	select {
		font-family: inherit;
	}
	button {
		cursor: pointer;
	}
	.starters {
		display: grid;
		gap: 8px;
	}
	.starters button {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		text-align: left;
		padding: 12px 16px;
		background: #f4f4f2;
		border: 1px solid transparent;
		font-size: 0.8rem;
		font-weight: 600;
		color: #111;
	}
	.starters button.chosen {
		background: #fbedec;
		border-color: #c8332b;
		color: #c8332b;
	}
	form {
		margin: 24px 0;
		display: grid;
		gap: 12px;
	}
	form label {
		font-size: 0.7rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
		color: #6e6e6e;
	}
	textarea {
		width: 100%;
		resize: vertical;
		background: #fff;
		border: 1px solid rgba(17, 17, 17, 0.2);
		padding: 14px;
		font-size: 0.9rem;
		line-height: 1.6;
	}
	form .btn {
		justify-self: start;
	}
	details {
		border-top: 1px solid rgba(17, 17, 17, 0.14);
		padding-top: 16px;
	}
	summary {
		cursor: pointer;
		font-size: 0.75rem;
		font-weight: 700;
	}
	.brief {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 16px;
	}
	.brief .tag-pill {
		font-size: 0.6rem;
		padding: 6px 10px;
	}
	.filters {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
		margin: 16px 0;
	}
	.filters label {
		border: 1.5px solid #c8332b;
		border-radius: 999px;
		padding: 10px 18px;
		font-size: 0.62rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #c8332b;
		font-weight: 700;
		min-width: 0;
	}
	.filters label:nth-child(2) {
		border-color: #2d5c8c;
		color: #2d5c8c;
	}
	.filters label:nth-child(3) {
		border-color: #a86a12;
		color: #a86a12;
	}
	.filters label:nth-child(4) {
		border-color: #6e6e6e;
		color: #6e6e6e;
	}
	select {
		display: block;
		width: 100%;
		background: transparent;
		border: 0;
		color: #111;
		font-size: 0.8rem;
		font-weight: 600;
		margin-top: 3px;
	}
	.compare {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 20px;
		font-size: 0.8rem;
		font-weight: 700;
	}
	input {
		accent-color: #c8332b;
		width: 18px;
		height: 18px;
	}
	.small {
		font-size: 0.73rem;
		color: #6e6e6e;
	}
	.benchmarks {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
		margin-top: 20px;
	}
	.benchmark {
		padding: 18px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 12px;
	}
	.benchmark .tag-pill {
		font-size: 0.6rem;
		padding: 6px 9px;
	}
	h4 {
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.3;
	}
	.benchmark p {
		flex: 1;
		font-size: 0.8rem;
	}
	.benchmark a {
		color: #c8332b;
		border: 1.5px solid #c8332b;
		border-radius: 999px;
		padding: 8px 16px;
		text-decoration: none;
		font-size: 0.7rem;
		font-weight: 700;
	}
	.gap {
		background: #c8332b;
		color: white;
		border-radius: 28px;
		padding: 22px 28px;
		margin-bottom: 16px;
	}
	.gap span {
		display: inline-block;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		background: #fff;
		color: #c8332b;
		border-radius: 999px;
		padding: 6px 12px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	.gap h3 {
		margin: 0;
	}
	.local-evidence {
		padding: 24px;
		background: white;
		border: 1px solid rgba(17, 17, 17, 0.14);
		margin-top: 24px;
	}
	.local-evidence a {
		display: inline-block;
		margin-top: 14px;
		color: #c8332b;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.comparison-heading {
		margin-top: 28px;
	}
	.table-scroll {
		max-width: 100%;
		overflow-x: auto;
		border: 1px solid rgba(17, 17, 17, 0.14);
		margin-top: 16px;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		min-width: 900px;
		table-layout: fixed;
		background: white;
	}
	th,
	td {
		padding: 14px 12px;
		border-bottom: 1px solid rgba(17, 17, 17, 0.08);
	}
	thead th {
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		line-height: 1.4;
		color: #6e6e6e;
	}
	thead th:first-child {
		width: 220px;
	}
	tbody th {
		font-size: 0.78rem;
		text-align: left;
		font-weight: 600;
	}
	td {
		text-align: center;
	}
	.target {
		background: #fbedec;
		color: #c8332b;
	}
	.dot {
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 1.5px solid #111;
		background: conic-gradient(#111 0 var(--coverage), transparent var(--coverage) 100%);
	}
	.next {
		margin-top: 24px;
	}
	:is(button, textarea, select, summary, a, input, .table-scroll):focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	@media (max-width: 580px) {
		.intent {
			padding: 16px;
		}
		.benchmarks,
		.filters {
			grid-template-columns: 1fr;
		}
		.btn {
			padding: 14px 20px;
			font-size: 0.75rem;
		}
	}
</style>
