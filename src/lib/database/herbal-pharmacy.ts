// Reference material adapted from the approved Scout. This fixed shortlist and
// coverage matrix are illustrative, not live search or verified market evidence.
export const herbalPharmacyReferences = [
	{
		name: 'Die Kräuterdrogerie',
		location: 'Vienna, Austria',
		url: 'https://www.kraeuterdrogerie.at/'
	},
	{ name: 'Dr. Kottas', location: 'Vienna, Austria', url: 'https://kottas.at/' },
	{ name: 'Zieten-Apotheke', location: 'Berlin, Germany', url: 'https://www.zietenapotheke.de/' },
	{ name: 'Herbamed Plus', location: 'Poland', url: 'https://herbamedplus.pl/' },
	{
		name: 'Headshop',
		location: 'Amsterdam, Netherlands',
		url: 'https://www.headshop.nl/smartshop/herbs/medicinal-herbs/'
	}
] as const;
export const herbalPharmacyCoverage = [
	[1, 1, 1, 1, '€€', 1, 1],
	[0.5, 1, 0, 0, '€', 0, 1],
	[0.5, 0, 0, 0.5, '€€', 0.5, 0],
	[0, 0, 0, 0, '€', 1, 0],
	[0.5, 0, 1, 0, '€€€', 1, 0],
	[0.25, 0.5, 0, 0, '€€', 1, 0.5],
	[0.25, 0.5, 0, 0, '€€', 1, 0.5]
] as const;

// Draft figures from the approved Database detail. Not verified financial projections.
export const herbalPharmacyDraftFigures = ['€450–700k', '4–6', '€150–250k'] as const;
