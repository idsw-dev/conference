# IDSW Website

## 🚀 Project Structure

We use Astro, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

We use Cloudflare Pages and its CI/CD for deployment, ask our contributor for details.

## Year archives

The site renders entirely to static files. The current edition lives at `/`, and
compiled previous editions live in `public/<year>/`, served at `/<year>/`.

To archive the source revision you want to preserve:

1. Tag that revision (for example, `git tag 2026`). The archive command builds the
   current checkout; it does not check out a tag for you.
2. Run `npm run archive -- 2026` to build with base `/2026` and copy the result to
   `public/2026/`. This replaces that year's archive if it already exists.
3. Preview and commit the generated archive before starting the next edition.

Use `withBasePath` from `src/lib/paths.ts` for edition-local public assets and
navigation, including metadata URLs. Astro handles imported assets automatically.
Links to previous editions intentionally stay at `/2024/` and `/2025/`; artwork
used by the current edition lives in `public/previous-events/` so its archive
retains its own copy. Browser interactions may use JavaScript, but pages must not
require server rendering or runtime API routes.
