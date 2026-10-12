import React from 'react';
import { Truck, RefreshCcw, CreditCard, ShieldCheck } from 'lucide-react';

export default function ShippingReturnsPage() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '16px' }}>
             Shipping & Returns
           </h1>
           <p style={{ fontSize: '1rem', color: '#71717A' }}>Everything you need to know about deliveries and refunds.</p>
        </div>

        <div style={{ display: 'grid', gap: '40px' }}>
           
           {/* Shipping Section */}
           <section style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                 <div style={{ width: '40px', height: '40px', background: '#FEF2F2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48' }}>
                    <Truck size={20} />
                 </div>
                 <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)' }}>Shipping Policy</h2>
              </div>
              
              <div style={{ fontSize: '0.95rem', color: '#52525B', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 <p>At Gurkauna, we strive to deliver your luggage as quickly and safely as possible. We offer reliable delivery services across Nepal.</p>
                 
                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '8px' }}>Delivery Areas & Timelines</h3>
                 <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <li><strong>Kathmandu Valley:</strong> Same-day or next-day delivery.</li>
                   <li><strong>Major Cities (Pokhara, Chitwan, Biratnagar, etc.):</strong> 2-3 business days.</li>
                   <li><strong>Remote Areas:</strong> 3-5 business days.</li>
                 </ul>

                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '8px' }}>Shipping Charges</h3>
                 <p>We provide <strong>FREE shipping on all orders over NPR 20,000</strong> anywhere in Nepal. For orders below this amount, a standard flat rate of NPR 250 applies within the Kathmandu Valley, and NPR 500 outside the valley.</p>
              </div>
           </section>

           {/* Returns Section */}
           <section style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                 <div style={{ width: '40px', height: '40px', background: '#FEF2F2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48' }}>
                    <RefreshCcw size={20} />
                 </div>
                 <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)' }}>Return & Refund Policy</h2>
              </div>
              
              <div style={{ fontSize: '0.95rem', color: '#52525B', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 <p>If you're not completely satisfied with your purchase, we're here to help. We offer a simple 7-day return policy.</p>
                 
                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '8px' }}>Eligibility for Returns</h3>
                 <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <li>Items must be returned within 7 days of delivery.</li>
                   <li>The luggage must be unused, in the same condition you received it.</li>
                   <li>All original tags, packaging, and accessories must be intact.</li>
                 </ul>

                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '8px' }}>Return Process</h3>
                 <p>To initiate a return, contact our support team at <strong>support@gurkauna.com</strong> or request a return from your Account Dashboard. We will arrange a pickup. A nominal return shipping fee may be deducted from your refund.</p>

                 <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '8px' }}>Refunds</h3>
                 <p>Once we receive and inspect your returned item, we will notify you. Approved refunds will be processed to your original method of payment (or via bank transfer for COD orders) within 5-7 business days.</p>
              </div>
           </section>

        </div>
      </div>
    </div>
  );
}
