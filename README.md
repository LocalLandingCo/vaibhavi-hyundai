# Vaibhavi Automotive – Phaltan (static site)

Mobile-first, bilingual (English / मराठी) website for an independent multi-brand car service centre in Tambmal, Phaltan.
React + Vite + Tailwind. Fully static: no server, no database, no API keys. Deploys free to GitHub Pages with GitHub Actions.

## Project layout

```
.
├── .github/workflows/deploy.yml   # build + deploy to GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── CNAME.example              # custom-domain template (see below)
│   └── photos/placeholder.svg     # replace with real photos
├── src/
│   ├── content.js                 # ALL copy (en + mr) and business facts
│   ├── lib/helpers.js             # asset() base-path helper, tel/WhatsApp links
│   ├── components/                # one file per section
│   ├── App.jsx  main.jsx  index.css
├── index.html                     # SEO tags + AutoRepair JSON-LD
├── vite.config.js                 # `base` logic
├── tailwind.config.js  postcss.config.js
└── package.json
```

## Run locally

Needs Node 20+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serves the built dist/
```

## Editing text

Open `src/content.js`. Business facts (phone, address, hours) are at the top; English is `content.en`, Marathi is `content.mr`. Keep both in the same order.
Anything marked `[CONFIRM WITH OWNER]` must be checked before launch (the review wording for Rudra Travelsplash, which is a short paraphrase).

## How the base path works

`vite.config.js` sets `base` like this:

| Situation | Base |
|---|---|
| `VITE_BASE` is set (for example `/`) | that value |
| `npm run build` with no `VITE_BASE` | `/<repo-name>/` (the `github.io` URL) |
| `npm run dev` | `/` |

Images use the `asset()` helper (it prefixes `import.meta.env.BASE_URL`), and `index.html` uses `%BASE_URL%`. Never write `/photos/...` by hand.

## First deploy (one-time GitHub setup)

1. Create a **public** repository on GitHub and push this project to the `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run **Actions → Deploy to GitHub Pages → Run workflow**).
4. When the run finishes, the site is at `https://<your-username>.github.io/<repo-name>/`.

The workflow runs `npm ci`, builds, and deploys with `actions/configure-pages`, `actions/upload-pages-artifact` and `actions/deploy-pages`. If GitHub has since released newer major versions of these actions, bump the `@vN` numbers in `deploy.yml`.

## Custom domain (optional)

1. Copy `public/CNAME.example` to `public/CNAME`, delete the comment lines, and leave only your domain (for example `www.example.com`). A real `CNAME` file must contain nothing else.
2. In the repo go to **Settings → Secrets and variables → Actions → Variables** and add a variable `VITE_BASE` with value `/`.
3. At your DNS provider:
   - **Subdomain (`www`)**: add a `CNAME` record, host `www`, pointing to `<your-username>.github.io`.
   - **Apex domain (`example.com`)**: add `A` records to GitHub Pages' IPs `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally the matching `AAAA` records). Check GitHub's Pages docs in case these have changed.
4. In **Settings → Pages**, enter the custom domain and tick **Enforce HTTPS** once the certificate is ready.
5. Push to `main` so the site rebuilds with the `/` base.

## Swap in real photos

1. Get original photos from the owner (do not copy images from Google).
2. Resize them (about 1200 px wide, JPG or WebP) and put them in `public/photos/`, for example `public/photos/workshop-1.jpg`.
3. In `src/content.js`, under `gallery.items` for **both** `en` and `mr`, change `src: 'photos/placeholder.svg'` to `src: 'photos/workshop-1.jpg'`. Leave out the leading slash.
4. The "Photo coming soon" tag disappears automatically for any image that is not the placeholder.

## Things to confirm with the owner

- Owner name (Ravi appears only inside a customer review, so it is not used elsewhere).
- Whether to add prices, years in business, warranties or certifications (none are shown).
- The Google reviews link in `src/content.js` (`links.googleReviews`). If it does not open the reviews panel, paste the "Share" link from the Google Business Profile.
- Which other brands to list (only Kia is named, and nothing is called "authorised").

## Notes

- No Hyundai logo, fonts or colours are used, and the footer says "Independent multi-brand service centre."
- Fonts (Inter, Noto Sans Devanagari) load from Google Fonts. If you prefer zero third-party requests, remove the `<link>` tags in `index.html` and the site falls back to system fonts.
