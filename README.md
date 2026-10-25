# America-China &mdash; Cloudflare Worker Deployment

Deployment guide for `america-china.com` using Cloudflare Workers with Static Assets and Cloudflare D1.

---

## Architecture Overview
* **Type:** Cloudflare Worker with Static Assets
* **Entrypoint:** `src/index.js`
* **Static Assets:** `public/` (contains `index.html`, `zh.html`, `index-zh.html`, `admin/`, CSS, images, JS, favicon.ico, robots.txt, sitemap.xml)
* **Database:** Cloudflare D1 (`america-china` / ID: `10f3bd94-eb4b-486d-8fa5-796c1d4bbe98`)
* **Config:** `wrangler.jsonc`

---

## Project Structure

```
america-china/
├── wrangler.jsonc       # Worker config: assets directory + D1 binding
├── src/
│   └── index.js         # API router (/api/contact, /api/leads, static fallback)
├── public/              # Static site assets
│   ├── index.html       # Homepage with contact form (English)
│   ├── zh.html          # Homepage with contact form (Chinese)
│   ├── index-zh.html    # Symlink to zh.html
│   ├── admin/           # Admin leads dashboard
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── schema.sql           # inquiries table schema (reference)
└── README.md
```

---

## Deployment via Wrangler CLI

Deploy directly to Cloudflare:

```bash
# 1. Authenticate with Cloudflare (first time only)
npx wrangler login

# 2. Deploy Worker and Static Assets to Production
npx wrangler deploy
```

This single command:
1. Uploads all static files from `public/`.
2. Compiles and deploys `src/index.js` handling `POST /api/contact` and `GET /api/leads`.
3. Attaches the `DB` binding to the `america-china` D1 database.

---

## Environment Variables (Admin Password)

To set the password for the `/admin/` dashboard:

```bash
# Set encrypted secret in production
npx wrangler secret put ADMIN_PASSWORD
```
Or configure in Cloudflare Dashboard: **Workers & Pages** > `america-china` > **Settings** > **Variables and Secrets**.

---

## Custom Domain

Attached domains:
* `america-china.com`
* `www.america-china.com`

---

## CI / Quality Checks

Automated checks run via [.github/workflows/lint.yml](.github/workflows/lint.yml):
* **Worker Linting**: `npx eslint src/`
* **JS Syntax**: `node --check public/js/*.js`
* **HTML Syntax**: `npx htmlhint "public/**/*.html"`
* **Link Audit**: `cd public && npx linkinator index.html --recurse`
* **Wrangler Validation**: `npx wrangler deploy --dry-run`
