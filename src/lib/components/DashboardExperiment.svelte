<script lang="ts">
	import EvidenceComparison from '$lib/components/EvidenceComparison.svelte';
	import { m } from '$lib/paraglide/messages.js';

	type EvidenceComparisonData = {
		result: string;
		resultLabel: string;
		benchmark: string;
		benchmarkLabel: string;
	};

	type Props = {
		method: string;
		question: string;
		evidence?: readonly EvidenceComparisonData[];
		resultsPending?: boolean;
	};

	let { method, question, evidence, resultsPending = false }: Props = $props();
</script>

<article class="dashboard-experiment">
	<h3>{method}</h3>
	<p class="dashboard-experiment__question">{question}</p>

	{#if evidence}
		<EvidenceComparison comparisons={evidence} />
	{:else if resultsPending}
		<p class="dashboard-experiment__pending">{m.dashboard_results_not_available()}</p>
	{/if}
</article>

<style>
	.dashboard-experiment {
		background: #fff;
		border: 1px solid rgba(17, 17, 17, 0.14);
		padding: clamp(20px, 3vw, 28px);
	}

	.dashboard-experiment h3 {
		font-size: 1rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		line-height: 1.35;
	}

	.dashboard-experiment__question {
		margin-top: 9px;
		color: #333;
		font-size: 0.95rem;
		line-height: 1.65;
	}

	.dashboard-experiment__pending {
		margin-top: 18px;
		color: #6e6e6e;
		font-size: 0.75rem;
		font-weight: 600;
	}
</style>
