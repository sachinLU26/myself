# Retro Terminal Portfolio

Single-page retro hacking style portfolio for **Sachin Sahil** using plain HTML, CSS, and vanilla JavaScript.

## Editing the content
- `index.html`: update the name, tagline, bio, skills, projects, timeline, and contact links (look for the inline comments).
- `styles.css`: adjust colors or spacing if you want to tweak the visual theme.
- `script.js`: edit the rotating hero phrases and starter terminal log lines.

## Run locally
Open `index.html` directly in your browser or serve the folder with a simple HTTP server (e.g., `python -m http.server 8000`).

## Deploy to GitHub Pages via GitHub Actions (free)
1. **Create a new repo (if not already)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: retro terminal portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. **Push and let Actions deploy**
   - This repo includes `.github/workflows/deploy-pages.yml` which deploys on every push to `main` (or via **Actions → Run workflow**).
   - After the first successful run, GitHub Pages will publish automatically.
3. **One-time Pages setting**
   - In **Settings → Pages**, ensure **Source** is set to **GitHub Actions** (may switch automatically after the first run).
4. **Access the site**
   - URL will be `https://<your-username>.github.io/<repo-name>/`
   - For a user/organization site (if repo is named `<username>.github.io`), the URL is `https://<your-username>.github.io/`.
5. **Cost**
   - GitHub Pages and GitHub Actions minutes are free for public repositories (great for students).
