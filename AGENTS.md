## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, vitest, playwright, tailwindcss, sveltekit-adapter, paraglide, ai-tools

## Validation Workflow

- Do not write development or unit tests
- Do not run `npm run test`, `npm run format`, `npm run lint`, `npm run check`, or `npm run build` unless the user explicitly asks you to.
- After making code changes, remind the user to run these checks locally and review their output.
- If the user provides failing output, use it to diagnose and fix the issues.

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
