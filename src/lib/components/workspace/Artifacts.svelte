<script lang="ts">
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import DashboardExperiment from '$lib/components/DashboardExperiment.svelte';
	import EvidenceComparison from '$lib/components/EvidenceComparison.svelte';
	import { herbalPharmacyPathway } from '$lib/dashboard/herbal-pharmacy';
	import { m } from '$lib/paraglide/messages.js';
	let {
		mode,
		selected,
		onnavigate,
		ondiscuss
	}: {
		mode: 'validation' | 'design';
		selected: string;
		onnavigate: (section: string) => void;
		ondiscuss: (question: string) => void;
	} = $props();
	// References to the production pathway, never copies of experiment/evidence data.
	function experiment(phase: string, index = 0) {
		return herbalPharmacyPathway.find((item) => item.name === phase)!.experiments[index];
	}
	const hypotheses = [
		{
			title: m.workspace_hyp_0(),
			why: m.workspace_why_0(),
			experiment: experiment('Gate', 1),
			critical: true
		},
		{
			title: m.workspace_hyp_1(),
			why: m.workspace_why_1(),
			experiment: experiment('Concept'),
			critical: false
		},
		{
			title: m.workspace_hyp_2(),
			why: m.workspace_why_2(),
			experiment: experiment('Operate'),
			critical: true
		},
		{
			title: m.workspace_hyp_3(),
			why: m.workspace_why_3(),
			experiment: experiment('Economics'),
			critical: true
		}
	];
	const artifacts = [
		{
			id: 'customer',
			title: m.workspace_customer(),
			current: m.workspace_customer_current(),
			assumption: m.workspace_customer_assumption(),
			question: experiment('Concept')
		},
		{
			id: 'problem',
			title: m.workspace_problem(),
			current: m.workspace_problem_current(),
			assumption: m.workspace_problem_assumption(),
			question: experiment('Discover', 1)
		},
		{
			id: 'value',
			title: m.workspace_value(),
			current: m.workspace_value_current(),
			assumption: m.workspace_value_assumption(),
			question: experiment('Deliver')
		},
		{
			id: 'offering',
			title: m.workspace_offering(),
			current: m.workspace_offering_current(),
			assumption: m.workspace_offering_assumption(),
			question: experiment('Gate')
		},
		{
			id: 'market',
			title: m.workspace_market(),
			current: m.workspace_market_current(),
			assumption: m.workspace_market_assumption(),
			question: experiment('Discover')
		},
		{
			id: 'gtm',
			title: m.workspace_gtm(),
			current: m.workspace_gtm_current(),
			assumption: m.workspace_gtm_assumption(),
			question: experiment('Operate')
		},
		{
			id: 'economics',
			title: m.workspace_economics(),
			current: m.workspace_economics_current(),
			assumption: m.workspace_economics_assumption(),
			question: experiment('Economics')
		},
		{
			id: 'model',
			title: m.workspace_model(),
			current: m.workspace_model_current(),
			assumption: m.workspace_model_assumption(),
			question: experiment('Payer')
		}
	];
	const artifact = $derived(artifacts.find((item) => item.id === selected));
	let expanded = $state<string[]>(['Operate']);
	function toggle(name: string) {
		expanded = expanded.includes(name)
			? expanded.filter((item) => item !== name)
			: [...expanded, name];
	}
	const signals = [experiment('Discover'), experiment('Concept'), experiment('Deliver')];
	const unresolved = [experiment('Gate', 1), experiment('Operate'), experiment('Economics')];
	function phaseLabel(state: string) {
		return state === 'completed'
			? m.workspace_phase_completed()
			: state === 'current'
				? m.workspace_phase_current()
				: m.workspace_phase_future();
	}
</script>

<div class="artifacts">
	{#if mode === 'design' && artifact}
		<header>
			<span class="section-tag">{m.workspace_business_design()} · {m.workspace_working()}</span>
			<h2>{artifact.title}</h2>
			<p>{m.workspace_design_intro()}</p>
		</header>
		<article class="working-artifact">
			<span class="eyebrow">{m.workspace_design_current()}</span>
			<p class="artifact-statement">{artifact.current}</p>
			<div class="assumption">
				<span class="eyebrow">{m.workspace_design_assumptions()}</span>
				<p>{artifact.assumption}</p>
			</div>
		</article>
		<section class="connection">
			<span class="section-tag">{m.workspace_design_connection()}</span><DashboardExperiment
				{...artifact.question}
			/>
			<p class="small">{m.dashboard_illustrative_data_note()}</p>
			<div class="actions">
				<button class="btn" onclick={() => onnavigate('experiments')}
					>{m.workspace_view_programme()}</button
				><button class="text-action" onclick={() => ondiscuss(m.workspace_ask_design())}
					>{m.workspace_ask_design()} ↗</button
				>
			</div>
		</section>
	{:else if selected === 'idea'}
		<header>
			<span class="section-tag">{m.workspace_idea()} · {m.workspace_working()}</span>
			<h2>{m.workspace_idea_title()}</h2>
		</header>
		<article class="idea-artifact">
			<img src={herbalPharmacyImage} alt={m.home_database_herbal_pharmacy_image_alt()} />
			<div>
				<h3>{m.home_database_herbal_pharmacy()}</h3>
				<p>{m.workspace_idea_copy()}</p>
				<p class="small">{m.workspace_idea_next()}</p>
			</div>
		</article>
		<div class="actions">
			<button class="btn" onclick={() => onnavigate('explore')}>{m.workspace_explore()} →</button
			><button class="text-action" onclick={() => onnavigate('hypotheses')}
				>{m.workspace_hypotheses()} →</button
			>
		</div>
	{:else if selected === 'hypotheses'}
		<header>
			<span class="section-tag">{m.workspace_hypotheses()}</span>
			<h2>{m.workspace_hypotheses_title()}</h2>
			<p>{m.workspace_hypotheses_intro()}</p>
		</header>
		{#each hypotheses as hypothesis, i (hypothesis.title)}<article class="hypothesis lift-card">
				<div class="hypothesis-top">
					<span class="number">{String(i + 1).padStart(2, '0')}</span><span class="tag-pill"
						>{hypothesis.critical ? m.workspace_critical() : m.workspace_important()}</span
					>
				</div>
				<span class="eyebrow">{m.workspace_assumption()}</span>
				<h3>{hypothesis.title}</h3>
				<span class="eyebrow">{m.workspace_why()}</span>
				<p>{hypothesis.why}</p>
				<div class="question">
					<span class="eyebrow">{m.workspace_linked_question()}</span>
					<p>{hypothesis.experiment.question}</p>
					<div class="actions">
						<button class="text-action" onclick={() => onnavigate('experiments')}
							>{hypothesis.experiment.method} →</button
						><button class="text-action" onclick={() => ondiscuss(hypothesis.experiment.question)}
							>{m.workspace_discuss()}</button
						>
					</div>
				</div>
			</article>{/each}
	{:else if selected === 'experiments'}
		<header>
			<span class="section-tag">{m.workspace_experiments()}</span>
			<h2>{m.workspace_experiments_title()}</h2>
			<p>{m.workspace_experiments_intro()}</p>
			<p class="small">{m.dashboard_illustrative_data_note()}</p>
		</header>
		<div class="programme">
			{#each herbalPharmacyPathway as phase, i (phase.name)}<section class="module">
					<h3>
						<button
							class="module-toggle"
							aria-expanded={expanded.includes(phase.name)}
							aria-controls={`module-${i}`}
							onclick={() => toggle(phase.name)}
							><span class="number" class:current={phase.state === 'current'}
								>{String(i).padStart(2, '0')}</span
							><span class="module-title"
								>{phase.name}<span
									>{phaseLabel(phase.state)} · {phase.experiments.length}
									{phase.experiments.length === 1
										? m.dashboard_experiment()
										: m.dashboard_experiments()}</span
								></span
							><span class="plus" aria-hidden="true"
								>{expanded.includes(phase.name) ? '−' : '+'}</span
							></button
						>
					</h3>
					<div class="module-content" id={`module-${i}`} hidden={!expanded.includes(phase.name)}>
						{#each phase.experiments as item (item.method)}<div>
								<p class="status">
									{item.resultsPending
										? m.workspace_pending()
										: item.evidence
											? m.workspace_illustrative()
											: m.workspace_no_evidence()}
								</p>
								<DashboardExperiment {...item} /><button
									class="text-action"
									onclick={() => ondiscuss(item.question)}>{m.workspace_discuss()}</button
								>
							</div>{/each}
					</div>
				</section>{/each}
		</div>
	{:else if selected === 'learnings'}
		<header>
			<span class="section-tag">{m.workspace_learnings()}</span>
			<h2>{m.workspace_learnings_title()}</h2>
			<p>{m.workspace_learnings_intro()}</p>
		</header>
		<section class="learning">
			<h3>{m.workspace_support()}</h3>
			<p>{m.workspace_support_note()}</p>
			{#each signals as signal (signal.method)}<div class="signal">
					<h4>{signal.method}</h4>
					{#if signal.evidence}<EvidenceComparison comparisons={signal.evidence} />{/if}
				</div>{/each}
		</section>
		<section class="learning">
			<h3>{m.workspace_contradict()}</h3>
			<p>{m.workspace_contradict_note()}</p>
		</section>
		<section class="learning">
			<h3>{m.workspace_unresolved()}</h3>
			{#each unresolved as item (item.method)}<div class="unresolved">
					<span class="eyebrow"
						>{item.resultsPending ? m.workspace_pending() : m.workspace_no_evidence()}</span
					>
					<p>{item.question}</p>
					<button class="text-action" onclick={() => onnavigate('experiments')}
						>{item.method} →</button
					>
				</div>{/each}
		</section>
		<section class="implications">
			<span class="section-tag">{m.workspace_implications()}</span>
			<p>{m.workspace_implications_copy()}</p>
			<div class="actions">
				<button class="text-action" onclick={() => onnavigate('idea')}
					>{m.workspace_revisit_idea()}</button
				><button class="text-action" onclick={() => onnavigate('explore')}
					>{m.workspace_revisit_explore()}</button
				><button class="text-action" onclick={() => onnavigate('hypotheses')}
					>{m.workspace_revisit_hypotheses()}</button
				>
			</div>
		</section>
	{/if}
</div>

<style>
	.artifacts {
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
		color: #555;
		font-size: 0.88rem;
		line-height: 1.7;
	}
	h3 {
		font-size: 1.1rem;
		font-weight: 900;
		line-height: 1.35;
	}
	h4 {
		font-size: 0.85rem;
		font-weight: 700;
	}
	.eyebrow {
		display: block;
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #6e6e6e;
	}
	.small {
		font-size: 0.73rem;
		color: #6e6e6e;
		margin-top: 16px;
	}
	button {
		font-family: inherit;
		cursor: pointer;
	}
	.working-artifact,
	.learning,
	.hypothesis {
		padding: 28px;
		background: #fff;
		border: 1px solid rgba(17, 17, 17, 0.14);
	}
	.artifact-statement {
		font-size: 1.2rem;
		font-weight: 600;
		color: #111;
		margin: 16px 0 28px;
		line-height: 1.6;
	}
	.assumption {
		border-left: 2px solid #c8332b;
		padding-left: 16px;
	}
	.assumption p {
		margin-top: 8px;
	}
	.actions {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 20px;
	}
	.text-action {
		border: 0;
		background: transparent;
		color: #c8332b;
		padding: 8px 0;
		text-align: left;
		font-size: 0.75rem;
		font-weight: 700;
	}
	.idea-artifact {
		border: 1px solid rgba(17, 17, 17, 0.14);
		background: #fff;
	}
	.idea-artifact img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
		display: block;
	}
	.idea-artifact > div {
		padding: 28px;
	}
	.idea-artifact p {
		margin-top: 16px;
	}
	.hypothesis-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 20px;
	}
	.tag-pill {
		font-size: 0.6rem;
		padding: 7px 12px;
	}
	.number {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f4f4f2;
		border: 1px solid #d9d9d4;
		border-radius: 50%;
		font-size: 0.7rem;
		font-weight: 700;
		flex-shrink: 0;
		color: #5e5e59;
	}
	.number.current {
		background: #fff4d6;
		border-color: #e8c66d;
		color: #644c16;
	}
	.hypothesis h3 {
		margin: 8px 0 20px;
	}
	.hypothesis p {
		margin-top: 8px;
	}
	.question {
		border-top: 1px solid rgba(17, 17, 17, 0.14);
		margin-top: 20px;
		padding-top: 20px;
	}
	.programme {
		display: grid;
		gap: 14px;
	}
	.module {
		border: 1px solid rgba(17, 17, 17, 0.14);
		background: #fff;
	}
	.module-toggle {
		display: flex;
		align-items: center;
		gap: 16px;
		width: 100%;
		padding: 20px;
		border: 0;
		background: transparent;
		text-align: left;
	}
	.module-title {
		font-size: 1.1rem;
		font-weight: 900;
		flex: 1;
	}
	.module-title > span {
		display: block;
		font-size: 0.68rem;
		font-weight: 500;
		color: #6e6e6e;
		margin-top: 6px;
		line-height: 1.5;
	}
	.plus {
		font-size: 1.4rem;
		font-weight: 700;
		color: #c8332b;
	}
	.module-content:not([hidden]) {
		display: grid;
		gap: 20px;
		padding: 20px;
		border-top: 1px solid rgba(17, 17, 17, 0.14);
	}
	.status {
		font-size: 0.65rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 8px;
		color: #c8332b;
	}
	.learning > p {
		margin-top: 12px;
	}
	.signal,
	.unresolved {
		margin-top: 24px;
		padding-top: 20px;
		border-top: 1px solid rgba(17, 17, 17, 0.14);
	}
	.unresolved p {
		margin-top: 8px;
	}
	.implications {
		padding: 28px;
		background: #fbedec;
	}
	button:focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	@media (max-width: 580px) {
		.working-artifact,
		.learning,
		.hypothesis,
		.implications {
			padding: 20px;
		}
		.module-toggle {
			padding: 16px;
			gap: 12px;
		}
		.number {
			width: 36px;
			height: 36px;
		}
		.btn {
			padding: 14px 20px;
		}
	}
</style>
