# Back Enterprise

Agency website for **Back Enterprise (B.E)** — automation systems, web development and
progressive web apps. Built with React + Vite, installable as a PWA, ready to deploy on Vercel.

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# unzip the project, then inside the folder:
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Edit anything in `src/` and it
hot-reloads instantly.

To check the production build (including the PWA service worker) locally:

```bash
npm run build
npm run preview
```

---

## 2. Put it on GitHub

```bash
cd back-enterprise
git init
git add .
git commit -m "Initial commit: Back Enterprise website"
```

Then on GitHub:
1. Go to [github.com/new](https://github.com/new) and create a repository named `back-enterprise` (public, no README/license — you already have one).
2. Copy the commands GitHub shows you under "…or push an existing repository from the command line," e.g.:

```bash
git remote add origin https://github.com/Caala21/back-enterprise.git
git branch -M main
git push -u origin main
```

---

## 3. Deploy on Vercel

**Option A — via the Vercel dashboard (easiest):**
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import the `back-enterprise` repo you just pushed.
3. Vercel auto-detects Vite — leave the defaults (`Build Command: vite build`, `Output Directory: dist`) and click **Deploy**.
4. You'll get a live URL like `back-enterprise.vercel.app`. You can rename the project (Settings → General) to change that subdomain, or attach a custom domain (Settings → Domains).

**Option B — via CLI:**
```bash
npm i -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

---

## 4. Before you launch — things to personalize

- **Email**: `src/components/Footer.jsx` has a placeholder `hello@backenterprise.co` — swap it for a real inbox.
- **Domain**: once deployed, decide if `back-enterprise.vercel.app` is final or if you're pointing a custom domain at it.
- **Icons**: `public/icons/` were generated from your uploaded logo. If you get a sharper source file later, regenerate at 192×192, 512×512 (+ a maskable 512×512 with ~10% padding) and swap them in.
- **Favicon**: currently `public/icons/favicon.png`, referenced in `index.html`.

---

## 5. Add this project to your portfolio

Since you built this, it should show up as a project on `cliff-kirk-portfolio.vercel.app` too.
In your portfolio repo, wherever your project cards live (you have an `AutomationSection.jsx` and
likely a `Projects` component), add an entry along these lines:

```jsx
{
  title: "Back Enterprise",
  description: "Agency website for Back Enterprise — automation systems, web development and progressive web apps. Built as an installable PWA with React + Vite, deployed on Vercel.",
  tags: ["React", "Vite", "PWA", "Vercel"],
  link: "https://back-enterprise.vercel.app", // update once deployed
  repo: "https://github.com/Caala21/back-enterprise"
}
```

Match the exact prop names and card styling your portfolio's project list already uses —
this is the shape, not the literal component.

---

## What's in this repo

```
back-enterprise/
├── index.html              # entry HTML, SEO + OG/Twitter meta tags, JSON-LD
├── vite.config.js          # Vite + vite-plugin-pwa (manifest + service worker)
├── package.json
├── public/icons/           # app icons generated from the B.E logo (192, 512, maskable, apple-touch, favicon)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            # design tokens (black / yellow / white) + all component styles
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx     # Automation / Web / PWA offerings
        ├── Work.jsx         # capability showcase (agency voice, not a personal CV)
        ├── Process.jsx      # Discover → Build → Launch → Support
        └── Footer.jsx
```

No personal bio or CV content lives here on purpose — this is the agency-facing site.
Your marketing strategy for promoting Back Enterprise on TikTok, Meta, Twitter and Pinterest
is a separate deliverable — ask for it whenever you're ready and it'll be built as its own document.
