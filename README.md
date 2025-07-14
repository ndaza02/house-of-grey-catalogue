# Éclat - Luxury Fashion & Jewelry Catalog

A high-end e-commerce catalog website for luxury men's and women's clothing and jewelry. This is a front-end only implementation showcasing a responsive, modern design with smooth animations and interactive elements.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Product Showcase**: Beautifully displayed products with hover effects
- **Category Filtering**: Easily filter products by category (Women, Men, Jewelry)
- **Quick View**: View product details in a modal without leaving the page
- **Shopping Cart**: Add items to cart with visual feedback
- **Newsletter Signup**: Collect email subscriptions with form validation
- **Smooth Scrolling**: Elegant navigation throughout the page

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Playfair Display & Poppins)

## Getting Started

1. Clone this repository
2. Open `index.html` in your web browser

## Project Structure

```
luxury-fashion-catalog/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All CSS styles
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # Project documentation
```

## Customization

### Colors

You can easily customize the color scheme by modifying the CSS variables in the `:root` selector in `css/style.css`:

```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #c0a080;
    --text-color: #333;
    --light-text: #777;
    --background: #ffffff;
    --light-bg: #f9f9f9;
    --border-color: #eaeaea;
}
```

### Adding Products

To add or modify products, edit the `products` array in `js/script.js`. Each product should have the following structure:

```javascript
{
    id: 1,
    name: 'Product Name',
    price: 999,
    category: 'category', // 'men', 'women', or 'jewelry'
    image: 'path/to/image.jpg',
    isNew: true,         // Show 'New' badge
    isSale: false        // Show 'Sale' badge
}
```

## Browser Support

This website is built with modern web standards and works best in the latest versions of:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## License

This project is open source and available under the [MIT License](LICENSE).

---

Created with ❤️ by [Your Name]
