# Yoyo Lin Personal Website

A simple static site built with HTML, CSS, and JavaScript. It automatically pulls public repositories for GitHub user **YoyoLin008** and shows them in the Projects section.

## Preview the site locally

You can open `index.html` directly in your browser, but running a tiny local server avoids any browser security restrictions and mirrors how the site behaves when deployed.

### Option 1: Python (built-in)
1. Open a terminal in the project folder.
2. Start the server:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit http://localhost:8000 in your browser.

### Option 2: Node.js (if you prefer)
1. Install the `serve` package if you don't have it:
   ```bash
   npm install -g serve
   ```
2. Run the server:
   ```bash
   serve .
   ```
3. Open the printed localhost URL (often http://localhost:3000).

The GitHub Projects tiles load directly from the GitHub API, so keep an internet connection when previewing.
Welcome to my digital garden ✿

This repository hosts my personal website at https://YoyoLin008.github.io
, where I share my projects, data stories, creative work, and a little bit of my life as an IS+DS student at UIUC.
