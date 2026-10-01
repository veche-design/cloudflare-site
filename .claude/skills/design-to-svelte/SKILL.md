---
name: design-to-svelte
description: Implement approved visual designs into this existing SvelteKit codebase with high visual fidelity and minimal architectural drift. Use this skill whenever the user asks to implement, port, apply, reproduce, translate, or sync a design/prototype into the site; provides design input such as Claude Design exports, screenshots, HTML/CSS/JS prototypes, Figma references, or files under /design; or asks to make production Svelte match an approved design, even if they do not explicitly request this skill.
compatibility: Claude Code with repository access. Follow AGENTS.md and use relevant Svelte tooling/skills. For browser verification, prefer the playwright-cli skill when available; otherwise use Playwright CLI directly when installed.
---

# Design to Svelte

Implement an approved design in the existing veche.design SvelteKit application.

Optimize for **faithful visual integration into the existing codebase**, not automatic code conversion and not redesign.

## Source precedence

When sources disagree, follow this order:

1. The user's current instruction.
2. The approved visual reference for appearance and intended behavior.
3. Existing production architecture, shared styles, reusable components, localization, routing, semantics, accessibility, and required application behavior.
4. Generated prototype HTML/CSS/JS as implementation clues only.

The approved design controls visual intent, but visual fidelity must not degrade semantic HTML, keyboard behavior, accessibility, localization, or required application behavior.

## Treat design artifacts as reference material

Files under `/design` are design/reference inputs, not production source.

- Do not import runtime code or styles directly from `/design`.
- Do not serve prototype HTML from `/design`.
- Do not copy generated HTML/CSS/JS wholesale into production.
- Treat prototype JavaScript as an interaction specification, not trusted production code.
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

1. Identify the approved design artifact and the route/page/component it applies to.
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
   - layout and navigation conventions.
4. Separate:
   - components/styles that can be reused unchanged;
   - existing code that should be adapted;
   - genuinely new code that must be created.
5. Preserve current behavior that the design does not intentionally replace.

Do not start by mechanically translating prototype markup.

## Extract design facts before coding

Build a compact implementation model from the approved design:

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

Prefer explicit/measured values from design artifacts over guesses.

Use prototype markup/styles to extract implementation facts. Treat the approved rendered reference as the authority for final visual comparison.

## Compose with specialized skills and tools

This skill orchestrates the handoff; do not duplicate specialized tool instructions when an appropriate skill is available.

### Svelte

Follow `AGENTS.md`.

- If a relevant Svelte skill is available in the current environment, use it.
- Otherwise follow the Svelte MCP/CLI workflow required by `AGENTS.md`.
- Run the required Svelte autofixer on changed Svelte files.
- Do not add tests or visual-regression infrastructure.

### Browser verification

When browser verification is needed:

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

For a substantial page, work in logical visual slices rather than generating everything in one pass.

For each slice:

1. implement or adapt the production Svelte code;
2. run the required Svelte autofixer/check for the edited Svelte;
3. keep the local route available for spot checks;
4. use targeted browser inspection only when needed to resolve uncertainty;
5. defer expensive full visual comparison until final verification unless a specific discrepancy requires it earlier.

Useful slices are typically hero/header, major content sections, repeated cards/grids, calls to action, and footer/navigation changes.

For a small component or small visual adjustment, one implementation/verification pass is sufficient.

## Final visual verification

Use the running local site as the implementation truth.

Before declaring a design implementation visually complete:

1. restart the dev server fresh;
2. open the exact target route;
3. verify a representative wide viewport;
4. verify a representative narrow/mobile viewport when the design is responsive;
5. compare the rendered result with the approved visual reference;
6. correct meaningful discrepancies;
7. perform only the additional visual check(s) needed to confirm those corrections.

### Screenshot budget

By default:

- routine implementation: **0 full-page screenshots**;
- final page verification: **1 representative wide screenshot**;
- responsive page verification: **+1 representative narrow/mobile screenshot**;
- component-only work: prefer an element screenshot instead of a full-page screenshot.

Take additional screenshots only when a specific discrepancy cannot be verified reliably otherwise.

Check:

- overall composition and section ordering;
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

- Keep changes scoped to the target design.
- Do not replace working infrastructure without a design-driven reason.
- Do not add a second styling system for convenience.
- Do not duplicate shared tokens/styles with slightly different local values.
- Do not change unrelated copy or behavior.
- Do not "improve" the approved design unless the user explicitly asks for design judgment.

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
   - that the user should run `npm run lint`, `npm run check`, and `npm run build` locally before committing, as required by `AGENTS.md`.
