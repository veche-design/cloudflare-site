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
export const rabiaPathway: readonly DashboardPhase[] = [
	{
		name: 'Discover',
		state: 'current',
		experiments: [
			{
				method: 'Search-intent research',
				question:
					'Are Rhine-Main shoppers actively searching for packaged Afghan/Persian/Arabic food products?',
				resultsPending: true
			},
			{
				method: 'Community/forum research',
				question:
					'Does the local Afghan, Persian and Arabic diaspora exist in sufficient numbers to seed early demand, and is it reachable?',
				resultsPending: true
			},
			{
				method: 'Customer problem interview',
				question:
					'What do households who cook Afghan/Persian/Arabic food do today for hard-to-find ingredients, and what do they travel or pay to get?',
				resultsPending: true
			}
		]
	},
	{
		name: 'Feasibility',
		state: 'future',
		experiments: [
			{
				method: 'Supplier feasibility review',
				question:
					'Can recipes be sourced, produced and packaged at a cost that supports ethnic-retail and mainstream-retail pricing?'
			}
		]
	},
	{
		name: 'Product',
		state: 'future',
		experiments: [
			{
				method: 'Recipe tasting panel',
				question: 'Which packaged product formats and flavours perform best with target households?'
			},
			{
				method: 'Shelf-life and packaging test',
				question: 'Does the packaged product hold quality and safety over its intended shelf life?'
			},
			{
				method: 'Label and compliance review',
				question:
					'Does the product meet German/EU food-labelling and import requirements for retail sale?'
			}
		]
	},
	{
		name: 'Concept',
		state: 'future',
		experiments: [
			{
				method: 'Concept + price test',
				question:
					'Would target households choose this brand over what they buy today in ethnic supermarkets, at the intended price point?'
			}
		]
	},
	{
		name: 'Quality',
		state: 'future',
		experiments: [
			{
				method: 'Blind taste comparison',
				question: 'How does the product compare on taste and authenticity to existing imports?'
			},
			{
				method: 'Repeat-batch consistency test',
				question: 'Does quality stay consistent across production batches at small scale?'
			}
		]
	},
	{
		name: 'Demand',
		state: 'future',
		experiments: [
			{
				method: 'Ethnic-supermarket pilot',
				question: 'Do ethnic supermarkets stock the product, and do shoppers buy it at shelf?'
			},
			{
				method: 'Market-stall test',
				question: 'Do strangers buy the product from a table with no established brand?'
			}
		]
	},
	{
		name: 'Channel',
		state: 'future',
		experiments: [
			{
				method: 'REWE/EDEKA listing pitch',
				question:
					'Do mainstream grocery buyers see enough proven demand to list the product alongside ethnic-retail sales?'
			},
			{
				method: 'Distributor partnership test',
				question: 'Can a distributor deliver the reach and reliability mainstream retail requires?'
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
					'What does one unit contribute after ingredients, production, packaging and listing fees?'
			},
			{
				method: 'Retail margin negotiation test',
				question: 'Do retailer margin and slotting demands still leave a viable contribution?'
			}
		]
	},
	{
		name: 'Scale',
		state: 'future',
		experiments: [
			{
				method: 'Production scale-up pilot',
				question:
					'Can production scale from small-batch to mainstream-retail volumes without quality loss?'
			},
			{
				method: 'Multi-region rollout test',
				question: 'Does demand hold once the brand moves beyond its initial Rhine-Main base?'
			}
		]
	}
];
