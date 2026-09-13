<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	type PhaseState = 'completed' | 'current' | 'future';

	type Phase = {
		name: string;
		count: number;
		state: PhaseState;
	};

	type Props = {
		phases: readonly Phase[];
	};

	let { phases }: Props = $props();

	const stateLabel = (state: PhaseState) => {
		switch (state) {
			case 'completed':
				return m.dashboard_phase_completed();
			case 'current':
				return m.dashboard_phase_current();
			case 'future':
				return m.dashboard_phase_future();
		}
	};
</script>

<ol class="phase-grid" aria-label={m.dashboard_phase_grid_label()}>
	{#each phases as phase (phase.name)}
		<li
			class:phase-grid__item--completed={phase.state === 'completed'}
			class:phase-grid__item--current={phase.state === 'current'}
			class:phase-grid__item--future={phase.state === 'future'}
			class="phase-grid__item"
			aria-current={phase.state === 'current' ? 'step' : undefined}
		>
			<span class="phase-grid__name">{phase.name}</span>
			<span class="phase-grid__count" aria-hidden="true">{phase.count}</span>
			<span class="visually-hidden">{phase.count} {m.dashboard_selected_experiments()}</span>
			<span class="visually-hidden">{stateLabel(phase.state)}</span>
		</li>
	{/each}
</ol>

<style>
	.phase-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		list-style: none;
	}

	.phase-grid__item {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		border: 1px solid transparent;
		border-radius: 4px;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		line-height: 1.2;
		padding: 8px 9px;
	}

	.phase-grid__name {
		white-space: nowrap;
	}

	.phase-grid__count {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.45rem;
		border-left: 1px solid currentColor;
		font-variant-numeric: tabular-nums;
		padding-left: 8px;
	}

	.phase-grid__item--completed {
		background: #e6efe7;
		border-color: #b7cfbb;
		color: #2d5c38;
	}

	.phase-grid__item--current {
		background: #fff4d6;
		border-color: #e8c66d;
		color: #644c16;
	}

	.phase-grid__item--future {
		background: #f4f4f2;
		border-color: #d9d9d4;
		color: #5e5e59;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
