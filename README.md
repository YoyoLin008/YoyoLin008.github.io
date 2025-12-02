YoyoLin008 Personal Website

Welcome to the source code for Yoyo Lin’s personal website, hosted at https://YoyoLin008.github.io
.
This is a simple static site built with HTML, CSS, and JavaScript, with no build tools or frameworks required.
The website showcases my projects, data visualizations, research work, and hobby pages (birds, HiFi, phones, and flight logs).

🔗 Live Site

https://YoyoLin008.github.io

📁 About This Repository

Fully static site — no build step needed

GitHub Pages automatically serves the contents of the repository

The Projects section dynamically loads my public GitHub repositories using the GitHub API

Hobby subpages are located under /hobbies/

🏃‍♀️ Run the Site Locally

Although you can open index.html directly in your browser, running a simple local server avoids browser security limitations and makes your local preview match GitHub Pages behavior.

Option 1 — Python (built-in)
python3 -m http.server 8000


Then open:
http://localhost:8000

Option 2 — Node.js

Install serve if you don’t have it:

npm install -g serve


Run:

serve .


Then open the printed URL (usually http://localhost:3000
).

The GitHub Projects section loads through the GitHub API, so an internet connection is required when previewing locally.

📂 Directory Structure
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

🌱 About the Site

This site acts as my personal digital garden, where I share:

Data science & visualization projects

GitHub work and research updates

Coursework-related demos

Photography & hobby logs

Creative experiments in UI/UX

I’m currently an IS+DS student at UIUC, building a portfolio in data science, analysis, visualization, and interactive storytelling.
