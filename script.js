const CONTACT = {
  github: 'https://github.com/YoyoLin008',
  linkedin: 'https://www.linkedin.com/in/yoyo-lin-631889299',
  email: 'mailto:yoyolin2@illinois.edu'
};

const pageLabels = {
  home: 'About',
  resume: 'Resume',
  experience: 'Experience',
  projects: 'Projects',
  hobbies: 'Hobbies'
};

const timelineData = [
  {
    role: 'Digital Marketing Intern',
    organization: 'Transsion Holdings',
    date: 'June 2026 - Aug 2026',
    logoUrl: 'https://logo.clearbit.com/transsion.com',
    description: 'Upcoming summer internship focusing on digital marketing strategies and execution within the global mobile communications industry.'
  },
  {
    role: 'Research Assistant (Blockchain & LLMs)',
    organization: 'Chinese University of Hong Kong, Shenzhen',
    date: 'May 2026 - Aug 2026',
    logoUrl: 'https://logo.clearbit.com/cuhk.edu.cn',
    description:
      'Upcoming summer research position working on the intersection of Blockchain and Large Language Models under the guidance of Prof. Chenhao Ma.',
    links: [{ label: 'Prof. Chenhao Ma', href: 'https://sds.cuhk.edu.cn/en/teacher/631' }]
  },
  {
    role: 'Research Assistant (LLMs as Peer Reviewers)',
    organization: 'University of Illinois Urbana-Champaign',
    date: 'Jan 2026 - Present',
    logoUrl: 'https://logo.clearbit.com/illinois.edu',
    description:
      'Working with Prof. Nitin Verma to explore how large language models can support academic peer review. Designing prompts and evaluation frameworks to generate specific, helpful feedback rather than vague summaries.',
    links: [{ label: 'Prof. Nitin Verma', href: 'https://ischool.illinois.edu/people/nitin-verma' }]
  },
  {
    role: 'Project Lead',
    organization: 'Illinois Data Science Club',
    orgLink: 'https://www.instagram.com/uiucdsc/',
    date: 'May 2025 - Present',
    logoUrl: 'https://ui-avatars.com/api/?name=DSC&background=f5f5f4&color=78716c&size=128',
    description: 'Mentoring and leading student teams to participate in Data Dive projects.'
  }
];

const awards = [
  {
    title: 'Harvard International Review - Silver Medal',
    description: 'Recognized for an article exploring AI in the fracking industry, combining policy, technology, and data.'
  },
  {
    title: 'Illinois for Illinois (I4I) Scholarship',
    description: 'Awarded in recognition of strong academic performance and a sustained commitment to learning.'
  },
  {
    title: "Dean's List",
    description: 'University of Illinois Urbana-Champaign. Recognized for three semesters of maintaining high academic standing alongside research.'
  }
];

const galleryData = {
  birds: {
    title: 'Bird Photography',
    description: 'Traveling to photograph birds and document the tiny details of their environments.',
    icon: 'Camera',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1552728089-571688052309?w=900&q=80',
        caption: 'Kingfisher spotted near the local river.'
      },
      {
        src: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=900&q=80',
        caption: 'A quiet moment with a wild owl.'
      },
      {
        src: 'https://images.unsplash.com/photo-1606567595334-d39972c85d77?w=900&q=80',
        caption: 'Hummingbird mid-flight.'
      }
    ]
  },
  hifi: {
    title: 'HiFi Audio',
    description: 'Pairing DACs, amps, and earphones to experiment with sound signatures.',
    icon: 'Audio',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&q=80',
        caption: 'My current desktop DAC and amp stack.'
      },
      {
        src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=80',
        caption: 'Testing a new pair of planar magnetic headphones.'
      }
    ]
  },
  phones: {
    title: 'Jailbreaking & Custom ROMs',
    description: 'Exploring custom ROMs and older phones to understand system design.',
    icon: 'Phone',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80',
        caption: 'Successfully flashed LineageOS on an old flagship.'
      },
      {
        src: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbfd?w=900&q=80',
        caption: 'Digging into the bootloader settings.'
      }
    ]
  },
  flights: {
    title: 'Flight Logging',
    description: 'Maintaining a personal dataset of routes, aircraft, and travel memories.',
    icon: 'Plane',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
        caption: 'View from the window seat on a 737.'
      },
      {
        src: 'https://images.unsplash.com/photo-1504680177363-2287f3944605?w=900&q=80',
        caption: 'Logging my route across the Pacific.'
      }
    ]
  }
};

const funFacts = [
  "I took my profile photo at McDonald's Island in Shenzhen. I'm lovin' it.",
  'I maintain my own detailed flight log tracking every trip I take.',
  'I love exploring older phones and testing out custom ROMs.',
  'I experiment with different DACs and amps to find the perfect sound signature.',
  'I travel to different places specifically to photograph birds in their natural habitats.'
];

let currentPage = 'home';
let currentFactIndex = 0;
let reposLoaded = false;

const app = document.getElementById('app');

const icons = {
  github: '<path d="M9 19c-4 1.3-4-2-5.6-2.5m11.2 4.5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18 6a4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C5.9 2.5 4.9 2.8 4.9 2.8A4.3 4.3 0 0 0 4.8 6a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 4-3z"/><path d="M2 9h4v12H2z"/><path d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  grad: '<path d="m22 10-10-5-10 5 10 5 10-5z"/><path d="M6 12v5c3.5 2.5 8.5 2.5 12 0v-5"/><path d="M22 10v6"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/>',
  camera: '<path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3z"/><circle cx="12" cy="13" r="4"/>',
  audio: '<path d="M3 18V9a9 9 0 0 1 18 0v9"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H3z"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  plane: '<path d="M17.8 19.2 16 11l5-5c1.5-1.5-.5-3.5-2-2l-5 5-8.2-1.8-1.1 1.1 6.5 3.5-4 4-3-.5-1 1 4.5 2.2 2.2 4.5 1-1-.5-3 4-4 3.5 6.5z"/>',
  spark: '<path d="M12 2v5M12 17v5M4.2 4.2l3.5 3.5M16.3 16.3l3.5 3.5M2 12h5M17 12h5M4.2 19.8l3.5-3.5M16.3 7.7l3.5-3.5"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1z"/>',
  fork: '<circle cx="6" cy="4" r="2"/><circle cx="18" cy="4" r="2"/><circle cx="12" cy="20" r="2"/><path d="M6 6v3a3 3 0 0 0 3 3h3v6"/><path d="M18 6v3a3 3 0 0 1-3 3h-3"/>'
};

const icon = (name) => {
  const key = name.toLowerCase();
  return `<svg class="icon icon-${key}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[key] || ''}</svg>`;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const renderLinkedDescription = (item) => {
  let description = escapeHtml(item.description);

  if (item.links) {
    item.links.forEach((link) => {
      description = description.replace(
        escapeHtml(link.label),
        `<a href="${link.href}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
      );
    });
  }

  return description;
};

const logoFallback = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f5f5f4&color=78716c&size=128`;

const setPage = (pageId) => {
  currentPage = pageId;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const updateNavigation = () => {
  document.querySelectorAll('[data-page]').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === currentPage);
  });
  document.querySelector('.mobile-page-label').textContent = pageLabels[currentPage] || pageLabels.hobbies;
};

const renderHome = () => `
  <section class="page page-home">
    <div class="home-copy">
      <p class="eyebrow">Information Sciences + Data Science @ UIUC</p>
      <h1>Hi, I'm Yoyo Lin.</h1>
      <p class="lead">
        I explore how technology and human experiences intersect, whether that is analyzing crops and climate,
        training language models for peer review, or turning a flight log into a personal story of travel.
      </p>
      <div class="social-row" aria-label="Social links">
        <a href="${CONTACT.github}" target="_blank" rel="noreferrer" aria-label="GitHub">${icon('github')}</a>
        <a href="${CONTACT.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a>
        <a href="${CONTACT.email}" aria-label="Email">${icon('Mail')}</a>
      </div>
    </div>
    <div class="portrait-wrap">
      <div class="portrait-backdrop"></div>
      <img
        src="YoyoLin_Photo.jpeg"
        alt="Yoyo Lin"
        class="portrait"
        onerror="this.src='https://ui-avatars.com/api/?name=Yoyo+Lin&background=d97706&color=fff&size=512'"
      />
    </div>
  </section>
`;

const renderResume = () => `
  <section class="page">
    <header class="page-header">
      <h2>Experience & Education</h2>
      <p>My academic journey and recognitions.</p>
    </header>

    <div class="two-column">
      <section>
        <h3 class="section-heading">${icon('Grad')} Education</h3>
        <article class="education-item">
          <div class="logo-card">
            <img
              src="https://logo.clearbit.com/illinois.edu"
              alt="UIUC logo"
              onerror="this.src='${logoFallback('UIUC')}'"
            />
          </div>
          <div class="border-note">
            <h4>University of Illinois Urbana-Champaign</h4>
            <p class="accent-text">B.S. Information Sciences + Data Science</p>
            <p>Current focus: LLMs, peer review, crop analytics, and human-centered design.</p>
          </div>
        </article>
        <a class="text-link resume-link" href="YoyoLin_Resume.pdf" target="_blank" rel="noreferrer">
          ${icon('File')} Click here to preview CV
        </a>
      </section>

      <section>
        <h3 class="section-heading">${icon('Award')} Honors & Awards</h3>
        <ul class="award-list">
          ${awards.map((award) => `
            <li>
              <h4>${award.title}</h4>
              <p>${award.description}</p>
            </li>
          `).join('')}
        </ul>
      </section>
    </div>
  </section>
`;

const renderExperience = () => `
  <section class="page">
    <header class="page-header">
      <h2>Research & Experience</h2>
      <p>A timeline of my academic research, internships, and data science projects.</p>
    </header>

    <div class="timeline">
      ${timelineData.map((item) => `
        <article class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="logo-card">
              <img
                src="${item.logoUrl}"
                alt="${escapeHtml(item.organization)} logo"
                onerror="this.src='${logoFallback(item.organization)}'"
              />
            </div>
            <div class="timeline-content">
              <div class="timeline-title-row">
                <h3>${escapeHtml(item.role)}</h3>
                <span>${escapeHtml(item.date)}</span>
              </div>
              <p class="organization">
                ${item.orgLink
                  ? `<a href="${item.orgLink}" target="_blank" rel="noreferrer">${escapeHtml(item.organization)}</a>`
                  : escapeHtml(item.organization)}
              </p>
              <p>${renderLinkedDescription(item)}</p>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  </section>
`;

const renderProjects = () => `
  <section class="page">
    <header class="page-header split-header">
      <div>
        <h2>Featured Code</h2>
        <p>Live feed from my GitHub. I focus on tidy code and accessible data storytelling.</p>
      </div>
      <a class="text-link" href="${CONTACT.github}" target="_blank" rel="noreferrer">
        View all on GitHub
      </a>
    </header>

    <div class="repo-grid" id="repoGrid">
      <div class="loading-card">Loading repositories from YoyoLin008...</div>
    </div>
  </section>
`;

const renderHobbies = () => `
  <section class="page hobbies-page">
    <div class="hobbies-intro">
      <header class="page-header compact">
        <h2>Outside the Classroom</h2>
      </header>
      <p>
        My hobbies are where tech, travel, and small everyday details come together. I love exploring the nuances
        in hardware, systems, and nature.
      </p>
      <aside class="fact-box" aria-live="polite">
        <div class="fact-label">${icon('Spark')} Random Fun Fact</div>
        <p id="factText">${funFacts[currentFactIndex]}</p>
        <button class="plain-button" type="button" id="factButton">Generate Another</button>
      </aside>
    </div>

    <div class="hobby-grid">
      ${Object.entries(galleryData).map(([id, hobby]) => `
        <button class="hobby-button" type="button" data-gallery="${id}">
          <span class="hobby-icon">${icon(hobby.icon)}</span>
          <span>
            <strong>${hobby.title}</strong>
            <small>${hobby.description}</small>
            <em>View gallery ${icon('Right')}</em>
          </span>
        </button>
      `).join('')}
    </div>
  </section>
`;

const renderGallery = (galleryId) => {
  const gallery = galleryData[galleryId];
  if (!gallery) return renderHobbies();

  return `
    <section class="page">
      <button class="back-button" type="button" data-back-hobbies>${icon('Left')} Back to Hobbies</button>
      <header class="page-header">
        <div class="gallery-title">${icon(gallery.icon)}<h2>${gallery.title}</h2></div>
        <p>${gallery.description}</p>
      </header>
      <div class="photo-grid">
        ${gallery.photos.map((photo) => `
          <figure class="photo-card">
            <div class="photo-frame">
              <img src="${photo.src}" alt="${escapeHtml(photo.caption)}" />
            </div>
            <figcaption>${photo.caption}</figcaption>
          </figure>
        `).join('')}
        <div class="upload-card">
          ${icon('Image')}
          <span>Upload more photos</span>
        </div>
      </div>
    </section>
  `;
};

const loadRepos = async () => {
  if (reposLoaded || currentPage !== 'projects') return;
  reposLoaded = true;

  const repoGrid = document.getElementById('repoGrid');
  if (!repoGrid) return;

  try {
    const response = await fetch('https://api.github.com/users/YoyoLin008/repos?sort=updated&per_page=6');
    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      repoGrid.innerHTML = '<div class="loading-card">No repositories found.</div>';
      return;
    }

    repoGrid.innerHTML = repos.map((repo) => `
      <a class="repo-card" href="${repo.html_url}" target="_blank" rel="noreferrer">
        <span>
          <strong>${escapeHtml(repo.name)}</strong>
          <small>${escapeHtml(repo.language || 'Code')}</small>
        </span>
        <p>${escapeHtml(repo.description || 'No description provided.')}</p>
        <div class="repo-stats">
          <span>${icon('Star')} ${repo.stargazers_count}</span>
          <span>${icon('Fork')} ${repo.forks_count}</span>
        </div>
      </a>
    `).join('');
  } catch (error) {
    repoGrid.innerHTML = '<div class="loading-card">Could not load repositories. Visit GitHub directly from the link above.</div>';
  }
};

const bindPageEvents = () => {
  document.querySelectorAll('[data-gallery]').forEach((button) => {
    button.addEventListener('click', () => setPage(`gallery-${button.dataset.gallery}`));
  });

  document.querySelector('[data-back-hobbies]')?.addEventListener('click', () => setPage('hobbies'));

  document.getElementById('factButton')?.addEventListener('click', () => {
    let nextIndex = currentFactIndex;
    while (nextIndex === currentFactIndex) {
      nextIndex = Math.floor(Math.random() * funFacts.length);
    }
    currentFactIndex = nextIndex;
    document.getElementById('factText').textContent = funFacts[currentFactIndex];
  });
};

const render = () => {
  if (currentPage.startsWith('gallery-')) {
    app.innerHTML = renderGallery(currentPage.replace('gallery-', ''));
  } else {
    const renderers = {
      home: renderHome,
      resume: renderResume,
      experience: renderExperience,
      projects: renderProjects,
      hobbies: renderHobbies
    };
    app.innerHTML = (renderers[currentPage] || renderHome)();
  }

  updateNavigation();
  bindPageEvents();
  loadRepos();
};

document.querySelectorAll('[data-page]').forEach((button) => {
  button.addEventListener('click', () => {
    reposLoaded = button.dataset.page === 'projects' ? false : reposLoaded;
    setPage(button.dataset.page);
  });
});

window.addEventListener('scroll', () => {
  document.querySelector('.site-nav').classList.toggle('scrolled', window.scrollY > 20);
});

document.getElementById('year').textContent = new Date().getFullYear();
render();
