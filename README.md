## Yoyo Lin — Personal Website

Welcome to the source code for **Yoyo Lin’s** personal website, hosted at <https://YoyoLin008.github.io>. This is a fully static site built with **HTML, CSS, and JavaScript**—no build tools or frameworks required.

### Quick Links
- **Live site:** <https://YoyoLin008.github.io>
- **Tech stack:** Static HTML/CSS/JS served by GitHub Pages
- **Content:** Projects, data visualizations, research updates, and hobby pages (birds, HiFi, phones, flight logs)

### Running Locally
You can open `index.html` directly, but using a lightweight server avoids browser security limitations and mirrors GitHub Pages behavior.

**Python (built-in)**
```bash
python3 -m http.server 8000
```
Then open <http://localhost:8000>.

**Node.js**
```bash
npm install -g serve
serve .
```
Then open the printed URL (usually <http://localhost:3000>).

> The Projects section fetches data from the GitHub API, so you’ll need an internet connection when previewing locally.

### Repository Layout
```
/
├── index.html        # Main homepage
├── style.css         # Global styling
├── script.js         # Website logic + GitHub repo fetching
├── hobbies/
│   ├── birds.html
│   ├── hifi.html
│   ├── phones.html
│   └── flights.html
└── assets/           # Images, icons, etc.
```

### About the Site
This site acts as my personal digital garden, featuring:
- Data science and visualization projects
- GitHub work and research updates
- Coursework demos
- Photography and hobby logs
- Creative UI/UX experiments

I’m currently an **IS+DS student at UIUC**, building a portfolio across data science, analysis, visualization, and interactive storytelling.
