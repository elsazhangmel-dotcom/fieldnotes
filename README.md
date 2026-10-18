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

## Publish

The site is plain static files, with no build step. It lives at `https://elsazhang.au`.

- `CNAME` tells GitHub Pages which domain to serve. Keep it if you host on GitHub Pages.
- `404.html` uses root paths (`/css/...`), which assumes the site is served from the root of its domain.

### GitHub Pages
1. Repository must be public on the free plan.
2. **Settings → Pages**: Deploy from a branch, `main`, folder `/ (root)`. Custom domain: `elsazhang.au`. Tick **Enforce HTTPS** once the DNS check passes.
3. DNS at the registrar: four `A` records on `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` record on `www` pointing to `elsazhangmel-dotcom.github.io`.
