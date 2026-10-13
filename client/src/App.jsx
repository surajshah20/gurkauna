import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { PLACEHOLDER_IMAGES } from './config/images';

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
import AuthPage from './pages/AuthPage';
import OrdersPage from './pages/OrdersPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import WishlistPage from './pages/WishlistPage';
import FAQPage from './pages/FAQPage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import WarrantyPage from './pages/WarrantyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import PaymentFailedPage from './pages/PaymentFailedPage';

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
      image: PLACEHOLDER_IMAGES.productGreen
    },
    {
      id: 'gurkauna-classic',
      name: 'Gurkauna Classic',
      subtitle: 'ABS Hard Shell Suitcase',
      price: 7999,
      size: '20" (Cabin)',
      color: 'Midnight Black',
      quantity: 1,
      image: PLACEHOLDER_IMAGES.productBlack
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
        <div key={activePage} className="page-transition">
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
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'login' && <AuthPage setActivePage={setActivePage} />}
        {activePage === 'signup' && <AuthPage setActivePage={setActivePage} />}
        {activePage === 'orders' && <OrdersPage setActivePage={setActivePage} />}
        {activePage === 'order-tracking' && <OrderTrackingPage setActivePage={setActivePage} />}
        {activePage === 'wishlist' && (
          <WishlistPage
            wishlist={wishlist}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'faq' && <FAQPage setActivePage={setActivePage} />}
        {activePage === 'shipping-returns' && <ShippingReturnsPage setActivePage={setActivePage} />}
        {activePage === 'warranty' && <WarrantyPage setActivePage={setActivePage} />}
        {activePage === 'privacy' && <PrivacyPolicyPage setActivePage={setActivePage} />}
        {activePage === 'terms' && <TermsPage setActivePage={setActivePage} />}
        {activePage === 'search' && (
          <SearchPage
            allProducts={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'payment-failed' && <PaymentFailedPage setActivePage={setActivePage} />}
        {activePage === '404' && <NotFoundPage setActivePage={setActivePage} />}
        </div>
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
        onGoToShop={(category) => {
          setIsCartOpen(false);
          setActivePage('shop');
        }}
      />
    </div>
  );
}
