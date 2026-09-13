<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { Pathname } from '$app/types';

	import logo from '$lib/assets/logos/logo.svg';
	import { m } from '$lib/paraglide/messages.js';
	import { deLocalizeUrl, getLocale, localizeHref } from '$lib/paraglide/runtime';

	const pathname = $derived(deLocalizeUrl(page.url).pathname);
	const locale = getLocale();
</script>

<nav>
	<a href={resolve(localizeHref('/') as Pathname)} class="nav-brand" aria-label="veche.design">
		<img src={logo} alt="veche.design" />
	</a>

	<div class="nav-right">
		<div class="nav-links">
			<a href={resolve(localizeHref('/') as Pathname)} class:active={pathname === '/'}>
				{m.nav_home()}
			</a>

			<a
				href={resolve(localizeHref('/database') as Pathname)}
				class:active={pathname === '/database' || pathname.startsWith('/database/')}
			>
				{m.nav_database()}
			</a>

			<a
				href={resolve(localizeHref('/dashboard') as Pathname)}
				class:active={pathname === '/dashboard' || pathname.startsWith('/dashboard/')}
			>
				{m.nav_dashboard()}
			</a>
		</div>

		<div class="lang-toggle" aria-label="Language">
			<a
				href={resolve(localizeHref(page.url.pathname, { locale: 'en' }) as Pathname)}
				class:active={locale === 'en'}
				hreflang="en"
				data-sveltekit-reload
			>
				EN
			</a>

			<a
				href={resolve(localizeHref(page.url.pathname, { locale: 'de' }) as Pathname)}
				class:active={locale === 'de'}
				hreflang="de"
				data-sveltekit-reload
			>
				DE
			</a>
		</div>
	</div>
</nav>
