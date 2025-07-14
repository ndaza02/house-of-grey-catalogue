// Sample product data
const products = [
    {
        id: 1,
        name: 'Silk Evening Gown',
        price: 1299,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1539109136884-43be0c2dba58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: true,
        isSale: false
    },
    {
        id: 2,
        name: 'Wool Cashmere Coat',
        price: 1599,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: false,
        isSale: true
    },
    {
        id: 3,
        name: 'Leather Tote Bag',
        price: 799,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: false,
        isSale: false
    },
    {
        id: 4,
        name: 'Tailored Suit',
        price: 1899,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: true,
        isSale: false
    },
    {
        id: 5,
        name: 'Cashmere Sweater',
        price: 499,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1507680434564-8549f845bf26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: false,
        isSale: true
    },
    {
        id: 6,
        name: 'Diamond Pendant',
        price: 2999,
        category: 'jewelry',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: true,
        isSale: false
    },
    {
        id: 7,
        name: 'Pearl Earrings',
        price: 899,
        category: 'jewelry',
        image: 'https://images.unsplash.com/photo-1608042314453-ae33882fbc16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: false,
        isSale: true
    },
    {
        id: 8,
        name: 'Gold Bangle',
        price: 1599,
        category: 'jewelry',
        image: 'https://images.unsplash.com/photo-1603974379129-1b7b8b1b1b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        isNew: false,
        isSale: false
    }
];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const categoryLinks = document.querySelectorAll('.nav-links a');
const cartCount = document.querySelector('.cart-count');

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
});

// Display products in the grid
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(product.price);
    
    // Badge HTML
    let badgeHtml = '';
    if (product.isNew) {
        badgeHtml = '<span class="product-badge">New</span>';
    } else if (product.isSale) {
        badgeHtml = '<span class="product-badge" style="background: #e74c3c">Sale</span>';
    }
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${badgeHtml}
            <div class="product-actions">
                <button class="quick-view" data-id="${product.id}"><i class="far fa-eye"></i></button>
                <button class="add-to-wishlist" data-id="${product.id}"><i class="far fa-heart"></i></button>
                <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-bag"></i></button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${formattedPrice}</p>
        </div>
    `;
    
    return productCard;
}

// Set up event listeners
function setupEventListeners() {
    // Category filtering
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Filter products
            const category = link.textContent.toLowerCase();
            if (category === 'home') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(p => p.category === category || 
                    (category === 'jewelry' && p.category === 'jewelry') ||
                    (category === 'women' && p.category === 'women') ||
                    (category === 'men' && p.category === 'men'));
                displayProducts(filteredProducts);
            }
            
            // Scroll to products
            document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
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
                        <img src="${product.image}" alt="${product.name}">
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
