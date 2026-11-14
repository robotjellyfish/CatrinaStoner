(() => {
  const navToggle = document.querySelector('.site-nav .nav-toggle');
  const primaryLinks = document.getElementById('primary-links');

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navToggle.textContent = open ? 'Menu' : 'Close';
    primaryLinks?.classList.toggle('is-open', !open);
  });

  primaryLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!window.matchMedia('(max-width: 780px)').matches) return;
      navToggle?.setAttribute('aria-expanded', 'false');
      if (navToggle) navToggle.textContent = 'Menu';
      primaryLinks.classList.remove('is-open');
    });
  });
})();
