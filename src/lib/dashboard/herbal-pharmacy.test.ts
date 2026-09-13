import { describe, expect, it } from 'vitest';
import { herbalPharmacyPathway } from './herbal-pharmacy';

describe('herbalPharmacyPathway', () => {
	it('matches the phase counts shown on the dashboard overview card', () => {
		const counts = herbalPharmacyPathway.map((phase) => [phase.name, phase.experiments.length]);

		expect(counts).toEqual([
			['Gate', 2],
			['Discover', 2],
			['Payer', 1],
			['Concept', 2],
			['Deliver', 2],
			['Operate', 1],
			['Economics', 2],
			['Location', 1],
			['Launch', 1]
		]);
	});

	it('has exactly one current phase', () => {
		const currentPhases = herbalPharmacyPathway.filter((phase) => phase.state === 'current');

		expect(currentPhases).toHaveLength(1);
		expect(currentPhases[0].name).toBe('Operate');
	});
});
