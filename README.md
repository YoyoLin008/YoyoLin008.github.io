# Personal site for Yoyo Lin

A static HTML/CSS/JS site that showcases projects, hobbies, and photos—no build step required.

## What’s inside
- `index.html` – homepage with GitHub Projects tiles and links to hobby pages.
- `hobbies/` – standalone pages for bird photography, HiFi gear, phones, and flight logs.
- `assets/` – shared images and placeholders (swap with your own files as needed).
- `script.js` – fetches public repos for **YoyoLin008** and injects them into the Projects section.
- `style.css` – global styles and hobby page layouts.

## Preview locally
You can open `index.html` directly, but a tiny server avoids browser security warnings and mirrors GitHub Pages.

**Option 1: Python (built-in)**
```bash
python3 -m http.server 8000
```
Visit http://localhost:8000.

**Option 2: Node.js**
```bash
npm install -g serve
serve .
```
Open the printed localhost URL (often http://localhost:3000).

## Updating content
- **Photos and assets:** Replace placeholder images in `assets/` or point gallery cards to new filenames you add there.
- **Hobby pages:** Edit the gallery cards in each file under `hobbies/` to drop in your photos and captions. The HiFi page has one card per device for an image plus a short comment.
- **Projects section:** `script.js` auto-loads your public GitHub repos; keep an internet connection when previewing to see them populate.

## Deploying changes
Push the updated files to the branch configured for GitHub Pages (typically `main`) and the site will refresh on https://YoyoLin008.github.io.
