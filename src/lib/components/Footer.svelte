<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Path } from '$app/types';

	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
</script>

<footer>
	<a href={resolve(localizeHref('/') as Path)} class="ft-brand">veche.design</a>

	<div class="ft-links">
		<a href={resolve(localizeHref('/impressum') as Path)}>
			{m.footer_imprint()}
		</a>

		<a href={resolve(localizeHref('/privacy-policy') as Path)}>
			{m.footer_privacy()}
		</a>
	</div>
</footer>
