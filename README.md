# 🧳 Gurkauna — Pack Your World

**Premium Nepalese luggage brand** crafting durable, stylish suitcases engineered for journeys worth remembering.

A full-stack e-commerce web application built with **React 19**, **Vite**, and **Express**.

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** — Browse 6 premium luggage products across Hard Shell, Soft Shell, Premium, and Travel Set categories
- **Product Details** — Rich product pages with color/size selectors, image galleries, feature breakdowns, and customer reviews
- **Smart Search** — Real-time search filtering across all products
- **Collections** — Curated collection pages organized by material and product line
- **Wishlist** — Save favorite products for later

### 🛒 Cart & Checkout
- **Slide-out Cart Drawer** — Quick-access cart with quantity controls
- **Full Cart Page** — Detailed cart management with recommended add-ons
- **Multi-step Checkout** — Complete checkout flow with shipping info, payment method selection (eSewa, Khalti, COD), and order confirmation
- **Order Tracking** — Track order status through Processing → Shipped → Delivered pipeline

### 📄 Content Pages
- **About / Brand Story** — Company mission, team, and Nepali heritage
- **Why Gurkauna** — Product differentiators and quality benchmarks
- **FAQ** — Frequently asked questions
- **Shipping & Returns** — Delivery and return policy details
- **Warranty** — Product warranty information
- **Privacy Policy & Terms** — Legal pages
- **Contact** — Contact form with API integration

### 🎨 Design
- Modern glassmorphism UI with smooth page transitions and scroll-reveal animations
- Custom typography via **Outfit**, **Playfair Display**, and **Plus Jakarta Sans** (Google Fonts)
- Icons powered by **Lucide React**
- Fully responsive layout

---

## 🏗️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React 19, Vite 8, Vanilla CSS |
| Backend    | Express 4, Node.js            |
| Icons      | Lucide React                   |
| Linting    | Oxlint                         |
| Monorepo   | npm Workspaces                 |
| Dev Tools  | Concurrently                   |

---

## 📁 Project Structure

```
gurkauna/
├── client/                  # React frontend (Vite)
│   ├── public/              # Static assets & product images
│   ├── src/
│   │   ├── components/      # Reusable UI (Navbar, Footer, CartDrawer, ProductCard, etc.)
│   │   ├── pages/           # 23 page components (Home, Shop, Checkout, About, …)
│   │   ├── hooks/           # Custom hooks (useScrollReveal)
│   │   ├── config/          # Image placeholder config
│   │   ├── App.jsx          # Root app with client-side routing & state
│   │   ├── App.css          # Global styles
│   │   └── main.jsx         # Entry point
│   └── vite.config.js       # Vite config with API proxy to Express
│
├── server/                  # Express API backend
│   └── index.js             # REST API (products, orders, contact)
│
├── package.json             # Monorepo root (npm workspaces)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/surajshah20/gurkauna.git
cd gurkauna

# Install all dependencies (client + server)
npm install
```

### Development

```bash
# Start both client & server concurrently
npm run dev
```

This launches:
- **Frontend** → `http://localhost:5173`
- **Backend API** → `http://localhost:5000`

Vite proxies all `/api/*` requests to the Express server automatically.

#### Run individually

```bash
npm run dev:client    # Frontend only
npm run dev:server    # Backend only
```

### Production Build

```bash
npm run build         # Build the client for production
npm run start:server  # Start the Express server
```

---

## 🔌 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/api/health`       | Server health check      |
| GET    | `/api/products`     | List all products        |
| GET    | `/api/products/:id` | Get a single product     |
| GET    | `/api/orders`       | List all orders          |
| POST   | `/api/orders`       | Create a new order       |
| POST   | `/api/contact`      | Submit a contact message |

---

## 🧳 Product Lineup

| Product              | Material             | Price (NPR) |
|----------------------|----------------------|-------------|
| Gurkauna Classic     | ABS                  | ₨ 7,999     |
| Gurkauna Soft        | Cordura Nylon        | ₨ 8,999     |
| Gurkauna Pro         | PC + ABS             | ₨ 9,999     |
| Gurkauna Elite       | 100% Polycarbonate   | ₨ 12,999    |
| Gurkauna Premium     | Aluminium Alloy      | ₨ 18,999    |
| Gurkauna Travel Set  | PC + ABS (3-piece)   | ₨ 24,999    |

---

## 📜 License

This project is proprietary. All rights reserved.

---

<p align="center">
  Made with ❤️ in Nepal
</p>
