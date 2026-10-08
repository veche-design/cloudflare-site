<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
	<title>{m.footer_imprint()} — veche.design</title>
</svelte:head>
<section class="doc">
	<div class="doc-wrap">
		<span class="section-tag">{m.impressum_tag()}</span>
		<h1>{m.footer_imprint()}</h1>
		<div class="doc-section">
			<p>{m.impressum_information()}</p>
			<p>
				Kay Jay<br />
				Gärtnerweg 62<br />
				60322 Frankfurt am Main<br />
				Germany
			</p>
			<p>{m.legal_email_label()} <a href="mailto:hello@veche.design">hello@veche.design</a></p>
		</div>
		<a href={resolve(localizeHref('/') as Pathname)} class="back-link">{m.legal_back_home()}</a>
	</div>
</section>
