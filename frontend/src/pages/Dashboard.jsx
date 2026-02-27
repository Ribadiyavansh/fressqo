import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const toggleDarkTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-freshqo-charcoal dark:text-gray-100 transition-colors duration-200 page-dashboard min-h-screen";
    }, []);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white dark:bg-freshqo-charcoal border-b border-gray-200 dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-extrabold tracking-tight text-freshqo-charcoal dark:text-white">
                                FRESHQO<span className="text-primary">.</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/shop">Shop</Link>
                            <Link className="text-sm font-bold text-primary" to="/dashboard">Dashboard</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" to="/blog">Blog</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors">
                                <span className="material-icons">notifications</span>
                            </button>
                            <div className="flex items-center space-x-2 pl-4 border-l border-gray-200 dark:border-gray-700">
                                <img alt="User avatar" className="h-8 w-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaIJ3ej1JyDZDvOM8t_IKDVX4PEeuCOcF9cPJTwDoDri83yTv1RIEVaTuYuA3fSgqIq4PZxuNaFPPT3XkbNdXEtjjv3T8PihSMI2O8e2l7i2bTaLEcHSJqmDG8lx_Hq9TRvepj8dbLYHVwA8JvLO0WFRI5V1N3H5yIAODw87DL8iPhM-qU0HTZF1k9NCv8hUgQjJnYnoRdXZzTv9ycTli-tZLJJquiLegG_UthYHKVL_6WlrMvKTF13X5_1SiSOhS3jbRcmecWaV9w" />
                                <span className="text-sm font-medium hidden md:block">Alex Johnson</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <nav className="space-y-1">
                            <Link className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" to="/dashboard">
                                <span className="material-icons mr-3 text-xl">person</span>
                                My Profile
                            </Link>
                            <Link className="flex items-center px-4 py-3 text-sm font-bold rounded-lg sidebar-active shadow-sm" to="/dashboard">
                                <span className="material-icons mr-3 text-xl">shopping_bag</span>
                                My Orders
                            </Link>
                            <Link className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" to="/dashboard">
                                <span className="material-icons mr-3 text-xl">location_on</span>
                                My Address
                            </Link>
                            <Link className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" to="/dashboard">
                                <span className="material-icons mr-3 text-xl">favorite_border</span>
                                Wishlist
                            </Link>
                            <Link className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" to="/dashboard">
                                <span className="material-icons mr-3 text-xl">payments</span>
                                Saved Cards
                            </Link>
                            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                                <Link className="flex items-center px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all" to="/">
                                    <span className="material-icons mr-3 text-xl">logout</span>
                                    Logout
                                </Link>
                            </div>
                        </nav>
                    </aside>

                    <main className="flex-1">
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold text-freshqo-charcoal dark:text-white">My Orders</h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">Track and manage your recent Freshqo purchases.</p>
                        </div>

                        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="relative w-full sm:w-64">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <span className="material-icons text-lg">search</span>
                                </span>
                                <input className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-freshqo-charcoal focus:ring-primary focus:border-primary text-sm" placeholder="Search orders..." type="text" />
                            </div>
                            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                                <button className="px-4 py-2 text-xs font-semibold bg-primary text-freshqo-charcoal rounded-full whitespace-nowrap">All Orders</button>
                                <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-700 rounded-full whitespace-nowrap">Processing</button>
                                <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-700 rounded-full whitespace-nowrap">Shipped</button>
                                <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-700 rounded-full whitespace-nowrap">Delivered</button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm transition-colors">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                                    <thead className="bg-gray-50 dark:bg-freshqo-charcoal/50">
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
                                    <tbody className="bg-white dark:bg-freshqo-charcoal divide-y divide-gray-100 dark:divide-gray-800">
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-freshqo-charcoal dark:text-white">#FQ-92841</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oct 24, 2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                    Shipped
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-freshqo-charcoal dark:text-white">$124.50</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link className="text-primary hover:text-freshqo-charcoal dark:hover:text-white font-bold transition-colors" to="/dashboard">View Details</Link>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-freshqo-charcoal dark:text-white">#FQ-92750</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oct 18, 2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                    Delivered
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-freshqo-charcoal dark:text-white">$89.20</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link className="text-primary hover:text-freshqo-charcoal dark:hover:text-white font-bold transition-colors" to="/dashboard">View Details</Link>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-freshqo-charcoal dark:text-white">#FQ-92102</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Oct 05, 2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                                    Processing
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-freshqo-charcoal dark:text-white">$210.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link className="text-primary hover:text-freshqo-charcoal dark:hover:text-white font-bold transition-colors" to="/dashboard">View Details</Link>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-freshqo-charcoal dark:text-white">#FQ-91883</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Sep 28, 2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                    Delivered
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-freshqo-charcoal dark:text-white">$45.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link className="text-primary hover:text-freshqo-charcoal dark:hover:text-white font-bold transition-colors" to="/dashboard">View Details</Link>
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
                                <div className="group bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <div className="relative h-48 overflow-hidden">
                                        <img alt="Cocktail Mix" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu" />
                                        <span className="absolute top-2 left-2 bg-freshqo-charcoal text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Best Seller</span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-freshqo-charcoal dark:text-white">Watermelon Mint Punch</h3>
                                        <p className="text-sm text-gray-500 mt-1">Pack of 4 Sensation Mixes</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-lg font-extrabold">$24.00</span>
                                            <button className="bg-primary text-freshqo-charcoal p-2 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow">
                                                <span className="material-icons text-xl">add_shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <div className="relative h-48 overflow-hidden">
                                        <img alt="Zesty Lemon" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSe2uRXyItlHClo4A3hFbmuOsPW0h_gqBEVV2mUbHVXiykzyaxREnvAZs4wjUz-uwXIhyDkLdNsimzXaL71AYdSHtOKgmcL3FZKtpyoRv6FLSTlX-UD1s808h6dveJjgRQGxAxMjqHHJBFAQj23KXxHJxXTkWOvMoUfNVUKUl_IcPQ7zyDq3sS2dbiL-9f-DgiXay7XF8nQdrAQtcOYR47Alo3xaOv1rLQGAiquPSoaq25yYKAucojw8CJ9JVthGSzMOHmpwEU_bG" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-freshqo-charcoal dark:text-white">Zesty Lemon Squeeze</h3>
                                        <p className="text-sm text-gray-500 mt-1">Natural Citrus Infusion</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-lg font-extrabold">$18.50</span>
                                            <button className="bg-primary text-freshqo-charcoal p-2 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow">
                                                <span className="material-icons text-xl">add_shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white dark:bg-freshqo-charcoal border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <div className="relative h-48 overflow-hidden">
                                        <img alt="Variety Pack" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-" />
                                        <span className="absolute top-2 left-2 bg-primary text-freshqo-charcoal text-[10px] font-bold px-2 py-1 rounded uppercase">New</span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-freshqo-charcoal dark:text-white">Variety Pack of 4</h3>
                                        <p className="text-sm text-gray-500 mt-1">The Ultimate Party Starter</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-lg font-extrabold">$42.00</span>
                                            <button className="bg-primary text-freshqo-charcoal p-2 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow">
                                                <span className="material-icons text-xl">add_shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <button className="fixed bottom-6 right-6 bg-freshqo-charcoal dark:bg-white text-white dark:text-freshqo-charcoal p-3 rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors" onClick={toggleDarkTheme}>
                <span className="material-icons">dark_mode</span>
            </button>
        </>
    );
}

export default Dashboard;
