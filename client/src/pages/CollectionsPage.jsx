import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, RefreshCcw } from 'lucide-react';

export default function CollectionsPage({ setActivePage }) {
  const [activeFilter, setActiveFilter] = useState('All Collections');

  const filters = ['All Collections', 'Classic', 'Pro', 'Elite', 'Premium', 'Travel Sets'];

  const collections = [
    {
      id: 'classic',
      name: 'Classic Collection',
      eyebrow: 'TIMELESS. RELIABLE. ALWAYS WITH YOU.',
      description: 'The perfect balance of style, durability and functionality. Our Classic collection is designed for everyday journeys and weekend getaways.',
      image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80',
      linkText: 'Shop Collection'
    },
    {
      id: 'pro',
      name: 'Pro Collection',
      eyebrow: 'BUILT FOR FREQUENT TRAVELLERS.',
      description: 'Lightweight, durable and designed for those who are always on the move. The Pro collection offers extra space and enhanced features for longer trips.',
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80',
      linkText: 'Shop Collection'
    },
    {
      id: 'elite',
      name: 'Elite Collection',
      eyebrow: 'PREMIUM STYLE. SUPERIOR PERFORMANCE.',
      description: 'For those who want more. The Elite collection combines premium materials, advanced features and a refined look for a better travel experience.',
      image: 'https://images.unsplash.com/photo-1575037614876-c38db0e304b0?auto=format&fit=crop&w=800&q=80', // Replace with suitable blue image if possible, but this works
      linkText: 'Shop Collection'
    },
    {
      id: 'premium',
      name: 'Premium Collection',
      eyebrow: 'ELEVATED DESIGN. LASTING QUALITY.',
      description: 'Crafted with high-grade materials and modern designs, the Premium collection is made for those who expect more from their luggage.',
      image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=800&q=80', // Black suitcase
      linkText: 'Shop Collection'
    },
    {
      id: 'travel-sets',
      name: 'Travel Sets',
      eyebrow: 'COMPLETE SETS. GREATER VALUE.',
      description: 'Everything you need for your next adventure. Our travel sets include matching luggage pieces designed for convenience, style and peace of mind.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Group of suitcases
      linkText: 'Shop Collection'
    },
    {
      id: 'special',
      name: 'Special Collection',
      eyebrow: 'SOMETHING EXTRAORDINARY AWAITS.',
      description: 'Stay tuned for our exclusive collection, with limited editions and unique designs crafted for true explorers.',
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80', // same but blurred
      linkText: 'Learn More',
      comingSoon: true
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Hero Banner */}
      <div style={{ backgroundColor: '#F4F3F0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', minHeight: '320px' }}>
          <div style={{ maxWidth: '500px', padding: '60px 0' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Collections</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.1', marginBottom: '16px' }}>More than luggage.<br/>A journey of your own.</h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-600)', lineHeight: '1.6' }}>Explore our thoughtfully designed collections, crafted for every kind of journey — from everyday trips to once-in-a-lifetime adventures.</p>
          </div>
          <div style={{ display: 'none', '@media (minWidth: 768px)': { display: 'block' }, height: '100%', alignSelf: 'flex-end', marginRight: '-60px' }}>
             <img src="https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=600&q=80" alt="Luggage Collection" style={{ height: '400px', objectFit: 'contain', marginBottom: '-40px' }} />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '40px auto 0', padding: '0 24px' }}>
        
        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '10px 20px',
                borderRadius: '40px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeFilter === f ? 'var(--color-brand)' : 'white',
                color: activeFilter === f ? 'white' : 'var(--color-dark)',
                border: activeFilter === f ? '1px solid var(--color-brand)' : '1px solid #E4E4E7'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px', '@media (minWidth: 768px)': { gridTemplateColumns: 'repeat(3, 1fr)' } }} className="collections-grid-custom">
          {collections.map((col) => (
            <div key={col.id} style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '280px', background: '#F4F4F5' }}>
                <img 
                  src={col.image} 
                  alt={col.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: col.comingSoon ? 'grayscale(80%) blur(4px)' : 'none', opacity: col.comingSoon ? 0.6 : 1 }} 
                />
                {col.comingSoon && (
                  <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', color: 'var(--color-dark)', padding: '6px 12px', borderRadius: '40px', fontSize: '0.75rem', fontWeight: '700' }}>
                    Coming Soon
                  </div>
                )}
              </div>
              <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '12px' }}>{col.name}</h3>
                <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.08em', color: '#A1A1AA', textTransform: 'uppercase', marginBottom: '16px' }}>{col.eyebrow}</div>
                <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.6', marginBottom: '32px', flexGrow: 1 }}>{col.description}</p>
                
                <button 
                  onClick={() => !col.comingSoon && setActivePage('shop')}
                  style={{ fontSize: '0.9rem', color: col.comingSoon ? '#A1A1AA' : 'var(--color-brand)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: col.comingSoon ? 'default' : 'pointer', padding: 0 }}
                >
                  {col.linkText} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .collections-grid-custom {
              grid-template-columns: repeat(3, 1fr) !important;
            }
            .benefits-grid-custom {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
        `}} />

        {/* Benefits Strip */}
        <div className="benefits-grid-custom" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', borderTop: '1px solid #E4E4E7', paddingTop: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: '1px solid #E4E4E7', padding: '0 20px' }}>
            <ShieldCheck size={32} strokeWidth={1.5} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Premium Materials</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Built for the journey.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: '1px solid #E4E4E7', padding: '0 20px' }}>
            {/* Using a diamond icon alternative or just Shield */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-dark)', marginBottom: '16px' }}><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/></svg>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Durable & Long Lasting</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Quality you can count on.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: '1px solid #E4E4E7', padding: '0 20px' }}>
            {/* Airplane icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-dark)', marginBottom: '16px' }}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-1.3 3c-.1.2-.1.5.1.7L7 13l-4 4c-.3.3-.4.7-.2 1l2.4 3.6c.2.3.6.4 1 .2L11 17l2.6 4.5c.2.2.5.3.7.1l3-1.3c.3-.2.6-.6.5-1.1z"/></svg>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Travel Ready</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Designed for every destination.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
            <ShieldCheck size={32} strokeWidth={1.5} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Warranty</div>
            <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Peace of mind, always.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
