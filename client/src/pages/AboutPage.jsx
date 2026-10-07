import React from 'react';
import { ArrowRight, ShieldCheck, Gem, Plane, Heart, Lock, Settings, CircleDashed } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  
  const values = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Quality First',
      desc: 'Premium materials, crafted to last.'
    },
    {
      icon: <Gem size={24} />,
      title: 'Thoughtful Design',
      desc: 'Modern, minimal and functional.'
    },
    {
      icon: <Plane size={24} />,
      title: 'Travel Ready',
      desc: 'For every destination, every journey.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Customer Focus',
      desc: 'Your journey matters to us.'
    }
  ];

  const craftFeatures = [
    {
      icon: <ShieldCheck size={20} />,
      title: 'Premium Materials',
      desc: 'ABS & Polycarbonate'
    },
    {
      icon: <CircleDashed size={20} />,
      title: '360° Spinner Wheels',
      desc: 'Smooth & silent'
    },
    {
      icon: <Lock size={20} />,
      title: 'TSA-Ready Lock',
      desc: 'Travel with confidence'
    },
    {
      icon: <ShieldCheck size={20} />, // Hexagon check alternative
      title: 'Lifetime Support',
      desc: "We're here for you"
    }
  ];

  return (
    <div style={{ paddingBottom: 0 }}>
      
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', backgroundColor: '#E5E5E5' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
           <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80" 
              alt="Mountain View" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
           />
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
           <div style={{ maxWidth: '500px', padding: '60px 0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Story</span>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.1', marginBottom: '16px' }}>Born from a simple<br/>belief — travel better.</h1>
              <p style={{ fontSize: '1.05rem', color: '#52525B', lineHeight: '1.6' }}>Gurkauna started with a dream to create luggage that's not just functional, but meaningful. A brand built for explorers, dreamers and everyday travelers who believe that every journey matters.</p>
           </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .about-beginning-grid, .about-craft-grid, .about-journey-grid {
          grid-template-columns: 1fr;
        }
        .about-values-grid {
          grid-template-columns: 1fr;
        }
        .about-values-features {
          grid-template-columns: 1fr 1fr;
        }
        .about-craft-content-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .about-beginning-grid {
            grid-template-columns: 1fr 1fr;
          }
          .about-craft-grid {
            grid-template-columns: 1fr 1fr;
          }
          .about-values-grid {
            grid-template-columns: 350px 1fr;
          }
          .about-values-features {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-journey-grid {
            grid-template-columns: 1fr 1.2fr;
          }
          .about-craft-content-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
      `}} />

      {/* 2. Our Beginning */}
      <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 24px' }}>
         <div className="about-beginning-grid" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
            <div>
               <img 
                  src="https://images.unsplash.com/photo-1542868735-c343b67be361?auto=format&fit=crop&w=800&q=80" 
                  alt="Sketchbook with suitcase" 
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '400px' }} 
               />
            </div>
            <div style={{ paddingRight: '40px' }}>
               <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Beginning</span>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '24px' }}>A passion turned<br/>into a brand.</h2>
               <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6', marginBottom: '16px' }}>It all started with a simple idea — to bring high-quality, durable and stylish luggage to Nepal. We noticed that most travel bags available were either too expensive, low quality, or didn't match the needs of modern travelers.</p>
               <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6' }}>So, we set out to change that. Gurkauna was born from a vision to offer premium luggage with thoughtful design, reliable quality and a touch of Nepal in every piece.</p>
            </div>
         </div>
      </section>

      {/* 3. Our Values */}
      <section style={{ background: '#FAFAFA', padding: '80px 0' }}>
         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="about-values-grid" style={{ display: 'grid', gap: '60px' }}>
               <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Values</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '16px' }}>More than just luggage.<br/>It's a promise.</h2>
                  <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6' }}>At Gurkauna, we believe in creating products that make your journeys easier, safer and more enjoyable.</p>
               </div>
               <div className="about-values-features" style={{ display: 'grid', gap: '24px', alignItems: 'start' }}>
                   {values.map((feature, idx) => (
                       <div key={idx} style={{ padding: '0 10px', borderLeft: idx !== 0 ? '1px solid #E4E4E7' : 'none', paddingLeft: idx !== 0 ? '24px' : '0' }}>
                          <div style={{ width: '48px', height: '48px', marginBottom: '24px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', position: 'relative' }}>
                             {/* Hexagon shape */}
                             <svg width="48" height="48" viewBox="0 0 24 24" fill="#FEE2E2" stroke="#FECACA" strokeWidth="1" style={{ position: 'absolute', top: 0, left: 0 }}>
                                <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
                             </svg>
                             <div style={{ position: 'relative', zIndex: 1 }}>
                               {feature.icon}
                             </div>
                          </div>
                          <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '8px' }}>{feature.title}</div>
                          <div style={{ fontSize: '0.85rem', color: '#71717A', lineHeight: '1.5' }}>{feature.desc}</div>
                       </div>
                   ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. Our Craft (NEW SECTION) */}
      <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 24px' }}>
         <div className="about-craft-grid" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
            <div>
               <img 
                  src="https://images.unsplash.com/photo-1574345389650-6ce8bd05e60b?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Craft - Fixing lock" 
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '400px' }} 
               />
            </div>
            <div className="about-craft-content-grid" style={{ display: 'grid', gap: '32px', alignItems: 'center' }}>
               <div>
                 <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Craft</span>
                 <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '24px' }}>Built with care.<br/>Made to last.</h2>
                 <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6' }}>Every Gurkauna product goes through a careful process — from material selection to final checks. We use premium ABS and polycarbonate materials, strong zippers, smooth wheels and tested handles to ensure durability, security and a premium feel.</p>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                 {craftFeatures.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                       <div style={{ width: '40px', height: '40px', background: '#F4F4F5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3F3F46', flexShrink: 0 }}>
                         {item.icon}
                       </div>
                       <div>
                         <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '2px' }}>{item.title}</div>
                         <div style={{ fontSize: '0.8rem', color: '#71717A' }}>{item.desc}</div>
                       </div>
                    </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. Inspired By Nepal */}
      <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 24px' }}>
         <div className="about-journey-grid" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
            <div style={{ paddingRight: '40px' }}>
               <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Inspired By Nepal</span>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '24px' }}>Rooted in Nepal.<br/>Made for the world.</h2>
               <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6', marginBottom: '32px' }}>Nepal is more than just where we're from — it's our inspiration. The mountains, the people, the culture, and the spirit of adventure shape everything we do. Gurkauna is our way of sharing a piece of Nepal with the world.</p>
               <button 
                  onClick={() => setActivePage('about')} 
                  style={{ color: '#E11D48', fontWeight: '700', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
               >
                  Our Journey <ArrowRight size={16} />
               </button>
            </div>
            <div>
               <img 
                  src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&w=1000&q=80" 
                  alt="Inspired by Nepal" 
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '360px' }} 
               />
            </div>
         </div>
      </section>

      {/* 6. CTA Footer */}
      <section style={{ position: 'relative', minHeight: '300px', display: 'flex', alignItems: 'center', backgroundColor: '#111827', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
           <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" 
              alt="Mountain Night" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} 
           />
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(17,24,39,0.5), rgba(17,24,39,0.9))' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', width: '100%', padding: '60px 24px' }}>
           <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Ready For Your Next Journey?</span>
           <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: '400', color: 'white', lineHeight: '1.2', marginBottom: '32px' }}>Pack your world with Gurkauna.</h2>
           
           <button 
              onClick={() => setActivePage('collections')} 
              style={{ background: '#E11D48', color: 'white', padding: '14px 32px', borderRadius: '40px', fontWeight: '600', fontSize: '1rem', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
           >
              Explore Collections <ArrowRight size={18} />
           </button>
        </div>
      </section>

    </div>
  );
}
