<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Path } from '$app/types';
	import { getLocale, localizeHref } from '#lib/paraglide/runtime.js';

	const locale = getLocale();
	const homeHref = resolve(localizeHref('/') as Path);
</script>

<svelte:head>
	<title>Impressum — veche.design</title>
</svelte:head>

<section class="doc">
	<div class="doc-wrap">
		{#if locale === 'de'}
			<span class="section-tag">Impressum</span>
			<h1>Impressum</h1>

			<div class="doc-section">
				<p>Angaben gemäß § 5 TMG</p>
				<p>
					Kay Jay<br />
					Gärtnerweg 62<br />
					60322 Frankfurt am Main<br />
					Deutschland
				</p>
				<p>E-Mail: <a href="mailto:hello@veche.design">hello@veche.design</a></p>
			</div>

			<a href={homeHref} class="back-link">&larr; Zurück zur Startseite</a>
		{:else}
			<span class="section-tag">Legal Notice</span>
			<h1>Impressum</h1>

			<div class="doc-section">
				<p>Information according to § 5 TMG</p>
				<p>
					Kay Jay<br />
					Gärtnerweg 62<br />
					60322 Frankfurt am Main<br />
					Germany
				</p>
				<p>Email: <a href="mailto:hello@veche.design">hello@veche.design</a></p>
			</div>

			<a href={homeHref} class="back-link">&larr; Back to homepage</a>
		{/if}
	</div>
</section>
