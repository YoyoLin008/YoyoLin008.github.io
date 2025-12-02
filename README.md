# Personal site for Yoyo Lin

Static site for sharing hobbies, photos, and notes. No build step is required—open the files directly or serve them with any simple HTTP server.

## Project structure
- `index.html` – homepage with links to hobby pages.
- `hobbies/` – individual pages for bird photography, HiFi gear, phones, and flight logs.
- `assets/` – images and placeholders used across the site.
- `script.js` and `style.css` – shared behavior and styling.

## Preview locally
1. From the repo root, start a lightweight server:
   ```bash
   python3 -m http.server 8000
   ```
2. Visit http://localhost:8000 in your browser.
3. Open the hobby pages via the homepage cards or directly at `/hobbies/<page>.html`.
4. Refresh the browser after making edits to see your changes.

## Adding your photos and notes
- Replace placeholder images in `assets/` with your own files (keep filenames or update the references in HTML).
- Drop new photos into the relevant `hobbies/` page by editing the gallery card markup and captions.
- Use the HiFi page's individual device cards to attach a picture and a short comment to each item.

## Deployment
The site is static. To publish updates, push changes to the branch that GitHub Pages is configured to serve.
