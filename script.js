window.__ANUBIS_NAV_SCRIPT_LOADED__ = true;

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');

  if (!toggle || !menu || !overlay) return;

  const isMobileMenu = () =>
    window.matchMedia('(max-width: 700px), (max-height: 500px) and (max-width: 1000px)').matches;

  function collapseAllSubmenus() {
    document.querySelectorAll('.menu .dropdown').forEach((dropdown) => {
      dropdown.classList.remove('open');
      const panel = dropdown.querySelector('.dropdown-content');
      const button = dropdown.querySelector('.dropbtn');

      if (button) button.setAttribute('aria-expanded', 'false');
      if (panel) {
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
      }
    });
  }

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.textContent = '✕';
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.textContent = '☰';
    collapseAllSubmenus();
  }

  function outsideMenuHandler(event) {
    if (!isMobileMenu()) return;
    if (!menu.classList.contains('active')) return;

    const clickedOutside = !menu.contains(event.target) && !toggle.contains(event.target);
    if (clickedOutside) closeMenu();
  }

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('active')) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);
  document.addEventListener('click', outsideMenuHandler);
  document.addEventListener('touchstart', outsideMenuHandler, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('active')) closeMenu();
  });

  document.querySelectorAll('.dropdown .dropbtn').forEach((button) => {
    const dropdown = button.closest('.dropdown');
    const panel = dropdown ? dropdown.querySelector('.dropdown-content') : null;
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', (event) => {
      if (!isMobileMenu() || !dropdown || !panel) return;

      event.preventDefault();
      event.stopPropagation();

      const willOpen = !dropdown.classList.contains('open');
      dropdown.classList.toggle('open', willOpen);
      button.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

      if (willOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.style.opacity = '1';
      } else {
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
      }
    });
  });

  function syncDropdownMode() {
    if (!isMobileMenu()) {
      document.querySelectorAll('.menu .dropdown-content').forEach((panel) => {
        panel.style.maxHeight = '';
        panel.style.opacity = '';
      });
      document.querySelectorAll('.menu .dropdown').forEach((dropdown) => dropdown.classList.remove('open'));
      document.querySelectorAll('.dropdown .dropbtn').forEach((button) => button.setAttribute('aria-expanded', 'false'));
    }
  }

  window.addEventListener('resize', syncDropdownMode);
  syncDropdownMode();
});