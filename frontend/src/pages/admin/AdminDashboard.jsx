import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Admin Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back! Here's what's happening today.</p>
                </div>
                {/* Bell icon removed per requirements */}
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                            <span className="material-icons-round">payments</span>
                        </div>
                        <span className="text-xs font-bold text-emerald-500">+12.5%</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Revenue</p>
                    <h3 className="text-2xl font-bold mt-1">₹45,231.89</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                            <span className="material-icons-round">shopping_cart</span>
                        </div>
                        <span className="text-xs font-bold text-blue-500">+8.2%</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Orders</p>
                    <h3 className="text-2xl font-bold mt-1">1,245</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                            <span className="material-icons-round">person</span>
                        </div>
                        <span className="text-xs font-bold text-purple-500">+5.1%</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Active Users</p>
                    <h3 className="text-2xl font-bold mt-1">8,492</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                            <span className="material-icons-round">category</span>
                        </div>
                        <span className="text-xs font-bold text-amber-500">+2.4%</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Products</p>
                    <h3 className="text-2xl font-bold mt-1">452</h3>
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
                                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">#FQ-8921</td>
                                        <td className="px-6 py-4 text-sm">Sarah Jenkins</td>
                                        <td className="px-6 py-4 text-sm font-medium">₹124.50</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">Pending</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-icons-round text-lg">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">#FQ-8920</td>
                                        <td className="px-6 py-4 text-sm">Marcus Chen</td>
                                        <td className="px-6 py-4 text-sm font-medium">₹89.00</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">Shipped</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-icons-round text-lg">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">#FQ-8919</td>
                                        <td className="px-6 py-4 text-sm">Elena Rodriguez</td>
                                        <td className="px-6 py-4 text-sm font-medium">₹256.20</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">Delivered</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-icons-round text-lg">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 h-full">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="font-bold text-lg">Top Products</h2>
                            <button onClick={() => navigate('/admin/products?addNew=true')} className="bg-primary hover:bg-[#94D12C] text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1">
                                <span className="material-icons-round text-sm">add</span> Add New
                            </button>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-center space-x-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                    <img alt="Product" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlORlSYPttedyUwOKMm6SSlncyTiC4Mvm9GbivZt0n-ZJnb5OsWQyKlCgoCW2Qd5X0I3-1h0DsuRMrcRcuQ2CRO7Ux0g2fHaCv3PQGeLAyvt1SbO4xmExNoZEretp7j9atsZgq8CtlIlpJQ9-Ts9jn82plsuTlvfNkDc4MzIFB62CNxlTiIqxIYiX3eTT59RkCJj9mpSnUo6RmqfhJA_pOy_5QW9dAkMxYR88bFOEzUcsr-8N-DnDwTzUDYDrSOIkp0dkOmZVdGWG" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold truncate">Variety Pack - 4 Flavours</p>
                                    <p className="text-xs text-slate-500">234 Sales • ₹45.00</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                    <img alt="Product" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jPTX70cRsZLbq2mkzfQaz2EH4nWVeDU8OvW6GEN9cyhTvSFDtD4NrjfHr50XvxInSumSVTatfHpVQX4v1HchjC69LMx8SU-BpKhPsEeDX6HhmqpoXCris4patGRRV8ZFx7mLpHd5YSDe5iVE-vNt85u8BDgVlYwRnDCM-NIxkUUvHKuKZ75BXVH6eycwNkwIbkLQowDd7ZjmrTvKntENP8RUIzWqUDoEa0aG9WKHFIvKTZu4u2T8J_HZn4ftj1pXa6iGjxJzqaG5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold truncate">Classic Mojito Mix</p>
                                    <p className="text-xs text-slate-500">189 Sales • ₹32.00</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate('/admin/products')} className="w-full mt-8 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                            View All Products
                        </button>
                    </section>
                </div>
            </div>

            <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500">
                <p>© 2024 Fresqo E-commerce. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdminDashboard;
