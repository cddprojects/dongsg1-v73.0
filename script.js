const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('.faq-card').forEach((card, index) => {
  if (index === 0) card.classList.add('active');
  card.querySelector('.faq-q')?.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

const form = document.querySelector('#leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = '/thank-you';
  });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
revealItems.forEach(item => revealObserver.observe(item));

const siteHeader = document.querySelector('.site-header');
const handleHeaderScroll = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 8);
};
handleHeaderScroll();
window.addEventListener('scroll', handleHeaderScroll);

const animateCounter = (el, target, prefix = '', duration = 1200) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    el.textContent = `${prefix}${target}`;
    return;
  }

  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.round(progress * target);
    el.textContent = `${prefix}${value}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counters = document.querySelectorAll('.counter');
if (counters.length) {
  let countersStarted = false;
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || countersStarted) return;
      countersStarted = true;
      counters.forEach(counter => {
        const target = Number(counter.dataset.target || 0);
        const prefix = counter.dataset.prefix || '';
        animateCounter(counter, target, prefix);
      });
      counterObserver.disconnect();
    });
  }, { threshold: 0.35 });

  const strip = document.querySelector('.hero-modern-strip');
  if (strip) counterObserver.observe(strip);
}
