<script lang="ts">
	import appleTouchIcon from '$lib/assets/favicon/apple-touch-icon.png';
	import favicon16 from '$lib/assets/favicon/favicon-16.png';
	import favicon32 from '$lib/assets/favicon/favicon-32.png';
	import faviconSvg from '$lib/assets/favicon/favicon.svg';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={faviconSvg} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />
