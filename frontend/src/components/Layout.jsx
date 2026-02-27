import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <nav className="fixed w-full top-0 z-50 glass-nav border-b border-gray-100 dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <img src="/fresqo-logo.svg" alt="Fresqo Logo" className="w-10 h-10" />
                            <span className="text-2xl font-extrabold tracking-tight text-charcoal dark:text-white">Fresqo</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/">Home</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/shop">Shop</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/blog">Blog</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/about">About</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/contact">Contact</Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link className="hidden md:block text-sm font-semibold hover:text-primary transition-colors" to="/">Login</Link>
                            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center">
                                <span className="material-symbols-outlined text-charcoal dark:text-white">shopping_cart</span>
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">3</span>
                            </button>
                            <button className="md:hidden p-2 text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark px-4 pt-2 pb-6 space-y-1 shadow-lg">
                        <Link className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/">Home</Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/shop">Shop</Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/dashboard">Dashboard</Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/blog">Blog</Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/about">About</Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/contact">Contact</Link>
                        <hr className="my-2 border-gray-100 dark:border-gray-800" />
                        <Link className="block px-3 py-2 rounded-md text-base font-bold text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMobileMenuOpen(false)} to="/">Login</Link>
                    </div>
                )}
            </nav>

            <div className="flex-grow pt-20">
                <Outlet />
            </div>

            <footer className="bg-charcoal text-white pt-12 pb-6 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <img src="/fresqo-logo.svg" alt="Fresqo Logo" className="w-8 h-8" />
                                <span className="text-xl font-extrabold tracking-tight">Fresqo</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Reinventing the way you drink. Better flavors, cleaner ingredients, zero waste.
                            </p>
                            <div className="flex space-x-4">
                                <Link className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" to="/">
                                    <span className="material-symbols-outlined">public</span>
                                </Link>
                                <Link className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" to="/">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Support</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><Link className="hover:text-primary transition-colors" to="/">FAQ</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Shipping Policy</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Returns &amp; Refunds</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Stay Frizzy</h4>
                            <p className="text-gray-400 text-sm mb-4">Join our list for exclusive releases and 10% off your first order.</p>
                            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <input className="bg-gray-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Email Address" type="email" />
                                <button className="bg-primary text-white font-bold py-3 rounded hover:bg-opacity-90 transition-all">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 flex justify-center">
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">© 2026 Fresqo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
