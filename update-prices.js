// Script to update all product prices to random values between $45 and $60
const fs = require('fs');
const path = require('path');

// Function to generate a random price between min and max (inclusive)
function getRandomPrice(min, max) {
    // Generate random price between min and max, then round to 2 decimal places
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// Read the script.js file
const scriptPath = path.join(__dirname, 'js', 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Find and update all price values in the products array
const updatedScript = scriptContent.replace(
    /(price: )\d+(\.\d+)?/g, 
    (match, p1) => {
        const randomPrice = getRandomPrice(45, 60);
        return `${p1}${randomPrice}`;
    }
);

// Write the updated content back to script.js
fs.writeFileSync(scriptPath, updatedScript, 'utf8');

console.log('All product prices have been updated to random values between $45 and $60');
