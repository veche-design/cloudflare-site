<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const locale = getLocale();
	const homeHref = resolve(localizeHref('/') as Pathname);
</script>

<svelte:head>
	<title>Privacy Policy — veche.design</title>
</svelte:head>

<section class="doc">
	<div class="doc-wrap">
		{#if locale === 'de'}
			<span class="section-tag">Datenschutz</span>
			<h1>Datenschutzerklärung</h1>
			<p class="doc-updated">Letzte Aktualisierung: Juni 2026</p>

			<div class="doc-section">
				<h2>1. Verantwortlicher</h2>
				<p>Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:</p>
				<p>
					Kay Jay<br />
					Gärtnerweg 62<br />
					60322 Frankfurt am Main<br />
					Deutschland<br /><br />
					E-Mail: <a href="mailto:hello@veche.design">hello@veche.design</a>
				</p>
			</div>

			<div class="doc-section">
				<h2>2. Allgemeine Hinweise</h2>
				<p>
					Diese Website ist bewusst einfach gehalten. Sie verwendet keine Cookies, keine
					Analysetools, keine Tracking-Pixel und keine Social-Media-Plugins. Die einzigen
					personenbezogenen Daten, die verarbeitet werden, sind die unten beschriebenen: technische
					Server-Logfiles, die automatisch durch das Hosting entstehen, sowie Informationen, die Sie
					uns freiwillig per E-Mail mitteilen.
				</p>
			</div>

			<div class="doc-section">
				<h2>3. Hosting und Server-Logfiles</h2>
				<p>
					Diese Website wird über Cloudflare Pages gehostet. Beim Besuch der Website erhebt und
					speichert der Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles,
					die Ihr Browser automatisch übermittelt. Dazu gehören:
				</p>
				<ul>
					<li>IP-Adresse des anfragenden Endgeräts</li>
					<li>Datum und Uhrzeit der Anfrage</li>
					<li>Browsertyp und -version, Betriebssystem</li>
					<li>Referrer-URL</li>
				</ul>
				<p>
					Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit.
					f DSGVO) an der technischen Stabilität und Sicherheit der Website. Diese Daten werden
					nicht mit anderen Datenquellen zusammengeführt und nicht zur Identifizierung Ihrer Person
					genutzt. Die Logdaten werden in der Regel kurzfristig zu Sicherheitszwecken gespeichert
					und danach gelöscht, sofern sie nicht im Zusammenhang mit einem Sicherheitsvorfall als
					Nachweis benötigt werden.
				</p>
			</div>

			<div class="doc-section">
				<h2>4. Kontaktaufnahme per E-Mail</h2>
				<p>
					Wenn Sie uns per E-Mail kontaktieren (zum Beispiel über hello@veche.design), verarbeiten
					wir die von Ihnen mitgeteilten personenbezogenen Daten — etwa Name, E-Mail-Adresse und den
					Inhalt Ihrer Nachricht — ausschließlich zur Bearbeitung Ihrer Anfrage und einer
					eventuellen Anschlusskommunikation. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern
					Ihre Anfrage im Zusammenhang mit einem möglichen Vertrag steht, andernfalls Art. 6 Abs. 1
					lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung von Anfragen). Wir
					speichern diese Korrespondenz nur so lange, wie es zur Bearbeitung Ihrer Anfrage
					erforderlich ist, sofern keine längeren gesetzlichen Aufbewahrungspflichten bestehen.
				</p>
			</div>

			<div class="doc-section">
				<h2>5. Webschriften</h2>
				<p>
					Diese Website verwendet die Schriftart Montserrat. Die Schriftdateien werden lokal auf
					unserem eigenen Server bereitgestellt; beim Besuch dieser Website wird keine Verbindung zu
					externen Schriftanbietern wie Google Fonts aufgebaut, und es werden hierfür keine Daten an
					Dritte übermittelt.
				</p>
			</div>

			<div class="doc-section">
				<h2>6. Cookies und Analyse-Tools</h2>
				<p>
					Diese Website verwendet keine Cookies, keine Analysedienste, keine Werbe-Tools und keine
					Social-Media-Plugins. Sollte sich dies zukünftig ändern — etwa durch die Einbindung eines
					Kontaktformular-Dienstes oder eines Analysetools — wird diese Erklärung vor der
					Inbetriebnahme entsprechend aktualisiert.
				</p>
			</div>

			<div class="doc-section">
				<h2>7. SSL-/TLS-Verschlüsselung</h2>
				<p>
					Diese Website nutzt für die Datenübertragung eine SSL-/TLS-Verschlüsselung, erkennbar am
					Präfix „https://" und dem Schloss-Symbol in der Adresszeile Ihres Browsers. Ist die
					Verschlüsselung aktiv, können die von Ihnen übermittelten Daten nicht von Dritten
					mitgelesen werden.
				</p>
			</div>

			<div class="doc-section">
				<h2>8. Ihre Rechte</h2>
				<p>Nach der DSGVO haben Sie das Recht auf:</p>
				<ul>
					<li>Auskunft über die bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
					<li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
					<li>Löschung Ihrer Daten („Recht auf Vergessenwerden") (Art. 17 DSGVO)</li>
					<li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
					<li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
					<li>
						Widerspruch gegen eine auf berechtigtem Interesse beruhende Verarbeitung (Art. 21 DSGVO)
					</li>
				</ul>
				<p>
					Um eines dieser Rechte auszuüben, kontaktieren Sie uns einfach unter
					<a href="mailto:hello@veche.design">hello@veche.design</a>.
				</p>
			</div>

			<div class="doc-section">
				<h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
				<p>
					Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
					Die für uns zuständige Behörde ist:
				</p>
				<p>
					Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br />
					Gustav-Stresemann-Ring 1<br />
					65189 Wiesbaden<br />
					Deutschland
				</p>
			</div>

			<div class="doc-section">
				<h2>10. Änderungen dieser Erklärung</h2>
				<p>
					Mit dem Wachstum von veche.design und der Einbindung neuer Tools oder Dienste auf dieser
					Website wird diese Datenschutzerklärung entsprechend aktualisiert. Wir empfehlen,
					gelegentlich erneut hier vorbeizuschauen.
				</p>
			</div>

			<a href={homeHref} class="back-link">&larr; Zurück zur Startseite</a>
		{:else}
			<span class="section-tag">Data Protection</span>
			<h1>Privacy Policy</h1>
			<p class="doc-updated">Last updated: June 2026</p>

			<div class="doc-section">
				<h2>1. Who is responsible</h2>
				<p>
					The party responsible for data processing on this website (the "controller" under the
					GDPR) is:
				</p>
				<p>
					Kay Jay<br />
					Gärtnerweg 62<br />
					60322 Frankfurt am Main<br />
					Germany<br /><br />
					Email: <a href="mailto:hello@veche.design">hello@veche.design</a>
				</p>
			</div>

			<div class="doc-section">
				<h2>2. Overview</h2>
				<p>
					This website is intentionally simple. It does not use cookies, analytics tools, tracking
					pixels, or social media plugins. The only personal data processed are those described
					below: technical server logs generated automatically by hosting, and any information you
					choose to send us by email.
				</p>
			</div>

			<div class="doc-section">
				<h2>3. Hosting and server log files</h2>
				<p>
					This website is hosted via Cloudflare Pages. When you visit the site, the hosting provider
					automatically collects and stores information in so-called server log files, which your
					browser transmits automatically. This includes:
				</p>
				<ul>
					<li>IP address of the requesting device</li>
					<li>Date and time of access</li>
					<li>Browser type and version, operating system</li>
					<li>Referring URL</li>
				</ul>
				<p>
					This data is processed on the basis of our legitimate interest (Art. 6(1)(f) GDPR) in
					ensuring the technical stability and security of the website. It is not combined with
					other data sources and is not used to identify you personally. Log data is typically
					retained for a short period for security purposes and then deleted, unless it is needed as
					evidence in connection with a security incident.
				</p>
			</div>

			<div class="doc-section">
				<h2>4. Contact by email</h2>
				<p>
					If you contact us by email (for example via hello@veche.design), the personal data you
					share — such as your name, email address, and the content of your message — will be
					processed solely for the purpose of handling your inquiry and any follow-up
					correspondence. The legal basis is Art. 6(1)(b) GDPR, where your inquiry relates to a
					potential contract, or Art. 6(1)(f) GDPR (our legitimate interest in responding to
					inquiries) otherwise. We retain this correspondence only for as long as necessary to
					address your request, unless a longer retention period is required for legal reasons.
				</p>
			</div>

			<div class="doc-section">
				<h2>5. Web fonts</h2>
				<p>
					This website uses the typeface Montserrat. The font files are hosted locally on our own
					server; no connection is made to external font providers such as Google Fonts when you
					visit this site, and no data is transmitted to third parties for this purpose.
				</p>
			</div>

			<div class="doc-section">
				<h2>6. Cookies and analytics</h2>
				<p>
					This website does not use cookies, analytics services, advertising tools, or social media
					plugins of any kind. Should this change in the future — for example through the addition
					of a contact form service or analytics tool — this policy will be updated accordingly
					before such tools go live.
				</p>
			</div>

			<div class="doc-section">
				<h2>7. SSL / TLS encryption</h2>
				<p>
					This website uses SSL/TLS encryption for all data transmission, recognisable by the
					"https://" prefix and the lock icon in your browser's address bar. When encryption is
					active, the data you transmit to us cannot be read by third parties.
				</p>
			</div>

			<div class="doc-section">
				<h2>8. Your rights</h2>
				<p>Under the GDPR, you have the right to:</p>
				<ul>
					<li>Access the personal data we hold about you (Art. 15 GDPR)</li>
					<li>Rectification of inaccurate data (Art. 16 GDPR)</li>
					<li>Erasure of your data ("right to be forgotten") (Art. 17 GDPR)</li>
					<li>Restriction of processing (Art. 18 GDPR)</li>
					<li>Data portability (Art. 20 GDPR)</li>
					<li>Object to processing based on legitimate interest (Art. 21 GDPR)</li>
				</ul>
				<p>
					To exercise any of these rights, simply contact us at
					<a href="mailto:hello@veche.design">hello@veche.design</a>.
				</p>
			</div>

			<div class="doc-section">
				<h2>9. Right to lodge a complaint</h2>
				<p>
					You also have the right to lodge a complaint with a data protection supervisory authority.
					The authority responsible for us is:
				</p>
				<p>
					Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br />
					Gustav-Stresemann-Ring 1<br />
					65189 Wiesbaden<br />
					Germany
				</p>
			</div>

			<div class="doc-section">
				<h2>10. Changes to this policy</h2>
				<p>
					As veche.design grows and adds new tools or services to this website, this privacy policy
					will be updated to reflect those changes. We recommend checking back periodically.
				</p>
			</div>

			<a href={homeHref} class="back-link">&larr; Back to homepage</a>
		{/if}
	</div>
</section>
