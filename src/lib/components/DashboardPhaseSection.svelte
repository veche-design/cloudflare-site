<script lang="ts">
	import DashboardExperiment from '$lib/components/DashboardExperiment.svelte';
	import { m } from '$lib/paraglide/messages.js';

	type PhaseState = 'completed' | 'current' | 'future';

	type Experiment = {
		method: string;
		question: string;
		evidence?: readonly {
			result: string;
			resultLabel: string;
			benchmark: string;
			benchmarkLabel: string;
		}[];
		resultsPending?: boolean;
	};

	type Props = {
		index: number;
		name: string;
		state: PhaseState;
		experiments: readonly Experiment[];
	};

	let { index, name, state, experiments }: Props = $props();

	const stateLabel = (phaseState: PhaseState) => {
		switch (phaseState) {
			case 'completed':
				return m.dashboard_completed();
			case 'current':
				return m.dashboard_current();
			case 'future':
				return m.dashboard_future();
		}
	};

	const experimentLabel = (count: number) =>
		count === 1 ? m.dashboard_experiment() : m.dashboard_experiments();
</script>

<section
	class:dashboard-phase--completed={state === 'completed'}
	class:dashboard-phase--current={state === 'current'}
	class:dashboard-phase--future={state === 'future'}
	class="dashboard-phase"
	aria-labelledby={`phase-${index}`}
	aria-current={state === 'current' ? 'step' : undefined}
>
	<div class="dashboard-phase__marker" aria-hidden="true">{String(index).padStart(2, '0')}</div>

	<div class="dashboard-phase__content">
		<header class="dashboard-phase__header">
			<h2 id={`phase-${index}`}>{name}</h2>
			<p>
				<span>{stateLabel(state)}</span>
				{experiments.length}
				{experimentLabel(experiments.length)}
			</p>
		</header>

		<div class="dashboard-phase__experiments">
			{#each experiments as experiment (experiment.method)}
				<DashboardExperiment {...experiment} />
			{/each}
		</div>
	</div>
</section>

<style>
	.dashboard-phase {
		display: grid;
		grid-template-columns: 48px minmax(0, 1fr);
		gap: 20px;
		position: relative;
	}

	.dashboard-phase:not(:last-child)::before {
		position: absolute;
		top: 48px;
		bottom: -40px;
		left: 23px;
		width: 1px;
		background: rgba(17, 17, 17, 0.16);
		content: '';
	}

	.dashboard-phase__marker {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border: 1px solid #d9d9d4;
		border-radius: 50%;
		background: #f4f4f2;
		color: #5e5e59;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		line-height: 1;
	}

	.dashboard-phase--completed .dashboard-phase__marker {
		border-color: #b7cfbb;
		background: #e6efe7;
		color: #2d5c38;
	}

	.dashboard-phase--current .dashboard-phase__marker {
		border-color: #e8c66d;
		background: #fff4d6;
		color: #644c16;
	}

	.dashboard-phase__header h2 {
		font-size: clamp(1.25rem, 2.2vw, 1.55rem);
		font-weight: 900;
		letter-spacing: -0.02em;
		line-height: 1.15;
	}

	.dashboard-phase__header p {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 7px;
		color: #5a5a5a;
		font-size: 0.76rem;
		font-weight: 700;
	}

	.dashboard-phase__header p span::after {
		content: ' ·';
	}

	.dashboard-phase--completed .dashboard-phase__header p span {
		color: #2d5c38;
	}

	.dashboard-phase--current .dashboard-phase__header p span {
		color: #644c16;
	}

	.dashboard-phase--future .dashboard-phase__header p span {
		color: #5e5e59;
	}

	.dashboard-phase__experiments {
		display: grid;
		gap: 14px;
		margin-top: 20px;
	}

	@media (max-width: 600px) {
		.dashboard-phase {
			grid-template-columns: 36px minmax(0, 1fr);
			gap: 14px;
		}

		.dashboard-phase:not(:last-child)::before {
			left: 17px;
		}

		.dashboard-phase__marker {
			width: 36px;
			height: 36px;
			font-size: 0.62rem;
		}
	}
</style>
