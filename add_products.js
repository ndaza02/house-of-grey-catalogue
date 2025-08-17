// Script to add new products from the images folder
const fs = require('fs');
const path = require('path');

// Function to generate a random price between min and max
function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate a random boolean
function getRandomBoolean() {
    return Math.random() >= 0.5;
}

// Function to generate a product name based on the image number
function generateProductName(imageName) {
    const number = parseInt(imageName.match(/WA0*(\d+)\./)[1]);
    const types = [
        'Elegant Gown', 'Summer Dress', 'Evening Dress', 'Cocktail Dress',
        'Maxi Dress', 'Party Dress', 'Casual Outfit', 'Formal Gown',
        'Designer Dress', 'Chic Ensemble', 'Stylish Outfit', 'Fashionable Gown'
    ];
    const type = types[number % types.length];
    return `${type} ${number - 82 + 1}`; // Starting from WA0083
}

// Function to generate a product description
function generateDescription(name) {
    const descriptors = [
        'Beautifully crafted', 'Elegantly designed', 'Stylish and comfortable',
        'Perfect for any occasion', 'Handmade with care', 'Luxurious and comfortable',
        'Trendy and fashionable', 'Classic and timeless', 'Eye-catching design',
        'Premium quality fabric', 'Perfect fit for every woman', 'Exclusive design'
    ];
    const occasions = [
        'evening events', 'special occasions', 'summer days', 'formal gatherings',
        'casual outings', 'party nights', 'wedding events', 'cocktail parties',
        'date nights', 'business meetings', 'garden parties', 'vacation wear'
    ];
    
    const descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    const occasion = occasions[Math.floor(Math.random() * occasions.length)];
    
    return `${descriptor} ${name.toLowerCase()}, perfect for ${occasion}.`;
}

// Main function to generate new products
function generateNewProducts() {
    const startId = 30; // Next ID after the last product (29)
    const imageDir = path.join(__dirname, 'images', 'products', 'women');
    const files = fs.readdirSync(imageDir)
        .filter(file => file.startsWith('IMG-20250816-WA0') && file.endsWith('.jpg'))
        .sort();
    
    // Skip the first 29 images (IDs 1-29)
    const newFiles = files.slice(29);
    
    const newProducts = newFiles.map((file, index) => {
        const id = startId + index;
        const name = generateProductName(file);
        const price = getRandomPrice(800, 2500);
        const isNew = getRandomBoolean();
        const isSale = getRandomBoolean();
        const description = generateDescription(name);
        
        return {
            id,
            name,
            price,
            category: 'women',
            images: [`images/products/women/${file}`],
            isNew,
            isSale,
            description
        };
    });
    
    return newProducts;
}

// Generate the new products
const newProducts = generateNewProducts();
console.log(JSON.stringify(newProducts, null, 2));
console.log(`\nGenerated ${newProducts.length} new products.`);
