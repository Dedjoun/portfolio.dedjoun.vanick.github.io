document.addEventListener('DOMContentLoaded', function () {

  /* Preloader */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => preloader.classList.add('loaded'));
  setTimeout(() => preloader && preloader.classList.add('loaded'), 1200);

  /* AOS init */
  if (window.AOS) AOS.init({ once: true, offset: 80 });

  /* Navbar scroll state */
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* Collapse mobile menu after clicking a link */
  document.querySelectorAll('#navMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const spyScroll = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  };
  window.addEventListener('scroll', spyScroll);
  spyScroll();

  /* Typewriter effect for hero role */
  const roles = [
    'Ingénieur Informatique',
    'Développeur Backend',
    'Administrateur Systèmes & Réseaux',
    'Business Analyst'
  ];
  const typedEl = document.getElementById('typed-role');
  if (typedEl) {
    let roleIndex = 0, charIndex = 0, deleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];
      if (!deleting) {
        typedEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typedEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(type, deleting ? 40 : 80);
    };
    type();
  }

  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
