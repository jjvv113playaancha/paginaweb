// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav.menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Cierra el menú móvil al elegir una opción
  document.querySelectorAll('nav.menu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('open');
    });
  });

  // Formulario de contacto — placeholder hasta conectar backend/Supabase
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-status');
      if (note) {
        note.textContent = 'Mensaje listo para enviar (falta conectar el envío real).';
      }
    });
  }
});
