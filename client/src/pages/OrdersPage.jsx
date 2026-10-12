import React from 'react';
import { Package, Search, Filter, ChevronRight } from 'lucide-react';
import EmptyState from '../components/EmptyState';

export default function OrdersPage({ setActivePage }) {
  // Mock orders data
  const orders = [
    {
      id: 'ORD-582910',
      date: 'Oct 02, 2026',
      total: 7999,
      status: 'Shipped',
      payment: 'Paid',
      items: [
        { name: 'Gurkauna Classic', size: '24"', color: 'Midnight Black', qty: 1 }
      ]
    },
    {
      id: 'ORD-581023',
      date: 'Sep 15, 2026',
      total: 10500,
      status: 'Delivered',
      payment: 'Paid',
      items: [
        { name: 'Gurkauna Pro', size: '20"', color: 'Forest Green', qty: 1 }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#71717A', fontSize: '0.9rem', marginBottom: '8px', cursor: 'pointer' }} onClick={() => setActivePage('account')}>
              My Account <ChevronRight size={14} /> My Orders
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)' }}>
              Order History
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
               <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
               <input type="text" placeholder="Search orders..." style={{ padding: '10px 16px 10px 36px', borderRadius: '40px', border: '1px solid #E4E4E7', fontSize: '0.9rem' }} />
            </div>
            <button style={{ padding: '10px 16px', borderRadius: '40px', border: '1px solid #E4E4E7', background: 'white', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600' }}>
               <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <EmptyState 
            type="orders"
            title="No orders yet"
            message="Looks like you haven't made any purchases with us yet."
            actionText="Start Shopping"
            onAction={() => setActivePage('shop')}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {orders.map(order => (
              <div key={order.id} style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', overflow: 'hidden' }}>
                
                {/* Order Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: '#F4F4F5', borderBottom: '1px solid #E4E4E7', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#71717A', marginBottom: '4px' }}>Order Placed</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>{order.date}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#71717A', marginBottom: '4px' }}>Total</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>NPR {order.total.toLocaleString()}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#71717A', marginBottom: '4px' }}>Order #</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-dark)' }}>{order.id}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActivePage('order-tracking')}
                    style={{ background: 'white', border: '1px solid #D4D4D8', padding: '8px 16px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer' }}
                  >
                    View Order Details
                  </button>
                </div>

                {/* Order Items */}
                <div style={{ padding: '24px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ display: 'inline-block', padding: '6px 12px', background: order.status === 'Delivered' ? '#DCFCE7' : '#FEF9C3', color: order.status === 'Delivered' ? '#15803D' : '#A16207', borderRadius: '40px', fontSize: '0.85rem', fontWeight: '700' }}>
                        {order.status}
                      </span>
                   </div>
                   
                   {order.items.map((item, idx) => (
                     <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: idx !== order.items.length - 1 ? '16px' : '0' }}>
                        <div style={{ width: '64px', height: '64px', background: '#F4F4F5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Package size={24} color="#A1A1AA" />
                        </div>
                        <div>
                           <div style={{ fontWeight: '600', color: 'var(--color-dark)' }}>{item.name}</div>
                           <div style={{ fontSize: '0.85rem', color: '#71717A' }}>{item.color} | {item.size} | Qty: {item.qty}</div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
