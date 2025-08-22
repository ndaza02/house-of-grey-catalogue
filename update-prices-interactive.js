const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Path to the script file
const scriptPath = path.join(__dirname, 'js', 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Extract the products array from the script
const productsMatch = scriptContent.match(/const\s+products\s*=\s*(\[.*?\]);/s);
if (!productsMatch) {
    console.error('Could not find products array in script.js');
    process.exit(1);
}

// Parse the products array
let products;
try {
    // Create a function that returns the products array and execute it
    const getProducts = new Function(`return ${productsMatch[1]};`);
    products = getProducts();
} catch (e) {
    console.error('Error parsing products array:', e);
    process.exit(1);
}

// Function to update a product's name and/or price
function updateProduct(productId, updates) {
    // Find the product by ID
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error(`Product with ID ${productId} not found.`);
        return false;
    }

    // Track changes for the summary
    const changes = [];
    
    // Update name if provided
    if (updates.name !== undefined) {
        const oldName = product.name;
        product.name = updates.name.trim();
        changes.push(`Name: "${oldName}" → "${product.name}"`);
    }
    
    // Update price if provided
    if (updates.price !== undefined) {
        const newPrice = parseFloat(updates.price);
        if (isNaN(newPrice) || newPrice <= 0) {
            console.error('Invalid price. Please enter a positive number.');
            return false;
        }
        const oldPrice = product.price;
        product.price = newPrice;
        changes.push(`Price: $${oldPrice.toFixed(2)} → $${newPrice.toFixed(2)}`);
    }
    
    // Show summary of changes
    if (changes.length > 0) {
        console.log('\n=== Changes ===');
        changes.forEach(change => console.log(`- ${change}`));
        console.log('===============');
        return true;
    }
    
    console.log('No changes were made.');
    return false;
}

// Function to save changes back to the file
function saveChanges() {
    // Convert products back to a string
    const productsString = JSON.stringify(products, null, 2)
        .replace(/"([^"]+)":/g, '$1:'); // Remove quotes from property names
    
    // Replace the products array in the script content
    const updatedScript = scriptContent.replace(
        /const\s+products\s*=\s*\[.*?\];/s,
        `const products = ${productsString};`
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(scriptPath, updatedScript, 'utf8');
    console.log('\nChanges saved to script.js');
}

// Function to display all products
function displayProducts() {
    console.log('\n=== Current Products ===');
    products.forEach((product, index) => {
        console.log(`[${index + 1}] ID: ${product.id}, Name: ${product.name}, Price: $${product.price.toFixed(2)}`);
    });
    console.log('========================\n');
}

// Function to edit a product
function editProduct(product) {
    console.log(`\nEditing: ${product.name} (ID: ${product.id})`);
    console.log(`Current name: "${product.name}"`);
    console.log(`Current price: $${product.price.toFixed(2)}`);
    
    readline.question(
        '\nWhat would you like to update? (name/price/both, or press Enter to cancel): ',
        (action) => {
            action = action.toLowerCase().trim();
            
            if (!action) {
                console.log('Edit cancelled.');
                startPrompt();
                return;
            }
            
            const updates = {};
            
            const askForName = () => {
                readline.question(
                    `Enter new name (current: "${product.name}"): `,
                    (newName) => {
                        if (newName.trim()) {
                            updates.name = newName;
                        }
                        askForPrice();
                    }
                );
            };
            
            const askForPrice = () => {
                readline.question(
                    `Enter new price (current: $${product.price.toFixed(2)}): `,
                    (newPrice) => {
                        if (newPrice.trim()) {
                            updates.price = newPrice;
                        }
                        
                        if (Object.keys(updates).length > 0) {
                            updateProduct(product.id, updates);
                        } else {
                            console.log('No changes made.');
                        }
                        
                        startPrompt();
                    }
                );
            };
            
            switch (action) {
                case 'name':
                    askForName();
                    break;
                    
                case 'price':
                    askForPrice();
                    break;
                    
                case 'both':
                    askForName();
                    break;
                    
                default:
                    console.log('Invalid option. Please try again.');
                    editProduct(product);
            }
        }
    );
}

// Function to start the interactive prompt
function startPrompt() {
    displayProducts();
    
    readline.question(
        '\nEnter the number of the product to edit, or type a command (save/exit): ',
        (answer) => {
            answer = answer.trim().toLowerCase();
            
            if (answer === 'exit') {
                console.log('\nGoodbye!');
                readline.close();
                return;
            }
            
            if (answer === 'save') {
                saveChanges();
                startPrompt();
                return;
            }
            
            const productIndex = parseInt(answer) - 1;
            if (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
                console.log('\n⚠️  Invalid selection. Please try again.');
                startPrompt();
                return;
            }
            
            editProduct(products[productIndex]);
        }
    );
}

// Start the interactive prompt
console.log('=== Product Editor ===');
console.log('This tool lets you update product names and prices.');
console.log('\nCOMMANDS:');
console.log('- Enter a number: Edit that product');
console.log('- save: Save all changes to script.js');
console.log('- exit: Quit without saving');
console.log('\nWhen editing a product, you can update:');
console.log('- name: Change the product name');
console.log('- price: Change the product price');
console.log('- both: Change both name and price\n');

startPrompt();
