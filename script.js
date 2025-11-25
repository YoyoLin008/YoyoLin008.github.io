// Fun fact generator
const funFacts = [
  'I keep a detailed log of my flights, including routes, aircraft types, and small memories from each trip.',
  'I love experimenting with different combinations of earphones, DACs, and amplifiers to see how they change a song.',
  'I enjoy jailbreaking older phones to explore features and customizations beyond the default settings.',
  'Bird photography is one of my favorite excuses to travel to new places and wake up early.',
  'I like building projects that sit between data science and storytelling, especially when they help non-technical audiences understand a topic.',
  'I once wrote about AI and the fracking industry and received a silver medal from the Harvard International Review for it.'
];

document.addEventListener('DOMContentLoaded', () => {
  const funFactText = document.getElementById('funFactText');
  const funFactBtn = document.getElementById('funFactBtn');
  const yearSpan = document.getElementById('yearSpan');

  if (funFactBtn && funFactText) {
    funFactBtn.addEventListener('click', () => {
      const index = Math.floor(Math.random() * funFacts.length);
      funFactText.textContent = funFacts[index];
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});