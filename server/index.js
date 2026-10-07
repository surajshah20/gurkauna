import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Database for Gurkauna Startup
const products = [
  {
    id: 'gurkauna-classic',
    name: 'Gurkauna Classic',
    subtitle: 'ABS Hard Shell Suitcase',
    category: 'Hard Shell',
    collection: 'Classic',
    price: 7999,
    originalPrice: 9500,
    rating: 4.8,
    reviewsCount: 94,
    badge: 'Best Seller',
    material: 'ABS',
    inStock: true,
    colors: [
      { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
      { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
    ],
    sizes: ['20" (Cabin)', '24" (Medium)', '28" (Large)'],
    description: 'The Gurkauna Classic is engineered for everyday explorers. Crafted from lightweight yet impact-resistant ABS shell, it features whisper-quiet 360° spinner wheels and a secure TSA combination lock.',
    features: [
      'Lightweight ABS Impact-Resistant Shell',
      '360° Smooth Silent Spinner Wheels',
      'Integrated 3-Digit TSA Lock',
      'Telescopic Ergonomic Aluminium Handle',
      'Full Zipper Mesh Divider & Compression Straps'
    ],
    image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gurkauna-pro',
    name: 'Gurkauna Pro',
    subtitle: 'PC + ABS Hard Shell Suitcase',
    category: 'Hard Shell',
    collection: 'Pro',
    price: 9999,
    originalPrice: 11999,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Popular',
    material: 'PC + ABS',
    inStock: true,
    colors: [
      { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
      { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rose Gold', hex: '#B87333', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['20" (Cabin)', '24" (Medium)', '28" (Large)'],
    description: 'The Gurkauna Pro combines maximum durability, sleek modern aesthetic, and ultra-smooth mobility. Built with premium Bayer Polycarbonate + ABS composite that withstands tough mountain transit.',
    features: [
      'Bayer PC + ABS Scratch-Resistant Matte Finish',
      'Dual Japanese Hinomoto 360° Silent Wheels',
      'Flush-Mounted TSA Approved Lock',
      'Reinforced Corner Armor Guards',
      'Water-Resistant Zipper Lining'
    ],
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gurkauna-elite',
    name: 'Gurkauna Elite',
    subtitle: '100% German Polycarbonate Luggage',
    category: 'Premium',
    collection: 'Elite',
    price: 12999,
    originalPrice: 14999,
    rating: 5.0,
    reviewsCount: 86,
    badge: 'Premium Choice',
    material: 'Polycarbonate',
    inStock: true,
    colors: [
      { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
      { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titanium Silver', hex: '#A8A9AD', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['20" (Cabin)', '24" (Medium)', '28" (Large)'],
    description: 'Designed for frequent flyers and Himalayan expeditions, the Gurkauna Elite delivers ultra-lightweight strength with pure German Polycarbonate, custom internal organization, and lifetime guarantee.',
    features: [
      '100% Virgin Makrolon® Polycarbonate Shell',
      'Anodized Aluminium Frame & Dual TSA Locks',
      'Shock-Absorbing Aircraft Grade Wheels',
      'Detachable Compression Divider Pad',
      'Integrated Digital Scale Handle'
    ],
    image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gurkauna-premium',
    name: 'Gurkauna Premium',
    subtitle: 'Aluminium Frame Flagship Suitcase',
    category: 'Premium',
    collection: 'Premium',
    price: 18999,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 52,
    badge: 'Flagship',
    material: 'Aluminium',
    inStock: true,
    colors: [
      { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
      { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['20" (Cabin)', '24" (Medium)', '28" (Large)'],
    description: 'Our top-of-the-line flagship luggage crafted from aviation grade aluminium-magnesium alloy. Indestructible corner protection and timeless luxury silhouette.',
    features: [
      'Aviation Grade Aluminium Alloy Body',
      'Zipperless Dual Latch Lock Mechanism with TSA',
      'Slow-Release Leather Inset Top & Side Handles',
      'Luxury Satin Internal Lining with Garment Hook'
    ],
    image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gurkauna-soft',
    name: 'Gurkauna Soft',
    subtitle: 'High-Density Cordura Nylon Suitcase',
    category: 'Soft Shell',
    collection: 'Pro',
    price: 8999,
    originalPrice: 10500,
    rating: 4.7,
    reviewsCount: 41,
    badge: 'Flexible',
    material: 'Cordura Nylon',
    inStock: true,
    colors: [
      { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['20" (Cabin)', '24" (Medium)', '28" (Large)'],
    description: 'Maximum expandable packing capability with quick-access front pockets for laptops, passports, and travel documents.',
    features: [
      'Waterproof 1680D Cordura Ballistic Nylon',
      'Padded External 15.6" Laptop & Tablet Sleeve',
      '2-Inch Zipper Expansion System (+25% capacity)',
      'Reinforced Bottom Skid Plate Protection'
    ],
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gurkauna-travel-set',
    name: 'Gurkauna Travel Set',
    subtitle: '3-Piece Complete Explorer Set (20", 24", 28")',
    category: 'Travel Sets',
    collection: 'Premium',
    price: 24999,
    originalPrice: 29999,
    rating: 5.0,
    reviewsCount: 39,
    badge: 'Best Value',
    material: 'PC + ABS',
    inStock: true,
    colors: [
      { name: 'Rose Gold', hex: '#B87333', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: ['3-Piece Full Bundle (20" + 24" + 28")'],
    description: 'The ultimate set for families and long expeditions. Includes Cabin, Medium, and Large suitcases that nest inside each other for easy storage.',
    features: [
      'Includes 20" Cabin, 24" Medium, and 28" Large Suitcases',
      'Nested Storage Saver Design',
      'Matching Color Accessories Bag Included',
      'Integrated TSA Lock on All 3 Suitcases'
    ],
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
  }
];

let initialOrders = [
  {
    id: 'GB10301',
    date: 'Apr 12, 2026',
    status: 'Delivered',
    total: 18498,
    paymentMethod: 'eSewa',
    items: [
      { name: 'Gurkauna Pro', size: '24" (Medium)', color: 'Forest Green', quantity: 1, price: 9999, image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Gurkauna Classic', size: '20" (Cabin)', color: 'Midnight Black', quantity: 1, price: 7999, image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'GB09908',
    date: 'Apr 5, 2026',
    status: 'Shipped',
    total: 9999,
    paymentMethod: 'Khalti',
    items: [
      { name: 'Gurkauna Pro', size: '20" (Cabin)', color: 'Forest Green', quantity: 1, price: 9999, image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'GB08972',
    date: 'Mar 28, 2026',
    status: 'Processing',
    total: 12999,
    paymentMethod: 'Cash on Delivery',
    items: [
      { name: 'Gurkauna Elite', size: '28" (Large)', color: 'Navy Blue', quantity: 1, price: 12999, image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

let contactMessages = [];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString(), brand: 'Gurkauna Nepal' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.get('/api/orders', (req, res) => {
  res.json(initialOrders);
});

app.post('/api/orders', (req, res) => {
  const { items, total, shippingInfo, paymentMethod } = req.body;
  const newOrder = {
    id: `GB${Math.floor(10000 + Math.random() * 90000)}`,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Processing',
    total: total || 0,
    paymentMethod: paymentMethod || 'Cash on Delivery',
    shippingInfo: shippingInfo || {},
    items: items || []
  };
  initialOrders.unshift(newOrder);
  res.status(201).json({ success: true, order: newOrder });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  const newMessage = { id: Date.now(), name, email, phone, message, date: new Date() };
  contactMessages.push(newMessage);
  res.json({ success: true, message: 'Thank you! We received your message and will reach out shortly.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Gurkauna API server running at http://localhost:${PORT}`);
});
