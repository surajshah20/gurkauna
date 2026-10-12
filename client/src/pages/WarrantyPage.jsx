import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function WarrantyPage({ setActivePage }) {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <div style={{ width: '64px', height: '64px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', margin: '0 auto 24px' }}>
              <ShieldCheck size={32} />
           </div>
           <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '16px' }}>
             The Gurkauna Lifetime Promise
           </h1>
           <p style={{ fontSize: '1rem', color: '#71717A', maxWidth: '600px', margin: '0 auto' }}>
             We build our luggage to withstand the toughest journeys. Our lifetime warranty ensures your Gurkauna travels with you, for life.
           </p>
        </div>

        {/* What's Covered / Not Covered */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', '@media (minWidth: 768px)': { gridTemplateColumns: '1fr 1fr' }, gap: '24px', marginBottom: '40px' }} className="warranty-grid">
           <style dangerouslySetInnerHTML={{__html: `
              .warranty-grid { grid-template-columns: 1fr; }
              @media (min-width: 768px) { .warranty-grid { grid-template-columns: 1fr 1fr; } }
           `}} />
           
           <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <CheckCircle2 size={20} color="#10B981" /> What's Covered
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525B', fontSize: '0.95rem', lineHeight: '1.8' }}>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#10B981' }}>•</span> Broken zippers or zipper pulls</li>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#10B981' }}>•</span> Telescopic handle structural failure</li>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#10B981' }}>•</span> Broken spinner wheels</li>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#10B981' }}>•</span> TSA lock mechanism failure</li>
              </ul>
           </div>

           <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <XCircle size={20} color="#E11D48" /> What's NOT Covered
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525B', fontSize: '0.95rem', lineHeight: '1.8' }}>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#E11D48' }}>•</span> Cosmetic wear and tear (scratches, dents)</li>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#E11D48' }}>•</span> Damage caused by airlines or transit mishandling</li>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#E11D48' }}>•</span> Extreme abuse or neglect</li>
                 <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><span style={{ color: '#E11D48' }}>•</span> Unauthorized repairs or modifications</li>
              </ul>
           </div>
        </div>

        {/* How to claim */}
        <div style={{ background: '#F4F4F5', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
           <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '16px' }}>How to Claim Your Warranty</h2>
           <p style={{ fontSize: '0.95rem', color: '#52525B', lineHeight: '1.6', marginBottom: '24px' }}>
              If your Gurkauna luggage experiences a covered defect, we will repair it or replace it free of charge. Please have the following ready before contacting us:
           </p>
           <ol style={{ paddingLeft: '20px', color: '#52525B', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '32px' }}>
             <li>Your original order number or proof of purchase.</li>
             <li>Clear photos or videos demonstrating the defect.</li>
             <li>A brief description of how the issue occurred.</li>
           </ol>
           
           <button 
             onClick={() => setActivePage('contact')}
             style={{ background: 'white', color: 'var(--color-dark)', padding: '14px 28px', borderRadius: '40px', fontWeight: '600', border: '1px solid #D4D4D8', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
           >
              Submit a Claim <ArrowRight size={18} />
           </button>
        </div>

      </div>
    </div>
  );
}
