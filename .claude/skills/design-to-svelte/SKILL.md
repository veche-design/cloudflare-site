---
name: design-to-svelte
description: Implement approved visual designs into this existing SvelteKit codebase with high visual fidelity and minimal architectural drift. Use this skill whenever the user asks to implement, port, apply, reproduce, translate, or sync a design/prototype into the site; provides design input such as Claude Design exports, screenshots, HTML/CSS/JS prototypes, Figma references, or files under /design; or asks to make production Svelte match an approved design, even if they do not explicitly request this skill.
compatibility: Claude Code with repository access. Use Svelte MCP as required by AGENTS.md. Prefer Claude Preview/browser tooling for localhost visual verification; fall back to a background dev server plus available browser tooling.
---

# Design to Svelte

Implement an approved design in the existing veche.design SvelteKit application.

Optimize for **faithful visual integration into the existing codebase**, not automatic code conversion and not redesign.

## Source precedence

When sources disagree, follow this order:

1. The user's current instruction.
2. The approved visual reference for appearance and intended behavior.
3. Existing production architecture, shared styles, reusable components, localization, accessibility, routing, and project conventions.
4. Generated prototype HTML/CSS/JS as implementation clues only.

Preserve the approved visual result while expressing it through the existing SvelteKit architecture.

## Treat design artifacts as reference material

Files under `/design` are design/reference inputs, not production source.

- Do not import runtime code or styles directly from `/design`.
- Do not serve prototype HTML from `/design`.
- Do not copy generated HTML/CSS/JS wholesale into production.
- Treat prototype JavaScript as an interaction specification, not trusted production code.
- Copy only production-worthy assets into the appropriate `src/lib/assets` location and give them clear names.
- Do not introduce React or another UI framework to implement the handoff.

Read `design/README.md` when the design bundle lives under `/design`.

## Establish the implementation target

Before editing production code:

1. Identify the approved design artifact and the route/page/component it applies to.
2. Inspect all relevant design material:
   - rendered design or screenshots;
   - HTML/CSS/JS prototype when present;
   - assets;
   - notes about behavior, responsive states, or interactions.
3. Inspect the current implementation and nearby reusable code:
   - target route;
   - existing components;
   - `src/lib/styles/veche.css`;
   - relevant assets;
   - Paraglide messages/localization;
   - layout and navigation conventions.
4. Separate:
   - components/styles that can be reused unchanged;
   - existing code that should be adapted;
   - genuinely new code that must be created.
5. Preserve current behavior that the design does not intentionally replace.

Do not start by mechanically translating prototype markup.

## Extract design facts before coding

Build a compact mental model of the approved design:

- page structure and section order;
- container widths and alignment;
- spacing rhythm;
- typography hierarchy;
- colors and surfaces;
- borders, radii, shadows, and elevation;
- image cropping and aspect ratios;
- responsive behavior and breakpoints;
- interactive states;
- component repetition and reusable patterns.

Prefer measured/explicit values from the design artifacts over guesses.

If the design contains several explorations, implement only the approved one unless the user explicitly asks to compare alternatives.

## Use the existing Svelte system

Follow `AGENTS.md` and the existing Svelte skills.

In particular:

- Inspect and reuse shared styles before adding component-local CSS.
- Reuse existing components when they already express the required structure or behavior.
- Adapt an existing component when that creates a cleaner result than creating a near-duplicate.
- Keep component boundaries meaningful; do not turn the entire page into one monolithic component just because the prototype is one HTML file.
- Preserve Paraglide/localized copy instead of hardcoding visible strings when corresponding messages exist.
- Follow Svelte 5/SvelteKit conventions and run the required Svelte autofixer on changed Svelte files.
- Do not add tests or visual-regression infrastructure.

## Manage the local dev server autonomously

Do not require the user to start the site manually unless the environment prevents you from doing so.

1. Prefer Claude Preview when available and reliable:
   - start the project with `npm run dev`;
   - use the actual localhost URL/port returned by Vite;
   - open the exact route being implemented.
2. Otherwise start `npm run dev` as a background process from the repository root and use available browser tooling against the reported localhost URL.
3. If no Preview/browser integration is available, use the repository's existing Playwright dependency only as an ad-hoc browser inspection mechanism (for example, a one-off command or temporary file outside the repo). Do not create Playwright tests, fixtures, snapshots, or committed verification scripts.
4. Confirm the server is actually responding before relying on it.
5. Do not run `npm run build` merely to perform visual verification.

### Restart policy

Do not rely blindly on Vite HMR.

Restart the dev server when any of these are true:

- routing, layout, assets, configuration, dependencies, or generated files changed;
- the browser output appears stale or inconsistent with the source;
- HMR reports an error or fails to reflect a change;
- a sequence of substantial UI changes has accumulated.

Even when HMR appears healthy, perform a **fresh dev-server restart before the final visual verification**. This reduces false comparisons against stale module state.

When restarting:

1. stop the server instance you started;
2. start a fresh `npm run dev`;
3. wait until Vite reports the listening URL;
4. reload the target route from that fresh server.

Do not leave duplicate dev servers running on different ports.

## Implement in visual slices

For a substantial page, work in logical visual slices rather than generating everything in one pass.

For each slice:

1. implement or adapt the production Svelte code;
2. format/check the edited Svelte with the required Svelte tooling;
3. render the route on localhost;
4. inspect the actual output;
5. compare it with the approved reference;
6. correct meaningful discrepancies before moving on.

Useful slices are typically hero/header, major content sections, repeated cards/grids, calls to action, and footer/navigation changes.

For a small component or small visual adjustment, one implementation/verification pass is sufficient.

## Verify visually from localhost

Use the running local site as the implementation truth.

Prefer browser/Preview tools that can inspect the live DOM and rendered page. Use visual captures when supported so you can compare what the browser actually rendered with the approved reference.

Verification captures are temporary working artifacts:

- do not ask the user to create them for you;
- do not add screenshot files or visual-regression baselines to the repository;
- keep temporary captures outside the repo or remove them after use.

Check at least:

- overall composition and section ordering;
- widths, alignment, and major spacing;
- typography scale/weight/line length;
- colors and backgrounds;
- borders/radii/shadows;
- image sizing/cropping;
- repeated component consistency;
- responsive behavior at the relevant narrow and wide viewport states;
- visible interaction states relevant to the design.

Do not chase meaningless sub-pixel differences. Fix discrepancies a user would notice or that alter the design's hierarchy, rhythm, behavior, or brand expression.

## Avoid architecture drift

A design handoff is not permission to rewrite unrelated parts of the site.

- Keep changes scoped to the target design.
- Do not replace working infrastructure without a design-driven reason.
- Do not add a second styling system for convenience.
- Do not duplicate shared tokens/styles with slightly different local values.
- Do not change unrelated copy or behavior.
- Do not "improve" the approved design unless the user explicitly asks for design judgment.

If faithfully reproducing the design conflicts with an important existing technical constraint, preserve the constraint and report the difference.

## Final verification

Before declaring the implementation complete:

1. restart the dev server fresh;
2. open the target route on localhost;
3. perform a full-page visual pass against the approved design;
4. check the relevant responsive state(s);
5. run the Svelte autofixer on all changed Svelte files until it is clean;
6. run `npm run format`;
7. report:
   - what was implemented;
   - any intentional differences from the approved design;
   - whether formatting completed;
   - that the user should run `npm run lint`, `npm run check`, and `npm run build` locally before committing, as required by `AGENTS.md`.

Do not claim pixel-perfect fidelity unless the rendered output was actually compared visually.
