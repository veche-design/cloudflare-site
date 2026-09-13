<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import rabiaImage from '$lib/assets/images/rabia.jpg';
	import SplitHero from '$lib/components/SplitHero.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const projectUrl = new URL(
		resolve(localizeHref('/database/rabia') as Pathname),
		'https://veche.design'
	).href;
	const projectImageUrl = new URL(rabiaImage, 'https://veche.design').href;
</script>

<svelte:head>
	<title>{m.database_project_rabia_meta_title()}</title>
	<meta name="description" content={m.database_project_rabia_description()} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={projectUrl} />
	<meta property="og:title" content={m.database_project_rabia_meta_title()} />
	<meta property="og:description" content={m.database_project_rabia_description()} />
	<meta property="og:image" content={projectImageUrl} />
	<meta property="og:image:width" content="1536" />
	<meta property="og:image:height" content="1024" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.database_project_rabia_meta_title()} />
	<meta name="twitter:description" content={m.database_project_rabia_description()} />
	<meta name="twitter:image" content={projectImageUrl} />
</svelte:head>

<SplitHero
	title={m.home_database_rabia()}
	description={m.database_project_rabia_description()}
	image={rabiaImage}
	imageAlt={m.home_database_rabia_image_alt()}
/>
