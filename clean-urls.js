// Keep pretty URLs on deployed environments and normalize homepage aliases.
(function() {
    const hostname = window.location.hostname;
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

    const isLocalDev = (
        window.location.protocol === 'file:' ||
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '::1'
    );

    if (isLocalDev && !shouldForceCleanUrls()) return;

    function getBasePath() {
        const parts = window.location.pathname.split('/').filter(Boolean);
        if (hostname.endsWith('github.io') && parts.length > 0) {
            return '/' + parts[0] + '/';
        }
        return '/';
    }

    const basePath = getBasePath();
    const baseNoSlash = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    const currentPath = window.location.pathname;

    function updateCanonical(pathname) {
        const canonicalUrl = window.location.origin + pathname;
        let canonicalEl = document.querySelector('link[rel="canonical"]');
        if (!canonicalEl) {
            canonicalEl = document.createElement('link');
            canonicalEl.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalEl);
        }
        canonicalEl.setAttribute('href', canonicalUrl);
    }

    const homeAliases = new Set([
        baseNoSlash + '/home',
        baseNoSlash + '/home/',
        baseNoSlash + '/home.html',
        baseNoSlash + '/home/home.html',
        baseNoSlash + '/index.html'
    ]);

    if (homeAliases.has(currentPath)) {
        window.history.replaceState(null, '', basePath + window.location.search + window.location.hash);
        updateCanonical(basePath);
        return;
    }

    if (currentPath.endsWith('.html')) {
        const prettyPath = currentPath.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
        window.history.replaceState(null, '', prettyPath + window.location.search + window.location.hash);
        updateCanonical(prettyPath);
        return;
    }

    updateCanonical(currentPath);
})();