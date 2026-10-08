<script lang="ts">
	import { tick } from 'svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import herbalPharmacyImage from '$lib/assets/images/herbal-pharmacy.jpg';
	import Artifacts from '$lib/components/workspace/Artifacts.svelte';
	import Explore from '$lib/components/workspace/Explore.svelte';
	import Financing from '$lib/components/workspace/Financing.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	type Mode = 'validation' | 'design' | 'financing';
	type ConversationMessage = {
		role: 'user' | 'guide';
		text: string;
		context: string;
	};
	let mode = $state<Mode>('validation');
	let validationSection = $state('explore');
	let designSection = $state('customer');
	let financingSection = $state('validation');
	const validation = [
		{ id: 'idea', label: m.workspace_idea() },
		{ id: 'explore', label: m.workspace_explore() },
		{ id: 'hypotheses', label: m.workspace_hypotheses() },
		{ id: 'experiments', label: m.workspace_experiments() },
		{ id: 'learnings', label: m.workspace_learnings() }
	];
	const design = [
		{ id: 'customer', label: m.workspace_customer() },
		{ id: 'problem', label: m.workspace_problem() },
		{ id: 'value', label: m.workspace_value() },
		{ id: 'offering', label: m.workspace_offering() },
		{ id: 'market', label: m.workspace_market() },
		{ id: 'gtm', label: m.workspace_gtm() },
		{ id: 'economics', label: m.workspace_economics() },
		{ id: 'model', label: m.workspace_model() }
	];
	const financing = [
		{ id: 'validation', label: m.financing_validation() },
		{ id: 'financial', label: m.financing_financial() },
		{ id: 'package', label: m.financing_package() },
		{ id: 'conversations', label: m.financing_conversations() },
		{ id: 'close', label: m.financing_close() }
	];
	const modeLabel = $derived(
		mode === 'validation'
			? m.workspace_validation()
			: mode === 'design'
				? m.workspace_business_design()
				: m.workspace_financing()
	);
	const sections = $derived(
		mode === 'validation' ? validation : mode === 'design' ? design : financing
	);
	const selected = $derived(
		mode === 'validation' ? validationSection : mode === 'design' ? designSection : financingSection
	);
	const nextQuestion = $derived(
		mode === 'financing' ? m.financing_question() : m.workspace_next_question()
	);
	const selectedLabel = $derived(sections.find((section) => section.id === selected)?.label ?? '');
	let draft = $state('');
	let messageLog: HTMLDivElement | undefined;
	function attachMessageLog(element: HTMLDivElement) {
		messageLog = element;
		return () => {
			messageLog = undefined;
		};
	}
	function append(...messages: ConversationMessage[]) {
		thread.push(...messages);
		void tick().then(() => messageLog?.scrollTo({ top: messageLog.scrollHeight }));
	}
	let thread = $state<ConversationMessage[]>([
		{ role: 'user', text: m.workspace_initial_question(), context: m.workspace_explore() },
		{ role: 'guide', text: m.workspace_initial_reply(), context: m.workspace_explore() }
	]);
	function navigate(section: string) {
		if (mode === 'validation') validationSection = section;
		else if (mode === 'design') designSection = section;
		else financingSection = section;
	}
	function question(value: string) {
		append(
			{ role: 'user', text: value, context: selectedLabel },
			{ role: 'guide', text: m.workspace_prompt_reply(), context: selectedLabel }
		);
	}
	function submit(event: SubmitEvent) {
		event.preventDefault();
		if (!draft.trim()) return;
		append(
			{ role: 'user', text: draft.trim(), context: selectedLabel },
			{
				role: 'guide',
				text: mode === 'financing' ? m.financing_reply() : m.workspace_local_reply(),
				context: selectedLabel
			}
		);
		draft = '';
	}
	function artifactNavigate(section: string) {
		mode = 'validation';
		validationSection = section;
	}
	function discuss(value: string) {
		append(
			{ role: 'user', text: value, context: selectedLabel },
			{
				role: 'guide',
				text: mode === 'financing' ? m.financing_reply() : m.workspace_local_reply(),
				context: selectedLabel
			}
		);
	}
	function hypotheses() {
		mode = 'validation';
		validationSection = 'hypotheses';
	}
	function designNavigate(section: string) {
		mode = 'design';
		designSection = section;
	}
</script>

<svelte:head
	><title>{m.home_database_herbal_pharmacy()} · {modeLabel} · {selectedLabel} — veche.design</title
	><meta name="description" content={m.dashboard_meta_description()} /></svelte:head
>
<section class="venture-workspace">
	<header class="venture-heading">
		<div>
			<a class="back-link" href={resolve(localizeHref('/dashboard') as Pathname)}
				>← {m.dashboard_back_to_dashboard()}</a
			>
			<p class="eyebrow">{m.workspace_demo()}</p>
			<h1>{m.home_database_herbal_pharmacy()}</h1>
			<p class="venture-subtitle">{m.dashboard_herbal_pharmacy_subtitle()} · Rhine-Main</p>
		</div>
		<img src={herbalPharmacyImage} alt={m.home_database_herbal_pharmacy_image_alt()} />
	</header>
	<div class="workspace-toolbar">
		<div class="venture-stages">
			<div class="mode-switch" role="group" aria-label={m.home_database_herbal_pharmacy()}>
				<button
					class:active={mode === 'validation'}
					aria-pressed={mode === 'validation'}
					onclick={() => (mode = 'validation')}>{m.workspace_validation()}</button
				><button
					class:active={mode === 'design'}
					aria-pressed={mode === 'design'}
					onclick={() => (mode = 'design')}>{m.workspace_business_design()}</button
				>
			</div>
			<span class="stage-arrow" aria-hidden="true">→</span>
			<button
				class="financing-stage"
				class:active={mode === 'financing'}
				aria-pressed={mode === 'financing'}
				onclick={() => (mode = 'financing')}
				><span>{m.workspace_next_stage()}</span>{m.workspace_get_financing()}</button
			>
		</div>
		<a class="conversation-jump" href="#conversation">{m.workspace_conversation()} ↓</a><span
			class="toolbar-note">{m.workspace_working()}</span
		>
	</div>
	<div class="workspace-grid">
		<nav class="workspace-nav" aria-label={modeLabel}>
			<span class="eyebrow">{modeLabel}</span>
			<div class="section-buttons">
				{#each sections as section, i (section.id)}<button
						class:active={selected === section.id}
						aria-current={selected === section.id ? 'true' : undefined}
						onclick={() => navigate(section.id)}
						><span class="nav-number">{String(i + 1).padStart(2, '0')}</span>{section.label}<span
							class="nav-indicator"
							aria-hidden="true">{selected === section.id ? '↗' : '·'}</span
						></button
					>{/each}
			</div>
			<p>{mode === 'financing' ? m.workspace_financing_loop() : m.workspace_loop()}</p>
			<a class="back-link" href={resolve(localizeHref('/database') as Pathname)}
				>{m.nav_database()} ↗</a
			>
		</nav>
		<div class="workspace-content" id="workspace-artifact">
			<div hidden={mode !== 'validation' || selected !== 'explore'}>
				<Explore onquestion={question} onhypotheses={hypotheses} />
			</div>
			<div hidden={mode === 'financing' || (mode === 'validation' && selected === 'explore')}>
				<Artifacts
					mode={mode === 'design' ? 'design' : 'validation'}
					{selected}
					onnavigate={artifactNavigate}
					ondiscuss={discuss}
				/>
			</div>
			{#if mode === 'financing'}<Financing
					{selected}
					onvalidation={artifactNavigate}
					ondesign={designNavigate}
					ondiscuss={discuss}
				/>{/if}
		</div>
		<aside class="conversation" id="conversation" aria-labelledby="conversation-title">
			<div class="conversation-inner">
				<div class="conversation-heading">
					<span class="eyebrow">Herbal Pharmacy</span>
					<h2 id="conversation-title">{m.workspace_conversation()}</h2>
					<p>{m.workspace_thread_note()}</p>
				</div>
				<p class="conversation-context">
					{m.workspace_context()} · <strong>{selectedLabel}</strong>
				</p>
				<div
					class="messages"
					{@attach attachMessageLog}
					role="log"
					aria-label={m.workspace_conversation()}
					aria-live="polite"
				>
					{#each thread as message, i (i)}<article class:user={message.role === 'user'}>
							<span class="message-role"
								>{message.role === 'user' ? m.workspace_you() : m.workspace_guide()}
								<span>· {message.context}</span></span
							>
							<p>{message.text}</p>
						</article>{/each}
				</div>
				<button
					class="suggestion"
					onclick={() => {
						if (mode === 'financing') {
							discuss(nextQuestion);
							return;
						}
						hypotheses();
						append(
							{
								role: 'user',
								text: m.workspace_next_question(),
								context: m.workspace_hypotheses()
							},
							{ role: 'guide', text: m.workspace_local_reply(), context: m.workspace_hypotheses() }
						);
					}}>{nextQuestion} ↗</button
				>
				<form onsubmit={submit}>
					<label for="conversation-draft">{m.workspace_continue()}</label><textarea
						id="conversation-draft"
						bind:value={draft}
						rows="3"
						required></textarea><button class="btn" type="submit">{m.workspace_send()} ↑</button>
				</form>
			</div>
		</aside>
	</div>
</section>

<style>
	.venture-workspace {
		--line: rgba(17, 17, 17, 0.14);
		background: #f4f4f2;
	}
	.venture-heading {
		display: flex;
		justify-content: space-between;
		gap: 28px;
		padding: 28px 48px;
		background: #fff;
	}
	.venture-heading .back-link {
		margin: 0 0 18px;
		font-size: 0.72rem;
	}
	.eyebrow {
		font-size: 0.62rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-weight: 700;
		color: #6e6e6e;
	}
	h1 {
		font-size: clamp(1.6rem, 3vw, 2.2rem);
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: -0.015em;
		line-height: 1.18;
		margin: 8px 0;
	}
	.venture-subtitle {
		color: #555;
		font-size: 0.82rem;
	}
	.venture-heading img {
		width: 200px;
		height: 130px;
		object-fit: cover;
		align-self: center;
	}
	.workspace-toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 0 48px 24px;
		background: #fff;
		border-bottom: 1px solid var(--line);
	}
	.venture-stages {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
	}
	.stage-arrow {
		color: #6e6e6e;
	}
	.financing-stage {
		border: 1.5px solid #111;
		border-radius: 999px;
		background: white;
		color: #111;
		padding: 8px 24px;
		font-size: 0.8rem;
		font-weight: 700;
		text-align: left;
	}
	.financing-stage span {
		display: block;
		font-size: 0.55rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.financing-stage.active {
		background: #111;
		color: white;
		padding-block: 13px;
	}
	.financing-stage.active span {
		display: none;
	}
	button,
	textarea {
		font-family: inherit;
	}
	button {
		cursor: pointer;
	}
	.mode-switch {
		display: flex;
		border: 1.5px solid #111;
		border-radius: 999px;
		padding: 4px;
	}
	.mode-switch button {
		padding: 12px 24px;
		border: 0;
		border-radius: 999px;
		background: transparent;
		font-size: 0.8rem;
		font-weight: 700;
	}
	.mode-switch button.active {
		background: #c8332b;
		color: #fff;
	}
	.toolbar-note {
		font-size: 0.65rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #6e6e6e;
	}
	.workspace-grid {
		display: grid;
		grid-template-columns: 180px minmax(0, 1fr) 320px;
	}
	.workspace-nav {
		position: sticky;
		top: 70px;
		z-index: auto;
		display: block;
		padding: 32px 16px 32px 24px;
		background: #f4f4f2;
		border: 0;
		border-right: 1px solid var(--line);
		align-self: start;
	}
	.section-buttons {
		display: grid;
		gap: 6px;
		margin: 18px 0 28px;
	}
	.section-buttons button {
		display: flex;
		align-items: baseline;
		gap: 8px;
		width: 100%;
		border: 0;
		background: transparent;
		padding: 12px 8px;
		text-align: left;
		font-size: 0.72rem;
		font-weight: 600;
		color: #555;
	}
	.section-buttons button.active {
		background: #fbedec;
		color: #c8332b;
	}
	.nav-number {
		font-size: 0.55rem;
		opacity: 0.7;
	}
	.nav-indicator {
		margin-left: auto;
	}
	.workspace-nav p {
		font-size: 0.7rem;
		color: #6e6e6e;
		line-height: 1.6;
	}
	.workspace-nav a {
		font-size: 0.68rem;
		margin-top: 24px;
	}
	.workspace-content {
		padding: 36px clamp(24px, 3vw, 48px) 56px;
		min-width: 0;
	}
	.conversation {
		background: #fff;
		border-left: 1px solid var(--line);
		scroll-margin-top: 100px;
		min-width: 0;
	}
	.conversation-inner {
		padding: 28px 24px;
		position: sticky;
		top: 70px;
		max-height: calc(100dvh - 86px);
		overflow: auto;
	}
	.conversation-heading h2 {
		font-weight: 900;
		font-size: 1.2rem;
		letter-spacing: -0.015em;
		margin: 6px 0;
	}
	.conversation-heading p {
		font-size: 0.7rem;
		color: #6e6e6e;
		line-height: 1.5;
	}
	.conversation-context {
		padding: 16px 0;
		margin-top: 14px;
		border-top: 1px solid var(--line);
		font-size: 0.65rem;
		color: #6e6e6e;
	}
	.messages {
		display: grid;
		gap: 20px;
		max-height: 340px;
		overflow: auto;
		overflow-wrap: anywhere;
	}
	.messages article {
		padding-left: 12px;
		border-left: 2px solid #c8332b;
	}
	.messages article.user {
		border: 0;
		background: #f4f4f2;
		padding: 14px;
	}
	.message-role {
		font-size: 0.62rem;
		font-weight: 700;
	}
	.message-role span {
		font-weight: 400;
		color: #6e6e6e;
	}
	.messages p {
		font-size: 0.78rem;
		line-height: 1.65;
		margin-top: 8px;
		color: #333;
	}
	.suggestion {
		margin: 24px 0;
		border: 1px solid var(--line);
		border-radius: 999px;
		padding: 10px 14px;
		background: #fff;
		text-align: left;
		color: #c8332b;
		font-size: 0.7rem;
		font-weight: 600;
	}
	.conversation form {
		display: grid;
		gap: 10px;
		border-top: 1px solid var(--line);
		padding-top: 18px;
	}
	.conversation label {
		font-size: 0.65rem;
		font-weight: 600;
	}
	textarea {
		width: 100%;
		border: 1px solid var(--line);
		padding: 12px;
		resize: vertical;
		font-size: 0.8rem;
	}
	.conversation .btn {
		justify-self: start;
		padding: 12px 20px;
		font-size: 0.7rem;
	}
	.conversation-jump {
		display: none;
		font-size: 0.7rem;
		color: #c8332b;
	}
	:is(button, a, textarea):focus-visible {
		outline: 3px solid #c8332b;
		outline-offset: 4px;
	}
	@media (min-width: 1500px) {
		.workspace-grid {
			grid-template-columns: 200px minmax(0, 1fr) 360px;
		}
	}
	@media (max-width: 1150px) {
		.workspace-grid {
			grid-template-columns: 160px minmax(0, 1fr);
		}
		.conversation {
			grid-column: 2;
			border-top: 1px solid var(--line);
			border-left: 0;
		}
		.conversation-inner {
			position: static;
			max-height: none;
		}
		.conversation-jump {
			display: inline;
		}
		.toolbar-note {
			display: none;
		}
		.messages {
			max-height: 400px;
		}
	}
	@media (max-width: 760px) {
		.venture-heading {
			padding: 24px;
		}
		.venture-heading img {
			width: 100px;
			height: 100px;
		}
		.workspace-toolbar {
			padding: 0 24px 24px;
			flex-wrap: wrap;
		}
		.workspace-grid {
			grid-template-columns: 1fr;
		}
		.workspace-nav {
			position: static;
			padding: 20px 24px;
			border-right: 0;
			border-bottom: 1px solid var(--line);
		}
		.workspace-nav > .eyebrow,
		.workspace-nav p,
		.workspace-nav a {
			display: none;
		}
		.section-buttons {
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			gap: 4px;
		}
		.section-buttons button {
			width: auto;
			padding: 10px;
			font-size: 0.7rem;
		}
		.nav-number,
		.nav-indicator {
			display: none;
		}
		.conversation {
			grid-column: 1;
		}
		.conversation-inner {
			padding: 24px;
		}
		.workspace-content {
			padding: 28px 24px 40px;
		}
	}
	@media (max-width: 440px) {
		.venture-heading img {
			display: none;
		}
		.mode-switch button {
			padding: 12px 16px;
			font-size: 0.72rem;
		}
	}
</style>
