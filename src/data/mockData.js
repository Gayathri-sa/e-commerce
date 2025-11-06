export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    originalPrice: 129.99,
    category: "Electronics",
    brand: "Sony",
    rating: 4.5,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop"
    ],
    description: "High-quality wireless headphones with noise cancellation. Perfect for music lovers and professionals who need focus.",
    inStock: true,
    features: ["Noise Cancellation", "30hr Battery", "Quick Charge", "Bluetooth 5.0"],
    specifications: {
      "Battery": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Color": "Black",
      "Warranty": "1 year"
    },
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Amazing sound quality! Best headphones I've ever owned.",
        date: "2024-01-15"
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Great battery life, comfortable for long sessions.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    category: "Electronics",
    brand: "FitTech",
    rating: 4.3,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    inStock: true,
    features: ["Heart Rate Monitor", "GPS", "Water Resistant", "Sleep Tracking"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    brand: "EcoWear",
    rating: 4.7,
    reviewCount: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    description: "Comfortable organic cotton t-shirt in various colors.",
    inStock: true,
    features: ["100% Organic Cotton", "Machine Washable", "Multiple Colors"]
  },
  {
    id: 4,
    name: "Professional Camera",
    price: 899.99,
    originalPrice: 1099.99,
    category: "Electronics",
    brand: "Canon",
    rating: 4.8,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",
    description: "Professional DSLR camera for photography enthusiasts.",
    inStock: false,
    features: ["24.2MP Sensor", "4K Video", "Wi-Fi Connectivity"]
  },
  {
    id: 5,
    name: "Designer Handbag",
    price: 299.99,
    category: "Fashion",
    brand: "Luxury",
    rating: 4.6,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    description: "Elegant designer handbag made from genuine leather.",
    inStock: true,
    features: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap"]
  },
  {
    id: 6,
    name: "Gaming Keyboard",
    price: 79.99,
    category: "Electronics",
    brand: "Razer",
    rating: 4.4,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description: "Mechanical gaming keyboard with RGB lighting.",
    inStock: true,
    features: ["Mechanical Switches", "RGB Lighting", "Programmable Keys"]
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 129.99,
    originalPrice: 159.99,
    category: "Sports",
    brand: "Nike",
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight running shoes with superior cushioning.",
    inStock: true,
    features: ["Lightweight", "Air Cushioning", "Breathable Mesh"]
  },
  {
    id: 8,
    name: "Coffee Maker",
    price: 149.99,
    category: "Home",
    brand: "Breville",
    rating: 4.6,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    description: "Automatic coffee maker with built-in grinder.",
    inStock: true,
    features: ["Built-in Grinder", "Programmable", "Thermal Carafe"]
  }
]

export const categories = [
  { id: 1, name: "Electronics", count: 45, image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop" },
  { id: 2, name: "Clothing", count: 32, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" },
  { id: 3, name: "Home & Garden", count: 28, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
  { id: 4, name: "Sports", count: 19, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
  { id: 5, name: "Books", count: 67, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop" },
  { id: 6, name: "Beauty", count: 23, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop" }
]

export const orders = [
  {
    id: 1,
    date: "2024-01-15",
    status: "delivered",
    total: 199.98,
    items: [
      { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 2, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" }
    ]
  },
  {
    id: 2,
    date: "2024-01-10",
    status: "processing",
    total: 299.99,
    items: [
      { id: 5, name: "Designer Handbag", price: 299.99, quantity: 1, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop" }
    ]
  }
]

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    joinDate: "2023-12-01",
    orders: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    joinDate: "2023-11-15",
    orders: 12,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    joinDate: "2024-01-01",
    orders: 2,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]