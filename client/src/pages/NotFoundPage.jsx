import React from 'react';
import EmptyState from '../components/EmptyState';

export default function NotFoundPage({ setActivePage }) {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <EmptyState 
        type="404"
        title="Looks like this journey took a wrong turn."
        message="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        actionText="Back Home"
        onAction={() => setActivePage('home')}
      />
    </div>
  );
}
