import React from 'react';
import { Trash2, ArrowRight, ArrowLeft, ShieldCheck, ShoppingBag, X, CheckCircle, Truck, RefreshCcw, Leaf, Lock } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function CartPage({ 
  cartItems, 
  onUpdateQty, 
  onRemoveItem, 
  onGoToCheckout, 
  setActivePage,
  products = [],
  onSelectProduct,
  onAddToCart,
  wishlist = [],
  onToggleWishlist
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 20000;
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 500;
  const grandTotal = subtotal + (cartItems.length > 0 ? shippingFee : 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Recommendations: exclude items already in cart
  const cartProductIds = cartItems.map(item => item.id);
  const recommendations = products
    .filter(p => !cartProductIds.includes(p.id))
    .slice(0, 4);

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Hero Banner */}
      <div style={{ backgroundColor: '#F4F4F5', borderBottom: '1px solid #E4E4E7', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', minHeight: '280px' }}>
          <div style={{ maxWidth: '500px', padding: '40px 0' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Your Cart</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.1', marginBottom: '16px' }}>Good choices<br/>travel further.</h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-600)' }}>Your selected items are ready for your next adventure.</p>
          </div>
          <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' }, height: '100%', alignSelf: 'flex-end', marginRight: '-100px' }}>
             <img src="https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=600&q=80" alt="Luggage" style={{ height: '350px', objectFit: 'contain', marginBottom: '-50px', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '60px auto 0', padding: '0 24px' }}>
        
        {cartItems.length === 0 ? (
          <div style={{ background: 'white', padding: '80px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)' }}>
            <ShoppingBag size={48} style={{ color: 'var(--color-gray-400)', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '12px' }}>Your shopping cart is empty</h2>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: '32px' }}>
              Looks like you haven't added any Gurkauna suitcases to your cart yet.
            </p>
            <button className="btn-brand-primary" onClick={() => setActivePage('shop')}>
              Browse Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>
            
            {/* Left: Cart Items */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #E4E4E7', paddingBottom: '16px', marginBottom: '24px' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '500', color: 'var(--color-dark)' }}>
                  Your Cart <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: '400', color: '#71717A' }}>({totalItemsCount} items)</span>
                </h2>
                <button onClick={() => setActivePage('shop')} style={{ fontSize: '0.9rem', color: 'var(--color-brand)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Continue Shopping <ArrowRight size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {cartItems.map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '24px', background: 'white', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
                    
                    {/* Image */}
                    <div style={{ width: '140px', height: '160px', background: '#F4F4F5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                      <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Details */}
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>{item.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#52525B', marginBottom: '12px' }}>{item.subtitle || 'Hard Shell Suitcase'}</p>
                      
                      <div style={{ fontSize: '0.85rem', color: '#71717A', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span>Size: {item.size}</span>
                        <span>Colour: {item.color}</span>
                      </div>

                      {/* Fake Color Swatches */}
                      <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
                        {['#1C3F34', '#111111', '#1E3A8A', '#E11D48', '#FCA5A5'].map((color, idx) => (
                          <div key={idx} style={{ 
                            width: '12px', height: '12px', borderRadius: '50%', background: color,
                            border: item.color.toLowerCase().includes('green') && idx===0 ? '2px solid white' : (
                                    item.color.toLowerCase().includes('black') && idx===1 ? '2px solid white' : (
                                    item.color.toLowerCase().includes('navy') && idx===2 ? '2px solid white' : 'none'
                                    )
                            ),
                            outline: item.color.toLowerCase().includes('green') && idx===0 ? '1px solid #52525B' : (
                                     item.color.toLowerCase().includes('black') && idx===1 ? '1px solid #52525B' : (
                                     item.color.toLowerCase().includes('navy') && idx===2 ? '1px solid #52525B' : 'none'
                                     )
                            ),
                            opacity: 0.8
                          }} />
                        ))}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', minWidth: '120px' }}>
                      
                      <button onClick={() => onRemoveItem(index)} style={{ position: 'absolute', top: '24px', right: '24px', color: '#A1A1AA', padding: '4px' }}>
                        <X size={20} />
                      </button>

                      <div style={{ textAlign: 'right', marginTop: '20px' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)' }}>
                          NPR {(item.price).toLocaleString()}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end', marginTop: '4px' }}>
                           <span style={{ fontSize: '0.85rem', color: '#A1A1AA', textDecoration: 'line-through' }}>NPR {Math.round(item.price * 1.3).toLocaleString()}</span>
                           <span style={{ fontSize: '0.65rem', fontWeight: '700', background: 'var(--color-brand)', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>
                             23% OFF
                           </span>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E4E4E7', borderRadius: '4px', background: '#FAFAFA', overflow: 'hidden' }}>
                        <button onClick={() => onUpdateQty(index, item.quantity - 1)} style={{ padding: '6px 12px', fontWeight: '600', color: '#52525B', background: 'white' }}>-</button>
                        <span style={{ width: '32px', textAlign: 'center', fontSize: '0.9rem', fontWeight: '600' }}>{item.quantity}</span>
                        <button onClick={() => onUpdateQty(index, item.quantity + 1)} style={{ padding: '6px 12px', fontWeight: '600', color: '#52525B', background: 'white' }}>+</button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '500', marginBottom: '24px', color: 'var(--color-dark)' }}>Order Summary</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.95rem', color: '#52525B' }}>
                <span>Subtotal ({totalItemsCount} items)</span>
                <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>NPR {subtotal.toLocaleString()}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '0.95rem', color: '#52525B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>Shipping <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '1px solid #A1A1AA', color: '#A1A1AA', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>?</div></span>
                <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>{shippingFee === 0 ? 'Free' : `NPR ${shippingFee.toLocaleString()}`}</span>
              </div>

              <div style={{ borderTop: '1px solid #E4E4E7', paddingTop: '24px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)' }}>Total</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dark)' }}>NPR {grandTotal.toLocaleString()}</span>
              </div>

              <button 
                onClick={onGoToCheckout}
                style={{ width: '100%', background: 'var(--color-brand)', color: 'white', padding: '16px', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', transition: 'background 0.2s', border: 'none', cursor: 'pointer' }}
              >
                Proceed to Checkout <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => setActivePage('shop')}
                style={{ width: '100%', background: 'white', color: '#111111', border: '1px solid #D4D4D8', padding: '16px', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.2s', cursor: 'pointer' }}
              >
                <ArrowLeft size={18} /> Continue Shopping
              </button>

              <div style={{ marginTop: '24px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-dark)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>Secure Checkout</div>
                  <div style={{ fontSize: '0.8rem', color: '#71717A' }}>Your information is safe and encrypted.</div>
                </div>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Truck size={20} style={{ color: '#52525B', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Free Shipping</div>
                    <div style={{ fontSize: '0.75rem', color: '#71717A' }}>On orders over NPR 20,000</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <RefreshCcw size={20} style={{ color: '#52525B', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>7-Day Returns</div>
                    <div style={{ fontSize: '0.75rem', color: '#71717A' }}>If not satisfied</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <ShieldCheck size={20} style={{ color: '#52525B', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Secure Payments</div>
                    <div style={{ fontSize: '0.75rem', color: '#71717A' }}>eSewa / Khalti / Cards</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Benefits Strip */}
        <div style={{ marginTop: '60px', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ShieldCheck size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Durable Materials</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Built for the journey.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RefreshCcw size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>360° Spinner Wheels</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Smooth & silent movement.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Lock size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>TSA-Ready Lock</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Travel with confidence.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Leaf size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Lightweight Design</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>More space, less weight.</div>
          </div>
        </div>

        {/* You May Also Like Section */}
        {recommendations.length > 0 && (
          <section style={{ marginTop: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>You May Also Like</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '400', color: 'var(--color-dark)' }}>Complete Your Journey</h3>
              </div>
              <button 
                onClick={() => setActivePage('shop')}
                style={{ fontSize: '0.9rem', color: 'var(--color-brand)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                View All <ArrowRight size={16} />
              </button>
            </div>
            <div className="products-grid">
              {recommendations.map((rec) => (
                <ProductCard
                  key={rec.id}
                  product={rec}
                  onSelectProduct={onSelectProduct}
                  onAddToCart={onAddToCart}
                  isWishlisted={wishlist.some(w => w.id === rec.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
