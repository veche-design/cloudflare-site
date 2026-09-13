<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<footer>
	<a href={resolve(localizeHref('/') as Pathname)} class="ft-brand">veche.design</a>

	<div class="ft-links">
		<a href={resolve(localizeHref('/impressum') as Pathname)}>
			{m.footer_imprint()}
		</a>

		<a href={resolve(localizeHref('/privacy-policy') as Pathname)}>
			{m.footer_privacy()}
		</a>
	</div>
</footer>
