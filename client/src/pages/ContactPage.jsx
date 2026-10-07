import React, { useState } from 'react';
import { Mail, Phone, MapPin, LayoutGrid, Clock, Send, Globe, Share2, Hash, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate delay
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ paddingBottom: 0, backgroundColor: '#FAFAFA' }}>
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', backgroundColor: '#E5E5E5' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
           <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d1421c48?auto=format&fit=crop&w=1600&q=80" 
              alt="Suitcase on Mountain" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
           />
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
           <div style={{ maxWidth: '500px', padding: '60px 0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Get In Touch</span>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.1', marginBottom: '16px' }}>We'd love to<br/>hear from you.</h1>
              <p style={{ fontSize: '1.05rem', color: '#52525B', lineHeight: '1.6' }}>Have a question, need support, or just want to say hello? Our team is here to help. Reach out to us — we usually respond within 24 hours.</p>
           </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .office-grid {
          grid-template-columns: 1fr;
        }
        .quick-help-grid {
           grid-template-columns: 1fr;
        }
        .qh-left {
           border-right: none;
           padding-right: 0;
           margin-bottom: 24px;
           padding-bottom: 24px;
           border-bottom: 1px solid #D4D4D8;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.3fr;
          }
          .office-grid {
            grid-template-columns: 1.5fr 1fr;
          }
          .quick-help-grid {
             grid-template-columns: 2fr 1fr;
          }
          .qh-left {
             border-right: 1px solid #D4D4D8;
             border-bottom: none;
             padding-right: 40px;
             margin-bottom: 0;
             padding-bottom: 0;
          }
        }
      `}} />

      {/* 2. Contact Info & Form */}
      <section style={{ maxWidth: '1280px', margin: '60px auto', padding: '0 24px' }}>
         <div className="contact-grid" style={{ display: 'grid', gap: '60px' }}>
            
            {/* Left: Contact Info */}
            <div style={{ paddingRight: '20px' }}>
               <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717A', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Contact Information</span>
               <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '400', color: 'var(--color-dark)', lineHeight: '1.2', marginBottom: '24px' }}>Multiple ways<br/>to reach us.</h2>
               <p style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.6', marginBottom: '40px' }}>Choose what works best for you. We're always happy to help with your queries.</p>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                 <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                   <div style={{ width: '48px', height: '48px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', flexShrink: 0 }}>
                      <Phone size={20} />
                   </div>
                   <div>
                     <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Phone</div>
                     <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>+977 981-234-5678</div>
                     <div style={{ fontSize: '0.75rem', color: '#71717A' }}>(Mon - Sat, 10AM - 6PM)</div>
                   </div>
                 </div>

                 <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                   <div style={{ width: '48px', height: '48px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', flexShrink: 0 }}>
                      <Mail size={20} />
                   </div>
                   <div>
                     <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Email</div>
                     <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>support@gurkauna.com</div>
                     <div style={{ fontSize: '0.75rem', color: '#71717A' }}>We'll reply within 24 hours.</div>
                   </div>
                 </div>

                 <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                   <div style={{ width: '48px', height: '48px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', flexShrink: 0 }}>
                      <MapPin size={20} />
                   </div>
                   <div>
                     <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Office Address</div>
                     <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '2px' }}>Gurkauna Pvt. Ltd.</div>
                     <div style={{ fontSize: '0.85rem', color: '#52525B', lineHeight: '1.6' }}>Thamel, Kathmandu 44600<br/>Nepal</div>
                   </div>
                 </div>

                 <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                   <div style={{ width: '48px', height: '48px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48', flexShrink: 0 }}>
                      <LayoutGrid size={20} />
                   </div>
                   <div>
                     <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '8px' }}>Follow Us</div>
                     <div style={{ display: 'flex', gap: '16px', color: '#111' }}>
                       <Globe size={18} style={{ cursor: 'pointer' }}/>
                       <Share2 size={18} style={{ cursor: 'pointer' }}/>
                       <Hash size={18} style={{ cursor: 'pointer' }}/>
                       <MessageCircle size={18} style={{ cursor: 'pointer' }}/>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Form */}
            <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', boxShadow: 'var(--shadow-sm)' }}>
               <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>Send us a message</h3>
               <p style={{ fontSize: '0.9rem', color: '#71717A', marginBottom: '32px' }}>Fill out the form below and we'll get back to you as soon as possible.</p>

               {submitted ? (
                 <div style={{ background: '#ECFDF5', padding: '32px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                   <div style={{ width: '48px', height: '48px', background: '#10B981', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                     <Send size={24} />
                   </div>
                   <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#065F46', marginBottom: '8px' }}>Message Sent!</h4>
                   <p style={{ fontSize: '0.95rem', color: '#047857' }}>Thanks for reaching out. We'll be in touch shortly.</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', '@media (minWidth: 768px)': { gridTemplateColumns: '1fr 1fr' }, gap: '20px' }}>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Full Name <span style={{ color: '#E11D48' }}>*</span></label>
                          <input type="text" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} style={{ padding: '12px 16px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }} placeholder="Your name" />
                       </div>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Email Address <span style={{ color: '#E11D48' }}>*</span></label>
                          <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '12px 16px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }} placeholder="you@example.com" />
                       </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                       <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Subject <span style={{ color: '#E11D48' }}>*</span></label>
                       <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} style={{ padding: '12px 16px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: formData.subject ? 'inherit' : '#A1A1AA' }} required>
                          <option value="" disabled>Select a subject</option>
                          <option value="order">Order Inquiry</option>
                          <option value="warranty">Warranty Claim</option>
                          <option value="general">General Question</option>
                       </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                       <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Message <span style={{ color: '#E11D48' }}>*</span></label>
                       <textarea required rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ padding: '12px 16px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', resize: 'vertical' }} placeholder="Type your message here..."></textarea>
                    </div>

                    <button type="submit" disabled={loading} style={{ background: '#E11D48', color: 'white', padding: '16px', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: 'none', cursor: 'pointer', marginTop: '12px' }}>
                       <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
                    </button>
                 </form>
               )}
            </div>
         </div>
      </section>

      {/* 3. Visit Our Office */}
      <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 24px' }}>
         <div className="office-grid" style={{ display: 'grid', gap: '32px' }}>
            {/* Left Map Image */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid #E4E4E7', position: 'relative' }}>
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
                 alt="Map Location"
                 style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }} 
               />
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', gap: '8px', background: 'white', padding: '8px 16px', borderRadius: '40px', boxShadow: 'var(--shadow-md)' }}>
                  <MapPin size={18} style={{ color: '#E11D48' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#E11D48' }}>Gurkauna Pvt. Ltd.</span>
               </div>
            </div>
            
            {/* Right Details */}
            <div style={{ background: '#F4F3F0', padding: '40px', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '12px' }}>Visit Our Office</h3>
               <p style={{ fontSize: '0.95rem', color: '#71717A', marginBottom: '40px' }}>We'd love to meet you in person!</p>
               
               <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <MapPin size={20} style={{ color: '#52525B', marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>Gurkauna Pvt. Ltd.</div>
                    <div style={{ fontSize: '0.85rem', color: '#52525B', lineHeight: '1.5' }}>Thamel, Kathmandu 44600<br/>Nepal</div>
                  </div>
               </div>
               
               <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '40px' }}>
                  <Clock size={20} style={{ color: '#52525B', marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>Opening Hours</div>
                    <div style={{ fontSize: '0.85rem', color: '#52525B', lineHeight: '1.5' }}>Mon - Sat, 10:00 AM - 6:00 PM<br/>(Except Public Holidays)</div>
                  </div>
               </div>

               <button style={{ border: '1px solid #E11D48', color: '#E11D48', background: 'transparent', padding: '12px 24px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', width: 'fit-content' }}>
                  Get Directions <ArrowRight size={16} />
               </button>
            </div>
         </div>
      </section>

      {/* 4. Quick Help / We're here for you */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 80px', padding: '0 24px' }}>
         <div className="quick-help-grid" style={{ display: 'grid', background: '#F4F4F5', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', padding: '40px', gap: '40px' }}>
            <div className="qh-left" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
               <div>
                 <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>Quick Help</h4>
                 <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#A1A1AA', textTransform: 'uppercase', marginBottom: '8px' }}>Need Immediate Assistance?</div>
                 <div style={{ fontSize: '0.9rem', color: '#71717A' }}>Check our FAQ section for quick answers to common questions.</div>
               </div>
               <button style={{ border: '1px solid #E4E4E7', color: '#E11D48', background: 'white', padding: '10px 24px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  Visit FAQ <ArrowRight size={16} />
               </button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
               <ShieldCheck size={32} style={{ color: 'var(--color-dark)' }} strokeWidth={1.5} />
               <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '2px' }}>We're here for you.</div>
                  <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Your journey matters to us.</div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
