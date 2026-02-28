import React from 'react';

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
                    <button className="border-b-2 border-primary text-primary py-4 px-1 text-sm font-semibold flex items-center gap-2">
                        <span className="material-icons-round text-lg">tune</span> General
                    </button>
                    <button className="text-slate-500 dark:text-slate-400 hover:text-primary py-4 px-1 text-sm font-semibold flex items-center gap-2 transition-colors">
                        <span className="material-icons-round text-lg">security</span> Security
                    </button>
                    <button className="text-slate-500 dark:text-slate-400 hover:text-primary py-4 px-1 text-sm font-semibold flex items-center gap-2 transition-colors">
                        <span className="material-icons-round text-lg">palette</span> Appearance
                    </button>
                </nav>
            </div>

            <div className="max-w-4xl space-y-8 flex-1">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                        <h2 className="text-lg font-bold">General Information</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Update your store's basic identity and contact details.</p>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Store Name</label>
                                <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none" type="text" defaultValue="Fresqo E-commerce" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Support Email</label>
                                <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none" type="email" defaultValue="support@fresqo.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold">Store Description</label>
                            <textarea className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none" rows="3" defaultValue="Premium cocktail mixers and beverage kits for the modern lifestyle."></textarea>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                        <h2 className="text-lg font-bold">Regional Settings</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Set your preferred currency and time formats.</p>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-2">Base Currency</label>
                                <p className="text-lg font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-700 w-full">₹ INR</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Timezone</label>
                                <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none">
                                    <option>(GMT+05:30) India Standard Time</option>
                                    <option>(GMT-05:00) Eastern Time</option>
                                    <option>(GMT+00:00) UTC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 mt-10">
                    <button className="px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all">
                        Discard Changes
                    </button>
                    <button className="px-8 py-2.5 bg-primary hover:bg-[#94D12C] text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 transition-all">
                        Save Configuration
                    </button>
                </div>
            </div>

            <footer className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-sm text-slate-500 flex-shrink-0">
                <p>© 2024 Fresqo E-commerce. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AdminSettings;
