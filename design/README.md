# Design artifacts

This directory stores design and prototype material used as **reference input** for implementation.

Production source of truth remains under `/src`.

## Recommended structure

```text
design/
└── <surface>/
    ├── explorations/
    │   ├── <concept-name>/
    │   └── ...
    └── approved/
        ├── index.html        # when exported by a design tool
        ├── styles.css        # when available
        ├── assets/
        ├── reference.png     # optional visual reference
        └── notes.md          # optional behavior/responsive notes
```

Examples of `<surface>` are `homepage`, `database`, or a named product flow.

Use Git history for normal versioning rather than accumulating `v1`, `v2`, `v3` folders indefinitely. Keep explorations only when they remain useful references.

## Implementation focus

Implementation agents should start with the relevant `approved/` directory. Do not read `explorations/` unless the user asks, the approved material references it, or required implementation information is missing.

## Rules

- Treat everything here as reference material, not runtime production code.
- Do not import HTML, CSS, or JavaScript from this directory into the shipped application.
- Move/copy approved production assets into the appropriate `src/lib/assets` location during implementation.
- Keep only the design material needed to understand and reproduce the intended result.
- When a design is approved, make that state unambiguous under the surface's `approved/` directory.

Implementation agents should use the project-local `design-to-svelte` skill when available when translating approved material from this directory into the SvelteKit application.
