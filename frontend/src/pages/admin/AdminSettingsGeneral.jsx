import React from 'react';

function AdminSettingsGeneral() {
    return (
        <div className="space-y-8 animate-fade-in-up">
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



            <div className="flex items-center justify-end gap-4 mt-10">
                <button className="px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all">
                    Discard Changes
                </button>
                <button className="px-8 py-2.5 bg-primary hover:bg-[#94D12C] text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 transition-all">
                    Save Configuration
                </button>
            </div>
        </div>
    );
}

export default AdminSettingsGeneral;
