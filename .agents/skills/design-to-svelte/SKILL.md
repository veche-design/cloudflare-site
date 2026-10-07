---
name: design-to-svelte
description: Implement approved visual designs into this existing SvelteKit codebase with high visual fidelity and minimal architectural drift. Use this skill whenever the user asks to implement, port, apply, reproduce, translate, or sync a design/prototype into the site; provides design input such as Claude Design exports, screenshots, HTML/CSS/JS prototypes, Figma references, or files under /design; or asks to make production Svelte match an approved design, even if they do not explicitly request this skill.
---

# Design to Svelte

Implement an approved design in the existing veche.design SvelteKit application.

Preserve the approved visual language while integrating into the existing codebase. Visual fidelity and structural fidelity are separate concerns: when the user requests recomposition, adapt navigation, page boundaries, grouping, section order, and layout to the requested product structure; otherwise preserve the approved structure.

## Source precedence

Resolve authority by concern:

- Explicit task instructions govern scope and requested product structure, including intentional departures from the prototype.
- Approved references govern visual facts and visual language: typography, palette, surfaces, spacing rhythm, imagery, and component treatments.
- The existing SvelteKit application governs production architecture, routing conventions, shared components/styles, localization, and existing structured domain data.
- Prototype markup and runtime code provide appearance and interaction clues, not production architecture.

Follow reference interactions where they remain relevant to the requested flow. Prototype route maps and structure do not override requested recomposition. Resolve conflicts covered by these rules directly; ask only when an unresolved choice materially affects the product flow.

Visual fidelity must not degrade semantic HTML, keyboard behavior, accessibility, localization, or required application behavior.

## Treat design artifacts as reference material

Files under `/design` are design/reference inputs, not production source.

- Do not import runtime code or styles directly from `/design`.
- Do not expose prototype HTML from `/design` as production application routes or deploy it with the site. A temporary local preview of approved reference files may be used for visual comparison; stop any reference server you started when verification is complete.
- Do not copy generated HTML/CSS/JS wholesale into production.
- Treat prototype JavaScript as clues to reference interactions, not trusted production code.
- Copy only production-worthy assets into the appropriate `src/lib/assets` location and give them clear names.
- Do not introduce React or another UI framework to implement the handoff.

Read `design/README.md` when the design bundle lives under `/design`.

### Approved-first rule

Start with the relevant `/design/<surface>/approved` material.

Do **not** inspect `explorations/` by default. Read exploration material only when:

- the user explicitly asks for it;
- the approved design references it; or
- information required to implement the approved design is missing.

This keeps the implementation focused and avoids spending context on discarded concepts.

## Establish the implementation target

Before editing production code:

1. Identify the requested product flow and affected production routes/components. Map relevant approved sections to that flow: one prototype page may supply patterns to several production views, and one production view may combine material from several reference pages.
2. Inspect the approved material that is actually needed:
   - notes about behavior/responsive states;
   - HTML/CSS/JS prototype when present;
   - production-worthy assets;
   - visual reference/screenshots.
3. Inspect the current implementation and nearby reusable code:
   - target route;
   - existing components;
   - `src/lib/styles/veche.css`;
   - relevant assets;
   - Paraglide messages/localization;
   - layout and navigation conventions;
   - structured domain data and its consumers;
   - shared CSS selectors that may unintentionally affect new elements.
4. Record a compact mapping of requested views to reference patterns, existing components/styles/routes/data, and necessary new code. Distinguish visual treatments to preserve from structure intentionally changed. Reuse or adapt existing code where it fits; do not force unsuitable components merely to claim reuse.
5. Preserve current behavior that the requested flow does not intentionally replace.

Protect domain semantics during recomposition. Do not silently reinterpret questions, methods, evidence, benchmarks, statuses, or pending results. Keep draft values and illustrative evidence identified as such. Do not infer validated hypotheses or learnings solely from phase completion. Reconcile overlapping prototype and production content without creating duplicate sources of truth.

Preserve the semantic status of product information (such as draft, illustrative evidence, results pending, or needs verification) without exposing design-handoff or implementation provenance. Design annotations, handoff metadata, and reference provenance are implementation guidance unless the approved product UI intentionally exposes them. Do not introduce labels such as “approved reference”, “prototype”, or “demo response” merely because they describe the source material. When approved user-facing copy already communicates uncertainty adequately, preserve it instead of adding stronger implementation-derived disclaimers; for example, keep “Source and timeframe to follow.” without an “Approved reference statistic” prefix.

Do not start by mechanically translating prototype markup.

## Extract design facts before coding

Build a compact implementation model from the approved design:

- reference structure and section order, distinguishing what the task preserves from what it recomposes;
- container widths and alignment;
- spacing rhythm;
- typography hierarchy;
- colors and surfaces;
- borders, radii, shadows, and elevation;
- image cropping and aspect ratios;
- responsive behavior and breakpoints;
- interactive states;
- component repetition and reusable patterns.

Prefer explicit/measured values from design artifacts over guesses.

Use prototype markup/styles to extract visual facts. Treat the approved rendered reference as the authority for comparing visual treatments, and the requested product structure as the authority for composition.

For layouts absent from the reference, derive visual treatments from approved patterns and identify new layout decisions as adaptations. For multi-column workspaces, define column roles, readable widths, scrolling, narrowing/collapse behavior, and continued access to navigation and auxiliary content. Choose responsive transitions from content fit rather than unrelated prototype breakpoints. Preserve required shared state across view switches and responsive panel changes.

## Compose with specialized skills and tools

This skill orchestrates the handoff; do not duplicate specialized tool instructions when an appropriate skill is available.

### Svelte

Follow `AGENTS.md`.

- If a relevant Svelte skill is available in the current environment, use it.
- Otherwise follow the Svelte MCP/CLI workflow required by `AGENTS.md`.
- Run the required Svelte autofixer on changed Svelte files.
- Do not add tests or visual-regression infrastructure.

### Browser verification

For substantial design implementation, require browser verification when the tooling is available. Use this tool selection order:

1. If the `playwright-cli` skill is available, use it and follow its current instructions.
2. Otherwise, if Playwright CLI is installed, use it directly and consult `playwright-cli --help` or `npx playwright cli --help` instead of guessing commands.
3. If neither the skill nor Playwright CLI is available, continue the code implementation where possible, skip browser-dependent claims, and tell the user that final visual verification could not be performed.

Do not require Playwright CLI merely to begin implementation.

## Manage the local dev server autonomously

Do not require the user to start the site manually unless the environment prevents you from doing so.

1. Start `npm run dev` from the repository root as a background process.
2. Wait for Vite to report the actual localhost URL/port and confirm the server responds.
3. Use that exact localhost URL for browser checks.
4. Do not run `npm run build` merely to perform visual verification.

If you cannot start the dev server yourself, give the user these concise recovery steps:

1. In VS Code, open **Terminal → New Terminal**.
2. Make sure the terminal is in the repository root.
3. Run `npm run dev`.
4. Leave that terminal running.
5. Ask the user to tell you when it is started, then continue from the reported localhost URL.

### Restart policy

Do not rely blindly on Vite HMR.

Restart the dev server when any of these are true:

- routing, layout, assets, configuration, dependencies, or generated files changed;
- the browser output appears stale or inconsistent with the source;
- HMR reports an error or fails to reflect a change;
- a sequence of substantial UI changes has accumulated.

Even when HMR appears healthy, perform a **fresh dev-server restart before the final visual verification**.

When restarting:

1. stop the server instance you started;
2. start a fresh `npm run dev`;
3. wait until Vite reports the listening URL;
4. reload the target route from that fresh server.

Do not leave duplicate dev servers running on different ports.

## Keep browser work token-efficient

Browser inspection is a verification tool, not the default implementation loop.

During routine coding:

- Prefer source/design inspection over browser automation.
- Do not take screenshots after routine edits.
- Do not repeatedly read full-page snapshots.
- Use browser checks only to resolve uncertainty or verify a meaningful state.

When using Playwright CLI:

- Prefer `playwright-cli find` for locating relevant nodes in a large page.
- Prefer targeted snapshots of an element/selector/ref over full-page snapshots.
- Limit snapshot depth when a partial tree is enough.
- Prefer `--raw` for commands where the result value is sufficient and page status/snapshot metadata is unnecessary.
- Read generated snapshot files only when their content is actually needed.
- Keep CLI-generated snapshots/screenshots temporary and untracked; remove verification artifacts before finishing.

Do not create Playwright tests, fixtures, baselines, or committed verification scripts for this workflow.

## Implement in visual slices

For a substantial interface, work in logical visual slices rather than generating everything in one pass.

For each slice:

1. implement or adapt the production Svelte code;
2. run the required Svelte autofixer on the edited Svelte;
3. keep the local route available for spot checks;
4. use targeted browser inspection only when needed to resolve uncertainty;
5. for substantial recomposition, visually compare the first coherent workspace slice with the approved reference before repeating its treatment across the remaining views; otherwise defer full comparison until final verification unless a discrepancy requires it earlier.

Choose slices around the requested interface: major sections or repeated components for a page; shell/navigation, one complete primary view, and an auxiliary panel for a workspace. Subsequent corrections should normally adapt the implementation; rewrite a slice only when a concrete layout or behavior problem requires it.

For a small component or small visual adjustment, one implementation/verification pass is sufficient.

## Final visual verification

Use the running local site as the implementation truth.

Before declaring a design implementation visually complete:

1. restart the dev server fresh;
2. open the affected target routes;
3. inspect representative wide and narrow widths, plus intermediate widths where the layout meaningfully changes;
4. compare reused visual treatments with corresponding rendered approved sections at comparable widths and states; for recomposed areas, evaluate the requested hierarchy/flow and preservation of the approved visual language;
5. exercise materially different views and states as needed, including expanded content and required state continuity across view switches; verify scrolling, overflow, and access to navigation and auxiliary content;
6. correct meaningful discrepancies with targeted edits;
7. recheck affected views, states, and widths to confirm those corrections.

### Targeted visual inspection

Capture materially different layouts or states needed for reference comparison and correction; prefer element or region captures where sufficient. Avoid routine screenshots after every edit. Screenshot counts are not a coverage target or limit, and DOM snapshots do not substitute for visual inspection.

Check:

- composition and hierarchy against the requested structure, and visual treatments against the approved reference;
- widths, alignment, and major spacing;
- typography scale/weight/line length;
- colors and backgrounds;
- borders/radii/shadows;
- image sizing/cropping;
- repeated component consistency;
- responsive behavior;
- visible interaction states relevant to the design.

Do not chase meaningless sub-pixel differences. Fix discrepancies a user would notice or that alter the design's hierarchy, rhythm, behavior, or brand expression.

Do not claim pixel-perfect fidelity unless the rendered output was actually compared visually.

## Avoid architecture drift

A design handoff is not permission to rewrite unrelated parts of the site.

- Keep changes scoped to the requested product flow and affected surfaces. Add only the components, state, and route/layout changes needed to integrate that flow into the existing app.
- Do not replace working infrastructure without a design-driven reason.
- Do not add a second styling system for convenience.
- Do not duplicate shared tokens/styles with slightly different local values.
- Do not change unrelated copy or behavior.
- Requested structural recomposition does not authorize unrelated visual redesign. Adapt approved treatments only where the task or application constraints require it, unless the user asks for design judgment.
- A demo UI does not imply backend services, authentication, persistence, real search, AI integration, generic frameworks, or unrelated platform work. Introduce these only when requested; avoid abstractions beyond demonstrated reuse needs.

If faithfully reproducing the design conflicts with an important existing technical constraint, preserve the constraint and report the difference.

## Finish

Before declaring the implementation complete:

1. run the Svelte autofixer on all changed Svelte files until it is clean;
2. run `npm run format`;
3. remove temporary browser-verification artifacts created by this workflow;
4. report:
   - what was implemented;
   - any intentional differences from the approved design;
   - whether browser verification was performed and at which representative viewport(s);
   - whether formatting completed;
   - any validation reminders required by `AGENTS.md`; follow its command restrictions without adding implementation checks.
