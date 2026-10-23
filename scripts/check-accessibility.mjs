// Structural regression checks. Browser, keyboard, and screen-reader testing are still required.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = readFileSync('assets/js/site.js', 'utf8');
const context = vm.createContext({ window: { location: { hash: '' } }, document: { getElementById: () => ({}) } });
const templates = source.slice(0, source.indexOf("document.querySelectorAll('[data-page]').forEach((button) => {\n  button.addEventListener"));
vm.runInContext(templates, context);
function check(name, html) {
  const levels = [...html.matchAll(/<h([1-6])\b/g)].map(m => Number(m[1]));
  assert.equal(levels.filter(level => level === 1).length, 1, `${name}: one h1`);
  assert.equal(levels[0], 1, `${name}: main heading first`);
  levels.forEach((level, index) => assert.ok(index === 0 || level <= levels[index - 1] + 1, `${name}: heading levels do not skip`));
  for (const img of html.matchAll(/<img\b[^>]*>/g)) assert.match(img[0], /\balt="[^"]*"/, `${name}: image alternative`);
  assert.doesNotMatch(html, /<button\b[^>]*>[\s\S]*?<h[1-6]\b[\s\S]*?<\/button>/, `${name}: headings outside buttons`);
  console.log(`PASS ${name}: heading order and image alternatives`);
}
for (const name of ['renderHome', 'renderExperience', 'renderPublications', 'renderHobbies', 'renderBirdPortfolio', 'renderTech']) {
  check(name, vm.runInContext(`${name}()`, context));
}
const publicPublications = vm.runInContext('renderPublications()', context);
assert.doesNotMatch(publicPublications, /Historical abstract loss|historical-abstract-loss|23242635|historical-title-substitution/);
assert.match(publicPublications, /When Evidence Sets Become Relevance Lists/);
assert.equal(vm.runInContext("publications.find(paper => paper.title.startsWith('Historical abstract loss')).visible", context), false);
for (const file of ['index.html', 'resume.html', 'hobbies/bird-photography.html', 'hobbies/phones-jailbreaking.html', 'hobbies/flight-log.html', 'hobbies/hifi-earphones.html']) {
  const html = readFileSync(file, 'utf8');
  check(file, html.match(/<main\b[\s\S]*?<\/main>/)[0]);
  assert.match(html, /<html lang="en"/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /<main[^>]*\bid="[^"]+"[^>]*tabindex="-1"/);
}
const css = readFileSync('assets/css/site.css', 'utf8');
assert.match(css, /prefers-reduced-motion: reduce/);
assert.match(css, /:focus-visible/);
console.log('PASS skip links, language, focus styles, and reduced-motion support');
