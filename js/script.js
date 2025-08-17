// Product data for women's collection
const products = [
    {
        id: 1,
        name: 'Elegant Evening Gown 1',
        price: 1299,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0054.jpg'],
        isNew: true,
        isSale: false,
        description: 'Stunning evening gown perfect for special occasions.'
    },
    {
        id: 2,
        name: 'Elegant Evening Gown 2',
        price: 1199,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0055.jpg'],
        isNew: true,
        isSale: true,
        description: 'Beautiful gown with elegant design.'
    },
    {
        id: 3,
        name: 'Summer Floral Dress 1',
        price: 899,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0056.jpg'],
        isNew: true,
        isSale: false,
        description: 'Light and airy floral dress for summer.'
    },
    {
        id: 4,
        name: 'Summer Floral Dress 2',
        price: 849,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0057.jpg'],
        isNew: true,
        isSale: true,
        description: 'Elegant floral dress for any occasion.'
    },
    {
        id: 5,
        name: 'Classic Black Dress',
        price: 999,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0058.jpg'],
        isNew: true,
        isSale: false,
        description: 'Timeless black dress for formal events.'
    },
    {
        id: 6,
        name: 'Evening Gown',
        price: 1399,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0059.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegant evening gown for special occasions.'
    },
    {
        id: 7,
        name: 'Elegant White Blouse',
        price: 599,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0060.jpg'],
        isNew: true,
        isSale: true,
        description: 'Chic white blouse for a sophisticated look.'
    },
    {
        id: 8,
        name: 'Stylish Top',
        price: 499,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0061.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy top for any casual occasion.'
    },
    {
        id: 9,
        name: 'Casual Summer Outfit 1',
        price: 699,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0062.jpg'],
        isNew: true,
        isSale: true,
        description: 'Comfortable and stylish summer outfit.'
    },
    {
        id: 10,
        name: 'Casual Summer Outfit 2',
        price: 749,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0063.jpg'],
        isNew: true,
        isSale: false,
        description: 'Perfect summer outfit for any occasion.'
    },
    {
        id: 11,
        name: 'Elegant Dress 1',
        price: 899,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0064.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegant dress for special events.'
    },
    {
        id: 12,
        name: 'Elegant Dress 2',
        price: 949,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0065.jpg'],
        isNew: true,
        isSale: true,
        description: 'Beautiful dress for any formal occasion.'
    },
    {
        id: 13,
        name: 'Stylish Outfit 1',
        price: 799,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0066.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy outfit for a fashionable look.'
    },
    {
        id: 14,
        name: 'Stylish Outfit 2',
        price: 849,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0067.jpg'],
        isNew: true,
        isSale: true,
        description: 'Chic outfit for any occasion.'
    },
    {
        id: 15,
        name: 'Casual Dress 1',
        price: 699,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0068.jpg'],
        isNew: true,
        isSale: false,
        description: 'Comfortable dress for everyday wear.'
    },
    {
        id: 16,
        name: 'Casual Dress 2',
        price: 749,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0069.jpg'],
        isNew: true,
        isSale: true,
        description: 'Stylish dress for casual outings.'
    },
    {
        id: 17,
        name: 'Summer Dress 1',
        price: 799,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0070.jpg'],
        isNew: true,
        isSale: false,
        description: 'Light and comfortable summer dress.'
    },
    {
        id: 18,
        name: 'Summer Dress 2',
        price: 849,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0071.jpg'],
        isNew: true,
        isSale: true,
        description: 'Elegant summer dress for any occasion.'
    },
    {
        id: 19,
        name: 'Formal Dress 1',
        price: 999,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0072.jpg'],
        isNew: true,
        isSale: false,
        description: 'Sophisticated dress for formal events.'
    },
    {
        id: 20,
        name: 'Formal Dress 2',
        price: 1049,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0073.jpg'],
        isNew: true,
        isSale: true,
        description: 'Elegant dress for special occasions.'
    },
    {
        id: 21,
        name: 'Evening Gown 1',
        price: 1199,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0074.jpg'],
        isNew: true,
        isSale: false,
        description: 'Stunning evening gown for gala events.'
    },
    {
        id: 22,
        name: 'Evening Gown 2',
        price: 1249,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0075.jpg'],
        isNew: true,
        isSale: true,
        description: 'Glamorous gown for special nights.'
    },
    {
        id: 23,
        name: 'Designer Dress 1',
        price: 1399,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0076.jpg'],
        isNew: true,
        isSale: false,
        description: 'Exclusive designer dress for fashionistas.'
    },
    {
        id: 24,
        name: 'Designer Dress 2',
        price: 1449,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0077.jpg'],
        isNew: true,
        isSale: true,
        description: 'Chic designer dress for the modern woman.'
    },
    {
        id: 25,
        name: 'Luxury Gown 1',
        price: 1599,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0078.jpg'],
        isNew: true,
        isSale: false,
        description: 'Luxurious gown for the most special occasions.'
    },
    {
        id: 26,
        name: 'Luxury Gown 2',
        price: 1649,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0079.jpg'],
        isNew: true,
        isSale: true,
        description: 'Elegant luxury gown for unforgettable events.'
    },
    {
        id: 27,
        name: 'Premium Dress 1',
        price: 1499,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0080.jpg'],
        isNew: true,
        isSale: false,
        description: 'High-end dress for the fashion-forward woman.'
    },
    {
        id: 28,
        name: 'Premium Dress 2',
        price: 1549,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0081.jpg'],
        isNew: true,
        isSale: true,
        description: 'Stylish premium dress for any occasion.'
    },
    {
        id: 29,
        name: 'Exclusive Gown',
        price: 1699,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0082.jpg'],
        isNew: true,
        isSale: false,
        description: 'Exclusive designer gown for the most discerning customers.'
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
        
        // Get the first image
        const firstImage = product.images.length > 0 ? product.images[0] : 'images/placeholder.jpg';
        
        productCard.innerHTML = `
            <div class="product-image">
                ${product.isNew ? '<span class="new-badge">New</span>' : ''}
                ${product.isSale ? '<span class="sale-badge">Sale</span>' : ''}
                
                <div class="static-image">
                    <img src="${firstImage}" alt="${product.name}" loading="lazy">
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
