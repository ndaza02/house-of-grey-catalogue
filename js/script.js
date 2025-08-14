// Product data organized by category with actual images
const products = [
    // Women's Collection
    {
        id: 1,
        name: 'Elegant Floral Dress',
        price: 899,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 14.44.51_653f1cc1.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 14.44.52_854fcd18.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 14.44.52_fbfcf875.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Beautiful floral dress perfect for summer evenings.'
    },
    {
        id: 2,
        name: 'Classic Black Blazer',
        price: 1299,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 18.44.52_84fbf930.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 18.44.52_baa27cdd.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Timeless black blazer for formal occasions.'
    },
    {
        id: 3,
        name: 'Summer Floral Maxi',
        price: 749,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 18.44.52_f9bea088.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 18.47.55_d871ccdc.jpg'
        ],
        isNew: true,
        isSale: true,
        description: 'Light and airy maxi dress with floral pattern.'
    },
    {
        id: 4,
        name: 'Elegant Evening Gown',
        price: 1599,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 18.50.19_4969bbbb.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 18.50.39_844cdf76.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Stunning evening gown for special occasions.'
    },
    {
        id: 5,
        name: 'Casual Summer Dress',
        price: 599,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 18.51.38_5993f791.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 18.52.50_00fad569.jpg'
        ],
        isNew: false,
        isSale: true,
        description: 'Comfortable and stylish summer dress.'
    },
    {
        id: 6,
        name: 'Chic Office Dress',
        price: 849,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 18.52.50_abb0fa3c.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 18.55.51_9c043a0c.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Professional and elegant office dress.'
    },
    
    // Men's Collection
    {
        id: 7,
        name: 'Classic Suit Set',
        price: 1799,
        category: 'men',
        images: [
            'images/products/men/WhatsApp Image 2025-08-11 at 18.55.51_f0d64fbd.jpg',
            'images/products/men/WhatsApp Image 2025-08-11 at 19.00.42_1cb32cee.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Elegant suit set for formal occasions.'
    },
    {
        id: 8,
        name: 'Casual Blazer',
        price: 1299,
        category: 'men',
        images: [
            'images/products/men/WhatsApp Image 2025-08-11 at 19.00.43_94118471.jpg',
            'images/products/men/WhatsApp Image 2025-08-11 at 19.02.55_5a85d5b0.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Versatile blazer for smart casual looks.'
    },
    
    // Jewelry
    {
        id: 9,
        name: 'Diamond Necklace',
        price: 3499,
        category: 'jewelry',
        images: [
            'images/products/jewelry/WhatsApp Image 2025-08-11 at 19.04.32_264a7571.jpg',
            'images/products/jewelry/WhatsApp Image 2025-08-11 at 19.06.19_4e2e739a.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Exquisite diamond necklace for special occasions.'
    },
    {
        id: 10,
        name: 'Gold Bangle Set',
        price: 2199,
        category: 'jewelry',
        images: [
            'images/products/jewelry/WhatsApp Image 2025-08-11 at 19.06.20_017f2b1c.jpg',
            'images/products/jewelry/WhatsApp Image 2025-08-11 at 19.13.15_21fb6206.jpg'
        ],
        isNew: true,
        isSale: true,
        description: 'Elegant set of gold bangles, perfect for layering.'
    },
    
    // Bags
    {
        id: 11,
        name: 'Designer Handbag',
        price: 1599,
        category: 'bags',
        images: [
            'images/products/bags/WhatsApp Image 2025-08-11 at 19.13.16_3fc61c87.jpg',
            'images/products/bags/WhatsApp Image 2025-08-11 at 19.13.16_c8a7b32a.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Luxurious designer handbag for the fashion-forward.'
    },
    
    // Shoes
    {
        id: 12,
        name: 'Elegant Heels',
        price: 899,
        category: 'shoes',
        images: [
            'images/products/shoes/WhatsApp Image 2025-08-11 at 19.17.54_5ab16ff6.jpg',
            'images/products/shoes/WhatsApp Image 2025-08-11 at 19.17.54_793ec1d6.jpg'
        ],
        isNew: true,
        isSale: true,
        description: 'Stylish heels perfect for any occasion.'
    },
    
    // Hats & Accessories
    {
        id: 13,
        name: 'Fashionable Fedora',
        price: 249,
        category: 'hats',
        images: [
            'images/products/hats/WhatsApp Image 2025-08-11 at 19.20.14_2e9b1b0c.jpg',
            'images/products/hats/WhatsApp Image 2025-08-11 at 19.20.14_4a2c4b1c.jpg'
        ],
        isNew: true,
        isSale: true,
        description: 'Trendy fedora hat for a chic look.'
    },
    
    // Girls' Collection
    {
        id: 14,
        name: 'Summer Floral Dress',
        price: 129,
        category: 'girls',
        images: [
            'images/products/girls/WhatsApp Image 2025-08-11 at 19.20.15_8a3d0d7d.jpg',
            'images/products/girls/WhatsApp Image 2025-08-11 at 19.22.46_0a8e1a8f.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Beautiful floral dress for young girls.'
    },
    
    // Women's Additional Items
    {
        id: 15,
        name: 'Elegant Black Gown',
        price: 1499,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 19.22.47_3c0a9a4f.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 19.25.27_9e1f1c8f.jpg'
        ],
        isNew: true,
        isSale: false,
        description: 'Stunning black gown for formal events.'
    },
    {
        id: 16,
        name: 'Casual Summer Outfit',
        price: 899,
        category: 'women',
        images: [
            'images/products/women/WhatsApp Image 2025-08-11 at 19.25.28_1e6f9d4f.jpg',
            'images/products/women/WhatsApp Image 2025-08-11 at 19.28.04_5e9f9e0f.jpg'
        ],
        isNew: true,
        isSale: true,
        description: 'Comfortable and stylish summer outfit.'
    },
    
    // Additional Products
    {
        id: 17,
        name: 'Silk Scarf',
        price: 249,
        category: 'women',
        images: ['images/products/women/silk-scarf.jpg'],
        isNew: true,
        isSale: false,
        description: 'Luxurious silk scarf with elegant print.'
    },
    {
        id: 18,
        name: 'Leather Belt',
        price: 199,
        category: 'men',
        images: ['images/products/men/leather-belt.jpg'],
        isNew: false,
        isSale: true,
        description: 'Genuine leather belt with metal buckle.'
    },
    {
        id: 19,
        name: 'Gold Hoop Earrings',
        price: 349,
        category: 'jewelry',
        images: ['images/products/jewelry/gold-hoops.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegant gold hoop earrings.'
    }
];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const categoryLinks = document.querySelectorAll('.nav-links a');
const cartCount = document.querySelector('.cart-count');
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
    initMenu();
});

// Mobile menu functionality
function initMenu() {
    if (!menuToggle) return;
    
    // Set initial ARIA attributes
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'main-navigation');
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Toggle menu function
    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Prevent body scroll when menu is open
        if (!isExpanded) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    };
    
    // Add click event to menu toggle
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a nav link (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Add a class to stop animations during resize for better performance
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
        
        // Reset mobile menu on larger screens
        if (window.innerWidth > 992) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });
}

// Display products in the grid
function displayProducts(productsToDisplay) {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = ''; // Clear existing products
    
    if (productsToDisplay.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Generate carousel HTML
        const carouselIndicators = product.images.map((_, index) => 
            `<button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-slide-to="${index}"></button>`
        ).join('');
        
        const carouselItems = product.images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${img}" alt="${product.name} - View ${index + 1}" class="d-block w-100" loading="lazy">
            </div>
        `).join('');
        
        productCard.innerHTML = `
            <div class="product-image">
                ${product.isNew ? '<span class="new-badge">New</span>' : ''}
                ${product.isSale ? '<span class="sale-badge">Sale</span>' : ''}
                
                <div class="carousel-container">
                    <div class="carousel-inner">
                        ${carouselItems}
                    </div>
                    <button class="carousel-control prev">&larr;</button>
                    <button class="carousel-control next">&rarr;</button>
                    <div class="carousel-indicators">
                        ${carouselIndicators}
                    </div>
                </div>
                
                <div class="product-overlay">
                    <button class="quick-view" data-id="${product.id}">Quick View</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="add-to-wishlist" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn btn-primary view-details" data-id="${product.id}">View Details</button>
                </div>
            </div>`;
            
        productsContainer.appendChild(productCard);
    });
    
    // Initialize carousels after products are added to DOM
    initializeCarousels();
    

}

function initializeCarousels() {
    document.querySelectorAll('.carousel-container').forEach(container => {
        const items = container.querySelectorAll('.carousel-item');
        const indicators = container.querySelectorAll('.carousel-indicator');
        let currentIndex = 0;
        let autoPlayInterval;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Ensure index is within bounds
            if (index >= items.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = items.length - 1;
            } else {
                currentIndex = index;
            }
            
            // Update active state
            items.forEach((item, i) => {
                item.classList.toggle('active', i === currentIndex);
            });
            
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentIndex);
            });
        }
        
        // Auto-play functionality
        function startAutoPlay() {
            stopAutoPlay();
            autoPlayInterval = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 5000);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        // Initialize first slide
        showSlide(0);
        
        // Add event listeners for previous/next buttons
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentIndex - 1);
                startAutoPlay();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentIndex + 1);
                startAutoPlay();
            });
        }
        
        // Add event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                startAutoPlay();
            });
        });
        
        // Pause autoplay on hover
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);

        // Start autoplay
        startAutoPlay();

        // Clean up on window unload
        window.addEventListener('beforeunload', () => {
            stopAutoPlay();
            container.removeEventListener('mouseenter', stopAutoPlay);
            container.removeEventListener('mouseleave', startAutoPlay);
        });
    });
}

// Set up event listeners
function setupEventListeners() {
    // Get all navigation links including those in the mobile menu
    const allNavLinks = document.querySelectorAll('.nav-links a');

    // Handle navigation clicks
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the target section from href
            const targetId = link.getAttribute('href');
            
            // If it's a hash link (section navigation)
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Calculate the scroll position, accounting for fixed header
                    const headerOffset = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    // Smooth scroll to the section
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            
            // If it's a category filter (has data-category attribute)
            const category = link.dataset.category;
            if (category) {
                // Update active state for all nav links
                allNavLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Filter products
                if (category === 'all') {
                    displayProducts(products);
                } else {
                    const filteredProducts = products.filter(p => p.category === category);
                    displayProducts(filteredProducts);
                }
                
                // Scroll to products section
                const productsSection = document.querySelector('#products');
                if (productsSection) {
                    const headerOffset = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Handle scroll events to highlight current section in navigation
    window.addEventListener('scroll', throttle(handleScroll, 100));
    
    // Helper function to throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Handle scroll to highlight current section in navigation
    function handleScroll() {
        const scrollPosition = window.scrollY + 100; // Add offset for better UX
        const allNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Add to cart
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
            addToCart(productId);
        }
        
        // Quick view
        if (e.target.closest('.quick-view')) {
            const productId = parseInt(e.target.closest('.quick-view').dataset.id);
            showQuickView(productId);
        }
        
        // Add to wishlist
        if (e.target.closest('.add-to-wishlist')) {
            const button = e.target.closest('.add-to-wishlist');
            button.innerHTML = '<i class="fas fa-heart"></i>';
            button.style.color = '#e74c3c';
            showNotification('Added to wishlist');
        }
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Thank you for subscribing!');
                newsletterForm.reset();
            }
        });
    }
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification(`${product.name} added to cart`);
    }
}

// Update cart count in the header
function updateCartCount() {
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length > 0 ? 'flex' : 'none';
}

// Show quick view modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(product.price);
    
    const modalHtml = `
        <div class="quick-view-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="modal-details">
                        <h2>${product.name}</h2>
                        <p class="price">${formattedPrice}</p>
                        <p class="description">Experience the epitome of luxury with our ${product.name}. Meticulously crafted with the finest materials, this piece embodies timeless elegance and sophistication.</p>
                        <div class="actions">
                            <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                            <button class="btn btn-outline">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to the page
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Close modal when clicking the X
    const modal = document.querySelector('.quick-view-modal');
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Add to cart from modal
    const addToCartBtn = modal.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id);
            modal.remove();
        });
    }
}

// Show notification
function showNotification(message) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#1a1a1a';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.zIndex = '1000';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.3s ease';
    
    // Add to page
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Update header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});
