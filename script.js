window.__ANUBIS_NAV_SCRIPT_LOADED__ = true;

function getSocialIconSvg(iconName) {
  const icons = {
    instagram: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,
    facebook: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    tiktok: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`
  };
  return icons[iconName.toLowerCase()] || '';
}

document.addEventListener('DOMContentLoaded', () => {
  function shouldForceCleanUrls() {
    try {
      if (window.__ANUBIS_FORCE_CLEAN_URLS__ === true) return true;
      const params = new URLSearchParams(window.location.search);
      if (params.get('clean') === '1') {
        window.localStorage.setItem('anubis_force_clean_urls', '1');
        return true;
      }
      return window.localStorage.getItem('anubis_force_clean_urls') === '1';
    } catch (_) {
      return window.__ANUBIS_FORCE_CLEAN_URLS__ === true;
    }
  }

  function getBasePath() {
    const hostname = window.location.hostname;
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (hostname.endsWith('github.io') && parts.length > 0) {
      return '/' + parts[0] + '/';
    }
    return '/';
  }

  function isLocalDev() {
    if (shouldForceCleanUrls()) return false;
    const hostname = window.location.hostname;
    return (
      window.location.protocol === 'file:' ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '::1'
    );
  }

  function normalizeNavHref(rawHref) {
    if (typeof rawHref !== 'string' || rawHref.trim() === '') return rawHref;

    const href = rawHref.trim();
    if (
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      /^[a-z][a-z0-9+.-]*:/i.test(href) ||
      href.startsWith('//')
    ) {
      return href;
    }

    const suffixMatch = href.match(/([?#].*)$/);
    const suffix = suffixMatch ? suffixMatch[1] : '';
    let path = suffix ? href.slice(0, -suffix.length) : href;

    if (!path || path === '.') return getBasePath() + suffix;

    // Keep explicit root-relative paths untouched.
    if (path.startsWith('/')) return path + suffix;

    if (isLocalDev()) {
      if (!/\.[a-z0-9]+$/i.test(path) && !path.endsWith('/')) {
        path += '.html';
      }
      return path + suffix;
    }

    path = path.replace(/^\.\//, '');
    path = path.replace(/\/index\.html$/i, '/');
    path = path.replace(/\.html$/i, '');

    if (path === '' || path === 'home' || path === 'home/' || path === 'index' || path === 'index/') {
      return getBasePath() + suffix;
    }

    return getBasePath() + path.replace(/^\/+/, '') + suffix;
  }

  const homePath = normalizeNavHref('index.html');

  function ensureSharedNavbar() {
    const existingNavbar = document.querySelector('.navbar');
    if (existingNavbar) return existingNavbar;

    const navbarMarkup =
      '<div class="navbar">' +
      '<a class="logo" href="' + homePath + '">' +
      '<img src="Media/Logo/logo.png" alt="Logo">' +
      '</a>' +
      '<div class="socials" aria-hidden="false"></div>' +
      '<div class="menu-toggle" id="menu-toggle" aria-label="Open menu"></div>' +
      '<div class="menu" id="menu"></div>' +
      '<a class="logo-inline" href="' + homePath + '">' +
      '<img class="logo-img default" src="Media/Logo/logo.png" alt="Logo">' +
      '<img class="logo-img hover" src="Media/Logo/logored.png" alt="Logo (red)">' +
      '</a>' +
      '<div id="overlay" class="overlay" aria-hidden="true"></div>' +
      '</div>';

    const mountPoint = document.getElementById('shared-navbar-root');
    if (mountPoint) {
      mountPoint.outerHTML = navbarMarkup;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarMarkup);
    }

    return document.querySelector('.navbar');
  }

  ensureSharedNavbar();

  function ensureSharedFooter() {
    const existingFooter = document.querySelector('footer.footer');
    if (existingFooter) return existingFooter;

    const footerMarkup =
      '<footer class="footer">' +
      '<img src="Media/Graphic/snake_bottom_right.webp" alt="" class="hero-snake-bottom-right">' +
      '<p>Copyright 2026 © All rights Reserved. Design by Anubis Underground</p>' +
      '</footer>';

    const mountPoint = document.getElementById('shared-footer-root');
    if (mountPoint) {
      mountPoint.outerHTML = footerMarkup;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerMarkup);
    }

    return document.querySelector('footer.footer');
  }

  ensureSharedFooter();

  const footerParagraphs = document.querySelectorAll('.footer p');

  if (footerParagraphs.length) {
    fetch('footer.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load footer.json');
        return response.json();
      })
      .then((footerData) => {
        if (!footerData || typeof footerData.text !== 'string') return;
        footerParagraphs.forEach((paragraph) => {
          paragraph.textContent = footerData.text;
        });
      })
      .catch((error) => {
        console.error('Could not load shared footer text', error);
      });
  }

  const socialsContainer = document.querySelector('.socials');
  if (socialsContainer) {
    fetch('socials.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load socials.json');
        return response.json();
      })
      .then((socialsData) => {
        if (!Array.isArray(socialsData?.socials) || socialsData.socials.length === 0) return;
        socialsContainer.innerHTML = '';
        socialsData.socials.forEach((social) => {
          const link = document.createElement('a');
          link.className = 'social-icon';
          link.href = social.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.setAttribute('aria-label', social.name);
          link.innerHTML = getSocialIconSvg(social.icon);
          socialsContainer.appendChild(link);
        });
      })
      .catch((error) => {
        console.error('Could not load socials.json', error);
      });
  }

  function renderNavigationMenu() {
    const navMenuEl = document.getElementById('menu');
    if (!navMenuEl) return;

    const standaloneLogo = document.querySelector('.navbar > .logo-inline');
    if (standaloneLogo) standaloneLogo.remove();

    fetch('navigation.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load navigation.json');
        return response.json();
      })
      .then((navData) => {
        if (!Array.isArray(navData?.menu) || navData.menu.length === 0) return;

        let html = '';
        const logoInsertIndex = Math.ceil(navData.menu.length / 2);

        navData.menu.forEach((item, index) => {
          if (index === logoInsertIndex) {
            html += '<a class="logo-inline" href="' + homePath + '"><img class="logo-img default" src="Media/Logo/logo.png" alt="Logo"><img class="logo-img hover" src="Media/Logo/logored.png" alt="Logo (red)"></a>';
          }

          if (item.type === 'dropdown') {
            html += '<div class="dropdown"><button class="dropbtn">' + item.label + ' ▾</button><div class="dropdown-content">';
            item.items.forEach((subitem) => {
              const target = subitem.target ? ` target="${subitem.target}" rel="noopener noreferrer"` : '';
              html += `<a href="${normalizeNavHref(subitem.href)}"${target}>${subitem.label}</a>`;
            });
            html += '</div></div>';
          } else {
            const target = item.target ? ` target="${item.target}" rel="noopener noreferrer"` : '';
            html += `<a href="${normalizeNavHref(item.href)}"${target}>${item.label}</a>`;
          }
        });

        navMenuEl.innerHTML = html;

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

        syncDropdownMode();
      })
      .catch((error) => {
        console.error('Could not load navigation.json', error);
      });
  }

  renderNavigationMenu();

  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const navbar = document.querySelector('.navbar');
  let lockedScrollY = 0;

  if (!toggle || !menu || !overlay) return;

  const isMobileMenu = () =>
    window.matchMedia('(max-width: 700px), (max-height: 500px) and (max-width: 1000px)').matches;

  function syncNavOffsetVar() {
    if (!navbar) return;
    const measuredHeight = navbar.getBoundingClientRect().height || navbar.offsetHeight || 56;
    const navHeight = Math.ceil(measuredHeight);
    document.documentElement.style.setProperty('--nav-offset', navHeight + 'px');
  }

  syncNavOffsetVar();

  function setupMobileMenuToggle() {
    if (!toggle.querySelector('.menu-toggle-line')) {
      toggle.innerHTML =
        '<span class="menu-toggle-line"></span>' +
        '<span class="menu-toggle-line"></span>' +
        '<span class="menu-toggle-line"></span>';
    }

    toggle.setAttribute('type', 'button');
    toggle.setAttribute('aria-controls', 'menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  setupMobileMenuToggle();

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

  function setScrollLock(isLocked) {
    const root = document.documentElement;

    if (isLocked) {
      if (root.classList.contains('mobile-menu-open')) return;
      lockedScrollY = window.scrollY || window.pageYOffset || 0;
      root.classList.add('mobile-menu-open');
      document.body.classList.add('mobile-menu-open');
      document.body.style.top = '-' + lockedScrollY + 'px';
      return;
    }

    if (!root.classList.contains('mobile-menu-open') && !document.body.classList.contains('mobile-menu-open')) return;

    root.classList.remove('mobile-menu-open');
    document.body.classList.remove('mobile-menu-open');

    const storedOffset = Math.abs(parseInt(document.body.style.top || '0', 10)) || lockedScrollY;
    document.body.style.top = '';
    window.scrollTo(0, storedOffset);
    lockedScrollY = 0;
  }

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    setScrollLock(true);
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    setScrollLock(false);
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
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

  menu.addEventListener('click', (event) => {
    if (!isMobileMenu()) return;
    const targetLink = event.target.closest('a');
    if (targetLink) closeMenu();
  });

  overlay.addEventListener('click', closeMenu);
  document.addEventListener('click', outsideMenuHandler);
  document.addEventListener('touchstart', outsideMenuHandler, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('active')) closeMenu();
  });

  function syncDropdownMode() {
    syncNavOffsetVar();
    if (!isMobileMenu()) {
      closeMenu();
      document.querySelectorAll('.menu .dropdown-content').forEach((panel) => {
        panel.style.maxHeight = '';
        panel.style.opacity = '';
      });
      document.querySelectorAll('.menu .dropdown').forEach((dropdown) => dropdown.classList.remove('open'));
      document.querySelectorAll('.dropdown .dropbtn').forEach((button) => button.setAttribute('aria-expanded', 'false'));
    }
  }

  window.addEventListener('resize', syncDropdownMode);
  window.addEventListener('orientationchange', syncNavOffsetVar);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', syncNavOffsetVar);
    window.visualViewport.addEventListener('scroll', syncNavOffsetVar);
  }
  if (navbar) {
    navbar.addEventListener('transitionend', syncNavOffsetVar);
  }
});