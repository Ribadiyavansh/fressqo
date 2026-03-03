import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function AdminSettings() {
    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full flex flex-col">
            <header className="flex justify-between items-center mb-8 flex-shrink-0">
                <div>
                    <h1 className="text-3xl font-bold">System Settings</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your store's configuration and preferences.</p>
                </div>
                {/* Bell icon removed */}
            </header>

            <div className="border-b border-slate-200 dark:border-slate-800 mb-8 flex-shrink-0">
                <nav className="flex space-x-8">
                    <NavLink end to="/admin/settings" className={({ isActive }) => `py-4 px-1 text-sm font-semibold flex items-center gap-2 transition-colors ${isActive ? 'border-b-2 border-primary text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}>
                        <span className="material-icons-round text-lg">tune</span> General
                    </NavLink>
                    <NavLink to="/admin/settings/security" className={({ isActive }) => `py-4 px-1 text-sm font-semibold flex items-center gap-2 transition-colors ${isActive ? 'border-b-2 border-primary text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}>
                        <span className="material-icons-round text-lg">security</span> Security
                    </NavLink>
                    <NavLink to="/admin/settings/appearance" className={({ isActive }) => `py-4 px-1 text-sm font-semibold flex items-center gap-2 transition-colors ${isActive ? 'border-b-2 border-primary text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}>
                        <span className="material-icons-round text-lg">palette</span> Appearance
                    </NavLink>
                </nav>
            </div>

            <div className="max-w-4xl space-y-8 flex-1">
                <Outlet />
            </div>

            <footer className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500 flex-shrink-0">
                <p>© 2024 Fresqo E-commerce. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdminSettings;
