import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function DashboardLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        // Set page-wide classes for the dashboard area
        document.body.className = "bg-background-light dark:bg-background-dark text-fresqo-charcoal dark:text-gray-100 transition-colors duration-200 page-dashboard min-h-screen";
    }, []);

    // Helper to determine if a sidebar link is active
    const isActive = (path) => {
        if (path === '/dashboard' && location.pathname === '/dashboard') return true;
        if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Shared Sidebar Navigation */}
                    <aside className="w-full md:w-64 flex-shrink-0 md:sticky md:top-28 md:self-start h-auto md:h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                        <nav className="flex flex-col h-full space-y-1">
                            <Link
                                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all ${isActive('/dashboard/profile') ? 'font-bold sidebar-active shadow-sm' : 'font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                to="/dashboard/profile"
                            >
                                <span className="material-icons mr-3 text-xl">person</span>
                                My Profile
                            </Link>

                            <Link
                                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all ${isActive('/dashboard') && !location.pathname.includes('/profile') && !location.pathname.includes('/address') && !location.pathname.includes('/wishlist') ? 'font-bold sidebar-active shadow-sm' : 'font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                to="/dashboard"
                            >
                                <span className="material-icons mr-3 text-xl">shopping_bag</span>
                                My Orders
                            </Link>

                            <Link
                                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all ${isActive('/dashboard/address') ? 'font-bold sidebar-active shadow-sm' : 'font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                to="/dashboard/address"
                            >
                                <span className="material-icons mr-3 text-xl">location_on</span>
                                My Address
                            </Link>

                            <Link
                                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all ${isActive('/dashboard/wishlist') ? 'font-bold sidebar-active shadow-sm' : 'font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                to="/dashboard/wishlist"
                            >
                                <span className="material-icons mr-3 text-xl">favorite_border</span>
                                Wishlist
                            </Link>

                            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                {user ? (
                                    <button
                                        className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                                        onClick={() => {
                                            logout();
                                            navigate('/');
                                        }}
                                    >
                                        <span className="material-icons mr-3 text-xl">logout</span>
                                        Logout
                                    </button>
                                ) : (
                                    <Link className="flex items-center px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all" to="/login">
                                        <span className="material-icons mr-3 text-xl">login</span>
                                        Sign In
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content Area - Injected by Router */}
                    <main className="flex-1">
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    );
}

export default DashboardLayout;
