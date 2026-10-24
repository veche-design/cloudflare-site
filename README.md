# veche.design

The public veche.design website and UI prototype for the future app.

Built with SvelteKit 3, Svelte 5, Tailwind CSS 4 and Paraglide (en/de), prerendered with
`adapter-static` and deployed to Cloudflare with Wrangler.

## Commands

- `npm run dev` - run local server
- `npm run format` - format all files before git push/sync
- `npm run lint`, `npm run check`, `npm run build` - run before committing
- `./scripts/push-update.sh "<comment>"` - format and push the changes to the current branch
- `./scripts/kirill.sh` - pull the latest changes, install the dependencies, build, and run the local server

## Project setup

The project was scaffolded with [`sv`](https://github.com/sveltejs/cli) and then the demo app was removed:

```sh
npx sv@1.1.1 create --template demo --types ts --add prettier eslint vitest="usages:unit,component" playwright="demo:yes" tailwindcss="plugins:typography,forms" enhanced-img sveltekit-adapter="adapter:static" paraglide="languageTags:en, de+demo:no" ai-tools="ide:claude-code,vscode,other+delivery:plugin+tools:mcp,svelte-code-writer,svelte-core-bestpractices,svelte-file-editor+mcpSetup:remote" --install npm cloudflare-site
```

Add features with `sv add`, e.g. `npx sv add storybook`.

## Building

```sh
npm run build
npm run preview
```

The production build is written to `build/` and served by Cloudflare (`wrangler.jsonc`).
