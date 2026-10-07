import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import CollectionsPage from './pages/CollectionsPage';
import WhyGurkaunaPage from './pages/WhyGurkaunaPage';

import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart state
  const [cart, setCart] = useState([
    {
      id: 'gurkauna-pro',
      name: 'Gurkauna Pro',
      subtitle: 'PC + ABS Hard Shell Suitcase',
      price: 9999,
      size: '24" (Medium)',
      color: 'Forest Green',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gurkauna-classic',
      name: 'Gurkauna Classic',
      subtitle: 'ABS Hard Shell Suitcase',
      price: 7999,
      size: '20" (Cabin)',
      color: 'Midnight Black',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
    }
  ]);

  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedProduct]);

  // Fetch product list from Express backend
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        if (data.length > 0 && !selectedProduct) {
          setSelectedProduct(data[1]); // Default to Gurkauna Pro
        }
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Handlers
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setActivePage('detail');
  };

  const handleAddToCart = (product, size, colorName, qty = 1) => {
    setCart(prevCart => {
      const existingIdx = prevCart.findIndex(
        item => item.id === product.id && item.size === size && item.color === colorName
      );
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        const matchingColor = product.colors?.find(c => c.name === colorName) || product.colors?.[0];
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            price: product.price,
            size: size || product.sizes?.[0] || '24" (Medium)',
            color: colorName || matchingColor?.name || 'Forest Green',
            quantity: qty,
            image: matchingColor?.image || product.image
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
    } else {
      setCart(prev => {
        const updated = [...prev];
        updated[index].quantity = newQty;
        return updated;
      });
    }
  };

  const handleRemoveCartItem = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(w => w.id === product.id);
      if (exists) {
        return prev.filter(w => w.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Routing */}
      <div style={{ flexGrow: 1 }}>
        {activePage === 'home' && (
          <HomePage
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'shop' && (
          <ShopPage
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'collections' && (
          <CollectionsPage setActivePage={setActivePage} />
        )}

        {activePage === 'detail' && (
          <ProductDetailPage
            product={selectedProduct}
            allProducts={products}
            onAddToCart={handleAddToCart}
            onSelectProduct={handleSelectProduct}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'cart' && (
          <CartPage
            cartItems={cart}
            onUpdateQty={handleUpdateCartQty}
            onRemoveItem={handleRemoveCartItem}
            onGoToCheckout={() => setActivePage('checkout')}
            setActivePage={setActivePage}
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage
            cartItems={cart}
            onClearCart={() => setCart([])}
            setActivePage={setActivePage}
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={setActivePage} />
        )}

        {activePage === 'why-gurkauna' && (
          <WhyGurkaunaPage setActivePage={setActivePage} />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'account' && (
          <AccountPage
            wishlist={wishlist}
            onSelectProduct={handleSelectProduct}
            setActivePage={setActivePage}
          />
        )}
      </div>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Quick Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onGoToCart={() => {
          setIsCartOpen(false);
          setActivePage('cart');
        }}
        onGoToCheckout={() => {
          setIsCartOpen(false);
          setActivePage('checkout');
        }}
      />
    </div>
  );
}
