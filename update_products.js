// Script to update the products array with new images
const fs = require('fs');
const path = require('path');

// Read the current script.js file
const scriptPath = path.join(__dirname, 'js', 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Function to generate product data
function generateProduct(id, imageName) {
    const types = [
        'Elegant Gown', 'Summer Dress', 'Evening Dress', 'Cocktail Dress',
        'Maxi Dress', 'Party Dress', 'Casual Outfit', 'Formal Gown',
        'Designer Dress', 'Chic Ensemble', 'Stylish Outfit', 'Fashionable Gown'
    ];
    
    const descriptors = [
        'Beautifully crafted', 'Elegantly designed', 'Stylish and comfortable',
        'Perfect for any occasion', 'Handmade with care', 'Luxurious and comfortable',
        'Trendy and fashionable', 'Classic and timeless', 'Eye-catching design'
    ];
    
    const occasions = [
        'evening events', 'special occasions', 'summer days', 'formal gatherings',
        'casual outings', 'party nights', 'wedding events', 'cocktail parties'
    ];
    
    const type = types[id % types.length];
    const name = `${type} ${id - 29}`;
    const price = 800 + Math.floor(Math.random() * 1700);
    const isNew = Math.random() > 0.3;
    const isSale = Math.random() > 0.7;
    const descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    const occasion = occasions[Math.floor(Math.random() * occasions.length)];
    const description = `${descriptor} ${type.toLowerCase()}, perfect for ${occasion}.`;
    
    return {
        id,
        name,
        price,
        category: 'women',
        images: [`images/products/women/${imageName}`],
        isNew,
        isSale,
        description
    };
}

// Get all image files
const imageDir = path.join(__dirname, 'images', 'products', 'women');
const files = fs.readdirSync(imageDir)
    .filter(file => file.startsWith('IMG-20250816-WA0') && file.endsWith('.jpg'))
    .sort();

// Generate new products starting from ID 30
let newProducts = [];
let currentId = 30;

// Skip the first 29 images (IDs 1-29)
for (let i = 29; i < files.length && currentId < 100; i++) {
    newProducts.push(generateProduct(currentId, files[i]));
    currentId++;
}

// Convert new products to JavaScript code
let newProductsCode = newProducts.map(product => {
    return `    {
        id: ${product.id},
        name: '${product.name.replace(/'/g, "\\'")}',
        price: ${product.price},
        category: '${product.category}',
        images: ['${product.images[0]}'],
        isNew: ${product.isNew ? 'true' : 'false'},
        isSale: ${product.isSale ? 'true' : 'false'},
        description: '${product.description.replace(/'/g, "\\'")}'
    }`;
}).join(',\n\n');

// Find where to insert the new products
const insertPosition = scriptContent.indexOf('];');
if (insertPosition !== -1) {
    // Insert new products before the closing bracket
    const updatedContent = 
        scriptContent.substring(0, insertPosition) + 
        (scriptContent[insertPosition - 1] === '}' ? ',' : '') + 
        '\n' + newProductsCode + 
        '\n' + 
        scriptContent.substring(insertPosition);
    
    // Write the updated content back to script.js
    fs.writeFileSync(scriptPath, updatedContent, 'utf8');
    console.log(`Successfully added ${newProducts.length} new products to script.js`);
} else {
    console.error('Could not find the products array in script.js');
}
