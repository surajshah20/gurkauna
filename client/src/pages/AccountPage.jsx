import React from 'react';
import { User, MapPin, Settings, Heart, Package, LogOut, Edit2 } from 'lucide-react';

export default function AccountPage({ setActivePage }) {
  
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '32px' }}>
          My Account
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', '@media (minWidth: 768px)': { gridTemplateColumns: '250px 1fr' }, gap: '40px' }} className="account-grid-custom">
          <style dangerouslySetInnerHTML={{__html: `
            .account-grid-custom { grid-template-columns: 1fr; }
            @media (min-width: 768px) { .account-grid-custom { grid-template-columns: 250px 1fr; } }
          `}} />

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button className="account-nav-btn active" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-md)', fontWeight: '600', color: '#E11D48', cursor: 'pointer', textAlign: 'left' }}>
              <User size={18} /> Profile Info
            </button>
            <button onClick={() => setActivePage('orders')} className="account-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '500', color: '#52525B', cursor: 'pointer', textAlign: 'left' }}>
              <Package size={18} /> My Orders
            </button>
            <button onClick={() => setActivePage('wishlist')} className="account-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '500', color: '#52525B', cursor: 'pointer', textAlign: 'left' }}>
              <Heart size={18} /> Wishlist
            </button>
            <button className="account-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '500', color: '#52525B', cursor: 'pointer', textAlign: 'left' }}>
              <MapPin size={18} /> Saved Addresses
            </button>
            <button className="account-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '500', color: '#52525B', cursor: 'pointer', textAlign: 'left' }}>
              <Settings size={18} /> Settings
            </button>
            <div style={{ margin: '16px 0', borderTop: '1px solid #E4E4E7' }}></div>
            <button onClick={() => setActivePage('home')} className="account-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '500', color: '#71717A', cursor: 'pointer', textAlign: 'left' }}>
              <LogOut size={18} /> Log Out
            </button>
          </div>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Profile Info */}
            <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '4px' }}>Personal Information</h3>
                  <p style={{ fontSize: '0.9rem', color: '#71717A' }}>Manage your basic profile details.</p>
                </div>
                <button style={{ background: 'none', border: 'none', color: '#E11D48', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <Edit2 size={14} /> Edit
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="profile-fields-grid">
                 <style dangerouslySetInnerHTML={{__html: `
                   .profile-fields-grid { grid-template-columns: 1fr; }
                   @media (min-width: 600px) { .profile-fields-grid { grid-template-columns: 1fr 1fr; } }
                 `}} />
                 <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#A1A1AA', marginBottom: '4px', display: 'block' }}>Full Name</label>
                    <div style={{ fontSize: '1rem', color: 'var(--color-dark)', fontWeight: '500' }}>Suraj Kumar Sah</div>
                 </div>
                 <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#A1A1AA', marginBottom: '4px', display: 'block' }}>Email Address</label>
                    <div style={{ fontSize: '1rem', color: 'var(--color-dark)', fontWeight: '500' }}>suraj@example.com</div>
                 </div>
                 <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#A1A1AA', marginBottom: '4px', display: 'block' }}>Phone Number</label>
                    <div style={{ fontSize: '1rem', color: 'var(--color-dark)', fontWeight: '500' }}>+977 980-0000000</div>
                 </div>
              </div>
            </div>

            {/* Quick Actions / Shortcuts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
               <div onClick={() => setActivePage('orders')} style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#F4F4F5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-dark)' }}>
                    <Package size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>2 Orders</div>
                    <div style={{ fontSize: '0.85rem', color: '#71717A' }}>Track & manage</div>
                  </div>
               </div>
               <div onClick={() => setActivePage('wishlist')} style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48' }}>
                    <Heart size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>5 Saved</div>
                    <div style={{ fontSize: '0.85rem', color: '#71717A' }}>View wishlist</div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
