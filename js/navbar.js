(function() {
    const isInArticles = window.location.pathname.includes('/articles/');
    const basePath = isInArticles ? '../' : '';
    
    const isHomePage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname.endsWith('/') || 
                       window.location.pathname === '' ||
                       window.location.pathname.split('/').pop() === '';
    
    const isArticlesPage = isInArticles;
    
    const activeClass = 'class="active"';
    
    const navbarHTML = `
        <nav class="navbar">
            <div class="logo"><a href="${basePath}index.html">Portfolio</a></div>
            <ul class="nav-links">
                <li><a href="${basePath}index.html#accueil" ${isHomePage ? activeClass : ''}>Accueil</a></li>
                <li><a href="${basePath}index.html#a-propos">À propos</a></li>
                <li><a href="${basePath}index.html#articles" ${isArticlesPage ? activeClass : ''}>Articles</a></li>
                <li><a href="${basePath}index.html#projets">Projets</a></li>
                <li><a href="${basePath}index.html#contact">Contact</a></li>
            </ul>
            <button class="menu-toggle" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    `;
    
    const header = document.createElement('header');
    header.innerHTML = navbarHTML;
    document.body.insertBefore(header, document.body.firstChild);
})();