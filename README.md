# Retro Terminal Portfolio

Single-page retro hacking style portfolio for **Sachin Sahil** using plain HTML, CSS, and vanilla JavaScript.

## Editing the content
- `index.html`: update the name, tagline, bio, skills, projects, timeline, and contact links (look for the inline comments).
- `styles.css`: adjust colors or spacing if you want to tweak the visual theme.
- `script.js`: edit the rotating hero phrases and starter terminal log lines.

## Run locally
Open `index.html` directly in your browser or serve the folder with a simple HTTP server (e.g., `python -m http.server 8000`).

## Deploy to GitHub Pages (free)
1. **Create a new repo**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: retro terminal portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. **Enable Pages**
   - Go to **Settings → Pages** in the GitHub repo.
   - Source: choose **Deploy from a branch**.
   - Select branch **main** and folder **/ (root)**.
   - Save; wait for the deploy badge to turn green.
3. **Access the site**
   - URL will be `https://<your-username>.github.io/<repo-name>/`
   - For a user/organization site (if repo is named `<username>.github.io`), the URL is `https://<your-username>.github.io/`.
