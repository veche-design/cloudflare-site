<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
	<title>{m.privacy_title()} — veche.design</title>
</svelte:head>
<section class="doc">
	<div class="doc-wrap">
		<span class="section-tag">{m.privacy_tag()}</span>
		<h1>{m.privacy_title()}</h1>
		<p class="doc-updated">{m.privacy_updated()}</p>
		<div class="doc-section">
			<h2>{m.privacy_controller_title()}</h2>
			<p>{m.privacy_controller_text()}</p>
			<p>
				Kay Jay<br />
				Gärtnerweg 62<br />
				60322 Frankfurt am Main<br />
				Germany
			</p>
			<p>{m.legal_email_label()} <a href="mailto:hello@veche.design">hello@veche.design</a></p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_overview_title()}</h2>
			<p>{m.privacy_overview_text()}</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_hosting_title()}</h2>
			<p>{m.privacy_hosting_text()}</p>
			<ul>
				<li>{m.privacy_hosting_item_1()}</li>
				<li>{m.privacy_hosting_item_2()}</li>
				<li>{m.privacy_hosting_item_3()}</li>
				<li>{m.privacy_hosting_item_4()}</li>
			</ul>
			<p>{m.privacy_hosting_detail()}</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_contact_title()}</h2>
			<p>{m.privacy_contact_text()}</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_fonts_title()}</h2>
			<p>{m.privacy_fonts_text()}</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_cookies_title()}</h2>
			<p>{m.privacy_cookies_text()}</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_encryption_title()}</h2>
			<p>{m.privacy_encryption_text()}</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_rights_title()}</h2>
			<p>{m.privacy_rights_text()}</p>
			<ul>
				<li>{m.privacy_rights_item_1()}</li>
				<li>{m.privacy_rights_item_2()}</li>
				<li>{m.privacy_rights_item_3()}</li>
				<li>{m.privacy_rights_item_4()}</li>
				<li>{m.privacy_rights_item_5()}</li>
				<li>{m.privacy_rights_item_6()}</li>
			</ul>
			<p>{m.privacy_rights_detail()} <a href="mailto:hello@veche.design">hello@veche.design</a>.</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_complaint_title()}</h2>
			<p>{m.privacy_complaint_text()}</p>
			<p>
				Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br />
				Gustav-Stresemann-Ring 1<br />
				65189 Wiesbaden<br />
				Germany
			</p>
		</div>
		<div class="doc-section">
			<h2>{m.privacy_changes_title()}</h2>
			<p>{m.privacy_changes_text()}</p>
		</div>
		<a href={resolve(localizeHref('/') as Pathname)} class="back-link">{m.legal_back_home()}</a>
	</div>
</section>
