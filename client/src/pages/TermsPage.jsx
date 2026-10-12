import React from 'react';

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '60px 40px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
        
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '16px' }}>
          Terms & Conditions
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#71717A', marginBottom: '40px' }}>Last updated: October 2026</p>

        <div style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <p>Welcome to Gurkauna. These terms and conditions outline the rules and regulations for the use of Gurkauna Pvt. Ltd.'s Website, located at gurkauna.com.</p>
           <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Gurkauna if you do not agree to take all of the terms and conditions stated on this page.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>1. Terminology</h3>
           <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>2. Cookies</h3>
           <p>We employ the use of cookies. By accessing Gurkauna, you agreed to use cookies in agreement with the Gurkauna Pvt. Ltd.'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>3. License</h3>
           <p>Unless otherwise stated, Gurkauna Pvt. Ltd. and/or its licensors own the intellectual property rights for all material on Gurkauna. All intellectual property rights are reserved. You may access this from Gurkauna for your own personal use subjected to restrictions set in these terms and conditions.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>4. Product Purchases</h3>
           <p>By placing an order on our website, you warrant that you are legally capable of entering into binding contracts and that all details you provide to us are true and accurate. We reserve the right to refuse any order you place with us.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>5. Pricing and Availability</h3>
           <p>All prices are inclusive of legally applicable VAT. Delivery costs will be charged in addition; such additional charges are clearly displayed where applicable and included in the 'Total Cost'. We try and ensure that all details, descriptions and prices which appear on this Website are accurate, however errors may occur.</p>
        </div>

      </div>
    </div>
  );
}
