## Project Context

This repository serves two purposes:

- The public website for veche.design.
- A UI prototype for the future veche.design app.

Prioritize UI implementation, visual consistency, and fast iteration.
Automated tests are outside the scope of this repository.

## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, vitest, playwright, tailwindcss, enhanced-img, sveltekit-adapter, paraglide, ai-tools

## Validation Workflow

- Do not create, modify, or generate automated tests of any kind, including unit, integration, end-to-end, snapshot, or visual regression tests.
- Do not add test files, test fixtures, testing dependencies, or test infrastructure.
- The presence of Vitest, Playwright, or existing tests does not imply that testing work is required.
- Do not suggest adding tests or treat missing tests as unfinished work.
- Run `npm run format` after making changes.
- Run `npm run lint`, `npm run check`, and `npm run build` after a larger block of work (a finished page, component, or refactoring, or a dependency/config change), not after every small fix.
- Run all three before committing or pushing, when the user asks for it. Fix what they report, without adding tests.
- In the final response, briefly report whether formatting completed and which of lint/check/build were run.

## Browser Verification

Browser checks are for verifying a meaningful visual state, not part of the routine edit loop.

- Use the project's own CLI: `./node_modules/.bin/playwright-cli`, not a global install. Check `--help` instead of guessing commands. If the dependency is not installed, say so; do not install it silently or change `package.json` for verification.
- Start `npm run dev` in the background, wait for the URL Vite reports, and use that URL. Do not run `npm run build` just to look at a page. Stop the server you started when done, and never leave duplicate servers on different ports.
- Restart the dev server when routing, layout, assets, config, or dependencies changed, or when the output looks stale.
- Keep it token-efficient:
  - Do not take screenshots after routine edits.
  - Prefer `playwright-cli find` to locate nodes in a large page.
  - Prefer snapshots of an element or selector over full-page snapshots, and limit snapshot depth.
  - Use `--raw` when only the value is needed.
  - Read saved snapshot files only when their content is needed.
- Keep CLI output (`.playwright-cli/`, screenshots) temporary and untracked; remove it when finished.

## Styling Reuse

- Before adding new component-local CSS, inspect the existing shared styles in `src/lib/styles/veche.css`.
- Reuse existing shared classes and visual patterns whenever they already express the required behavior.
- Do not duplicate shared styles locally with slightly different values.
- In particular, use existing utilities such as `.lift-card` for standard card elevation/hover behavior instead of reimplementing them inside individual Svelte components.
- Keep component-local CSS for component-specific layout and behavior only.
- Add or change a global/shared style only when the pattern is genuinely reusable across the site.

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
