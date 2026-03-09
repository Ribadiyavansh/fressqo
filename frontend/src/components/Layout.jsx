import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartSidebar from './CartSidebar';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, ArrowUp, Sparkles, ShoppingCart, Menu, X, LogOut, User } from 'lucide-react';
import api from '../utils/api';

function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { totalItems } = useCart();
    const { user, logout, avatar } = useAuth();

    // Newsletter State
    const [email, setEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState({ loading: false, success: false, error: '' });

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setNewsletterStatus({ loading: true, success: false, error: '' });
        try {
            await api.post('/newsletter/subscribe', { email });
            setNewsletterStatus({ loading: false, success: true, error: '' });
            setEmail('');
            setTimeout(() => setNewsletterStatus({ loading: false, success: false, error: '' }), 3000);
        } catch (error) {
            setNewsletterStatus({
                loading: false,
                success: false,
                error: error.response?.data?.message || 'Subscription failed.'
            });
        }
    };

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
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const applyTheme = (e) => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        applyTheme(mediaQuery);
        mediaQuery.addEventListener('change', applyTheme);
        return () => mediaQuery.removeEventListener('change', applyTheme);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display antialiased transition-colors duration-300">
            <nav className="fixed w-full top-0 z-50 glass-nav border-b border-gray-100 dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
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
                                            {(user.role === 'admin' || user.isAdmin) && (
                                                <Link to="/admin" onClick={() => setIsUserMenuOpen(false)} className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                                    Admin Panel
                                                </Link>
                                            )}
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setIsUserMenuOpen(false);
                                                    navigate('/');
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2 mt-1"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Log Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link className="hidden md:flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors" to="/login">
                                    <User className="w-4 h-4" /> Login
                                </Link>
                            )}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center"
                            >
                                <ShoppingCart className="w-6 h-6 text-charcoal dark:text-white" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">{totalItems}</span>
                                )}
                            </button>
                            <button className="md:hidden p-2 text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                            <div className="space-y-2">
                                {(user.role === 'admin' || user.isAdmin) && (
                                    <Link className="block px-3 py-3 rounded-xl text-base font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all" to="/admin" onClick={() => setIsMobileMenuOpen(false)}>Admin Panel</Link>
                                )}
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMobileMenuOpen(false);
                                        navigate('/');
                                    }}
                                    className="w-full text-left px-3 py-3 rounded-xl text-base font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center gap-3"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Log Out
                                </button>
                            </div>
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

            <footer className="bg-charcoal text-white pt-16 pb-6 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="inline-flex items-center gap-2 mb-6">
                                <span className="font-serif text-3xl font-bold text-white">Fresqo</span>
                                <Sparkles className="w-5 h-5 text-primary" />
                            </Link>
                            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                                Premium cocktail & mocktail balls. Drop, fizz, and celebrate with the perfect drink every time.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.instagram.com/fresqo.in?igsh=MWc4N3h6MXVkY2cyeQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-charcoal transition-colors"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                        Our Flavours
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#how-it-works" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                        How It Works
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#faq" className="text-gray-400 text-sm hover:text-primary transition-colors">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span className="text-gray-400 text-sm">fresqo.in@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-sm">+91 98765 43210</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-sm">
                                        Bapa Sitaram Chowk,<br />
                                        Mavdi, Rajkot-360004, Gujarat
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-serif text-lg font-bold mb-6">Stay Updated</h4>
                            <p className="text-gray-400 mb-4 text-sm">
                                Subscribe for exclusive offers and new flavour announcements.
                            </p>
                            <form className="flex flex-col gap-2" onSubmit={handleNewsletterSubmit}>
                                <div className="flex gap-2 w-full">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        className="flex-1 px-4 py-3 bg-white/10 border border-transparent rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm"
                                    />
                                    <button
                                        type="submit"
                                        disabled={newsletterStatus.loading}
                                        className="px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm disabled:opacity-50"
                                    >
                                        {newsletterStatus.loading ? '...' : 'Subscribe'}
                                    </button>
                                </div>
                                {newsletterStatus.success && <p className="text-primary text-xs font-semibold">Successfully subscribed!</p>}
                                {newsletterStatus.error && <p className="text-red-400 text-xs">{newsletterStatus.error}</p>}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Fresqo. All Rights Reserved. Made with 💚 in India
                        </p>

                        <div className="flex items-center gap-6">
                            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
