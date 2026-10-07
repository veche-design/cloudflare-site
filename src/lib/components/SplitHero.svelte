<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string | Snippet;
		description?: string | Snippet;
		actions?: Snippet;
		image: string;
		imageAlt: string;
		variant?: 'default' | 'home' | 'narrow';
	};

	let { title, description, actions, image, imageAlt, variant = 'default' }: Props = $props();
</script>

<section
	class="split-hero"
	class:split-hero--home={variant === 'home'}
	class:split-hero--narrow={variant === 'narrow'}
>
	<div class="split-hero__content">
		<div class="split-hero__title">
			{#if typeof title === 'string'}
				<h1>{title}</h1>
			{:else}
				{@render title()}
			{/if}
		</div>

		{#if description}
			<div class="split-hero__description">
				{#if typeof description === 'string'}
					<p>{description}</p>
				{:else}
					{@render description()}
				{/if}
			</div>
		{/if}

		{#if actions}
			<div class="split-hero__actions">
				{@render actions()}
			</div>
		{/if}
	</div>

	<div class="split-hero__image">
		<img src={image} alt={imageAlt} />
	</div>
</section>

<style>
	.split-hero {
		display: grid;
		grid-template-columns: 2fr 1fr;
		min-height: 480px;
	}

	.split-hero__content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: #c8332b;
		color: #fff;
		padding: clamp(48px, 7vw, 80px) clamp(32px, 5vw, 72px);
		text-align: left;
	}

	.split-hero__title h1 {
		max-width: 620px;
		font-size: clamp(1.7rem, 2.7vw, 2.4rem);
		font-weight: 800;
		letter-spacing: -0.015em;
		line-height: 1.18;
	}

	.split-hero__description {
		margin-top: 22px;
		max-width: 640px;
		color: rgba(255, 255, 255, 0.9);
	}

	.split-hero__description p {
		font-size: clamp(1rem, 1.35vw, 1.18rem);
		line-height: 1.65;
	}

	.split-hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 30px;
	}

	.split-hero__image {
		position: relative;
		min-height: 320px;
		overflow: hidden;
	}

	.split-hero__image img {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.split-hero--home {
		min-height: 340px;
	}
	.split-hero--home .split-hero__content {
		padding: clamp(32px, 4vw, 56px) clamp(20px, 3.8vw, 72px);
	}
	.split-hero--home .split-hero__image {
		/* The approved rendered hero follows the Frankfurt asset proportions. */
		aspect-ratio: 9 / 11;
		min-height: 340px;
	}
	.split-hero--narrow {
		min-height: 200px;
		height: clamp(200px, 22vw, 260px);
	}
	.split-hero--narrow .split-hero__content {
		padding: 32px clamp(20px, 3.8vw, 72px);
	}
	.split-hero--narrow .split-hero__title h1 {
		font-size: clamp(1.3rem, 2.6vw, 2.2rem);
		font-weight: 900;
		text-transform: uppercase;
		max-width: 720px;
		line-height: 1.15;
	}
	.split-hero--narrow .split-hero__description {
		margin-top: 14px;
	}
	.split-hero--narrow .split-hero__image {
		min-height: 0;
	}
	@media (max-width: 900px) {
		.split-hero {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.split-hero--narrow {
			height: auto;
		}
		.split-hero--home .split-hero__image {
			aspect-ratio: auto;
			min-height: 240px;
		}
		.split-hero--narrow .split-hero__image {
			min-height: 180px;
		}
		.split-hero__content {
			padding: 44px 24px 48px;
		}

		.split-hero__image {
			order: -1;
			min-height: 240px;
		}
	}
</style>
