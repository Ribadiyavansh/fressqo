import React from 'react';

function AdminBlog() {
    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Blog Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your stories and articles.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-primary hover:bg-[#94D12C] text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm">
                        <span className="material-icons-round text-lg">add</span>
                        Add New Post
                    </button>
                </div>
            </header>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Search posts..." type="text" />
                </div>
                <div className="flex gap-2">
                    <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary">
                        <option>All Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                        <option>Scheduled</option>
                    </select>
                    <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                        <span className="material-icons-round">filter_list</span>
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                                <th className="px-6 py-4 font-semibold">Post Details</th>
                                <th className="px-6 py-4 font-semibold text-center">Category</th>
                                <th className="px-6 py-4 font-semibold text-center">Author</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                                <th className="px-6 py-4 font-semibold text-center">Date</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 min-w-[300px]">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                            <img alt="Post thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlORlSYPttedyUwOKMm6SSlncyTiC4Mvm9GbivZt0n-ZJnb5OsWQyKlCgoCW2Qd5X0I3-1h0DsuRMrcRcuQ2CRO7Ux0g2fHaCv3PQGeLAyvt1SbO4xmExNoZEretp7j9atsZgq8CtlIlpJQ9-Ts9jn82plsuTlvfNkDc4MzIFB62CNxlTiIqxIYiX3eTT59RkCJj9mpSnUo6RmqfhJA_pOy_5QW9dAkMxYR88bFOEzUcsr-8N-DnDwTzUDYDrSOIkp0dkOmZVdGWG" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1">Benefits of Cold-Pressed Juices for Daily Health</span>
                                            <span className="text-xs text-slate-500">1.2k Views • 15 Comments</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-center">
                                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">Health</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-medium">Dr. Emily Watts</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">Published</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-center text-slate-500">Oct 24, 2024</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-icons-round text-lg">edit</span>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-icons-round text-lg">delete_outline</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                            <img alt="Post thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jPTX70cRsZLbq2mkzfQaz2EH4nWVeDU8OvW6GEN9cyhTvSFDtD4NrjfHr50XvxInSumSVTatfHpVQX4v1HchjC69LMx8SU-BpKhPsEeDX6HhmqpoXCris4patGRRV8ZFx7mLpHd5YSDe5iVE-vNt85u8BDgVlYwRnDCM-NIxkUUvHKuKZ75BXVH6eycwNkwIbkLQowDd7ZjmrTvKntENP8RUIzWqUDoEa0aG9WKHFIvKTZu4u2T8J_HZn4ftj1pXa6iGjxJzqaG5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1">5 Refreshing Mocktails for Your Summer Party</span>
                                            <span className="text-xs text-slate-500">856 Views • 4 Comments</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-center">
                                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">Recipes</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-medium">Marco Rossi</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">Draft</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-center text-slate-500">Oct 22, 2024</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-icons-round text-lg">edit</span>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-icons-round text-lg">delete_outline</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">Showing 1 to 2 of 24 results</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>
                            <span className="material-icons-round text-sm">chevron_left</span>
                        </button>
                        <button className="px-3.5 py-1.5 rounded-lg bg-primary text-slate-900 font-bold text-sm">1</button>
                        <button className="px-3.5 py-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">2</button>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-icons-round text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500 text-center">
                <p>© 2024 Fresqo E-commerce. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdminBlog;
