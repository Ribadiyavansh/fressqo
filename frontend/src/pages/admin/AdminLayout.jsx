import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function AdminLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const mainRef = useRef(null);

    // Auth Check
    useEffect(() => {
        if (sessionStorage.getItem('isAdminAuth') !== 'true') {
            navigate('/admin-auth');
        }
    }, [navigate]);

    // Scroll container to top on route change
    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);

    const activeLinkClass = "bg-primary/10 border-r-4 border-primary text-primary flex items-center space-x-3 p-3 rounded-lg font-medium transition-all mb-1";
    const normalLinkClass = "flex items-center space-x-3 p-3 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all mb-1";

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-200 font-display">

            {/* Mobile Header */}
            <header className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-[#1E293B] border-b border-slate-200 dark:border-slate-800 shrink-0 z-20">
                <div className="flex items-center gap-3">
                    <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-8 h-8 object-contain" />
                    <span className="text-lg font-bold">Admin Panel</span>
                </div>
                <button onClick={() => setIsMobileSidebarOpen(true)} className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <span className="material-icons-round text-[24px]">menu</span>
                </button>
            </header>

            {/* Sidebar Overlay */}
            {isMobileSidebarOpen && (
                <div className="md:hidden fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`fixed md:relative flex-shrink-0 w-64 bg-white dark:bg-[#1E293B] border-r border-slate-200 dark:border-slate-800 flex flex-col h-full z-40 transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center justify-between space-x-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Fresqo</span>
                    </div>
                    <button className="md:hidden p-2 text-slate-400 hover:text-slate-600" onClick={() => setIsMobileSidebarOpen(false)}>
                        <span className="material-icons-round">close</span>
                    </button>
                </div>

                <nav className="flex-1 px-4 mt-2 overflow-y-auto">
                    <NavLink to="/admin" end onClick={() => setIsMobileSidebarOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}>
                        <span className="material-icons-round">dashboard</span>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/admin/users" onClick={() => setIsMobileSidebarOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}>
                        <span className="material-icons-round">group</span>
                        <span>Users</span>
                    </NavLink>
                    <NavLink to="/admin/products" onClick={() => setIsMobileSidebarOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}>
                        <span className="material-icons-round">inventory_2</span>
                        <span>Products</span>
                    </NavLink>
                    <NavLink to="/admin/orders" onClick={() => setIsMobileSidebarOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}>
                        <span className="material-icons-round">shopping_bag</span>
                        <span>Orders</span>
                    </NavLink>
                    <NavLink to="/admin/blog" onClick={() => setIsMobileSidebarOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}>
                        <span className="material-icons-round">article</span>
                        <span>Blog</span>
                    </NavLink>
                    <NavLink to="/admin/settings" onClick={() => setIsMobileSidebarOpen(false)} className={location.pathname.startsWith('/admin/settings') ? activeLinkClass : normalLinkClass}>
                        <span className="material-icons-round">settings</span>
                        <span>Settings</span>
                    </NavLink>
                </nav>

                {/* Bottom User Profile Section */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Admin Profile" className="w-full h-full object-cover" />
                            ) : (
                                <span className="material-icons text-slate-500 text-sm">person</span>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                                {user?.name || "Super Admin"}
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Store Manager</p>
                        </div>
                        <span className="material-icons-round text-slate-400 text-sm cursor-pointer hover:text-slate-600 transition-colors">
                            unfold_more
                        </span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main ref={mainRef} className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark min-w-0">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
