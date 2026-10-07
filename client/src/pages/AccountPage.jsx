import React, { useState, useEffect } from 'react';
import { Package, User, MapPin, CreditCard, Heart, Settings, LogOut, ChevronRight, Eye, X } from 'lucide-react';

export default function AccountPage({ wishlist, onSelectProduct, setActivePage }) {
  const [activeTab, setActiveTab] = useState('orders');
  const [orderFilter, setOrderFilter] = useState('all');
  const [orders, setOrders] = useState([]);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);

  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('Error fetching orders:', err));
  }, []);

  const filteredOrders = orders.filter(ord => {
    if (orderFilter === 'all') return true;
    return ord.status.toLowerCase() === orderFilter.toLowerCase();
  });

  return (
    <div className="orders-container">
      {/* Sidebar Account Menu */}
      <aside className="account-menu">
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px 20px 16px', borderBottom: '1px solid #E2E8F0', marginBottom: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-brand)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem' }}>
            SK
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--color-dark)' }}>Suraj Kumar Sah</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>suraj@gmail.com</div>
          </div>
        </div>

        <div className="menu-item" onClick={() => setActiveTab('dashboard')}>
          <User size={18} /> Dashboard
        </div>
        <div className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
          <Package size={18} /> My Orders
        </div>
        <div className={`menu-item ${activeTab === 'addresses' ? 'active' : ''}`} onClick={() => setActiveTab('addresses')}>
          <MapPin size={18} /> Shipping Addresses
        </div>
        <div className={`menu-item ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => setActiveTab('payment')}>
          <CreditCard size={18} /> Payment Methods
        </div>
        <div className={`menu-item ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>
          <Heart size={18} /> Saved Wishlist ({wishlist.length})
        </div>
        <div className={`menu-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          <Settings size={18} /> Account Settings
        </div>
        <div className="menu-item" style={{ color: '#EF4444', marginTop: '16px' }}>
          <LogOut size={18} /> Logout
        </div>
      </aside>

      {/* Account Main Content */}
      <main>
        {activeTab === 'orders' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h1 style={{ fontSize: '1.8rem', fontWeight: '800' }}>My Orders</h1>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['all', 'processing', 'shipped', 'delivered'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setOrderFilter(st)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid #CBD5E1',
                      background: orderFilter === st ? 'var(--color-brand)' : 'white',
                      color: orderFilter === st ? 'white' : 'var(--color-gray-700)',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textTransform: 'capitalize'
                    }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {filteredOrders.length === 0 ? (
              <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <p style={{ color: 'var(--color-gray-500)' }}>No orders found under "{orderFilter}".</p>
              </div>
            ) : (
              filteredOrders.map((ord) => (
                <div key={ord.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <span style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--color-brand)' }}>
                        #{ord.id}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginLeft: '12px' }}>
                        Placed on {ord.date}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className={`status-badge ${ord.status.toLowerCase()}`}>
                        ● {ord.status}
                      </span>
                      <span style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--color-dark)' }}>
                        NPR {ord.total?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Order Items List */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', overflowX: 'auto', padding: '8px 0' }}>
                    {ord.items?.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#F8FAFC', padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                        <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                        <div style={{ fontSize: '0.8rem' }}>
                          <div style={{ fontWeight: '700' }}>{item.name}</div>
                          <div style={{ color: 'var(--color-gray-500)' }}>{item.size}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                      Paid via <strong>{ord.paymentMethod}</strong>
                    </span>
                    <button
                      onClick={() => setSelectedOrderDetails(ord)}
                      style={{ fontSize: '0.85rem', color: 'var(--color-brand)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}
                    >
                      <Eye size={16} /> View Order Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Wishlist View */}
        {activeTab === 'wishlist' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px' }}>Saved Wishlist</h1>
            {wishlist.length === 0 ? (
              <div style={{ background: 'white', padding: '60px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <Heart size={40} style={{ color: 'var(--color-gray-400)', marginBottom: '12px' }} />
                <p style={{ color: 'var(--color-gray-500)' }}>Your wishlist is currently empty.</p>
                <button className="btn-primary" style={{ background: 'var(--color-brand)', color: 'white', marginTop: '16px' }} onClick={() => setActivePage('shop')}>
                  Browse Products
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {wishlist.map(item => (
                  <div key={item.id} style={{ background: 'white', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div>
                      <h4 style={{ fontWeight: '700', fontSize: '1rem' }}>{item.name}</h4>
                      <div style={{ fontWeight: '800', color: 'var(--color-brand)' }}>NPR {item.price?.toLocaleString()}</div>
                      <button className="btn-primary" style={{ background: 'var(--color-brand)', color: 'white', padding: '6px 12px', fontSize: '0.8rem', marginTop: '8px' }} onClick={() => onSelectProduct(item)}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'dashboard' || activeTab === 'addresses' || activeTab === 'payment' || activeTab === 'settings') && (
          <div style={{ background: 'white', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', textTransform: 'capitalize', marginBottom: '12px' }}>{activeTab} Settings</h2>
            <p style={{ color: 'var(--color-gray-600)' }}>Manage your personal account profile, saved addresses and preferences for Gurkauna store.</p>
          </div>
        )}
      </main>

      {/* Order Details Modal */}
      {selectedOrderDetails && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', maxWidth: '560px', width: '100%', padding: '28px', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--color-brand)' }}>
                Order #{selectedOrderDetails.id}
              </h3>
              <button onClick={() => setSelectedOrderDetails(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.9rem', marginBottom: '6px' }}>Status: <strong style={{ color: '#15803D' }}>{selectedOrderDetails.status}</strong></div>
              <div style={{ fontSize: '0.9rem', marginBottom: '6px' }}>Date: <strong>{selectedOrderDetails.date}</strong></div>
              <div style={{ fontSize: '0.9rem' }}>Payment Method: <strong>{selectedOrderDetails.paymentMethod}</strong></div>
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '12px' }}>Line Items:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {selectedOrderDetails.items?.map((it, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FAFAFB', padding: '10px 14px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={it.image} alt={it.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{it.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>{it.size} • {it.color}</div>
                    </div>
                  </div>
                  <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>NPR {it.price?.toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '800', borderTop: '1px solid #E2E8F0', paddingTop: '14px' }}>
              <span>Total Amount</span>
              <span style={{ color: 'var(--color-brand)' }}>NPR {selectedOrderDetails.total?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
