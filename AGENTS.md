## Project Context

This repository serves two purposes:

- The public website for veche.design.
- A UI prototype for the future veche.design app.

Prioritize UI implementation, visual consistency, and fast iteration.
Automated tests are outside the scope of this repository.

## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, vitest, playwright, tailwindcss, sveltekit-adapter, paraglide, ai-tools

## Validation Workflow

- Do not create, modify, or generate automated tests of any kind, including unit, integration, end-to-end, snapshot, or visual regression tests.
- Do not add test files, test fixtures, testing dependencies, or test infrastructure.
- The presence of Vitest, Playwright, or existing tests does not imply that testing work is required.
- Do not suggest adding tests or treat missing tests as unfinished work.
- Run `npm run format` after making changes.
- Do not run `npm run test`, `npm run lint`, `npm run check`, or `npm run build`, or equivalent commands, unless the user explicitly asks you to.
- In the final response, briefly report whether formatting completed. Remind the user to run `npm run lint`, `npm run check`, and `npm run build` locally before committing and review their output.
- If the user provides failing output, use it to diagnose and fix the issues without adding tests.

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
