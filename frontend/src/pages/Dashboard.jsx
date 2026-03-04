import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-fresqo-charcoal dark:text-white">My Orders</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Track and manage your recent Fresqo purchases.</p>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-64">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <span className="material-icons text-lg">search</span>
                    </span>
                    <input className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-fresqo-charcoal focus:ring-primary focus:border-primary text-sm" placeholder="Search orders..." type="text" />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                    <button className="px-4 py-2 text-xs font-semibold bg-primary text-fresqo-charcoal rounded-full whitespace-nowrap">All Orders</button>
                    <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-fresqo-charcoal border border-gray-200 dark:border-gray-700 rounded-full whitespace-nowrap">Processing</button>
                    <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-fresqo-charcoal border border-gray-200 dark:border-gray-700 rounded-full whitespace-nowrap">Shipped</button>
                    <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-fresqo-charcoal border border-gray-200 dark:border-gray-700 rounded-full whitespace-nowrap">Delivered</button>
                </div>
            </div>

            <div className="bg-white dark:bg-fresqo-charcoal border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm transition-colors">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-fresqo-charcoal/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Order ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Total</th>
                                <th className="relative px-6 py-4" scope="col">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-fresqo-charcoal divide-y divide-gray-100 dark:divide-gray-800">
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-fresqo-charcoal dark:text-white">#FQ-92841</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oct 24, 2023</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                        Shipped
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-fresqo-charcoal dark:text-white">₹124.50</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link className="text-primary hover:text-fresqo-charcoal dark:hover:text-white font-bold transition-colors" to="/order-tracking">View Details</Link>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-fresqo-charcoal dark:text-white">#FQ-92750</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oct 18, 2023</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                        Delivered
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-fresqo-charcoal dark:text-white">₹89.20</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link className="text-primary hover:text-fresqo-charcoal dark:hover:text-white font-bold transition-colors" to="/order-tracking">View Details</Link>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-fresqo-charcoal dark:text-white">#FQ-92102</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oct 05, 2023</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                        Processing
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-fresqo-charcoal dark:text-white">₹210.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link className="text-primary hover:text-fresqo-charcoal dark:hover:text-white font-bold transition-colors" to="/order-tracking">View Details</Link>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-fresqo-charcoal dark:text-white">#FQ-91883</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Sep 28, 2023</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                        Delivered
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-fresqo-charcoal dark:text-white">₹45.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link className="text-primary hover:text-fresqo-charcoal dark:hover:text-white font-bold transition-colors" to="/order-tracking">View Details</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">24</span> results
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recommended for You</h2>
                    <Link className="text-sm font-bold text-primary underline" to="/shop">Shop New Flavours</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Rec 1 */}
                    <div className="group bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative border border-slate-100 dark:border-slate-800">
                        <div className="relative">
                            <div className="h-56 bg-slate-50 flex items-center justify-center rounded-t-[28px] overflow-hidden">
                                <img alt="Cocktail Mix" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu" />
                            </div>
                            <div className="absolute -bottom-3 left-6 z-10">
                                <span className="bg-[#94e339] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-[3px] border-white">IN STOCK</span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow pt-8">
                            <div className="flex-grow">
                                <p className="text-[11px] text-[#94e339] font-bold uppercase tracking-widest mb-1.5">BEVERAGES</p>
                                <h3 className="font-extrabold text-[18px] text-[#1e293b] leading-tight line-clamp-2 min-h-[44px]">Watermelon Mint Punch</h3>

                                <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-sm text-slate-400 line-through font-medium opacity-0">₹0.00</span>
                                        <div className="flex items-baseline gap-1 flex-wrap">
                                            <span className="text-2xl font-black text-[#1e293b]">₹24.00</span>
                                            <span className="text-sm text-slate-400 font-medium italic">/pack</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#f0fdf4] text-[#84cc16] px-2.5 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                                        <span className="material-icons-round text-[14px]">star</span>
                                        <span className="text-sm font-bold">4.8</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-[#94e339] hover:bg-[#86d02e] text-[#1e293b] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                    <span className="material-icons-round text-[20px]">shopping_cart</span>
                                    <span className="text-[15px]">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Rec 2 */}
                    <div className="group bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative border border-slate-100 dark:border-slate-800">
                        <div className="relative">
                            <div className="h-56 bg-slate-50 flex items-center justify-center rounded-t-[28px] overflow-hidden">
                                <img alt="Zesty Lemon" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSe2uRXyItlHClo4A3hFbmuOsPW0h_gqBEVV2mUbHVXiykzyaxREnvAZs4wjUz-uwXIhyDkLdNsimzXaL71AYdSHtOKgmcL3FZKtpyoRv6FLSTlX-UD1s808h6dveJjgRQGxAxMjqHHJBFAQj23KXxHJxXTkWOvMoUfNVUKUl_IcPQ7zyDq3sS2dbiL-9f-DgiXay7XF8nQdrAQtcOYR47Alo3xaOv1rLQGAiquPSoaq25yYKAucojw8CJ9JVthGSzMOHmpwEU_bG" />
                            </div>
                            <div className="absolute -bottom-3 left-6 z-10">
                                <span className="bg-[#94e339] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-[3px] border-white">IN STOCK</span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow pt-8">
                            <div className="flex-grow">
                                <p className="text-[11px] text-[#94e339] font-bold uppercase tracking-widest mb-1.5">CITRUS</p>
                                <h3 className="font-extrabold text-[18px] text-[#1e293b] leading-tight line-clamp-2 min-h-[44px]">Zesty Lemon Squeeze</h3>

                                <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-sm text-slate-400 line-through font-medium opacity-0">₹0.00</span>
                                        <div className="flex items-baseline gap-1 flex-wrap">
                                            <span className="text-2xl font-black text-[#1e293b]">₹18.50</span>
                                            <span className="text-sm text-slate-400 font-medium italic">/pack</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#f0fdf4] text-[#84cc16] px-2.5 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                                        <span className="material-icons-round text-[14px]">star</span>
                                        <span className="text-sm font-bold">4.6</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-[#94e339] hover:bg-[#86d02e] text-[#1e293b] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                    <span className="material-icons-round text-[20px]">shopping_cart</span>
                                    <span className="text-[15px]">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Rec 3 */}
                    <div className="group bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative border border-slate-100 dark:border-slate-800">
                        <div className="relative">
                            <div className="h-56 bg-slate-50 flex items-center justify-center rounded-t-[28px] overflow-hidden">
                                <img alt="Variety Pack" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-" />
                            </div>
                            <div className="absolute -bottom-3 left-6 z-10">
                                <span className="bg-[#94e339] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-[3px] border-white">IN STOCK</span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow pt-8">
                            <div className="flex-grow">
                                <p className="text-[11px] text-[#94e339] font-bold uppercase tracking-widest mb-1.5">ASSORTED</p>
                                <h3 className="font-extrabold text-[18px] text-[#1e293b] leading-tight line-clamp-2 min-h-[44px]">Variety Pack of 4</h3>

                                <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-sm text-slate-400 line-through font-medium opacity-0">₹0.00</span>
                                        <div className="flex items-baseline gap-1 flex-wrap">
                                            <span className="text-2xl font-black text-[#1e293b]">₹42.00</span>
                                            <span className="text-sm text-slate-400 font-medium italic">/pack</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#f0fdf4] text-[#84cc16] px-2.5 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                                        <span className="material-icons-round text-[14px]">star</span>
                                        <span className="text-sm font-bold">4.9</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-[#94e339] hover:bg-[#86d02e] text-[#1e293b] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                    <span className="material-icons-round text-[20px]">shopping_cart</span>
                                    <span className="text-[15px]">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
