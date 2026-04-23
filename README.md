# Marks

Marks at the Park — Japanese & Pan-Asian fine dining. Minimal static site.

## Structure

```
index.html      Homepage — intro + CTA to menu
menu.html       À la carte menu with filter chips + omakase
css/            styles.css (site-wide), menu.css (menu-only)
js/             main.js (header/nav), menu.js (filters)
images/         logo.svg placeholder — replace with logo.png
```

## Local preview

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Deploy

Static site — Vercel auto-detects. Push to GitHub and import the repo in Vercel,
or run `vercel` from the project root.

## Replacing the logo

Drop your PNG at `images/logo.png`, then swap the two `logo.svg` references in
`index.html` and `menu.html` for `logo.png`.
