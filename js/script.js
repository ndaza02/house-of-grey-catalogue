// Product data for women's collection
const products = [
  {
    id: 1,
    name: "Irokai Burgundy Floral Chinese Traditional Gown 1",
    price: 50.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0054.jpg"],
    isNew: true,
    isSale: false,
    description: "Stunning evening gown perfect for special occasions."
  },
  {
    id: 2,
    name: "Elegant Traditional Chinese Dress",
    price: 35.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0055.jpg"],
    isNew: true,
    isSale: true,
    description: "Beautiful gown with elegant design."
  },
  {
    id: 3,
    name: "Formal Floral Chinese Outfit 1",
    price: 45.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0056.jpg"],
    isNew: true,
    isSale: false,
    description: "Light and airy floral dress for summer."
  },
  {
    id: 4,
    name: "Formal Summer Chinese Outfit 2",
    price: 45.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0057.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant floral dress for any occasion."
  },
  {
    id: 5,
    name: "Classic Modern Chinese White Dress",
    price: 35.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0058.jpg"],
    isNew: true,
    isSale: false,
    description: "Timeless white dress for formal events."
  },
  {
    id: 6,
    name: "Formal Elegant Chinese Outfit 3",
    price: 45.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0059.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant evening gown for special occasions."
  },
  {
    id: 7,
    name: "Irokai Burgundy Floral Chinese Traditional Gown 2",
    price: 50.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0060.jpg"],
    isNew: true,
    isSale: true,
    description: "Beautiful burgundy floral traditional gown."
  },
  {
    id: 8,
    name: "Teen Stylish Plain Black Irokai Traditional Gown",
    price: 50.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0061.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant black traditional gown for teens."
  },
  {
    id: 9,
    name: "Ladies Stylish Plain Black Irokai Traditional Gown",
    price: 50.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0062.jpg"],
    isNew: true,
    isSale: true,
    description: "Classic black traditional gown for ladies."
  },
  {
    id: 10,
    name: "Babies Pink Chinese Traditional Hanfu Two piece Set",
    price: 50.00,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0063.jpg"],
    isNew: true,
    isSale: false,
    description: "Adorable pink hanfu set for babies."
  },
  {
    id: 11,
    name: "Babies Pink Chinese Traditional Hanfu Two piece Set",
    price: 50.00,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0064.jpg"],
    isNew: true,
    isSale: false,
    description: "Charming pink hanfu set for little ones."
  },
  {
    id: 12,
    name: "Modern Elegant Chinese Dress",
    price: 35.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0065.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant modern Chinese dress for special occasions."
  },
  {
    id: 13,
    name: "New Stylish Chinese Casual Dress 1",
    price: 55.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0066.jpg"],
    isNew: true,
    isSale: false,
    description: "Stylish casual dress with modern Chinese design."
  },
  {
    id: 14,
    name: "New Stylish Chinese Casual Dress 2",
    price: 55.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0067.jpg"],
    isNew: true,
    isSale: true,
    description: "Chic Chinese casual dress for any occasion."
  },
  {
    id: 15,
    name: "New Stylish Chinese Casual Dress 3",
    price: 55.00,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0068.jpg"],
    isNew: true,
    isSale: false,
    description: "Comfortable and stylish Chinese casual dress."
  },
  {
    id: 16,
    name: "Men Irokai Chinese Traditional Gown",
    price: 50,
    category: "men",
    images: ["images/products/women/IMG-20250816-WA0069.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant traditional Chinese gown for men with Irokai design."
  },
  {
    id: 17,
    name: "Ladies Stylish Elegant Irokai Floral White Chinese Traditional Gown 1",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0070.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant white traditional Chinese gown with floral patterns."
  },
  {
    id: 18,
    name: "Ladies Stylish Elegant Irokai Floral Purple Chinese Traditional Gown 2",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0071.jpg"],
    isNew: true,
    isSale: true,
    description: "Beautiful purple traditional Chinese gown with floral embroidery."
  },
  {
    id: 19,
    name: "Ladies Stylish Elegant Irokai Floral Blue Chinese Traditional Gown 3",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0072.jpg"],
    isNew: true,
    isSale: false,
    description: "Stunning blue traditional Chinese gown with elegant floral patterns."
  },
  {
    id: 20,
    name: "Formal Chinese Traditional Outfit 4",
    price: 45,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0073.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant traditional Chinese outfit for formal events."
  },
  {
    id: 21,
    name: "Formal Chinese Traditional Two piece Set 1",
    price: 45,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0074.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful two-piece traditional Chinese formal set."
  },
  {
    id: 22,
    name: "New Stylish Chinese Casual Dress 4",
    price: 55,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0075.jpg"],
    isNew: true,
    isSale: true,
    description: "Stylish and comfortable Chinese casual dress."
  },
  {
    id: 23,
    name: "Designer Chinese Dress 1",
    price: 55,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0076.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant designer Chinese dress with modern flair."
  },
  {
    id: 24,
    name: "New Stylish Chinese Casual Dress 5",
    price: 55,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0077.jpg"],
    isNew: true,
    isSale: true,
    description: "Chic and trendy Chinese casual dress."
  },
  {
    id: 25,
    name: "Luxury Traditional Chinese Skirt 1",
    price: 55,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0078.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant traditional Chinese skirt with luxurious details."
  },
  {
    id: 26,
    name: "Luxury Traditional Chinese Skirt 2",
    price: 55,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0079.jpg"],
    isNew: true,
    isSale: true,
    description: "Beautiful traditional Chinese skirt with intricate patterns."
  },
  {
    id: 27,
    name: "Luxury Traditional Chinese Skirt 3",
    price: 55,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0080.jpg"],
    isNew: true,
    isSale: false,
    description: "Exquisite traditional Chinese skirt for special occasions."
  },
  {
    id: 28,
    name: "Premium Irokai Dress",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0081.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant Irokai dress with premium fabric and design."
  },
  {
    id: 29,
    name: "Exclusive Chinese Two piece Outfit",
    price: 45,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0082.jpg"],
    isNew: true,
    isSale: false,
    description: "Stylish two-piece Chinese outfit for special occasions."
  },
  {
    id: 30,
    name: "New Chinese Style Dress 4",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0083.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant Chinese style dress with modern design."
  },
  {
    id: 31,
    name: "Modern Chinese Style Casual Dress 1",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0084.jpg"],
    isNew: true,
    isSale: true,
    description: "Casual Chinese style dress for everyday wear."
  },
  {
    id: 32,
    name: "Modern Chinese Style Casual Dress 2",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0085.jpg"],
    isNew: true,
    isSale: false,
    description: "Stylish modern Chinese casual dress."
  },
  {
    id: 33,
    name: "Modern Chinese Style Casual Dress 3",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0086.jpg"],
    isNew: true,
    isSale: false,
    description: "Comfortable Chinese style casual dress."
  },
  {
    id: 34,
    name: "New Chinese Style Dress 5",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0087.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant new Chinese style dress."
  },
  {
    id: 35,
    name: "New Chinese Style Dress 6",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0088.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese style dress for special occasions."
  },
  {
    id: 36,
    name: "New Stylish Chinese Casual Dress 6",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0090.jpg"],
    isNew: true,
    isSale: false,
    description: "Stylish Chinese casual dress for everyday wear."
  },
  {
    id: 37,
    name: "New Stylish Chinese Casual Dress 7",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0092.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant Chinese casual dress with modern design."
  },
  {
    id: 38,
    name: "New Chinese Style Dress 7",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0093.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful Chinese style dress for any occasion."
  },
  {
    id: 39,
    name: "New Chinese Style Dress 8",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0094.jpg"],
    isNew: false,
    isSale: true,
    description: "Stylish Chinese dress with elegant design."
  },
  {
    id: 40,
    name: "New Chinese Style Elegant Maxi Dress",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0095.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese style maxi dress for special occasions."
  },
  {
    id: 41,
    name: "New Chinese Style Elegant Maxi Dress 1",
    price: 47.15,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0096.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful Chinese style maxi dress with elegant design."
  },
  {
    id: 42,
    name: "New Chinese Style Elegant Maxi Dress 2",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0097.jpg"],
    isNew: false,
    isSale: false,
    description: "Elegant maxi dress with Chinese style details."
  },
  {
    id: 43,
    name: "New Chinese Style Floral Maxi Dress 2",
    price: 40,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0098.jpg"],
    isNew: false,
    isSale: true,
    description: "Floral Chinese style maxi dress for any occasion."
  },
  {
    id: 44,
    name: "New Chinese Style Elegant Maxi Dress 3",
    price: 40,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0099.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese style maxi dress with beautiful design."
  },
  {
    id: 45,
    name: "New Chinese Style Floral Maxi Dress 3",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0101.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant floral Chinese style maxi dress for special occasions."
  },
  {
    id: 46,
    name: "Irokai Light Burgundy Floral Chinese Traditional Gown 4",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0103.jpg"],
    isNew: false,
    isSale: false,
    description: "Beautiful light burgundy floral traditional Chinese gown."
  },
  {
    id: 47,
    name: "Irokai Pink Floral Chinese Traditional Gown 5",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0105.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant pink floral traditional Chinese gown."
  },
  {
    id: 48,
    name: "Irokai Blue Floral Chinese Traditional Gown 1",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0107.jpg"],
    isNew: false,
    isSale: false,
    description: "Stunning blue floral traditional Chinese gown."
  },
  {
    id: 49,
    name: "Irokai Yellow & Blue Floral Chinese Traditional Gown 1",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0109.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful yellow and blue floral traditional Chinese gown."
  },
  {
    id: 50,
    name: "Ladies Stylish Elegant Irokai Floral Red Chinese Traditional Gown 1",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0111.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant red floral traditional Chinese gown with Irokai design."
  },
  {
    id: 51,
    name: "Ladies Stylish Elegant Irokai Floral Purple Chinese Traditional Gown 2",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0113.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful purple floral traditional Chinese gown with Irokai design."
  },
  {
    id: 52,
    name: "Ladies Stylish Elegant Irokai Floral Blue Chinese Traditional Gown 3",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0115.jpg"],
    isNew: true,
    isSale: false,
    description: "Stunning blue floral traditional Chinese gown with Irokai design."
  },
  {
    id: 53,
    name: "Ladies Stylish Elegant Irokai Floral Black Chinese Traditional Gown 5",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0117.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant black floral traditional Chinese gown with Irokai design."
  },
  {
    id: 54,
    name: "Premium Irokai Floral Dress 1",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0119.jpg"],
    isNew: false,
    isSale: false,
    description: "Premium Irokai floral dress with elegant design."
  },
  {
    id: 55,
    name: "Premium Irokai Satin Floral Dress 1",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0121.jpg"],
    isNew: false,
    isSale: false,
    description: "Elegant Irokai satin floral dress with premium design."
  },
  {
    id: 56,
    name: "Premium Irokai Satin Floral Dress 2",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0123.jpg"],
    isNew: false,
    isSale: false,
    description: "Beautiful Irokai satin floral dress with elegant patterns."
  },
  {
    id: 57,
    name: "Premium Irokai Satin Floral Dress 3",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0125.jpg"],
    isNew: true,
    isSale: false,
    description: "Stunning Irokai satin floral dress for special occasions."
  },
  {
    id: 58,
    name: "Premium Irokai Satin Floral Dress 5",
    price: 50,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0127.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Irokai satin floral dress with beautiful design."
  },
  {
    id: 59,
    name: "Men Fashionable Chinese Shirt 1",
    price: 40,
    category: "men",
    images: ["images/products/women/IMG-20250816-WA0130.jpg"],
    isNew: false,
    isSale: true,
    description: "Stylish and fashionable Chinese shirt for men."
  },
  {
    id: 60,
    name: "Men Fashionable Chinese Shirt 2",
    price: 55,
    category: "men",
    images: ["images/products/women/IMG-20250816-WA0131.jpg"],
    isNew: true,
    isSale: true,
    description: "Stylish and comfortable Chinese shirt for men."
  },
  {
    id: 61,
    name: "Young Boys Fashionable Chinese Outfit 1",
    price: 50,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0132.jpg"],
    isNew: false,
    isSale: false,
    description: "Fashionable Chinese outfit for young boys."
  },
  {
    id: 62,
    name: "Young Boys Fashionable Chinese Outfit 2",
    price: 35,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0133.jpg"],
    isNew: true,
    isSale: false,
    description: "Stylish Chinese outfit for young boys."
  },
  {
    id: 63,
    name: "Young Girls Traditional Chinese Dress 1",
    price: 35,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0134.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful traditional Chinese dress for young girls."
  },
  {
    id: 64,
    name: "Young Girls Traditional Chinese Dress 2",
    price: 35,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0135.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant traditional Chinese dress for young girls."
  },
  {
    id: 65,
    name: "Young Girls Traditional Chinese Dress 3",
    price: 35,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0136.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful traditional Chinese dress for young girls."
  },
  {
    id: 66,
    name: "Young Girls Traditional Chinese Dress 4",
    price: 35,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0137.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful traditional Chinese dress for young girls."
  },
  {
    id: 67,
    name: "Luxury Young Girls Traditional Chinese Dress 1",
    price: 40,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0138.jpg"],
    isNew: true,
    isSale: true,
    description: "Luxury traditional Chinese dress for young girls."
  },
  {
    id: 68,
    name: "Luxury Young Girls Traditional Chinese Dress 2",
    price: 40,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0139.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant luxury Chinese dress for young girls."
  },
  {
    id: 69,
    name: "Luxury Teen Fashionable Chinese Outfit 1",
    price: 40,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0140.jpg"],
    isNew: true,
    isSale: false,
    description: "Fashionable Chinese outfit for teens."
  },
  {
    id: 70,
    name: "Luxury Teen Fashionable Chinese Outfit 2",
    price: 40,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0141.jpg"],
    isNew: true,
    isSale: false,
    description: "Fashionable Chinese outfit for teens."
  },
  {
    id: 71,
    name: "Young Girls Fashionable Chinese Outfit 1",
    price: 45,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0142.jpg"],
    isNew: false,
    isSale: false,
    description: "Fashionable Chinese outfit for young girls."
  },
  {
    id: 72,
    name: "Luxury Teen Fashionable Chinese Outfit 3",
    price: 40,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0143.jpg"],
    isNew: false,
    isSale: false,
    description: "Luxury Chinese outfit for teens."
  },
  {
    id: 73,
    name: "Luxury Teen Fashionable Chinese Outfit 4",
    price: 45,
    category: "kids",
    images: ["images/products/women/IMG-20250816-WA0144.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese outfit for teens."
  },
  {
    id: 74,
    name: "Chinese Style Elegant Shoes 1",
    price: 40,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0145.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese style shoes for special occasions."
  },
  {
    id: 75,
    name: "Chinese Style Elegant Shoes 2",
    price: 45,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0146.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese style shoes for special occasions."
  },
  {
    id: 76,
    name: "Chinese Style Elegant Heels",
    price: 45,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0147.jpg"],
    isNew: false,
    isSale: true,
    description: "Stylish Chinese style heels for formal occasions."
  },
  {
    id: 77,
    name: "Beige Exquisite Fabric Rose Floral Handbag 1",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0148.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant beige rose floral handbag."
  },
  {
    id: 78,
    name: "Silver Exquisite Fabric Rose Floral Handbag 2",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0149.jpg"],
    isNew: false,
    isSale: true,
    description: "Stylish silver rose floral handbag."
  },
  {
    id: 79,
    name: "Red Exquisite Fabric Rose Floral Handbag 1",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0150.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful red rose floral handbag."
  },
  {
    id: 80,
    name: "Red Exquisite Fabric Rose Floral Handbag 2",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0151.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant red rose floral handbag with matching design."
  },
  {
    id: 81,
    name: "Lady Black Flower Clutch with Pearl Diamonds 1",
    price: 25,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0152.jpg"],
    isNew: false,
    isSale: false,
    description: "Elegant black flower clutch with pearl diamond accents."
  },
  {
    id: 82,
    name: "Lady Pink Flower Clutch with Pearl Diamonds 2",
    price: 25,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0153.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful pink flower clutch with pearl diamond details."
  },
  {
    id: 83,
    name: "Versatile Fashion Women White Floral Clutch Bag 1",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0154.jpg"],
    isNew: false,
    isSale: false,
    description: "Versatile white floral clutch bag for various occasions."
  },
  {
    id: 84,
    name: "Versatile Fashion Women Apricot Floral Clutch Bag 2",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0155.jpg"],
    isNew: false,
    isSale: false,
    description: "Elegant apricot floral clutch bag with versatile design."
  },
  {
    id: 85,
    name: "Versatile Fashion Women Pink Floral Clutch Bag 3",
    price: 35,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0156.jpg"],
    isNew: true,
    isSale: true,
    description: "Chic pink floral clutch bag for various occasions."
  },
  {
    id: 86,
    name: "1pc Chinese Handheld Fan Black Red",
    price: 5,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0157.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant black and red Chinese handheld fan."
  },
  {
    id: 87,
    name: "1pc Large Packed Fan 1",
    price: 5,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0158.jpg"],
    isNew: false,
    isSale: false,
    description: "Traditional Chinese large packed fan with beautiful design."
  },
  {
    id: 88,
    name: "1pc Large Packed Fan 2",
    price: 5,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0159.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant large packed fan with traditional Chinese patterns."
  },
  {
    id: 89,
    name: "Chinese Style Rose Tassel Hair Stick",
    price: 5,
    category: "accessories",
    images: ["images/products/women/IMG-20250816-WA0160.jpg"],
    isNew: true,
    isSale: true,
    description: "Beautiful Chinese style hair stick with rose tassel."
  },
  {
    id: 90,
    name: "Formal Summer Chinese Outfit 5",
    price: 45,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0161.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant Chinese formal summer outfit for special occasions."
  },
  {
    id: 91,
    name: "New Chinese Style Elegant Maxi Dress 4",
    price: 40,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0163.jpg"],
    isNew: true,
    isSale: false,
    description: "Beautiful Chinese style maxi dress with elegant design."
  },
  {
    id: 92,
    name: "New Stylish Chinese Casual Dress 8",
    price: 40,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0164.jpg"],
    isNew: true,
    isSale: true,
    description: "Stylish Chinese casual dress for everyday wear."
  },
  {
    id: 93,
    name: "New Stylish Chinese Casual Dress 9",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0165.jpg"],
    isNew: true,
    isSale: false,
    description: "Chic and comfortable Chinese casual dress."
  },
  {
    id: 94,
    name: "New Stylish Chinese Casual Dress 10",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0166.jpg"],
    isNew: false,
    isSale: true,
    description: "Stylish Chinese casual dress with elegant design."
  },
  {
    id: 95,
    name: "New Stylish Chinese Casual Dress 11",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0167.jpg"],
    isNew: true,
    isSale: false,
    description: "Elegant Chinese casual dress for various occasions."
  },
  {
    id: 96,
    name: "New Stylish Chinese Casual Dress 12",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0168.jpg"],
    isNew: true,
    isSale: false,
    description: "Classic Chinese casual dress with timeless design."
  },
  {
    id: 97,
    name: "New Stylish Chinese Casual Dress 13",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0169.jpg"],
    isNew: true,
    isSale: false,
    description: "Chic Chinese casual dress for summer days."
  },
  {
    id: 98,
    name: "New Stylish Chinese Casual Dress 14",
    price: 35,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0170.jpg"],
    isNew: true,
    isSale: true,
    description: "Elegant Chinese casual dress for evening events."
  },
  {
    id: 99,
    name: "New Stylish Chinese Casual Dress 15",
    price: 40,
    category: "women",
    images: ["images/products/women/IMG-20250816-WA0171.jpg"],
    isNew: true,
    isSale: true,
    description: "Stylish Chinese casual dress with eye-catching design."
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
                <p class="price">$${Math.round(product.price)}</p>
                <p class="description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn btn-primary view-details" data-id="${product.id}">View Details</button>
                    <a href="https://wa.me/263714976154?text=Hi!%20I%27d%20like%20to%20order:%20${encodeURIComponent(product.name)}" 
                       target="_blank" 
                       class="btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> Order Now
                    </a>
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
            e.preventDefault();
            const productId = parseInt(e.target.closest('.quick-view').dataset.id, 10);
            const product = products.find(p => p.id === productId);
            if (product && product.images && product.images.length > 0) {
                // Directly open the image viewer instead of the modal
                const imageViewer = document.getElementById('imageViewer');
                const fullscreenImage = document.getElementById('fullscreenImage');
                
                fullscreenImage.src = product.images[0];
                imageViewer.style.display = 'flex';
                void imageViewer.offsetWidth; // Force reflow
                imageViewer.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
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

// No longer used, will be removed.


// Image viewer functionality
function initImageViewer() {
    const imageViewer = document.getElementById('imageViewer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeViewer = document.querySelector('.close-viewer');
    const zoomInBtn = document.querySelector('.zoom-in');
    const zoomOutBtn = document.querySelector('.zoom-out');
    const fullscreenBtn = document.querySelector('.fullscreen');
    const loadingSpinner = document.querySelector('.loading-spinner');
    
    // State variables
    let scale = 1;
    let isDragging = false;
    let startPos = { x: 0, y: 0 };
    let translate = { x: 0, y: 0 };
    let startTranslate = { x: 0, y: 0 };
    
    // Function to update image transform
    function updateTransform() {
        fullscreenImage.style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
    }
    
    // Function to reset image transform
    function resetTransform() {
        scale = 1;
        translate = { x: 0, y: 0 };
        updateTransform();
    }
    
    // Function to handle zoom
    function zoom(zoomIn = true) {
        const prevScale = scale;
        scale = Math.max(0.5, Math.min(zoomIn ? scale * 1.2 : scale / 1.2, 4));
        
        // Adjust translate to zoom toward cursor
        const rect = fullscreenImage.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate the cursor position relative to the image
        const cursorX = (centerX - rect.left - translate.x) / prevScale;
        const cursorY = (centerY - rect.top - translate.y) / prevScale;
        
        // Calculate new translate values to zoom toward cursor
        translate.x = centerX - rect.left - (cursorX * scale);
        translate.y = centerY - rect.top - (cursorY * scale);
        
        updateTransform();
    }
    
    // Function to toggle fullscreen
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            if (imageViewer.requestFullscreen) {
                imageViewer.requestFullscreen();
            } else if (imageViewer.webkitRequestFullscreen) {
                imageViewer.webkitRequestFullscreen();
            }
            document.querySelector('.enter-fullscreen').style.display = 'none';
            document.querySelector('.exit-fullscreen').style.display = 'block';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            document.querySelector('.enter-fullscreen').style.display = 'block';
            document.querySelector('.exit-fullscreen').style.display = 'none';
        }
    }
    
    // Function to handle image load
    function handleImageLoad() {
        loadingSpinner.classList.remove('visible');
        fullscreenImage.classList.add('loaded');
        resetTransform();
    }
    
    // Function to open image viewer
    function openImageViewer(imageSrc) {
        if (!imageSrc) return;
        
        // Reset state
        resetTransform();
        loadingSpinner.classList.add('visible');
        fullscreenImage.classList.remove('loaded');
        
        // Set image source
        fullscreenImage.src = imageSrc;
        
        // Show viewer
        imageViewer.style.display = 'flex';
        void imageViewer.offsetWidth; // Force reflow
        imageViewer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close image viewer
    function closeImageViewer() {
        imageViewer.classList.remove('active');
        setTimeout(() => {
            if (!imageViewer.classList.contains('active')) {
                imageViewer.style.display = 'none';
                // Exit fullscreen when closing
                if (document.fullscreenElement) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            }
        }, 200);
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners
    closeViewer.addEventListener('click', closeImageViewer);
    zoomInBtn.addEventListener('click', () => zoom(true));
    zoomOutBtn.addEventListener('click', () => zoom(false));
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Image load handler
    fullscreenImage.addEventListener('load', handleImageLoad);
    
    // Mouse wheel for zoom
    imageViewer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.ctrlKey) { // Zoom with ctrl + wheel
            const delta = e.deltaY < 0 ? 1 : -1;
            scale = Math.max(0.5, Math.min(scale + (delta * 0.1), 4));
            updateTransform();
        } else { // Pan with mouse wheel
            translate.x = Math.min(Math.max(translate.x - e.deltaX, -500), 500);
            translate.y = Math.min(Math.max(translate.y - e.deltaY, -500), 500);
            updateTransform();
        }
    }, { passive: false });
    
    // Touch events for mobile
    let touchStartDistance = 0;
    let initialTouches = [];
    
    imageViewer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            // Single touch - start drag
            isDragging = true;
            startPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            startTranslate = { ...translate };
        } else if (e.touches.length === 2) {
            // Two touches - start pinch zoom
            initialTouches = [
                { x: e.touches[0].clientX, y: e.touches[0].clientY },
                { x: e.touches[1].clientX, y: e.touches[1].clientY }
            ];
            touchStartDistance = Math.hypot(
                initialTouches[0].x - initialTouches[1].x,
                initialTouches[0].y - initialTouches[1].y
            );
        }
    });
    
    imageViewer.addEventListener('touchmove', (e) => {
        e.preventDefault();
        
        if (e.touches.length === 1 && isDragging) {
            // Single touch - drag
            const dx = e.touches[0].clientX - startPos.x;
            const dy = e.touches[0].clientY - startPos.y;
            translate.x = startTranslate.x + dx;
            translate.y = startTranslate.y + dy;
            updateTransform();
        } else if (e.touches.length === 2) {
            // Two touches - pinch zoom
            const touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            const touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY };
            const touchDistance = Math.hypot(touch1.x - touch2.x, touch1.y - touch2.y);
            
            if (touchStartDistance > 0) {
                const newScale = (touchDistance / touchStartDistance) * scale;
                scale = Math.max(0.5, Math.min(newScale, 4));
                updateTransform();
            }
        }
    }, { passive: false });
    
    imageViewer.addEventListener('touchend', () => {
        isDragging = false;
        touchStartDistance = 0;
    });
    
    // Double click to reset zoom
    fullscreenImage.addEventListener('dblclick', resetTransform);
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageViewer.classList.contains('active')) {
            closeImageViewer();
        }
    });
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

// Initialize the application
function initializeApp() {
    // Display all products initially
    displayProducts(products);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize mobile menu
    initMenu();
    
    // Initialize image viewer
    initImageViewer();
}

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeApp);

// Also try to initialize if the DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Call on next tick to ensure the DOM is ready
    setTimeout(initializeApp, 1);
}
