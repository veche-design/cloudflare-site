<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	type Comparison = {
		result: string;
		resultLabel: string;
		benchmark: string;
		benchmarkLabel: string;
	};

	type Props = {
		comparisons: readonly Comparison[];
	};

	let { comparisons }: Props = $props();
</script>

<section class="evidence-comparison" aria-label={m.dashboard_evidence_comparison_label()}>
	<div class="evidence-comparison__metrics">
		{#each comparisons as comparison (comparison.resultLabel)}
			<div class="evidence-comparison__pair">
				<div>
					<span class="evidence-comparison__label">{m.dashboard_your_result()}</span>
					<strong>{comparison.result}</strong>
					<p>{comparison.resultLabel}</p>
				</div>

				<div>
					<span class="evidence-comparison__label">{m.dashboard_benchmark()}</span>
					<strong>{comparison.benchmark}</strong>
					<p>{comparison.benchmarkLabel}</p>
				</div>
			</div>
		{/each}
	</div>

	<p class="evidence-comparison__context">{m.dashboard_illustrative_benchmark()}</p>
</section>

<style>
	.evidence-comparison {
		margin-top: 20px;
		border-top: 1px solid rgba(17, 17, 17, 0.12);
		padding-top: 16px;
	}

	.evidence-comparison__metrics {
		display: grid;
		gap: 12px;
	}

	.evidence-comparison__pair {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
	}

	.evidence-comparison__pair > div {
		border-left: 2px solid #c8332b;
		padding-left: 10px;
	}

	.evidence-comparison__label {
		display: block;
		color: #6e6e6e;
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		line-height: 1.3;
		text-transform: uppercase;
	}

	.evidence-comparison strong {
		display: block;
		margin-top: 4px;
		font-size: 1.1rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}

	.evidence-comparison p {
		margin-top: 4px;
		color: #5a5a5a;
		font-size: 0.72rem;
		line-height: 1.4;
	}

	.evidence-comparison__context {
		margin-top: 12px !important;
		color: #6e6e6e !important;
		font-size: 0.66rem !important;
		font-style: italic;
	}

	@media (max-width: 480px) {
		.evidence-comparison__pair {
			grid-template-columns: 1fr;
			gap: 10px;
		}
	}
</style>
