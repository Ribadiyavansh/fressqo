import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartSidebar from './CartSidebar';

function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { totalItems } = useCart();
    const { user, logout, avatar } = useAuth();

    const getNavLinkClass = (path) => {
        const isActive = path !== '/' && location.pathname.startsWith(path);
        return `text-sm font-semibold transition-colors ${isActive
            ? 'text-primary'
            : 'text-charcoal dark:text-gray-100 hover:text-primary'
            }`;
    };

    const getMobileNavLinkClass = (path) => {
        const isActive = path !== '/' && location.pathname.startsWith(path);
        return `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
            ? 'bg-primary/10 text-primary font-bold'
            : 'text-charcoal dark:text-gray-100 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
            }`;
    };

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
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-16 h-16 object-contain" />
                            <span className="text-2xl font-extrabold tracking-tight text-charcoal dark:text-white mt-1">Fresqo</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link className={getNavLinkClass('/')} to="/">Home</Link>
                            <Link className={getNavLinkClass('/shop')} to="/shop">Shop</Link>
                            <Link className={getNavLinkClass('/dashboard')} to="/dashboard">Dashboard</Link>
                            <Link className={getNavLinkClass('/blog')} to="/blog">Blog</Link>
                            <Link className={getNavLinkClass('/about')} to="/about">About</Link>
                            <Link className={getNavLinkClass('/contact')} to="/contact">Contact</Link>
                        </div>
                        <div className="flex items-center space-x-3 md:space-x-4 pr-1">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="w-10 h-10 rounded-full bg-primary text-slate-900 flex items-center justify-center font-bold shadow-sm hover:scale-105 transition-transform overflow-hidden border-2 border-primary/30"
                                    >
                                        {avatar ? (
                                            <img src={avatar} alt="User Avatar" className="w-full h-full object-cover bg-white dark:bg-slate-800 scale-[1.15]" />
                                        ) : (
                                            user.name.charAt(0).toUpperCase()
                                        )}
                                    </button>

                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-3 w-56 rounded-xl shadow-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 py-2 animate-fade-in z-50">
                                            <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setIsUserMenuOpen(false);
                                                    navigate('/');
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2 mt-1"
                                            >
                                                <span className="material-symbols-outlined text-sm">logout</span>
                                                Log Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link className="hidden md:block text-sm font-semibold hover:text-primary transition-colors" to="/login">Login</Link>
                            )}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-charcoal dark:text-white">shopping_cart</span>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">{totalItems}</span>
                                )}
                            </button>
                            <button className="md:hidden p-2 text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-[100%] left-0 w-full h-[calc(100vh-80px)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 px-4 pt-6 pb-20 space-y-2 shadow-2xl overflow-y-auto">
                        <Link className={getMobileNavLinkClass('/')} to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link className={getMobileNavLinkClass('/shop')} to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                        <Link className={getMobileNavLinkClass('/dashboard')} to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                        <Link className={getMobileNavLinkClass('/blog')} to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                        <Link className={getMobileNavLinkClass('/about')} to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <Link className={getMobileNavLinkClass('/contact')} to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        <hr className="border-gray-100 dark:border-gray-800 my-6" />
                        {user ? (
                            <button
                                onClick={() => {
                                    logout();
                                    setIsMobileMenuOpen(false);
                                    navigate('/');
                                }}
                                className="w-full text-left px-3 py-3 rounded-xl text-base font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center gap-3"
                            >
                                <span className="material-symbols-outlined">logout</span>
                                Log Out
                            </button>
                        ) : (
                            <Link className="block px-3 py-3 rounded-xl text-base font-bold text-charcoal dark:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-center" to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                        )}
                    </div>
                )}
            </nav>

            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <footer className="bg-charcoal text-white pt-12 pb-6 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-14 h-14 object-contain bg-white rounded-full p-1" />
                                <span className="text-xl font-extrabold tracking-tight mt-1">Fresqo</span>
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
