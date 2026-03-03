import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function AdminProducts() {
    const [searchParams] = useSearchParams();

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100">
            <header className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Products Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your inventory, pricing, and availability.</p>
                </div>
                <div className="flex items-center space-x-4">
                    {/* Search bar removed per user request */}
                    <Link to="/admin/products/new" className="bg-primary hover:bg-[#94D12C] text-slate-900 px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-sm">
                        <span className="material-icons-round">add</span> Add New Product
                    </Link>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <span className="material-icons-round">inventory</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Total Items</p>
                        <p className="text-xl font-bold">452</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                        <span className="material-icons-round">warning</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Low Stock</p>
                        <p className="text-xl font-bold">12</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                        <span className="material-icons-round">calendar_today</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Pre-orders Active</p>
                        <p className="text-xl font-bold">28</p>
                    </div>
                </div>
            </div>

            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
                                <th className="px-6 py-4 font-semibold">Product</th>
                                <th className="px-6 py-4 font-semibold">SKU</th>
                                <th className="px-6 py-4 font-semibold text-center">Stock</th>
                                <th className="px-6 py-4 font-semibold text-center">Price</th>
                                <th className="px-6 py-4 font-semibold text-center">Pre-order</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                            <img alt="Variety Pack" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlORlSYPttedyUwOKMm6SSlncyTiC4Mvm9GbivZt0n-ZJnb5OsWQyKlCgoCW2Qd5X0I3-1h0DsuRMrcRcuQ2CRO7Ux0g2fHaCv3PQGeLAyvt1SbO4xmExNoZEretp7j9atsZgq8CtlIlpJQ9-Ts9jn82plsuTlvfNkDc4MzIFB62CNxlTiIqxIYiX3eTT59RkCJj9mpSnUo6RmqfhJA_pOy_5QW9dAkMxYR88bFOEzUcsr-8N-DnDwTzUDYDrSOIkp0dkOmZVdGWG" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">Variety Pack - 4 Flavours</p>
                                            <p className="text-xs text-slate-500">Beverages</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-500 uppercase tracking-tighter">FQ-VP-001</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-semibold">124</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-bold">₹45.00</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input defaultChecked className="sr-only peer" type="checkbox" />
                                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-icons-round text-[20px]">edit</span>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-icons-round text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                            <img alt="Classic Mojito" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jPTX70cRsZLbq2mkzfQaz2EH4nWVeDU8OvW6GEN9cyhTvSFDtD4NrjfHr50XvxInSumSVTatfHpVQX4v1HchjC69LMx8SU-BpKhPsEeDX6HhmqpoXCris4patGRRV8ZFx7mLpHd5YSDe5iVE-vNt85u8BDgVlYwRnDCM-NIxkUUvHKuKZ75BXVH6eycwNkwIbkLQowDd7ZjmrTvKntENP8RUIzWqUDoEa0aG9WKHFIvKTZu4u2T8J_HZn4ftj1pXa6iGjxJzqaG5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">Classic Mojito Mix</p>
                                            <p className="text-xs text-slate-500">Kits</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-500 uppercase tracking-tighter">FQ-MJ-002</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-semibold text-amber-500">8</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-bold">₹32.00</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input className="sr-only peer" type="checkbox" />
                                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-icons-round text-[20px]">edit</span>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-icons-round text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">10</span> of <span className="font-medium text-slate-900 dark:text-white">452</span> products</p>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-icons-round text-sm leading-none">chevron_left</span>
                        </button>
                        <button className="px-3 py-1 bg-primary text-slate-900 rounded-lg font-bold">1</button>
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-icons-round text-sm leading-none">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500 text-center">
                <p>© 2024 Fresqo E-commerce. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdminProducts;
