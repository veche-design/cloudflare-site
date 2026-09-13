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
export const barefootStorePathway: readonly DashboardPhase[] = [
	{
		name: 'Discover',
		state: 'completed',
		experiments: [
			{
				method: 'Search-intent research',
				question:
					'Is anyone in the Rhine-Main catchment actively searching for a barefoot shoe store?',
				evidence: [
					{
						result: '1,250 / month',
						resultLabel: 'local search volume',
						benchmark: '900 / month',
						benchmarkLabel: 'comparable niche retail'
					}
				]
			},
			{
				method: 'Community/forum research',
				question:
					'Does the barefoot and natural-movement community exist locally in sufficient numbers, and is it reachable?'
			},
			{
				method: 'Customer problem interview',
				question:
					'What do health-conscious runners, parents and people with foot problems in Rhine-Main do today instead, and what do they travel or pay to get?'
			},
			{
				method: 'Competitor-store immersion',
				question:
					'What footfall and conversion do online barefoot retailers and general sports retail achieve, and how do they staff?',
				evidence: [
					{
						result: '118 / hour',
						resultLabel: 'observed footfall',
						benchmark: '96 / hour',
						benchmarkLabel: 'comparable specialty retail'
					},
					{
						result: '5.8%',
						resultLabel: 'observed conversion',
						benchmark: '4.5%',
						benchmarkLabel: 'comparable specialty retail'
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
					'Would health-conscious runners, parents and people with foot problems in Rhine-Main choose a barefoot shoe store over what they buy online today, at €90–160 per pair?',
				evidence: [
					{
						result: '26%',
						resultLabel: 'chose the store concept',
						benchmark: '20%',
						benchmarkLabel: 'comparable concept test'
					}
				]
			},
			{
				method: 'Landing-page test',
				question: 'Will people in this catchment act on the offer before a shop exists?',
				evidence: [
					{
						result: '6.3%',
						resultLabel: 'CTA conversion',
						benchmark: '4.8%',
						benchmarkLabel: 'comparable niche retail'
					}
				]
			}
		]
	},
	{
		name: 'Demand',
		state: 'current',
		experiments: [
			{
				method: 'Market-stall test',
				question: 'Do strangers buy a barefoot shoe store from a table with no shop and no brand?',
				resultsPending: true
			},
			{
				method: 'Basket test',
				question: 'What travels with a barefoot shoe store, and does it carry basket value?',
				resultsPending: true
			}
		]
	},
	{
		name: 'Operate',
		state: 'future',
		experiments: [
			{
				method: 'Pop-up shop',
				question: 'Does a real shop in this catchment convert footfall at the required daily rate?'
			},
			{
				method: 'Event activation',
				question: 'Does the community programme actually bring people in and produce sales?'
			}
		]
	},
	{
		name: 'Economics',
		state: 'future',
		experiments: [
			{
				method: 'Unit-economics pilot',
				question: 'What does one transaction contribute after rent, staff, stock and shrinkage?'
			}
		]
	},
	{
		name: 'Location',
		state: 'future',
		experiments: [
			{
				method: 'Location pilot',
				question: 'Does this specific site deliver the footfall and takings its rent demands?'
			},
			{
				method: 'Temporary lease test',
				question: 'Does trade build or decay over three months in the actual unit?'
			}
		]
	},
	{
		name: 'Retain',
		state: 'future',
		experiments: [
			{
				method: 'Repeat-purchase test',
				question: 'Do first buyers come back, which is the whole model for a specialty store?'
			},
			{
				method: 'Referral test',
				question: 'Does the community actually bring others, unprompted?'
			}
		]
	}
];
