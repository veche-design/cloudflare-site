import { describe, expect, it } from 'vitest';
import { rabiaPathway } from './rabia';

describe('rabiaPathway', () => {
	it('matches the phase counts shown on the dashboard overview card', () => {
		const counts = rabiaPathway.map((phase) => [phase.name, phase.experiments.length]);

		expect(counts).toEqual([
			['Discover', 3],
			['Feasibility', 1],
			['Product', 3],
			['Concept', 1],
			['Quality', 2],
			['Demand', 2],
			['Channel', 2],
			['Economics', 2],
			['Scale', 2]
		]);
	});

	it('has exactly one current phase', () => {
		const currentPhases = rabiaPathway.filter((phase) => phase.state === 'current');

		expect(currentPhases).toHaveLength(1);
		expect(currentPhases[0].name).toBe('Discover');
	});
});
