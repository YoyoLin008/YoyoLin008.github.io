// Fun fact generator
const funFacts = [
  'I keep a detailed log of my flights, including routes, aircraft types, and small memories from each trip.',
  'I love experimenting with different combinations of earphones, DACs, and amplifiers to see how they change a song.',
  'I enjoy jailbreaking older phones to explore features and customizations beyond the default settings.',
  'Bird photography is one of my favorite excuses to travel to new places and wake up early.',
  'I like building projects that sit between data science and storytelling, especially when they help non-technical audiences understand a topic.',
  'I once wrote about AI and the fracking industry and received a silver medal from the Harvard International Review for it.',
  'I am a project lead at Illinois Data Science Club (IDSC)'
];

document.addEventListener('DOMContentLoaded', () => {
  const funFactText = document.getElementById('funFactText');
  const funFactBtn = document.getElementById('funFactBtn');
  const yearSpan = document.getElementById('yearSpan');
  const repoGrid = document.getElementById('repoGrid');
  const repoStatus = document.getElementById('repoStatus');

  if (funFactBtn && funFactText) {
    funFactBtn.addEventListener('click', () => {
      const index = Math.floor(Math.random() * funFacts.length);
      funFactText.textContent = funFacts[index];
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (repoGrid) {
    loadGithubRepos('YoyoLin008', repoGrid, repoStatus);
  }
});

async function loadGithubRepos(username, gridEl, statusEl) {
  const endpoint = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const repos = await response.json();
    const visibleRepos = repos.filter((repo) => !repo.fork);

    if (!visibleRepos.length) {
      updateRepoStatus(statusEl, 'No public repositories found right now.');
      return;
    }

    gridEl.innerHTML = visibleRepos
      .map(
        (repo) => `
        <a class="project-tile" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
          <div class="project-tile-top">
            <span class="project-tile-title">${repo.name}</span>
            <span class="pill">${repo.language || 'Repo'}</span>
          </div>
          <p class="project-tile-body">${repo.description || 'Visit the repository to learn more.'}</p>
        </a>
      `
      )
      .join('');

    updateRepoStatus(statusEl, `Showing ${visibleRepos.length} public repos from GitHub.`);
  } catch (error) {
    console.error('Error loading repositories:', error);
    updateRepoStatus(statusEl, 'Unable to load repositories right now. Please try again later.');
  }
}

function updateRepoStatus(el, message) {
  if (!el) return;
  el.textContent = message;
}