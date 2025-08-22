// Mobile optimization script for House of Grey

document.addEventListener('DOMContentLoaded', function() {
    // Add touch feedback for buttons and links
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .product-card');
    
    interactiveElements.forEach(element => {
        // Add active state for touch feedback
        element.addEventListener('touchstart', function() {
            this.classList.add('active-touch');
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.classList.remove('active-touch');
        }, { passive: true });
        
        // Prevent double-tap zoom on buttons
        element.addEventListener('touchend', function(e) {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                e.preventDefault();
                e.target.click();
            }
        }, { passive: false });
    });

    // Handle viewport height for mobile browsers
    function setViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set initial height and update on resize/orientation change
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    // Lazy load images with Intersection Observer
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                imageObserver.observe(img);
            }
        });
    }

    // Add backdrop for mobile menu
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        
        // Create backdrop element
        const backdrop = document.createElement('div');
        backdrop.className = 'nav-backdrop';
        document.body.appendChild(backdrop);
        
        // Toggle menu function
        function toggleMenu() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            backdrop.classList.toggle('active');
            body.classList.toggle('menu-open');
        }
        
        // Event listeners
        menuToggle.addEventListener('click', toggleMenu);
        backdrop.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });
    }
    
    initMobileMenu();

    // Optimize product grid layout for mobile
    function optimizeProductGrid() {
        const productGrid = document.querySelector('.products-grid');
        if (!productGrid) return;
        
        // Add a class to the body when in mobile view
        function checkViewport() {
            if (window.innerWidth <= 480) {
                document.body.classList.add('mobile-view');
            } else {
                document.body.classList.remove('mobile-view');
            }
        }
        
        checkViewport();
        window.addEventListener('resize', checkViewport);
    }
    
    optimizeProductGrid();
});

// Fast click implementation for mobile
(function() {
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
})();
