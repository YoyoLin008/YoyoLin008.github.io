/* Shared enhancements for the application and standalone HTML pages. */
(() => {
  const newTabNote = 'opens in a new tab';
  window.enhanceAccessibility = (root = document) => {
    root.querySelectorAll('a[target="_blank"]').forEach((link) => {
      if (link.dataset.newTabHint) return;
      const existingLabel = link.getAttribute('aria-label');
      if (existingLabel) {
        if (!existingLabel.includes(newTabNote)) link.setAttribute('aria-label', `${existingLabel} (${newTabNote})`);
      } else {
        const hint = document.createElement('span');
        hint.className = 'sr-only';
        hint.textContent = ` (${newTabNote})`;
        link.append(hint);
      }
      link.dataset.newTabHint = 'true';
    });
  };
  document.addEventListener('click', (event) => {
    const skipLink = event.target.closest('.skip-link');
    if (!skipLink) return;
    const main = document.getElementById(skipLink.hash.slice(1));
    if (main) {
      event.preventDefault();
      main.focus();
    }
  });
  const main = document.querySelector('main');
  const heading = main?.querySelector('h1');
  if (heading && !main.hasAttribute('aria-labelledby')) {
    heading.id ||= 'main-heading';
    main.setAttribute('aria-labelledby', heading.id);
  }
  window.enhanceAccessibility();
})();
