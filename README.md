
# Nextflix — Netflix-like clone for Vercel

A clean, modern Netflix-style UI built with **Next.js 14 (App Router)** and **Tailwind CSS**.  
Works **out-of-the-box** with a bundled local dataset, and can optionally use **TMDB** if you add an API key.

## Demo Features
- Hero banner with auto-rotating spotlight
- Scrollable rows/carousels with arrow controls
- Title details page
- Search (works with local dataset or TMDB)
- Dark, Netflix-inspired theme with subtle animations (Framer Motion)
- Image optimization (Next/Image)

> ⚠️ This is a demo/educational project. No actual streaming is included.

---

## 1) Run locally

```bash
# 1. Install deps
npm install

# 2. Dev server
npm run dev
# open http://localhost:3000
```

### Optional: Enable TMDB (recommended)
Create a **.env** file in the project root with a TMDB v4 auth token (bearer):
```
TMDB_API_KEY=YOUR_TMDB_V4_READ_TOKEN
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
You can get the token from https://www.themoviedb.org/settings/api — use the **v4 auth token** (starts with `eyJ...`).

If you skip this, the app will use the bundled dataset in `public/data/movies.json`.

---

## 2) Deploy to Vercel

1. Push this project to a new GitHub repo (or import it directly in Vercel).
2. In Vercel, **Add New Project** → select the repo.
3. Framework preset: **Next.js** (auto-detected).
4. (Optional) Add Environment Variables:
   - `TMDB_API_KEY` — your TMDB v4 read token
   - `NEXT_PUBLIC_BASE_URL` — e.g. `https://your-vercel-domain.vercel.app`
5. Click **Deploy**. That’s it.

No custom build settings needed:
- Build command: `next build`
- Output directory: `.next`

---

## Project Structure

```
app/
  page.tsx            # Home with rows
  search/page.tsx     # Search page
  title/[id]/page.tsx # Title details
  api/health/route.ts # Basic healthcheck
components/           # UI components
lib/movies.ts         # Movie fetching (TMDB or local fallback)
public/data/movies.json # Local dataset
tailwind.config.ts, postcss.config.mjs, next.config.mjs
```

---

## Notes
- The UI uses **remoteImages** from TMDB; if you're offline, images still load via placeholders.
- Feel free to add auth, profiles, watchlist, and a real player.
- Licensed MIT — customize as you like.
