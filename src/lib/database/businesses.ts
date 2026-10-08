import foodLabImage from '$lib/assets/images/food-lab-frankfurt.jpg';
import kitchensImage from '$lib/assets/images/neighbourhood-kitchens.jpg';
import wallaImage from '$lib/assets/images/walla-supermarket.jpg';
import type { Pathname } from '$app/types';
import { m } from '$lib/paraglide/messages.js';
import barefootStoreImage from '$lib/assets/images/barefoot-store.jpg';
import circularEconomyMallImage from '$lib/assets/images/circular-economy-mall.jpg';
import digitalDetoxLoungeImage from '$lib/assets/images/digital-detox-lounge.jpg';
import dumplingsImage from '$lib/assets/images/dumplings.jpg';
import eisenbahnImage from '$lib/assets/images/eisenbahn.jpg';
import ethiopianFoodBrandImage from '$lib/assets/images/ethiopian-food-brand.jpg';
import functionalBeverageBarImage from '$lib/assets/images/functional-beverage-bar.jpg';
import gesundheitskioskImage from '$lib/assets/images/gesundheitskiosk.jpg';
import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
import kioskChainImage from '$lib/assets/images/kiosk-chain.jpg';
import koreanJjimjilbangImage from '$lib/assets/images/korean-jjimjilbang.jpg';
import lifeSkillsSchoolImage from '$lib/assets/images/life-skills-school.jpg';
import microbiomStoreImage from '$lib/assets/images/microbiom-store.jpg';
import mushroomFarmImage from '$lib/assets/images/mushroom-farm.jpg';
import muslimFashionHouseImage from '$lib/assets/images/muslim-fashion-house.jpg';
import muslimFemaleClubImage from '$lib/assets/images/muslim-female-club.jpg';
import rabiaImage from '$lib/assets/images/rabia.jpg';
import romantasyBookStoreImage from '$lib/assets/images/romantasy-book-store.jpg';
import ukrainianFoodBrandImage from '$lib/assets/images/ukrainian-food-brand.jpg';
import villageStoreFranchiseImage from '$lib/assets/images/village-store-franchise.jpg';
export type DatabaseProject = {
	id: string;
	title: string;
	tags: readonly string[];
	industryTags: readonly string[];
	image?: string;
	imageAlt?: string;
	credit?: string;
	href?: Pathname;
};

// Provisional public list from Experiment_Library_v2.xlsx / Ventures.
// Replace/reconcile it when the dedicated project-list workbook arrives.
export function getBusinesses(): DatabaseProject[] {
	const projects: DatabaseProject[] = [
		{
			id: 'rabia',
			tags: ['insider', 'food'],
			title: m.home_database_rabia(),
			industryTags: [m.database_industry_food()],
			image: rabiaImage,
			imageAlt: m.home_database_rabia_image_alt(),
			href: '/database/rabia'
		},
		{
			id: 'barefoot',
			tags: ['retail'],
			title: m.home_database_barefoot(),
			industryTags: [m.database_industry_retail()],
			image: barefootStoreImage,
			imageAlt: m.home_database_barefoot_image_alt(),
			href: '/database/barefoot-store'
		},
		{
			id: 'herbal',
			tags: ['scouted', 'health'],
			title: m.home_database_herbal_pharmacy(),
			industryTags: [m.database_industry_health(), m.database_industry_retail()],
			image: herbalPharmacyImage,
			imageAlt: m.home_database_herbal_pharmacy_image_alt(),
			href: '/database/herbal-pharmacy'
		},
		{
			id: 'dumpling',
			tags: ['insider', 'gastro'],
			title: 'Dumpling Restaurant Franchise',
			industryTags: [m.database_industry_gastro()],
			image: dumplingsImage,
			imageAlt: 'Dumpling restaurant chain'
		},
		{
			id: 'village',
			tags: ['retail'],
			title: 'Village Store Franchise',
			industryTags: [m.database_industry_retail()],
			image: villageStoreFranchiseImage,
			imageAlt: 'Village Store Franchise'
		},
		{
			id: 'fashion',
			tags: ['retail'],
			title: 'Muslim Fashion House',
			industryTags: [m.database_industry_retail()],
			image: muslimFashionHouseImage,
			imageAlt: 'Muslim Fashion House'
		},
		{
			id: 'circular',
			tags: ['retail'],
			title: 'Circular Economy Mall',
			industryTags: [m.database_industry_crafts(), m.database_industry_retail()],
			image: circularEconomyMallImage,
			imageAlt: 'Circular Economy Mall'
		},
		{
			id: 'kiosk',
			tags: ['retail'],
			title: 'Kiosk Chain',
			industryTags: [m.database_industry_retail()],
			image: kioskChainImage,
			imageAlt: 'Kiosk Chain'
		},
		{
			id: 'mushroom',
			tags: ['scouted', 'food'],
			title: 'Mushroom Farm',
			industryTags: [m.database_industry_food()],
			image: mushroomFarmImage,
			imageAlt: 'Mushroom Farm'
		},
		{
			id: 'eisenbahn',
			tags: ['retail'],
			title: 'Model Eisenbahn Store and Maker Club',
			industryTags: [m.database_industry_retail()],
			image: eisenbahnImage,
			imageAlt: 'Model Eisenbahn Store and Maker Club'
		},
		{
			id: 'ethiopian',
			tags: ['insider', 'food'],
			title: 'Ethiopian Food Brand',
			industryTags: [m.database_industry_food()],
			image: ethiopianFoodBrandImage,
			imageAlt: 'Ethiopian Food Brand'
		},
		{
			id: 'ukrainian',
			tags: ['insider', 'food', 'gastro'],
			title: 'Ukrainian Food Brand',
			industryTags: [m.database_industry_food(), m.database_industry_gastro()],
			image: ukrainianFoodBrandImage,
			imageAlt: 'Ukrainian Food Brand'
		},
		{
			id: 'romantasy',
			tags: ['retail', 'gastro'],
			title: 'Romantasy Book Store & Bar',
			industryTags: [m.database_industry_retail(), m.database_industry_gastro()],
			image: romantasyBookStoreImage,
			imageAlt: 'Romantasy Book Store & Bar'
		},
		{
			id: 'club',
			tags: ['social'],
			title: 'Muslim Female Club',
			industryTags: [m.database_industry_community()],
			image: muslimFemaleClubImage,
			imageAlt: 'Muslim Female Club'
		},
		{
			id: 'microbiom',
			tags: ['scouted', 'health'],
			title: 'Microbiom Store',
			industryTags: [m.database_industry_health(), m.database_industry_retail()],
			image: microbiomStoreImage,
			imageAlt: 'Microbiom Store'
		},
		{
			id: 'gesundheit',
			tags: ['health'],
			title: 'Gesundheitskiosk',
			industryTags: [m.database_industry_health()],
			image: gesundheitskioskImage,
			imageAlt: 'Gesundheitskiosk'
		},
		{
			id: 'beverage',
			tags: ['scouted', 'gastro', 'health'],
			title: 'Functional Beverage Bar',
			industryTags: [m.database_industry_gastro(), m.database_industry_health()],
			image: functionalBeverageBarImage,
			imageAlt: 'Functional Beverage Bar'
		},
		{
			id: 'jjimjilbang',
			tags: ['health'],
			title: 'Korean Jjimjilbang',
			industryTags: [m.database_industry_health()],
			image: koreanJjimjilbangImage,
			imageAlt: 'Korean Jjimjilbang'
		},
		{
			id: 'detox',
			tags: ['health'],
			title: 'Digital Detox / Focus Lounge',
			industryTags: [m.database_industry_health()],
			image: digitalDetoxLoungeImage,
			imageAlt: 'Digital Detox / Focus Lounge'
		},
		{
			id: 'school',
			tags: ['social'],
			title: 'Life Skills School for Kids',
			industryTags: [m.database_industry_community()],
			image: lifeSkillsSchoolImage,
			imageAlt: 'Life Skills School for Kids'
		},
		{
			id: 'walla',
			tags: ['insider', 'retail'],
			image: wallaImage,
			title: 'Walla Supermarket Franchise',
			industryTags: [m.database_industry_retail()]
		},
		{
			id: 'foodlab',
			title: m.library_foodlab(),
			tags: ['scouted', 'infrastructure'],
			industryTags: [m.library_infrastructure()],
			image: foodLabImage
		},
		{
			id: 'kitchens',
			title: m.library_kitchens(),
			tags: ['social', 'gastro'],
			industryTags: [m.library_social(), m.database_industry_gastro()],
			image: kitchensImage,
			credit: '© Diana Djeddi'
		}
	];
	// Present the approved shortlist first, keeping all existing library entries.
	const approvedOrder = [
		'rabia',
		'herbal',
		'microbiom',
		'dumpling',
		'mushroom',
		'ethiopian',
		'ukrainian',
		'beverage',
		'walla',
		'foodlab',
		'kitchens'
	];
	const rank = (id: string) => {
		const index = approvedOrder.indexOf(id);
		return index < 0 ? approvedOrder.length : index;
	};
	return projects.sort((a, b) => rank(a.id) - rank(b.id));
}

export function getBusinessTags() {
	return [
		{ id: 'scouted', label: m.library_scouted() },
		{ id: 'insider', label: m.library_insider() },
		{ id: 'gastro', label: m.database_industry_gastro() },
		{ id: 'food', label: m.library_food() },
		{ id: 'health', label: m.library_health() },
		{ id: 'retail', label: m.database_industry_retail() },
		{ id: 'social', label: m.library_social() },
		{ id: 'infrastructure', label: m.library_infrastructure() }
	];
}
