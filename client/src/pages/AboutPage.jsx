import React from 'react';
import { Mountain, ShieldCheck, Compass, Heart, Award } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  return (
    <div>
      {/* About Hero */}
      <section style={{
        background: 'linear-gradient(rgba(15, 46, 37, 0.85), rgba(15, 46, 37, 0.85)), url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 24px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-tag" style={{ color: '#4ADE80' }}>Nepali Heritage & Excellence</span>
          <h1 style={{ fontSize: '3.2rem', fontWeight: '800', marginBottom: '16px' }}>Our Story</h1>
          <p style={{ fontSize: '1.2rem', color: '#D1E5DE', lineHeight: '1.6' }}>
            Built by travelers, for travelers. Crafting world-class luggage right from the heart of Nepal.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section style={{ maxWidth: '1000px', margin: '80px auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-dark)', marginBottom: '20px' }}>
              The Gurkauna Journey
            </h2>
            <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8', marginBottom: '16px' }}>
              Gurkauna was born from a simple belief — that every journey deserves a reliable companion. 
            </p>
            <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
              We are a Nepal-based brand, passionate about creating high-quality, stylish and durable suitcases for modern travelers. From the busy streets of Kathmandu to the highest peaks of the Himalayas, Gurkauna is with you, wherever you go.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80" 
              alt="Gurkauna Crafting Journey"
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', border: '1px solid #E2E8F0' }} 
            />
          </div>
        </div>

        {/* 3 Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '80px' }}>
          <div style={{ background: 'white', padding: '32px 24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <Mountain size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>Nepal Based</h3>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Proudly Nepali brand rooted in the spirit of exploration and rugged mountain endurance.
            </p>
          </div>

          <div style={{ background: 'white', padding: '32px 24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>Quality First</h3>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Built to last with aerospace-grade PC composite shells, Japanese spinner wheels & TSA locks.
            </p>
          </div>

          <div style={{ background: 'white', padding: '32px 24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <Compass size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>Travel Inspired</h3>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Designed to make travel easier, better, and more memorable for every explorer.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{ background: '#122B24', color: 'white', padding: '48px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px', color: 'white' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', color: '#D1E5DE', maxWidth: '700px', margin: '0 auto 24px auto', lineHeight: '1.8' }}>
            To elevate travel standards across Nepal and beyond — offering suitcases that combine timeless aesthetics, rugged durability, and accessible luxury.
          </p>
          <button className="btn-primary" onClick={() => setActivePage('shop')}>
            Shop Our Products →
          </button>
        </div>
      </section>
    </div>
  );
}
