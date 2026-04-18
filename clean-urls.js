// Keep pretty URLs on the deployed site, but preserve real .html paths in local dev.
(function() {
    const hostname = window.location.hostname;
    const isLocalDev = (
        window.location.protocol === 'file:' ||
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '::1'
    );

    if (isLocalDev) return;
    if (!window.location.pathname.endsWith('.html')) return;

    const newPath = window.location.pathname.replace(/\.html$/, '');
    window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
})();