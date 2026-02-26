import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    useEffect(() => {
        // Automatically apply dark mode based on system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (e) => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        // Apply initially
        applyTheme(mediaQuery);

        // Listen for changes
        mediaQuery.addEventListener('change', applyTheme);

        return () => mediaQuery.removeEventListener('change', applyTheme);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display antialiased transition-colors duration-300">
            <nav className="sticky top-0 z-50 glass-nav border-b border-gray-100 dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-10 h-10 bg-[var(--page-primary)] rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-white font-bold">bubble_chart</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-charcoal dark:text-white">Freshqo</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/">Home</Link>
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/shop">Shop</Link>
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/dashboard">Dashboard</Link>
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/blog">Blog</Link>
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/about">About</Link>
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/contact">Contact</Link>
                        </div>
                        <div className="flex items-center space-x-5">
                            <Link className="text-sm font-semibold hover:text-[var(--page-primary)] transition-colors" to="/">Login</Link>
                            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center">
                                <span className="material-symbols-outlined text-charcoal dark:text-white">shopping_cart</span>
                                <span className="absolute -top-1 -right-1 bg-[var(--page-primary)] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">3</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex-grow">
                <Outlet />
            </div>

            <footer className="bg-charcoal text-white pt-20 pb-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-[var(--page-primary)] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-lg">bubble_chart</span>
                                </div>
                                <span className="text-xl font-extrabold tracking-tight">Freshqo</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Reinventing the way you drink. Better flavors, cleaner ingredients, zero waste.
                            </p>
                            <div className="flex space-x-4">
                                <Link className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--page-primary)] transition-colors" to="/">
                                    <span className="material-symbols-outlined">public</span>
                                </Link>
                                <Link className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--page-primary)] transition-colors" to="/">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/shop">Shop All</Link></li>
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/about">Our Story</Link></li>
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/">Subscriptions</Link></li>
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/">Bulk Orders</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Support</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/">FAQ</Link></li>
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/">Shipping Policy</Link></li>
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/">Returns &amp; Refunds</Link></li>
                                <li><Link className="hover:text-[var(--page-primary)] transition-colors" to="/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Stay Frizzy</h4>
                            <p className="text-gray-400 text-sm mb-4">Join our list for exclusive releases and 10% off your first order.</p>
                            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <input className="bg-gray-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--page-primary)]" placeholder="Email Address" type="email" />
                                <button className="bg-[var(--page-primary)] text-white font-bold py-3 rounded hover:bg-opacity-90 transition-all">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">© 2024 Freshqo. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <img alt="Visa" className="h-6 grayscale opacity-50 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyPwvWMjsc9HwVEjFS5uFMEHNwBMjS8FzEAWZSwUX5NXBbBL4z57aok0u5gXplwO8QbtL6xmqOXFZKVsU5Mzi2rnuFY_B7gODQkgE_laxq-kWDZd_uHHO5FHyBgVwJcpwlc6wLhSIaoOO31XP_1uLniXGVDdnuANOA6iHH8O0uvNJDgrU9OKuMV9RgU6gpVbjDf9l_2jPZfxauO6hGvA5RwVdRWkEhug1cssI93oWnAny_OIGnNSf6CBq8fTilrmcg4FYFpBuKyA6U" />
                            <img alt="Mastercard" className="h-6 grayscale opacity-50 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3d3CqctDvPhwn15mxDIcNHM3dvPwJZmqbI3cRiuqOcussDqwgaEUBfNk4I6gEvY6wtoG5pHsWY7Jm13_Q2cGKvQMVLXO2Qq7Bsi0GFwBrlLJD-Fo4MHhuBYgOWKwtr3vFIbO_uhIWrl7NgQqn2P84EOLpPdIYNMFdvJqkW4t07blp87VTOOK6LZvoG0vy4KSA0kxB-eXYqpTNMzYBYVHi2rSTYkxi2ASK7Fzt05hdM1m5uC3gf35q-uxn7KWoXssIz9sMjAQuZcT" />
                            <img alt="Paypal" className="h-6 grayscale opacity-50 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPGXGU6ZRSS398g9ZKv1MQNYgP7OzQrgzJYy-1YbcICZLsFhm4Jy46jtHoZN8aV-nUbIFXXxdEvuZZpHy0RtL-tpkBXKOog_2MxPgGRfey68mp8Daw5l3Hum4LRDhld3cx9M_ca_xdkfRGjH77I8dfhNw6XdtMeLkvTb9187vWH06TrT2d5S2zd1jLvr8nG97ohess3fLN1HfmfgPlINssmerAQFeXuDkAw1CCING6bTxsF7KAyJSmTYXXaykuOz7zTq5LD9_YLw2z" />
                            <img alt="Apple Pay" className="h-6 grayscale opacity-50 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC50Za37rK1n1iugv9pdxsA_rmcL9cileErU6iMyfAtUkEw3CTST_gEfaEtRoogYTWjM1gvkshnrDAByxe6FvcO-H5a_NEJs7GBBOJom4k-Mo2eEL4ZJlOyHUXByYqNXc6DNiwHcA681Lhy12iVapvsXQFtVRQGW9lwpiJ1FCgrYGhOo7BZiRnW1H8vdzYP-9GYvc1Me3-QuwSWHh8K00WKSVjaDRJ6fGAq3xkF6ogKOfN9kPQtvvxT3qXEgJtscTVsEivKOccR8zyS" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
