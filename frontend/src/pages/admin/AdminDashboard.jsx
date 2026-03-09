import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/api';

function AdminDashboard() {
    const navigate = useNavigate();

    const [stats, setStats] = useState({
        revenue: 0,
        orders: 0,
        users: 0,
        products: 0,
        recentOrders: [],
        topProducts: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch basic metrics in parallel
                const [ordersRes, usersRes, productsRes] = await Promise.all([
                    api.get('/orders'),
                    api.get('/users'),
                    api.get('/products?limit=10')
                ]);

                const orders = ordersRes.data || [];
                const users = usersRes.data || [];
                const products = productsRes.data.products || [];
                const productsCount = productsRes.data.count || 0;

                const totalRevenue = orders.reduce((acc, current) => acc + (current.totalPrice || 0), 0);

                // Get top 2 recent orders
                const recentOrders = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);

                // Get top 2 products (mocked by just taking first 2 for now as we don't have sales count per product in API easily accessible without aggregation)
                const topProducts = products.slice(0, 2);

                setStats({
                    revenue: totalRevenue,
                    orders: orders.length,
                    users: users.length,
                    products: productsCount,
                    recentOrders,
                    topProducts
                });
            } catch (err) {
                console.error("Failed to fetch dashboard stats", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Admin Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back! Here's what's happening today.</p>
                </div>
            </header>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                                    <span className="material-icons-round">payments</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Total Revenue</p>
                            <h3 className="text-2xl font-bold mt-1">₹{stats.revenue.toFixed(2)}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                                    <span className="material-icons-round">shopping_cart</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Total Orders</p>
                            <h3 className="text-2xl font-bold mt-1">{stats.orders}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                                    <span className="material-icons-round">person</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Active Users</p>
                            <h3 className="text-2xl font-bold mt-1">{stats.users}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                                    <span className="material-icons-round">category</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Total Products</p>
                            <h3 className="text-2xl font-bold mt-1">{stats.products}</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                    <h2 className="font-bold text-lg">Recent Orders</h2>
                                    <Link to="/admin/orders" className="text-primary text-sm font-medium hover:underline">View All</Link>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                                                <th className="px-6 py-4 font-semibold">Order ID</th>
                                                <th className="px-6 py-4 font-semibold">Customer</th>
                                                <th className="px-6 py-4 font-semibold">Amount</th>
                                                <th className="px-6 py-4 font-semibold">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                            {stats.recentOrders.length === 0 ? (
                                                <tr><td colSpan="4" className="text-center py-4 text-slate-500">No recent orders</td></tr>
                                            ) : (
                                                stats.recentOrders.map(order => (
                                                    <tr key={order._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-medium">#{order._id.substring(0, 8).toUpperCase()}</td>
                                                        <td className="px-6 py-4 text-sm">{order.userId?.name || 'Guest'}</td>
                                                        <td className="px-6 py-4 text-sm font-medium">₹{order.totalPrice?.toFixed(2)}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${order.orderStatus === 'Delivered' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' :
                                                                    order.orderStatus === 'Cancelled' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
                                                                        'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                                                                }`}>{order.orderStatus || 'Pending'}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-bold text-lg">Featured Products</h2>
                                    <button onClick={() => navigate('/admin/products/new')} className="bg-primary hover:bg-[#94D12C] text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1">
                                        <span className="material-icons-round text-sm">add</span> Add New
                                    </button>
                                </div>
                                <div className="space-y-5">
                                    {stats.topProducts.length === 0 ? (
                                        <p className="text-sm text-slate-500 text-center">No products found.</p>
                                    ) : (
                                        stats.topProducts.map(product => (
                                            <div key={product._id} className="flex items-center space-x-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer">
                                                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                                    <img alt={product.title} className="w-full h-full object-cover" src={product.images?.[0] || 'https://via.placeholder.com/150'} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold truncate">{product.title}</p>
                                                    <p className="text-xs text-slate-500">Stock: {product.stock} • ₹{product.price}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <button onClick={() => navigate('/admin/products')} className="w-full mt-8 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    View All Products
                                </button>
                            </section>
                        </div>
                    </div>
                </>
            )}

            <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500 text-center">
                <p>© 2024 Fresqo E-commerce. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdminDashboard;
