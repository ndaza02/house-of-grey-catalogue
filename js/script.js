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
    },

    {
        id: 30,
        name: 'Casual Outfit 1',
        price: 1562,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0083.jpg'],
        isNew: true,
        isSale: true,
        description: 'Trendy and fashionable casual outfit, perfect for cocktail parties.'
    },

    {
        id: 31,
        name: 'Formal Gown 2',
        price: 1714,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0084.jpg'],
        isNew: true,
        isSale: true,
        description: 'Classic and timeless formal gown, perfect for casual outings.'
    },

    {
        id: 32,
        name: 'Designer Dress 3',
        price: 1182,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0085.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care designer dress, perfect for wedding events.'
    },

    {
        id: 33,
        name: 'Chic Ensemble 4',
        price: 1905,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0086.jpg'],
        isNew: true,
        isSale: false,
        description: 'Classic and timeless chic ensemble, perfect for summer days.'
    },

    {
        id: 34,
        name: 'Stylish Outfit 5',
        price: 1629,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0087.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care stylish outfit, perfect for casual outings.'
    },

    {
        id: 35,
        name: 'Fashionable Gown 6',
        price: 1288,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0088.jpg'],
        isNew: true,
        isSale: false,
        description: 'Perfect for any occasion fashionable gown, perfect for party nights.'
    },

    {
        id: 36,
        name: 'Elegant Gown 7',
        price: 2139,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0090.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care elegant gown, perfect for party nights.'
    },

    {
        id: 37,
        name: 'Summer Dress 8',
        price: 1988,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0092.jpg'],
        isNew: true,
        isSale: true,
        description: 'Elegantly designed summer dress, perfect for evening events.'
    },

    {
        id: 38,
        name: 'Evening Dress 9',
        price: 1340,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0093.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegantly designed evening dress, perfect for formal gatherings.'
    },

    {
        id: 39,
        name: 'Cocktail Dress 10',
        price: 1448,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0094.jpg'],
        isNew: false,
        isSale: true,
        description: 'Eye-catching design cocktail dress, perfect for evening events.'
    },

    {
        id: 40,
        name: 'Maxi Dress 11',
        price: 1157,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0095.jpg'],
        isNew: true,
        isSale: false,
        description: 'Eye-catching design maxi dress, perfect for formal gatherings.'
    },

    {
        id: 41,
        name: 'Party Dress 12',
        price: 1282,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0096.jpg'],
        isNew: true,
        isSale: false,
        description: 'Luxurious and comfortable party dress, perfect for cocktail parties.'
    },

    {
        id: 42,
        name: 'Casual Outfit 13',
        price: 2041,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0097.jpg'],
        isNew: false,
        isSale: false,
        description: 'Eye-catching design casual outfit, perfect for wedding events.'
    },

    {
        id: 43,
        name: 'Formal Gown 14',
        price: 2341,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0098.jpg'],
        isNew: false,
        isSale: true,
        description: 'Perfect for any occasion formal gown, perfect for formal gatherings.'
    },

    {
        id: 44,
        name: 'Designer Dress 15',
        price: 1423,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0099.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care designer dress, perfect for wedding events.'
    },

    {
        id: 45,
        name: 'Chic Ensemble 16',
        price: 2428,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0101.jpg'],
        isNew: true,
        isSale: false,
        description: 'Eye-catching design chic ensemble, perfect for special occasions.'
    },

    {
        id: 46,
        name: 'Stylish Outfit 17',
        price: 1795,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0103.jpg'],
        isNew: false,
        isSale: false,
        description: 'Classic and timeless stylish outfit, perfect for cocktail parties.'
    },

    {
        id: 47,
        name: 'Fashionable Gown 18',
        price: 1950,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0105.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care fashionable gown, perfect for wedding events.'
    },

    {
        id: 48,
        name: 'Elegant Gown 19',
        price: 813,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0107.jpg'],
        isNew: false,
        isSale: false,
        description: 'Elegantly designed elegant gown, perfect for evening events.'
    },

    {
        id: 49,
        name: 'Summer Dress 20',
        price: 1750,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0109.jpg'],
        isNew: true,
        isSale: false,
        description: 'Luxurious and comfortable summer dress, perfect for cocktail parties.'
    },

    {
        id: 50,
        name: 'Evening Dress 21',
        price: 2002,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0111.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegantly designed evening dress, perfect for formal gatherings.'
    },

    {
        id: 51,
        name: 'Cocktail Dress 22',
        price: 1186,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0113.jpg'],
        isNew: true,
        isSale: false,
        description: 'Stylish and comfortable cocktail dress, perfect for wedding events.'
    },

    {
        id: 52,
        name: 'Maxi Dress 23',
        price: 1185,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0115.jpg'],
        isNew: true,
        isSale: false,
        description: 'Classic and timeless maxi dress, perfect for summer days.'
    },

    {
        id: 53,
        name: 'Party Dress 24',
        price: 2162,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0117.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care party dress, perfect for casual outings.'
    },

    {
        id: 54,
        name: 'Casual Outfit 25',
        price: 914,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0119.jpg'],
        isNew: false,
        isSale: false,
        description: 'Elegantly designed casual outfit, perfect for casual outings.'
    },

    {
        id: 55,
        name: 'Formal Gown 26',
        price: 2153,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0121.jpg'],
        isNew: false,
        isSale: false,
        description: 'Stylish and comfortable formal gown, perfect for casual outings.'
    },

    {
        id: 56,
        name: 'Designer Dress 27',
        price: 2431,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0123.jpg'],
        isNew: false,
        isSale: false,
        description: 'Luxurious and comfortable designer dress, perfect for party nights.'
    },

    {
        id: 57,
        name: 'Chic Ensemble 28',
        price: 966,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0125.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegantly designed chic ensemble, perfect for cocktail parties.'
    },

    {
        id: 58,
        name: 'Stylish Outfit 29',
        price: 1539,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0127.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegantly designed stylish outfit, perfect for casual outings.'
    },

    {
        id: 59,
        name: 'Fashionable Gown 30',
        price: 1563,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0130.jpg'],
        isNew: false,
        isSale: true,
        description: 'Stylish and comfortable fashionable gown, perfect for wedding events.'
    },

    {
        id: 60,
        name: 'Elegant Gown 31',
        price: 1479,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0131.jpg'],
        isNew: true,
        isSale: true,
        description: 'Handmade with care elegant gown, perfect for special occasions.'
    },

    {
        id: 61,
        name: 'Summer Dress 32',
        price: 1531,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0132.jpg'],
        isNew: false,
        isSale: false,
        description: 'Luxurious and comfortable summer dress, perfect for formal gatherings.'
    },

    {
        id: 62,
        name: 'Evening Dress 33',
        price: 1111,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0133.jpg'],
        isNew: true,
        isSale: false,
        description: 'Elegantly designed evening dress, perfect for special occasions.'
    },

    {
        id: 63,
        name: 'Cocktail Dress 34',
        price: 2419,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0134.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy and fashionable cocktail dress, perfect for special occasions.'
    },

    {
        id: 64,
        name: 'Maxi Dress 35',
        price: 1445,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0135.jpg'],
        isNew: true,
        isSale: true,
        description: 'Stylish and comfortable maxi dress, perfect for cocktail parties.'
    },

    {
        id: 65,
        name: 'Party Dress 36',
        price: 1484,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0136.jpg'],
        isNew: false,
        isSale: true,
        description: 'Stylish and comfortable party dress, perfect for cocktail parties.'
    },

    {
        id: 66,
        name: 'Casual Outfit 37',
        price: 1521,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0137.jpg'],
        isNew: true,
        isSale: false,
        description: 'Handmade with care casual outfit, perfect for summer days.'
    },

    {
        id: 67,
        name: 'Formal Gown 38',
        price: 1946,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0138.jpg'],
        isNew: true,
        isSale: true,
        description: 'Luxurious and comfortable formal gown, perfect for party nights.'
    },

    {
        id: 68,
        name: 'Designer Dress 39',
        price: 886,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0139.jpg'],
        isNew: true,
        isSale: true,
        description: 'Stylish and comfortable designer dress, perfect for wedding events.'
    },

    {
        id: 69,
        name: 'Chic Ensemble 40',
        price: 1277,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0140.jpg'],
        isNew: true,
        isSale: false,
        description: 'Classic and timeless chic ensemble, perfect for formal gatherings.'
    },

    {
        id: 70,
        name: 'Stylish Outfit 41',
        price: 1778,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0141.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy and fashionable stylish outfit, perfect for special occasions.'
    },

    {
        id: 71,
        name: 'Fashionable Gown 42',
        price: 2464,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0142.jpg'],
        isNew: false,
        isSale: false,
        description: 'Elegantly designed fashionable gown, perfect for formal gatherings.'
    },

    {
        id: 72,
        name: 'Elegant Gown 43',
        price: 1276,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0143.jpg'],
        isNew: false,
        isSale: false,
        description: 'Elegantly designed elegant gown, perfect for cocktail parties.'
    },

    {
        id: 73,
        name: 'Summer Dress 44',
        price: 2231,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0144.jpg'],
        isNew: true,
        isSale: false,
        description: 'Stylish and comfortable summer dress, perfect for special occasions.'
    },

    {
        id: 74,
        name: 'Evening Dress 45',
        price: 1593,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0145.jpg'],
        isNew: true,
        isSale: false,
        description: 'Stylish and comfortable evening dress, perfect for party nights.'
    },

    {
        id: 75,
        name: 'Cocktail Dress 46',
        price: 1065,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0146.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy and fashionable cocktail dress, perfect for formal gatherings.'
    },

    {
        id: 76,
        name: 'Maxi Dress 47',
        price: 1295,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0147.jpg'],
        isNew: false,
        isSale: true,
        description: 'Eye-catching design maxi dress, perfect for casual outings.'
    },

    {
        id: 77,
        name: 'Party Dress 48',
        price: 1647,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0148.jpg'],
        isNew: true,
        isSale: false,
        description: 'Perfect for any occasion party dress, perfect for cocktail parties.'
    },

    {
        id: 78,
        name: 'Casual Outfit 49',
        price: 2136,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0149.jpg'],
        isNew: false,
        isSale: true,
        description: 'Elegantly designed casual outfit, perfect for wedding events.'
    },

    {
        id: 79,
        name: 'Formal Gown 50',
        price: 1929,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0150.jpg'],
        isNew: true,
        isSale: false,
        description: 'Perfect for any occasion formal gown, perfect for casual outings.'
    },

    {
        id: 80,
        name: 'Designer Dress 51',
        price: 2310,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0151.jpg'],
        isNew: true,
        isSale: true,
        description: 'Luxurious and comfortable designer dress, perfect for casual outings.'
    },

    {
        id: 81,
        name: 'Chic Ensemble 52',
        price: 944,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0152.jpg'],
        isNew: false,
        isSale: false,
        description: 'Handmade with care chic ensemble, perfect for summer days.'
    },

    {
        id: 82,
        name: 'Stylish Outfit 53',
        price: 2439,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0153.jpg'],
        isNew: true,
        isSale: false,
        description: 'Luxurious and comfortable stylish outfit, perfect for wedding events.'
    },

    {
        id: 83,
        name: 'Fashionable Gown 54',
        price: 1883,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0154.jpg'],
        isNew: false,
        isSale: false,
        description: 'Perfect for any occasion fashionable gown, perfect for party nights.'
    },

    {
        id: 84,
        name: 'Elegant Gown 55',
        price: 979,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0155.jpg'],
        isNew: false,
        isSale: false,
        description: 'Handmade with care elegant gown, perfect for cocktail parties.'
    },

    {
        id: 85,
        name: 'Summer Dress 56',
        price: 1183,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0156.jpg'],
        isNew: true,
        isSale: true,
        description: 'Trendy and fashionable summer dress, perfect for casual outings.'
    },

    {
        id: 86,
        name: 'Evening Dress 57',
        price: 1468,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0157.jpg'],
        isNew: true,
        isSale: false,
        description: 'Beautifully crafted evening dress, perfect for party nights.'
    },

    {
        id: 87,
        name: 'Cocktail Dress 58',
        price: 1763,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0158.jpg'],
        isNew: false,
        isSale: false,
        description: 'Perfect for any occasion cocktail dress, perfect for formal gatherings.'
    },

    {
        id: 88,
        name: 'Maxi Dress 59',
        price: 1306,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0159.jpg'],
        isNew: true,
        isSale: false,
        description: 'Eye-catching design maxi dress, perfect for summer days.'
    },

    {
        id: 89,
        name: 'Party Dress 60',
        price: 2063,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0160.jpg'],
        isNew: true,
        isSale: true,
        description: 'Classic and timeless party dress, perfect for cocktail parties.'
    },

    {
        id: 90,
        name: 'Casual Outfit 61',
        price: 1476,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0161.jpg'],
        isNew: true,
        isSale: true,
        description: 'Eye-catching design casual outfit, perfect for evening events.'
    },

    {
        id: 91,
        name: 'Formal Gown 62',
        price: 1420,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0163.jpg'],
        isNew: true,
        isSale: false,
        description: 'Beautifully crafted formal gown, perfect for formal gatherings.'
    },

    {
        id: 92,
        name: 'Designer Dress 63',
        price: 2376,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0164.jpg'],
        isNew: true,
        isSale: true,
        description: 'Elegantly designed designer dress, perfect for casual outings.'
    },

    {
        id: 93,
        name: 'Chic Ensemble 64',
        price: 1568,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0165.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy and fashionable chic ensemble, perfect for special occasions.'
    },

    {
        id: 94,
        name: 'Stylish Outfit 65',
        price: 1517,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0166.jpg'],
        isNew: false,
        isSale: true,
        description: 'Eye-catching design stylish outfit, perfect for special occasions.'
    },

    {
        id: 95,
        name: 'Fashionable Gown 66',
        price: 1325,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0167.jpg'],
        isNew: true,
        isSale: false,
        description: 'Perfect for any occasion fashionable gown, perfect for formal gatherings.'
    },

    {
        id: 96,
        name: 'Elegant Gown 67',
        price: 1462,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0168.jpg'],
        isNew: true,
        isSale: false,
        description: 'Classic and timeless elegant gown, perfect for casual outings.'
    },

    {
        id: 97,
        name: 'Summer Dress 68',
        price: 1016,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0169.jpg'],
        isNew: true,
        isSale: false,
        description: 'Trendy and fashionable summer dress, perfect for party nights.'
    },

    {
        id: 98,
        name: 'Evening Dress 69',
        price: 991,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0170.jpg'],
        isNew: true,
        isSale: true,
        description: 'Trendy and fashionable evening dress, perfect for evening events.'
    },

    {
        id: 99,
        name: 'Cocktail Dress 70',
        price: 802,
        category: 'women',
        images: ['images/products/women/IMG-20250816-WA0171.jpg'],
        isNew: true,
        isSale: true,
        description: 'Eye-catching design cocktail dress, perfect for casual outings.'
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
        
        // Get the first image with proper path handling
        let firstImage = 'images/placeholder.jpg';
        if (product.images && product.images.length > 0) {
            // Ensure the path is correct and uses forward slashes
            firstImage = product.images[0].replace(/\\/g, '/');
        }
        
        // Create image element with error handling
        const img = new Image();
        img.src = firstImage;
        img.alt = product.name;
        img.loading = 'lazy';
        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
            console.warn(`Failed to load image: ${firstImage}`);
        };
        
        // Create the product card HTML
        productCard.innerHTML = `
            <div class="product-image">
                ${product.isNew ? '<span class="new-badge">New</span>' : ''}
                ${product.isSale ? '<span class="sale-badge">Sale</span>' : ''}
                
                <div class="static-image">
                    <!-- Image will be inserted here -->
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
                <p class="price">R${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn btn-primary view-details" data-id="${product.id}">View Details</button>
                </div>`;
                
        // Add the image to the product card
        const imgContainer = productCard.querySelector('.static-image');
        if (imgContainer) {
            imgContainer.appendChild(img);
        }
            
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
