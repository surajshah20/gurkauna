import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export default function FAQPage({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('Shipping');
  const [openQ, setOpenQ] = useState(null);

  const categories = ['Shipping', 'Returns', 'Warranty', 'Products', 'Orders', 'Payment'];

  const faqs = {
    Shipping: [
      { q: "How long does delivery take in Nepal?", a: "For addresses within the Kathmandu Valley, we offer same-day or next-day delivery. Outside the valley, deliveries typically take 2-4 business days via our courier partners." },
      { q: "Do you offer international shipping?", a: "Currently, we only ship within Nepal. We are working on expanding our reach globally soon!" },
      { q: "How much is shipping?", a: "We offer complimentary (FREE) shipping on all orders over NPR 20,000 anywhere in Nepal. For orders under that amount, standard delivery rates apply based on location." }
    ],
    Returns: [
      { q: "What is your return policy?", a: "We offer a 7-day no-questions-asked return policy. The luggage must be unused, with all tags attached, and in its original packaging." },
      { q: "How do I initiate a return?", a: "Simply log into your account, go to 'My Orders', select the order, and click 'Request Return'. You can also contact our support team directly." }
    ],
    Warranty: [
      { q: "What does the warranty cover?", a: "Our lifetime warranty covers manufacturing defects, such as broken zippers, handles, or wheels under normal use. It does not cover cosmetic damage (scratches, dents) or damage caused by airline mishandling." }
    ],
    Products: [
      { q: "How do I set the TSA lock?", a: "The default code is 0-0-0. To set a new code, press the reset button with a pen, dial your new 3-digit code, and push the release button to save it." }
    ],
    Orders: [
      { q: "Can I change my order after placing it?", a: "If your order hasn't been shipped yet, you can modify it by contacting our support team immediately. Once packed or shipped, we cannot make changes." }
    ],
    Payment: [
      { q: "What payment methods do you accept?", a: "We accept Fonepay, eSewa, Khalti, direct Bank Transfer, and Cash on Delivery (inside Kathmandu Valley only)." }
    ]
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
           <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '16px' }}>
             Frequently Asked Questions
           </h1>
           <p style={{ fontSize: '1rem', color: '#71717A', marginBottom: '32px' }}>Find answers to common questions about our products, shipping, and more.</p>

           <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
             <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
             <input type="text" placeholder="Search for answers..." style={{ width: '100%', padding: '16px 20px 16px 48px', borderRadius: '40px', border: '1px solid #E4E4E7', fontSize: '1rem', boxShadow: 'var(--shadow-sm)' }} />
           </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px', scrollbarWidth: 'none' }} className="hide-scrollbar">
          {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               style={{
                 padding: '10px 20px',
                 borderRadius: '40px',
                 background: activeCategory === cat ? 'var(--color-dark)' : 'white',
                 color: activeCategory === cat ? 'white' : 'var(--color-dark)',
                 border: activeCategory === cat ? '1px solid var(--color-dark)' : '1px solid #E4E4E7',
                 fontWeight: '600',
                 fontSize: '0.95rem',
                 cursor: 'pointer',
                 whiteSpace: 'nowrap'
               }}
             >
               {cat}
             </button>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', overflow: 'hidden' }}>
           {faqs[activeCategory]?.map((faq, idx) => (
             <div key={idx} style={{ borderBottom: idx === faqs[activeCategory].length - 1 ? 'none' : '1px solid #E4E4E7' }}>
               <button 
                 onClick={() => setOpenQ(openQ === idx ? null : idx)}
                 style={{ width: '100%', padding: '24px', background: 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' }}
               >
                 <span style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-dark)' }}>{faq.q}</span>
                 {openQ === idx ? <ChevronUp size={20} color="#71717A" /> : <ChevronDown size={20} color="#71717A" />}
               </button>
               {openQ === idx && (
                 <div style={{ padding: '0 24px 24px 24px', fontSize: '0.95rem', color: '#52525B', lineHeight: '1.6' }}>
                   {faq.a}
                 </div>
               )}
             </div>
           ))}
        </div>

        <div style={{ marginTop: '60px', background: '#F4F4F5', padding: '40px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
           <div style={{ width: '56px', height: '56px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#E11D48' }}>
              <MessageCircle size={28} />
           </div>
           <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>Still have questions?</h3>
           <p style={{ fontSize: '0.95rem', color: '#71717A', marginBottom: '24px' }}>Our support team is always here to help you out.</p>
           <button onClick={() => setActivePage('contact')} style={{ background: '#E11D48', color: 'white', padding: '12px 28px', borderRadius: '40px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
              Contact Support
           </button>
        </div>

      </div>
    </div>
  );
}
