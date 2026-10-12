import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '60px 40px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7' }}>
        
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '16px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#71717A', marginBottom: '40px' }}>Last updated: October 2026</p>

        <div style={{ fontSize: '1rem', color: '#52525B', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <p>At Gurkauna Pvt. Ltd., we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>1. Important information and who we are</h3>
           <p>Gurkauna is the controller and responsible for your personal data. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the details set out on our Contact page.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>2. The data we collect about you</h3>
           <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
           <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
             <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
             <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
             <li><strong>Financial Data</strong> includes bank account and payment card details (processed securely via our payment gateways).</li>
             <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
             <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
           </ul>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>3. How we use your personal data</h3>
           <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
           <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
             <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., to process your order).</li>
             <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
             <li>Where we need to comply with a legal obligation.</li>
           </ul>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>4. Data security</h3>
           <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

           <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', marginTop: '16px' }}>5. Your legal rights</h3>
           <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
        </div>

      </div>
    </div>
  );
}
