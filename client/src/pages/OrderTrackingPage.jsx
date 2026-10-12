import React from 'react';
import { Package, Truck, CheckCircle2, ChevronRight, MapPin, ArrowLeft } from 'lucide-react';

export default function OrderTrackingPage({ setActivePage }) {
  const steps = [
    { label: 'Order Confirmed', date: 'Oct 02, 10:30 AM', completed: true },
    { label: 'Packed', date: 'Oct 02, 2:15 PM', completed: true },
    { label: 'Shipped', date: 'Oct 03, 9:00 AM', completed: true },
    { label: 'Out for Delivery', date: 'Expected Oct 04', completed: false },
    { label: 'Delivered', date: '', completed: false }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Back navigation */}
        <button 
          onClick={() => setActivePage('orders')}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#71717A', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: '24px' }}
        >
          <ArrowLeft size={16} /> Back to Orders
        </button>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>
          Track Order
        </h1>
        <div style={{ fontSize: '1rem', color: '#71717A', marginBottom: '32px' }}>Order #ORD-582910</div>

        <div style={{ display: 'grid', gap: '24px' }}>
          
          {/* Tracking Timeline */}
          <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
             <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Estimated Delivery: Oct 04, 2026</h3>
             <p style={{ fontSize: '0.9rem', color: '#71717A', marginBottom: '40px' }}>Your order is on the way via Aramex Courier.</p>

             <div className="tracking-timeline" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <style dangerouslySetInnerHTML={{__html: `
                  .timeline-line {
                    position: absolute;
                    left: 11px;
                    top: 10px;
                    bottom: 10px;
                    width: 2px;
                    background: #E4E4E7;
                    z-index: 1;
                  }
                  .timeline-line-active {
                    position: absolute;
                    left: 11px;
                    top: 10px;
                    height: 50%;
                    width: 2px;
                    background: #10B981;
                    z-index: 2;
                  }
                  @media (min-width: 600px) {
                    .tracking-timeline { flex-direction: row !important; align-items: flex-start; justify-content: space-between; text-align: center; gap: 0 !important; }
                    .timeline-line { left: 10px; right: 10px; top: 11px; width: auto; height: 2px; bottom: auto; }
                    .timeline-line-active { left: 10px; width: 50%; top: 11px; height: 2px; }
                  }
                `}} />
                
                <div className="timeline-line"></div>
                <div className="timeline-line-active"></div>

                {steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', zIndex: 3, position: 'relative', '@media (minWidth: 600px)': { flexDirection: 'column', alignItems: 'center', gap: '12px', flex: 1 } }} className="timeline-step">
                     <style dangerouslySetInnerHTML={{__html: `
                        @media (min-width: 600px) { .timeline-step:nth-child(n) { flex-direction: column !important; align-items: center !important; gap: 12px !important; flex: 1; } }
                     `}} />
                     <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step.completed ? '#10B981' : 'white', border: step.completed ? 'none' : '2px solid #E4E4E7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                        {step.completed && <CheckCircle2 size={16} />}
                     </div>
                     <div style={{ textAlign: 'left', '@media (minWidth: 600px)': { textAlign: 'center' } }} className="timeline-text">
                       <style dangerouslySetInnerHTML={{__html: `
                          @media (min-width: 600px) { .timeline-text:nth-child(n) { text-align: center !important; } }
                       `}} />
                        <div style={{ fontWeight: '600', color: step.completed ? 'var(--color-dark)' : '#A1A1AA', fontSize: '0.9rem', marginBottom: '2px' }}>{step.label}</div>
                        <div style={{ fontSize: '0.8rem', color: '#A1A1AA' }}>{step.date}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', '@media (minWidth: 600px)': { gridTemplateColumns: '1fr 1fr' }, gap: '24px' }} className="tracking-details-grid">
             <style dangerouslySetInnerHTML={{__html: `
                .tracking-details-grid { grid-template-columns: 1fr; }
                @media (min-width: 600px) { .tracking-details-grid { grid-template-columns: 1fr 1fr; } }
             `}} />
             
             {/* Product Summary */}
             <div style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Package size={18} /> Items in Order
                </h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                   <div style={{ width: '64px', height: '64px', background: '#F4F4F5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Package size={24} color="#A1A1AA" />
                   </div>
                   <div>
                     <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Gurkauna Classic</div>
                     <div style={{ fontSize: '0.85rem', color: '#71717A', margin: '4px 0' }}>Midnight Black | 24"</div>
                     <div style={{ fontWeight: '600', color: '#E11D48' }}>NPR 7,999 <span style={{ color: '#A1A1AA', fontWeight: '400', fontSize: '0.8rem' }}>x1</span></div>
                   </div>
                </div>
             </div>

             {/* Shipping Address */}
             <div style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={18} /> Delivery Address
                </h4>
                <div style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.6' }}>
                  <strong>Suraj Kumar Sah</strong><br/>
                  Gurkauna Pvt. Ltd.<br/>
                  Thamel, Kathmandu 44600<br/>
                  Nepal<br/>
                  +977 980-0000000
                </div>
             </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <p style={{ fontSize: '0.9rem', color: '#71717A', marginBottom: '16px' }}>Having issues with your delivery?</p>
            <button onClick={() => setActivePage('contact')} style={{ background: 'transparent', border: '1px solid #E4E4E7', color: 'var(--color-dark)', padding: '10px 24px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer' }}>
               Contact Support
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
