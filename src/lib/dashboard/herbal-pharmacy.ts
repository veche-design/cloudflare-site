export type DashboardPhaseState = 'completed' | 'current' | 'future';

export type EvidenceComparison = {
	result: string;
	resultLabel: string;
	benchmark: string;
	benchmarkLabel: string;
};

export type DashboardExperiment = {
	method: string;
	question: string;
	evidence?: readonly EvidenceComparison[];
	resultsPending?: boolean;
};

export type DashboardPhase = {
	name: string;
	state: DashboardPhaseState;
	experiments: readonly DashboardExperiment[];
};

// Illustrative evidence values are intentionally kept beside this prototype
// pathway data so they can be replaced with real evidence later.
export const herbalPharmacyPathway: readonly DashboardPhase[] = [
	{
		name: 'Gate',
		state: 'completed',
		experiments: [
			{
				method: 'Regulatory gate review',
				question:
					'Which herbal medicines, and which frontier substances such as fly agaric and CBD, can legally be sold from a German pharmacy today?',
				evidence: [
					{
						result: '38 substances cleared',
						resultLabel: 'legally sellable at gate review',
						benchmark: '30 substances',
						benchmarkLabel: 'comparable herbal pharmacy'
					}
				]
			},
			{
				method: 'Licensing feasibility check',
				question:
					'Can the venture secure a pharmacy licence and the permits its product range requires?'
			}
		]
	},
	{
		name: 'Discover',
		state: 'completed',
		experiments: [
			{
				method: 'Search-intent research',
				question:
					'Are Rhine-Main residents actively searching for herbal medicines and alternative remedies?',
				evidence: [
					{
						result: '2,100 / month',
						resultLabel: 'local search volume',
						benchmark: '1,400 / month',
						benchmarkLabel: 'comparable niche health retail'
					}
				]
			},
			{
				method: 'Customer problem interview',
				question:
					'What do people seeking traditional or alternative remedies do today instead, and what do they travel or pay to get?'
			}
		]
	},
	{
		name: 'Payer',
		state: 'completed',
		experiments: [
			{
				method: 'Reimbursement pathway review',
				question:
					'Which products can be reimbursed through statutory or private insurance, and which are paid out of pocket?',
				evidence: [
					{
						result: '22%',
						resultLabel: 'of range reimbursable',
						benchmark: '15%',
						benchmarkLabel: 'comparable herbal pharmacy'
					}
				]
			}
		]
	},
	{
		name: 'Concept',
		state: 'completed',
		experiments: [
			{
				method: 'Concept + price test',
				question:
					'Would health-conscious customers choose this pharmacy over their current source for herbal medicines, at its intended pricing?',
				evidence: [
					{
						result: '31%',
						resultLabel: 'chose the pharmacy concept',
						benchmark: '24%',
						benchmarkLabel: 'comparable concept test'
					}
				]
			},
			{
				method: 'Landing-page test',
				question: 'Will people in this catchment act on the offer before a pharmacy exists?',
				evidence: [
					{
						result: '5.4%',
						resultLabel: 'CTA conversion',
						benchmark: '4.2%',
						benchmarkLabel: 'comparable niche health retail'
					}
				]
			}
		]
	},
	{
		name: 'Deliver',
		state: 'completed',
		experiments: [
			{
				method: 'Consultation-format pilot',
				question:
					'Do customers value and act on in-pharmacy consultations for herbal and frontier remedies?',
				evidence: [
					{
						result: '64%',
						resultLabel: 'took a recommended product after consultation',
						benchmark: '48%',
						benchmarkLabel: 'comparable specialty pharmacy'
					}
				]
			},
			{
				method: 'Supplier reliability test',
				question: 'Do herbal and frontier-substance suppliers deliver consistent quality and stock?'
			}
		]
	},
	{
		name: 'Operate',
		state: 'current',
		experiments: [
			{
				method: 'Pop-up counter test',
				question:
					'Does a real counter in this catchment convert footfall at the required daily rate?',
				resultsPending: true
			}
		]
	},
	{
		name: 'Economics',
		state: 'future',
		experiments: [
			{
				method: 'Unit-economics pilot',
				question:
					'What does one transaction contribute after rent, staff, stock and licensing costs?'
			},
			{
				method: 'Insurance-billing cost test',
				question: 'What does reimbursement administration cost per billed transaction?'
			}
		]
	},
	{
		name: 'Location',
		state: 'future',
		experiments: [
			{
				method: 'Location pilot',
				question:
					'Does this specific site deliver the footfall and takings its rent and licence demand?'
			}
		]
	},
	{
		name: 'Launch',
		state: 'future',
		experiments: [
			{
				method: 'Full launch readiness review',
				question:
					'Are licensing, supply, staffing and site all in place to open the pharmacy to the public?'
			}
		]
	}
];
