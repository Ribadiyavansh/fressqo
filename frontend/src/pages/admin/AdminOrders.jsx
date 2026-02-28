import React from 'react';

function AdminOrders() {
    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full flex flex-col">
            <header className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center flex-1 max-w-xl">
                    <div className="relative w-full">
                        <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 pl-11 pr-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search orders, customers, or tracking ID..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* Bell icon removed */}
                    <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all">
                        <span className="material-icons-round text-[18px]">download</span>
                        Export Data
                    </button>
                </div>
            </header>

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
                            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold bg-emerald-100 dark:bg-emerald-900/40 px-2 py-1 rounded">+12%</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Orders Today</p>
                        <h3 className="text-2xl font-bold mt-1">142</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <span className="material-icons-round text-blue-600 dark:text-blue-400">local_shipping</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Shipments</p>
                        <h3 className="text-2xl font-bold mt-1">28</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="material-icons-round text-slate-900 dark:text-white font-bold">payments</span>
                            </div>
                            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold bg-emerald-100 dark:bg-emerald-900/40 px-2 py-1 rounded">+5.4%</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenue Today</p>
                        <h3 className="text-2xl font-bold mt-1">₹4,250.00</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-2 text-sm font-medium">
                            <button className="px-4 py-2 rounded-lg bg-primary text-slate-900 font-bold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900">All Orders</button>
                            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">Pending</button>
                            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">Shipped</button>
                            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">Cancelled</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded-lg text-sm transition-colors border border-slate-200 dark:border-slate-700">
                                <span className="material-icons-round text-[18px]">calendar_month</span>
                                Last 30 Days
                            </button>
                            <button className="flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 p-2 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                                <span className="material-icons-round text-lg">filter_list</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Order ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Customer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Total</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold">#FQ-9921</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">JC</div>
                                            <span className="text-sm font-semibold">Jane Cooper</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-slate-500 font-medium">Oct 24, 2023 • 14:20</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold">₹124.50</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                            <span className="material-icons-round text-lg">more_horiz</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold">#FQ-9918</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img alt="Customer" className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-600" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsd70H7KOg_PKgSUD1gXZ-EDxM3zqTJNmGdQQhV_Up2icxcgXg64oyEn351AvgyafvCiUjwr5KgwS9ueSs5gaAzMSBmVmNwVmWFCx8iWIHegsZOu8I0E_GgIvmKneACDpbhIcHWmxo4J5GDq2xkcsIZb0y6QNOfMj5TsJ8GEYz_I2TpR7nB5wh6SdIQgwzxg561WIp2sU3yfmJ7hy41X1F4TP6szXil7-fNyU3IoYHJW3RodjjKcc9GccXLP82AZF8THEuVYLUFRLa" />
                                            <span className="text-sm font-semibold">Arlene McCoy</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-slate-500 font-medium">Oct 24, 2023 • 12:45</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                            Shipped
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold">₹450.00</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                            <span className="material-icons-round text-lg">more_horiz</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
                        <p className="text-xs text-slate-500 font-bold">Showing 1 to 2 of 1,240 orders</p>
                        <div className="flex gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-900 hover:bg-white dark:hover:bg-slate-700 transition-colors disabled:opacity-30" disabled>
                                <span className="material-icons-round text-lg">chevron_left</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-slate-900 font-bold text-xs shadow-sm">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 hover:text-slate-900 hover:bg-white dark:hover:bg-slate-700 transition-colors text-xs">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-900 hover:bg-white dark:hover:bg-slate-700 transition-colors">
                                <span className="material-icons-round text-lg">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;
