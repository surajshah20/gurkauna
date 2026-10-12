import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function AuthPage({ setActivePage }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth and route to account
    setActivePage('account');
  };

  return (
    <div style={{ padding: '80px 24px', backgroundColor: '#FAFAFA', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', width: '100%', maxWidth: '440px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        
        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #E4E4E7' }}>
          <button 
            onClick={() => setIsLogin(true)}
            style={{ flex: 1, padding: '20px', background: 'transparent', border: 'none', borderBottom: isLogin ? '2px solid #E11D48' : '2px solid transparent', color: isLogin ? '#E11D48' : '#71717A', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
          >
            Log In
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            style={{ flex: 1, padding: '20px', background: 'transparent', border: 'none', borderBottom: !isLogin ? '2px solid #E11D48' : '2px solid transparent', color: !isLogin ? '#E11D48' : '#71717A', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}
          >
            Sign Up
          </button>
        </div>

        <div style={{ padding: '40px 32px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px', textAlign: 'center' }}>
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#71717A', textAlign: 'center', marginBottom: '32px' }}>
            {isLogin ? 'Sign in to access your orders and saved details.' : 'Join Gurkauna for exclusive perks and faster checkout.'}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {!isLogin && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px 16px 12px 44px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }} placeholder="Your Name" />
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px 16px 12px 44px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }} placeholder="you@example.com" />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em', color: '#71717A', textTransform: 'uppercase' }}>Password</label>
                {isLogin && (
                  <button type="button" style={{ background: 'none', border: 'none', fontSize: '0.75rem', color: '#E11D48', fontWeight: '600', cursor: 'pointer' }}>Forgot?</button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
                <input type="password" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} style={{ width: '100%', padding: '12px 16px 12px 44px', background: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }} placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" style={{ background: '#E11D48', color: 'white', padding: '14px', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: 'none', cursor: 'pointer', marginTop: '8px' }}>
              {isLogin ? 'Log In' : 'Create Account'} <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', margin: '32px 0', color: '#A1A1AA' }}>
            <div style={{ flex: 1, height: '1px', background: '#E4E4E7' }}></div>
            <span style={{ padding: '0 16px', fontSize: '0.85rem' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: '#E4E4E7' }}></div>
          </div>

          <button style={{ width: '100%', padding: '12px', background: 'white', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.29C21.37 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
               <path d="M12 23C14.97 23 17.46 22.02 19.29 20.34L15.73 17.57C14.74 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.12H2.17V16.96C3.98 20.55 7.69 23 12 23Z" fill="#34A853"/>
               <path d="M5.84 14.12C5.62 13.46 5.49 12.75 5.49 12C5.49 11.25 5.62 10.54 5.84 9.88V7.04H2.17C1.43 8.52 1 10.21 1 12C1 13.79 1.43 15.48 2.17 16.96L5.84 14.12Z" fill="#FBBC05"/>
               <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.36 3.86C17.46 2.09 14.97 1 12 1C7.69 1 3.98 3.45 2.17 7.04L5.84 9.88C6.71 7.3 9.14 5.38 12 5.38Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
