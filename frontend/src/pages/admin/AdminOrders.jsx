import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All'); // All, Pending, Paid

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await api.get('/orders');
                setOrders(data);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const filteredOrders = filter === 'All'
        ? orders
        : orders.filter(order => filter === 'Pending' ? order.paymentStatus === 'Pending' : order.paymentStatus !== 'Pending');

    const updateStatus = async (id, status) => {
        try {
            await api.put(`/orders/${id}/status`, { status });
            // Refresh local state to reflect change without full refetch
            setOrders(prev => prev.map(o => o._id === id ? { ...o, orderStatus: status } : o));
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to update order status');
        }
    };

    const deleteOrder = async (id) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            try {
                await api.delete(`/orders/${id}`); // Assuming a delete endpoint exists, though not standard for orders. If not, maybe just hide or cancel. Let's just update to cancelled.
                updateStatus(id, 'Cancelled');
            } catch (err) {
                console.error(err);
            }
        }
    }

    // Stats calculations
    const today = new Date().toDateString();
    const todayOrders = orders.filter(o => new Date(o.createdAt).toDateString() === today);
    const pendingShipments = orders.filter(o => o.orderStatus === 'Processing' || o.orderStatus === 'Pending');
    const todayRevenue = todayOrders.reduce((acc, current) => acc + current.totalPrice, 0);

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full flex flex-col">


            <div className="flex-1">
                <div className="mb-8">
                    <h2 className="text-3xl font-black tracking-tight">Orders Overview</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Manage and track your customer orders in real-time.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="material-icons-round text-slate-900 dark:text-white font-bold">shopping_cart</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Orders Today</p>
                        <h3 className="text-2xl font-bold mt-1">{todayOrders.length}</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <span className="material-icons-round text-blue-600 dark:text-blue-400">local_shipping</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Shipments</p>
                        <h3 className="text-2xl font-bold mt-1">{pendingShipments.length}</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="material-icons-round text-slate-900 dark:text-white font-bold">payments</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenue Today</p>
                        <h3 className="text-2xl font-bold mt-1">₹{todayRevenue.toFixed(2)}</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden min-h-[400px]">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-2 text-sm font-medium">
                            <button onClick={() => setFilter('All')} className={`px-4 py-2 rounded-lg ${filter === 'All' ? 'bg-primary text-slate-900 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'} shadow-sm transition-all focus:outline-none`}>All Orders</button>
                            <button onClick={() => setFilter('Pending')} className={`px-4 py-2 rounded-lg ${filter === 'Pending' ? 'bg-primary text-slate-900 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'} shadow-sm transition-all focus:outline-none`}>Pending Payment</button>
                            <button onClick={() => setFilter('Paid')} className={`px-4 py-2 rounded-lg ${filter === 'Paid' ? 'bg-primary text-slate-900 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'} shadow-sm transition-all focus:outline-none`}>Paid</button>
                        </div>
                    </div>

                    {error && <div className="p-4 bg-red-50 text-red-600">{error}</div>}

                    <div className="overflow-x-auto relative min-h-[300px]">
                        {loading && (
                            <div className="absolute inset-0 bg-white/50 flex justify-center items-center z-10 dark:bg-slate-800/50">
                                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Order ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Customer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status / Payment</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Total</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {filteredOrders.length === 0 && !loading && (
                                    <tr>
                                        <td colSpan="6" className="text-center py-8 text-slate-500">No orders found.</td>
                                    </tr>
                                )}
                                {filteredOrders.map(order => (
                                    <tr key={order._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-bold">#{order._id.substring(0, 8).toUpperCase()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 uppercase">
                                                    {order.userId?.name?.charAt(0) || 'U'}
                                                </div>
                                                <span className="text-sm font-semibold">{order.userId?.name || 'Unknown User'}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs text-slate-500 font-medium">{new Date(order.createdAt).toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1 items-start">
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.orderStatus === 'Delivered' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' :
                                                        order.orderStatus === 'Cancelled' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
                                                            'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                                                    }`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${order.orderStatus === 'Delivered' ? 'bg-emerald-500' : order.orderStatus === 'Cancelled' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                                                    {order.orderStatus || 'Pending'}
                                                </span>
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.paymentStatus === 'Paid' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                                    }`}>
                                                    {order.paymentStatus || 'Pending'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-bold">₹{order.totalPrice?.toFixed(2) || '0.00'}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <select
                                                className="bg-transparent border border-slate-200 dark:border-slate-700 rounded text-xs px-2 py-1 outline-none mr-2 font-semibold text-slate-700 dark:text-slate-300"
                                                value={order.orderStatus}
                                                onChange={(e) => updateStatus(order._id, e.target.value)}
                                            >
                                                <option value="Processing">Processing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;
