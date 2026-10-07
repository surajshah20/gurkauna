import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Wallet, CreditCard, Banknote, Building2, Check, MapPin, Truck, HelpCircle, Phone, Mail, Copy, X, Tag, Package, Home, RefreshCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function CheckoutPage({ 
  cartItems = [], 
  onClearCart, 
  setActivePage,
  products = [],
  onSelectProduct,
  onAddToCart,
  wishlist = [],
  onToggleWishlist
}) {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    phone: '98XXXXXXX',
    address: 'House no., Street, Area',
    city: 'Kathmandu',
    province: 'Bagmati',
    postalCode: '44600',
    saveInfo: true
  });

  const [deliveryOption, setDeliveryOption] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('eSewa / Khalti');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Prices and calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOption === 'Standard' ? 150 : 300;
  
  // Fake discount to match mockup exactly if subtotal is high enough
  const discount = subtotal > 15000 ? 2000 : 0;
  const grandTotal = subtotal + deliveryFee - discount;
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Recommendations: exclude items already in cart
  const cartProductIds = cartItems.map(item => item.id);
  const recommendations = products
    .filter(p => !cartProductIds.includes(p.id))
    .slice(0, 4);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
       const orderData = {
        id: `GK202509271234`,
        date: 'Sep 27, 2025 • 12:34 PM',
        total: grandTotal,
        subtotal,
        discount,
        shippingFee: deliveryFee,
        items: cartItems,
        paymentMethod,
        shippingInfo: formData,
        deliveryOption
      };
      setCompletedOrder(orderData);
      onClearCart();
      setIsSubmitting(false);
    }, 1500);
  };

  const renderRecommended = (title) => (
    <section style={{ maxWidth: '1280px', margin: '80px auto 0', padding: '0 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>You may also like</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '400', color: 'var(--color-dark)' }}>{title}</h3>
        </div>
        <button 
          onClick={() => setActivePage('shop')}
          style={{ fontSize: '0.9rem', color: 'var(--color-brand)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', background: 'transparent', border: 'none', cursor: 'pointer' }}
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
  );

  if (completedOrder) {
    return (
      <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', paddingBottom: '80px', paddingTop: '40px' }}>
        {/* Success Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', padding: '0 24px' }}>
          <div style={{ width: '64px', height: '64px', background: '#D1FAE5', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', border: '8px solid #ECFDF5' }}>
            <Check size={32} strokeWidth={3} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '16px' }}>
            Your Order is Confirmed!
          </h1>
          <p style={{ color: '#52525B', fontSize: '1.05rem', marginBottom: '24px' }}>
            Thank you for choosing Gurkauna. Your order has been placed successfully<br/>and is now being processed.
          </p>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
             <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#52525B' }}>Order Number</span>
             <span style={{ background: '#FEE2E2', color: '#B91C1C', padding: '6px 12px', borderRadius: '4px', fontWeight: '700', fontSize: '0.95rem' }}>#{completedOrder.id}</span>
             <button style={{ color: '#71717A', background: 'white', border: '1px solid #E4E4E7', borderRadius: '4px', padding: '6px', cursor: 'pointer' }}><Copy size={16} /></button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button className="btn-brand-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
              Track Order <ArrowRight size={18} />
            </button>
            <button className="btn-brand-secondary" onClick={() => setActivePage('shop')} style={{ cursor: 'pointer' }}>
              Continue Shopping
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr', '@media (minWidth: 768px)': { gridTemplateColumns: '1fr 1fr' }, gap: '32px' }}>
           
           {/* Left Column */}
           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Order Summary */}
              <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '500', color: 'var(--color-dark)' }}>Order Summary</h3>
                    <span style={{ background: '#D1FAE5', color: '#10B981', fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={12}/> Payment Successful</span>
                 </div>
                 
                 {/* Order Item */}
                 {completedOrder.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #E4E4E7', paddingBottom: '24px', marginBottom: '24px' }}>
                       <div style={{ width: '80px', height: '100px', background: '#F4F4F5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
                         <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                       </div>
                       <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)' }}>{item.name}</h4>
                            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)' }}>NPR {(item.price * item.quantity).toLocaleString()}</span>
                         </div>
                         <p style={{ fontSize: '0.8rem', color: '#71717A', marginBottom: '8px' }}>{item.subtitle || 'Hard Shell Suitcase'}</p>
                         <p style={{ fontSize: '0.8rem', color: '#71717A', marginBottom: '8px' }}>Size: {item.size} | Colour: {item.color}</p>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#52525B' }}>
                           Qty: {item.quantity} <span style={{ fontSize: '0.6rem' }}>▼</span>
                         </div>
                       </div>
                    </div>
                 ))}

                 {/* Totals */}
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', color: '#52525B' }}>
                   <span>Subtotal ({completedOrder.items.length} item{completedOrder.items.length > 1 ? 's' : ''})</span>
                   <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>NPR {completedOrder.subtotal.toLocaleString()}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', color: '#52525B' }}>
                   <span>Shipping</span>
                   <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>NPR {completedOrder.shippingFee.toLocaleString()}</span>
                 </div>
                 {completedOrder.discount > 0 && (
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '0.9rem', color: '#52525B' }}>
                     <span>Discount</span>
                     <span style={{ fontWeight: '600', color: '#10B981' }}>- NPR {completedOrder.discount.toLocaleString()}</span>
                   </div>
                 )}
                 
                 <div style={{ borderTop: '1px solid #E4E4E7', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)' }}>Total</div>
                      <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>(Including VAT)</div>
                    </div>
                    <span style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dark)' }}>NPR {completedOrder.total.toLocaleString()}</span>
                 </div>
              </div>

              {/* Estimated Delivery Box */}
              <div style={{ background: '#FAFAFA', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                 <Truck size={24} style={{ color: '#52525B' }} />
                 <div>
                   <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Estimated Delivery</div>
                   <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#52525B', marginBottom: '4px' }}>Oct 2 - Oct 6, 2025</div>
                   <div style={{ fontSize: '0.8rem', color: '#71717A' }}>Your order will be delivered to the address below.</div>
                 </div>
              </div>

              {/* Delivery Address */}
              <div style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative' }}>
                 <MapPin size={24} style={{ color: '#52525B' }} />
                 <div>
                   <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '8px' }}>Delivery Address</div>
                   <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#52525B', marginBottom: '4px' }}>{completedOrder.shippingInfo.fullName}</div>
                   <div style={{ fontSize: '0.85rem', color: '#71717A', lineHeight: '1.6' }}>
                     {completedOrder.shippingInfo.address}<br/>
                     {completedOrder.shippingInfo.city}, {completedOrder.shippingInfo.postalCode}<br/>
                     Nepal
                   </div>
                 </div>
                 <button style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--color-brand)', fontSize: '0.85rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
              </div>

           </div>

           {/* Right Column */}
           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Order Details */}
              <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)' }}>
                 <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '24px' }}>Order Details</h3>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                   <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                     <div style={{ width: '24px', display: 'flex', justifyContent: 'center' }}><Copy size={18} style={{ color: '#71717A' }}/></div>
                     <div style={{ flexGrow: 1, fontSize: '0.9rem', color: '#71717A' }}>Order Number</div>
                     <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>{completedOrder.id}</div>
                   </div>
                   <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                     <div style={{ width: '24px', display: 'flex', justifyContent: 'center' }}><CheckCircle2 size={18} style={{ color: '#71717A' }}/></div>
                     <div style={{ flexGrow: 1, fontSize: '0.9rem', color: '#71717A' }}>Order Date</div>
                     <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>{completedOrder.date}</div>
                   </div>
                   <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                     <div style={{ width: '24px', display: 'flex', justifyContent: 'center' }}><Wallet size={18} style={{ color: '#71717A' }}/></div>
                     <div style={{ flexGrow: 1, fontSize: '0.9rem', color: '#71717A' }}>Payment Method</div>
                     <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>{completedOrder.paymentMethod}</div>
                   </div>
                   <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                     <div style={{ width: '24px', display: 'flex', justifyContent: 'center' }}><ShieldCheck size={18} style={{ color: '#71717A' }}/></div>
                     <div style={{ flexGrow: 1, fontSize: '0.9rem', color: '#71717A' }}>Payment Status</div>
                     <div style={{ background: '#D1FAE5', color: '#10B981', fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={12}/> Paid</div>
                   </div>
                 </div>
              </div>

              {/* Need Help? */}
              <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)' }}>
                 <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <HelpCircle size={24} style={{ color: 'var(--color-dark)' }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Need Help?</h4>
                      <p style={{ fontSize: '0.85rem', color: '#71717A' }}>Our support team is here for you.</p>
                    </div>
                 </div>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginLeft: '40px' }}>
                   <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                     <Phone size={18} style={{ color: '#71717A', marginTop: '2px' }}/>
                     <div>
                       <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '2px' }}>+977 980-123-4567</div>
                       <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>(Mon - Sat, 10AM - 6PM)</div>
                     </div>
                   </div>
                   <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                     <Mail size={18} style={{ color: '#71717A' }}/>
                     <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>support@gurkauna.com</div>
                   </div>
                 </div>

                 <button style={{ marginLeft: '40px', marginTop: '24px', fontSize: '0.9rem', color: 'var(--color-brand)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                   Visit our Help Center <ArrowRight size={16} />
                 </button>
              </div>

           </div>
        </div>

        {/* What Happens Next? Timeline */}
        <div style={{ maxWidth: '1280px', margin: '40px auto 0', padding: '0 24px' }}>
          <div style={{ background: '#FAFAFA', border: '1px solid #E4E4E7', padding: '40px', borderRadius: 'var(--radius-md)' }}>
             <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>What Happens Next?</h3>
             <p style={{ fontSize: '0.9rem', color: '#71717A', marginBottom: '40px' }}>We'll keep you updated at every step.</p>

             <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                {/* Connecting Line */}
                <div style={{ position: 'absolute', top: '16px', left: '10%', right: '10%', height: '1px', background: '#D4D4D8', zIndex: 0 }}></div>
                
                {/* Step 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '25%' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-brand)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <Check size={16} strokeWidth={3} />
                   </div>
                   <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>Order Confirmed</div>
                   <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Sep 27, 2025 • 12:34 PM</div>
                </div>

                {/* Step 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '25%' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: '1px solid #D4D4D8', color: '#71717A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <Package size={14} />
                   </div>
                   <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#71717A', marginBottom: '4px' }}>Packed</div>
                   <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>In 1-2 days</div>
                </div>

                {/* Step 3 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '25%' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: '1px solid #D4D4D8', color: '#71717A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <Truck size={14} />
                   </div>
                   <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#71717A', marginBottom: '4px' }}>Shipped</div>
                   <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>In 2-3 days</div>
                </div>

                {/* Step 4 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '25%' }}>
                   <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: '1px solid #D4D4D8', color: '#71717A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                     <Home size={14} />
                   </div>
                   <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#71717A', marginBottom: '4px' }}>Delivered</div>
                   <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Oct 2 - Oct 6, 2025</div>
                </div>
             </div>
          </div>
        </div>

        {renderRecommended("Travel Better with Gurkauna")}
      </div>
    );
  }

  // --- CHECKOUT PAGE ---
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', paddingBottom: '80px', paddingTop: '40px' }}>
      
      {/* Header */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '40px' }}>
         <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Checkout</span>
         <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>Almost there!</h1>
         <p style={{ fontSize: '1.05rem', color: '#52525B' }}>Complete your details and get your Gurkauna luggage on the way.</p>
      </div>

      {/* Progress Bar */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-brand)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>1</div>
             <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-dark)' }}>Shipping</span>
           </div>
           <div style={{ height: '1px', width: '40px', background: '#D4D4D8' }}></div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #D4D4D8', color: '#71717A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>2</div>
             <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#71717A' }}>Payment</span>
           </div>
           <div style={{ height: '1px', width: '40px', background: '#D4D4D8' }}></div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #D4D4D8', color: '#71717A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>3</div>
             <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#71717A' }}>Review & Place Order</span>
           </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr', '@media (minWidth: 1024px)': { gridTemplateColumns: '1fr 440px' }, gap: '40px', alignItems: 'start' }}>
        
        {/* Left Column */}
        <form onSubmit={handleSubmitOrder} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* 1. Shipping Information */}
          <div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#111', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: '700', flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '4px' }}>Shipping Information</h3>
                <p style={{ fontSize: '0.85rem', color: '#71717A' }}>Enter your shipping details so we can deliver your order.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginLeft: '44px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Full Name <span style={{ color: 'var(--color-brand)' }}>*</span></label>
                <input type="text" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} style={{ padding: '12px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }} placeholder="John Doe" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Phone Number <span style={{ color: 'var(--color-brand)' }}>*</span></label>
                <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ padding: '12px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }} placeholder="98XXXXXXXX" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Address <span style={{ color: 'var(--color-brand)' }}>*</span></label>
                <input type="text" required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={{ padding: '12px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }} placeholder="House no., Street, Area" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>City <span style={{ color: 'var(--color-brand)' }}>*</span></label>
                <select value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{ padding: '12px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', background: 'white' }}>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Province <span style={{ color: 'var(--color-brand)' }}>*</span></label>
                <select value={formData.province} onChange={e => setFormData({...formData, province: e.target.value})} style={{ padding: '12px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', background: 'white' }}>
                  <option value="Bagmati">Bagmati</option>
                  <option value="Gandaki">Gandaki</option>
                  <option value="Lumbini">Lumbini</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-dark)' }}>Postal Code <span style={{ color: 'var(--color-brand)' }}>*</span></label>
                <input type="text" required value={formData.postalCode} onChange={e => setFormData({...formData, postalCode: e.target.value})} style={{ padding: '12px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }} placeholder="44600" />
              </div>
            </div>
            
            <div style={{ marginLeft: '44px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <input type="checkbox" id="saveInfo" checked={formData.saveInfo} onChange={e => setFormData({...formData, saveInfo: e.target.checked})} style={{ width: '16px', height: '16px', accentColor: 'var(--color-brand)' }} />
               <label htmlFor="saveInfo" style={{ fontSize: '0.85rem', color: '#52525B' }}>Save this information for next time</label>
            </div>
          </div>

          <div style={{ height: '1px', background: '#E4E4E7', marginLeft: '44px' }}></div>

          {/* 2. Delivery Option */}
          <div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#111', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: '700', flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '4px' }}>Delivery Option</h3>
                <p style={{ fontSize: '0.85rem', color: '#71717A' }}>Choose how you want your order delivered.</p>
              </div>
            </div>
            
            <div style={{ marginLeft: '44px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: deliveryOption === 'Standard' ? '1px solid var(--color-brand)' : '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', background: deliveryOption === 'Standard' ? '#FEF2F2' : 'white', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <input type="radio" name="delivery" checked={deliveryOption === 'Standard'} onChange={() => setDeliveryOption('Standard')} style={{ accentColor: 'var(--color-brand)' }} />
                     <Truck size={20} style={{ color: deliveryOption === 'Standard' ? 'var(--color-brand)' : '#71717A' }} />
                     <div>
                       <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>Standard Delivery</div>
                       <div style={{ fontSize: '0.75rem', color: '#71717A' }}>2-4 business days</div>
                     </div>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>NPR 150</div>
               </label>
               
               <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: deliveryOption === 'Express' ? '1px solid var(--color-brand)' : '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', background: deliveryOption === 'Express' ? '#FEF2F2' : 'white', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <input type="radio" name="delivery" checked={deliveryOption === 'Express'} onChange={() => setDeliveryOption('Express')} style={{ accentColor: 'var(--color-brand)' }} />
                     <Truck size={20} style={{ color: deliveryOption === 'Express' ? 'var(--color-brand)' : '#71717A' }} />
                     <div>
                       <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>Express Delivery</div>
                       <div style={{ fontSize: '0.75rem', color: '#71717A' }}>1-2 business days</div>
                     </div>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>NPR 300</div>
               </label>
            </div>
          </div>

          <div style={{ height: '1px', background: '#E4E4E7', marginLeft: '44px' }}></div>

          {/* 3. Payment Method */}
          <div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#111', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: '700', flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '4px' }}>Payment Method</h3>
                <p style={{ fontSize: '0.85rem', color: '#71717A' }}>Choose a payment method.</p>
              </div>
            </div>
            
            <div style={{ marginLeft: '44px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: paymentMethod === 'eSewa / Khalti' ? '1px solid var(--color-brand)' : '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', background: paymentMethod === 'eSewa / Khalti' ? '#FEF2F2' : 'white', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <input type="radio" name="payment" checked={paymentMethod === 'eSewa / Khalti'} onChange={() => setPaymentMethod('eSewa / Khalti')} style={{ accentColor: 'var(--color-brand)' }} />
                     <Wallet size={20} style={{ color: paymentMethod === 'eSewa / Khalti' ? 'var(--color-brand)' : '#71717A' }} />
                     <div>
                       <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>eSewa / Khalti</div>
                       <div style={{ fontSize: '0.75rem', color: '#71717A' }}>Pay securely via eSewa or Khalti</div>
                     </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                     <div style={{ background: '#60A5FA', color: 'white', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>eSewa</div>
                     <div style={{ background: '#5B21B6', color: 'white', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>Khalti</div>
                  </div>
               </label>
               
               <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: paymentMethod === 'Cash on Delivery' ? '1px solid var(--color-brand)' : '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', background: paymentMethod === 'Cash on Delivery' ? '#FEF2F2' : 'white', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <input type="radio" name="payment" checked={paymentMethod === 'Cash on Delivery'} onChange={() => setPaymentMethod('Cash on Delivery')} style={{ accentColor: 'var(--color-brand)' }} />
                     <Banknote size={20} style={{ color: paymentMethod === 'Cash on Delivery' ? 'var(--color-brand)' : '#71717A' }} />
                     <div>
                       <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>Cash on Delivery</div>
                       <div style={{ fontSize: '0.75rem', color: '#71717A' }}>Pay when your order arrives</div>
                     </div>
                  </div>
               </label>

               <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: paymentMethod === 'Bank Transfer' ? '1px solid var(--color-brand)' : '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', background: paymentMethod === 'Bank Transfer' ? '#FEF2F2' : 'white', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <input type="radio" name="payment" checked={paymentMethod === 'Bank Transfer'} onChange={() => setPaymentMethod('Bank Transfer')} style={{ accentColor: 'var(--color-brand)' }} />
                     <Building2 size={20} style={{ color: paymentMethod === 'Bank Transfer' ? 'var(--color-brand)' : '#71717A' }} />
                     <div>
                       <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>Bank Transfer</div>
                       <div style={{ fontSize: '0.75rem', color: '#71717A' }}>Direct bank transfer (manual verification)</div>
                     </div>
                  </div>
               </label>
            </div>
          </div>

          <div style={{ marginLeft: '44px', marginTop: '16px' }}>
            <button 
                type="submit"
                disabled={isSubmitting || cartItems.length === 0}
                style={{ width: '100%', background: 'var(--color-brand)', color: 'white', padding: '16px', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: 'none', cursor: 'pointer', opacity: (isSubmitting || cartItems.length === 0) ? 0.7 : 1 }}
              >
                {isSubmitting ? 'Processing...' : 'Continue to Payment'} <ArrowRight size={18} />
            </button>
            <button 
                type="button"
                onClick={() => setActivePage('cart')}
                style={{ background: 'none', border: 'none', color: '#71717A', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '24px', cursor: 'pointer' }}
              >
                <ArrowLeft size={16} /> Back to Cart
            </button>
          </div>

        </form>

        {/* Right Column (Order Summary) */}
        <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: '100px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
             <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '500', color: 'var(--color-dark)' }}>Order Summary</h3>
             <button onClick={() => setActivePage('cart')} style={{ color: 'var(--color-brand)', fontSize: '0.85rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}>Edit Cart</button>
          </div>

          {/* Cart Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '16px', borderBottom: index < cartItems.length - 1 ? '1px solid #E4E4E7' : 'none', paddingBottom: index < cartItems.length - 1 ? '20px' : '0' }}>
                 <div style={{ width: '60px', height: '76px', background: '#F4F4F5', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
                   <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                 </div>
                 <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-dark)' }}>{item.name}</h4>
                      <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-dark)' }}>NPR {(item.price * item.quantity).toLocaleString()}</div>
                   </div>
                   <p style={{ fontSize: '0.75rem', color: '#71717A', marginBottom: '4px' }}>{item.subtitle || 'Hard Shell Suitcase'}</p>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                     <div>
                       <p style={{ fontSize: '0.75rem', color: '#71717A', marginBottom: '4px' }}>Size: {item.size} | Colour: {item.color}</p>
                       <p style={{ fontSize: '0.75rem', color: '#52525B' }}>Qty: {item.quantity} ▼</p>
                     </div>
                     <div style={{ textAlign: 'right' }}>
                       <div style={{ fontSize: '0.7rem', color: '#A1A1AA', textDecoration: 'line-through', marginBottom: '2px' }}>NPR {Math.round(item.price * 1.3).toLocaleString()}</div>
                       <div style={{ fontSize: '0.6rem', fontWeight: '700', background: 'var(--color-brand)', color: 'white', padding: '2px 4px', borderRadius: '4px', display: 'inline-block' }}>23% OFF</div>
                     </div>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            <div style={{ flexGrow: 1, position: 'relative' }}>
              <Tag size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
              <input type="text" placeholder="Enter promo code" style={{ width: '100%', padding: '12px 12px 12px 36px', border: '1px solid #D4D4D8', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', background: '#FAFAFA' }} />
            </div>
            <button style={{ padding: '0 20px', background: '#E4E4E7', color: '#52525B', fontWeight: '600', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Apply</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', color: '#52525B' }}>
             <span>Subtotal ({totalItemsCount} items)</span>
             <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>NPR {subtotal.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.9rem', color: '#52525B' }}>
             <span>Shipping</span>
             <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>NPR {deliveryFee.toLocaleString()}</span>
          </div>
          {discount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '0.9rem', color: '#52525B' }}>
               <span>Discount</span>
               <span style={{ fontWeight: '600', color: '#10B981' }}>- NPR {discount.toLocaleString()}</span>
            </div>
          )}

          <div style={{ borderTop: '1px solid #E4E4E7', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
             <div>
               <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)' }}>Total</div>
               <div style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>(including VAT)</div>
             </div>
             <span style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dark)' }}>NPR {grandTotal.toLocaleString()}</span>
          </div>

          {/* Secure box */}
          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--radius-sm)', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '24px' }}>
            <ShieldCheck size={24} style={{ color: '#B91C1C', flexShrink: 0 }} />
            <div>
               <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#991B1B', marginBottom: '4px' }}>Secure & Safe Checkout</div>
               <div style={{ fontSize: '0.8rem', color: '#991B1B' }}>Your payment information is encrypted and 100% secure.</div>
            </div>
          </div>

          {/* Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

      {renderRecommended("You might also like")}
    </div>
  );
}
