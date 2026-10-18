# Elsa Zhang

Personal site.

## Structure

- Home: **Latest** featured post + flat **Writing** list
- `about.html`
- Posts in `posts/`

No Topics section. No category subsections under Writing.

## Open

Double-click `index.html`.

## Add a post

1. Copy a file in `posts/`
2. Edit title, date, and body
3. Add it to the Writing list on `index.html` (and optionally set it as Latest)

## Publish (GitHub Pages)

The site is plain static files — no build step.

1. Merge into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment**, set
   Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at `https://elsazhangmel-dotcom.github.io/fieldnotes/`.

`404.html` uses absolute `/fieldnotes/...` paths so it works at any missing URL.
If you move to a custom domain (served from the root), change those to `/...`.
