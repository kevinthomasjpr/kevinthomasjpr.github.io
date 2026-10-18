# Personal website

Plain HTML, CSS and JavaScript. No build step.

- `index.html` – page structure
- `css/style.css` – all styling
- `js/content.js` – **all text, English and German**. Edit wording here.
- `js/main.js` – language toggle, project cards, case-study panel, hero chart
- `assets/` – favicon and the CV files

## Run locally
Double-click `index.html`, or in VS Code install the "Live Server" extension,
right-click `index.html` → "Open with Live Server" (auto-reloads on save).

## CV download
The CV buttons are hidden while `cvFile` in `js/content.js` is empty. To show them, put the PDFs in `assets/` and set `cvFile` (EN and DE blocks), e.g. `assets/Kevin_Thomas_CV_EN.pdf`.
Put public versions of the CV there (consider removing phone number and address,
since this site is public).

## Publish (GitHub Pages)
Push the *contents of this folder* to a separate public repo named
`jkevinthomas4321.github.io`, then Settings → Pages → Deploy from branch → `main` / root.
The site appears at https://jkevinthomas4321.github.io
