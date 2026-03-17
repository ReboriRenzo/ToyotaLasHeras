document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initContactForm();
  initScrollReveal();
});

function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const btn = document.querySelector('.menu-btn');
  const header = document.querySelector('.header');

  if (!btn || !header) return;

  btn.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.querySelector('[name="nombre"]')?.value || '';
    const telefono = form.querySelector('[name="telefono"]')?.value || '';
    const mensaje = form.querySelector('[name="mensaje"]')?.value || '';
    const texto = encodeURIComponent(
      `Bienvenidos a Toyota Las Heras - Lo del Gringo.\n` +
      `Repuestos originales, asesoramiento y 15 años de confianza en Córdoba.\n\n` +
      `--- Consulta desde el sitio web ---\n\n` +
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono}\n\n` +
      `Mensaje:\n${mensaje}`
    );
    window.open(`https://wa.me/5493512550070?text=${texto}`, '_blank');
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}
