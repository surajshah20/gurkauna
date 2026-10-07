import React from 'react';
import { ArrowRight, ShieldCheck, Gem, Plane, Mountain, Users, Leaf, Shield } from 'lucide-react';

export default function WhyGurkaunaPage({ setActivePage }) {
  
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Premium Materials',
      desc: 'We use high-grade, durable materials like polycarbonate and ABS to ensure your luggage lasts for years.'
    },
    {
      icon: <Gem size={24} />,
      title: 'Durable & Long Lasting',
      desc: 'Built to handle rough roads, heavy loads and countless adventures, from city streets to mountain trails.'
    },
    {
      icon: <Plane size={24} />,
      title: 'Travel Ready',
      desc: 'Lightweight, spacious and well-organized — designed for modern travelers and every kind of journey.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Warranty',
      desc: 'We stand by our quality with a reliable warranty, because your trust matters.'
    }
  ];

  return (
    <div style={{ paddingBottom: 0, backgroundColor: '#FAFAFA' }}>
      
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', backgroundColor: '#E5E5E5' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
           <img 
              src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80" 
              alt="Suitcase with Mountains" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
           />
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,0) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
           <div style={{ maxWidth: '500px', padding: '60px 0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Why Gurkauna</span>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.1', marginBottom: '16px' }}>Thoughtful details.<br/>Built for real journeys.</h1>
              <p style={{ fontSize: '1.05rem', color: '#52525B', lineHeight: '1.6' }}>At Gurkauna, we don't just make luggage — we build travel companions designed for people who go further. Here's what makes us different.</p>
           </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .why-features-grid {
          grid-template-columns: 1fr;
        }
        .why-quality-grid, .why-rooted-grid {
          grid-template-columns: 1fr;
        }
        .why-stats-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 768px) {
          .why-features-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .why-features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .why-quality-grid {
            grid-template-columns: 1.2fr 1fr;
          }
          .why-rooted-grid {
            grid-template-columns: 1fr 1.2fr;
          }
          .why-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}} />

      {/* 2. Feature Strip */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
         <div className="why-features-grid" style={{ display: 'grid', gap: '32px' }}>
             {features.map((feature, idx) => (
                 <div key={idx} style={{ padding: '0 10px' }}>
                    <div style={{ width: '48px', height: '48px', marginBottom: '24px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', position: 'relative' }}>
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="#FEE2E2" stroke="#FECACA" strokeWidth="1" style={{ position: 'absolute', top: 0, left: 0 }}>
                          <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
                       </svg>
                       <div style={{ position: 'relative', zIndex: 1 }}>
                         {feature.icon}
                       </div>
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '12px' }}>{feature.title}</div>
                    <div style={{ fontSize: '0.9rem', color: '#71717A', lineHeight: '1.6' }}>{feature.desc}</div>
                 </div>
             ))}
         </div>
      </section>

      {/* 3. Quality You Can See */}
      <section style={{ maxWidth: '1280px', margin: '60px auto', padding: '0 24px' }}>
         <div className="why-quality-grid" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
            <div>
               <img 
                  src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80" 
                  alt="Suitcase details" 
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '400px' }} 
               />
            </div>
            <div style={{ paddingRight: '40px' }}>
               <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Quality You Can See</span>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '24px' }}>Premium inside<br/>and out.</h2>
               <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6', marginBottom: '32px' }}>From the scratch-resistant shell to the smooth 360° wheels, every detail is crafted with care. We focus on quality, so you can focus on your journey.</p>
               
               <button 
                  onClick={() => setActivePage('shop')} 
                  style={{ color: '#E11D48', fontWeight: '700', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
               >
                  Explore Features <ArrowRight size={16} />
               </button>
            </div>
         </div>
      </section>

      {/* 4. Proudly rooted in Nepal */}
      <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 24px' }}>
         <div className="why-rooted-grid" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
            <div style={{ paddingRight: '40px' }}>
               <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Inspired By Nepal</span>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '24px' }}>Proudly rooted<br/>in Nepal.</h2>
               <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6', marginBottom: '32px' }}>We're a Nepali brand, inspired by our mountains, our people and our endless sense of adventure. Gurkauna is more than luggage — it's a reflection of where we come from and where we're going.</p>
               <button 
                  onClick={() => setActivePage('about')} 
                  style={{ color: '#E11D48', fontWeight: '700', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
               >
                  Our Story <ArrowRight size={16} />
               </button>
            </div>
            <div>
               <img 
                  src="https://images.unsplash.com/photo-1542314831-c6a4d1421c48?auto=format&fit=crop&w=1000&q=80" 
                  alt="Rooted in Nepal" 
                  style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '360px' }} 
               />
            </div>
         </div>
      </section>

      {/* 5. Stats Strip */}
      <section style={{ background: '#F4F3F0', padding: '60px 0', marginTop: '80px' }}>
         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="why-stats-grid" style={{ display: 'grid', gap: '40px' }}>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: 'none', '@media (minWidth: 1024px)': { borderRight: '1px solid #E4E4E7' } }}>
                 <Mountain size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} strokeWidth={1.5} />
                 <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>100%</div>
                 <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Nepali Brand</div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: 'none', '@media (minWidth: 1024px)': { borderRight: '1px solid #E4E4E7' } }}>
                 <Users size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} strokeWidth={1.5} />
                 <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>10K+</div>
                 <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Happy Travelers</div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: 'none', '@media (minWidth: 1024px)': { borderRight: '1px solid #E4E4E7' } }}>
                 <ShieldCheck size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} strokeWidth={1.5} />
                 <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>2+ Years</div>
                 <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Warranty Support</div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                 <Leaf size={32} style={{ color: 'var(--color-dark)', marginBottom: '16px' }} strokeWidth={1.5} />
                 <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Less Impact</div>
                 <div style={{ fontSize: '0.85rem', color: '#71717A' }}>More Sustainable</div>
               </div>
            </div>
         </div>
         <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 1024px) {
               .why-stats-grid > div:not(:last-child) {
                  border-right: 1px solid #E4E4E7 !important;
               }
            }
         `}} />
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
           <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Built For What Matters</span>
           <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: '400', color: 'white', lineHeight: '1.2', marginBottom: '32px' }}>More than luggage.<br/>A companion for life.</h2>
           
           <button 
              onClick={() => setActivePage('shop')} 
              style={{ background: '#E11D48', color: 'white', padding: '14px 32px', borderRadius: '40px', fontWeight: '600', fontSize: '1rem', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
           >
              Shop Now <ArrowRight size={18} />
           </button>
        </div>
      </section>

    </div>
  );
}
