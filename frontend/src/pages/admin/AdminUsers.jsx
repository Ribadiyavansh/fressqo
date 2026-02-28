import React from 'react';

function AdminUsers() {
    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100">
            <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and monitor registered user accounts.</p>
                </div>
                <div className="flex items-center space-x-4">
                    {/* Add New User button removed per request */}
                </div>
            </header>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-6">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                        <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="Search by name, email or ID..." type="text" />
                    </div>
                    <div className="flex gap-4">
                        <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm py-2.5 px-4 pr-10 focus:ring-2 focus:ring-primary min-w-[140px] outline-none">
                            <option value="">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                            <option value="editor">Editor</option>
                        </select>
                        <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm py-2.5 px-4 pr-10 focus:ring-2 focus:ring-primary min-w-[140px] outline-none">
                            <option value="">Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="suspended">Suspended</option>
                        </select>
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                            <span className="material-icons-round text-sm">filter_list</span>
                            More Filters
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                                <th className="px-6 py-4 font-semibold">User</th>
                                <th className="px-6 py-4 font-semibold">Email</th>
                                <th className="px-6 py-4 font-semibold">Role</th>
                                <th className="px-6 py-4 font-semibold">Join Date</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <img alt="Avatar" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOgjMEvr6xRr8l1qWaL9psJ3ArcKEna3kMF2XO3G2IRrxGWCRz1YC8H8okKWeJfHy6YGGmWZBbGtz2_N0eSuk7NL9LLVF8EMM4axC7B2nJWhX1UDqt1MgIMcxH44wkhEDH04apPkF2CVg-Be_mqY1NRP-NJk0rZ_MKx_fseoPWoLXkfDKaviQoMQ7Cgu7cpWDTqEzJ__3V6kAvyGrYoFEAoz_bttWa4obAAUpIowfVkk__lwjkAJOB50yLX4dz1hv3i-OKrX6m_9fN" />
                                        <span className="text-sm font-medium">Sarah Jenkins</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">sarah.j@example.com</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">Customer</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 12, 2023</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-icons-round text-lg">edit</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-icons-round text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <img alt="Avatar" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXpnU4-S_BgCSK4XtyRCn1wFaMlzPOiqDzpNozoYdOeAUvfEgIB0YKNL515CTYxVfhuxufC2XUaDpyS3f65097RrypstynXlKLt6xoZ2UPVKBERtW12cSRzKuenqy6u0kOF6ymCnFM4BExY-Q7vKcN-xvAR9PW9ZkDW8ecqFdOxlB14WDyZXKV_LBYZJonY5d3s4xuqKCz-FEeT7ZkOhLYeUA155_wgskXmqvV6kRxb0hEhruXLyjaZc8Cmo99IsEyTe90BbH2gcRR" />
                                        <span className="text-sm font-medium">Elena Rodriguez</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">elena.r@example.com</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">Customer</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Aug 15, 2023</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Inactive
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-icons-round text-lg">edit</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-icons-round text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <p className="text-sm text-slate-500">Showing <span className="font-medium">1</span> to <span className="font-medium">2</span> of <span className="font-medium">1,245</span> users</p>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 bg-primary text-slate-900 rounded-lg text-sm font-medium">1</button>
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
                    </div>
                </div>
            </div>

            <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500 text-center">
                <p>© 2024 Fresqo E-commerce. User Management Console.</p>
            </footer>
        </div>
    );
}

export default AdminUsers;
