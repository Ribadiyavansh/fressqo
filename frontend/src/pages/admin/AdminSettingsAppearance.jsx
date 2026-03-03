import React, { useState } from 'react';

function AdminSettingsAppearance() {
    // Dynamic theme state
    const [themeConfig, setThemeConfig] = useState({
        primary: '#A3E635',
        accent: '#0F172A',
        background: '#F8FAFC'
    });

    // Mock image state for preview
    const [logoPreview, setLogoPreview] = useState('/fresqo-logo.png');
    const [faviconPreview, setFaviconPreview] = useState('/favicon.png'); // Assuming a default exists

    const handleColorChange = (key, value) => {
        setThemeConfig(prev => ({ ...prev, [key]: value }));
    };

    const handleImageChange = (e, setPreview) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    const applyThemeToDocument = () => {
        // In a real app, this would save to backend/context and update Tailwind config dynamically
        // or set CSS variables. For this demo, we mock it.
        alert(`Theme settings saved!\nPrimary: ${themeConfig.primary}\nAccent: ${themeConfig.accent}\nBg: ${themeConfig.background}`);
    };

    return (
        <div className="space-y-8 pb-10 animate-fade-in-up">
            {/* Logo Management */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Logo Management</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Update your primary brand assets.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white block">Primary Logo</label>
                        <div className="flex items-center space-x-6">
                            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center overflow-hidden p-2">
                                <img src={logoPreview} alt="Primary Logo" className="w-full h-full object-contain" />
                            </div>
                            <label className="cursor-pointer px-4 py-2 border border-slate-200 dark:border-slate-600 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                Change Logo
                                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setLogoPreview)} />
                            </label>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white block">Favicon</label>
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center overflow-hidden p-1">
                                <img src={faviconPreview} alt="Favicon" className="w-full h-full object-contain" />
                            </div>
                            <label className="cursor-pointer px-4 py-2 border border-slate-200 dark:border-slate-600 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                Change Icon
                                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setFaviconPreview)} />
                            </label>
                        </div>
                    </div>
                </div>
            </section>

            {/* Theme Colors */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Theme Colors</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Define your brand's color palette.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white">Primary Color</label>
                        <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2">
                            <input
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0 bg-transparent overflow-hidden shrink-0"
                                type="color"
                                value={themeConfig.primary}
                                onChange={(e) => handleColorChange('primary', e.target.value)}
                            />
                            <div className="flex flex-col flex-1 pl-2 border-l border-slate-200 dark:border-slate-700">
                                <input
                                    type="text"
                                    value={themeConfig.primary.toUpperCase()}
                                    onChange={(e) => handleColorChange('primary', e.target.value)}
                                    className="text-sm font-mono text-slate-600 dark:text-slate-300 bg-transparent border-none outline-none focus:ring-0 p-0"
                                    maxLength={7}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white">Accent Color</label>
                        <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2">
                            <input
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0 bg-transparent overflow-hidden shrink-0"
                                type="color"
                                value={themeConfig.accent}
                                onChange={(e) => handleColorChange('accent', e.target.value)}
                            />
                            <div className="flex flex-col flex-1 pl-2 border-l border-slate-200 dark:border-slate-700">
                                <input
                                    type="text"
                                    value={themeConfig.accent.toUpperCase()}
                                    onChange={(e) => handleColorChange('accent', e.target.value)}
                                    className="text-sm font-mono text-slate-600 dark:text-slate-300 bg-transparent border-none outline-none focus:ring-0 p-0"
                                    maxLength={7}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white">Background Color</label>
                        <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2">
                            <input
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0 bg-transparent overflow-hidden shrink-0"
                                type="color"
                                value={themeConfig.background}
                                onChange={(e) => handleColorChange('background', e.target.value)}
                            />
                            <div className="flex flex-col flex-1 pl-2 border-l border-slate-200 dark:border-slate-700">
                                <input
                                    type="text"
                                    value={themeConfig.background.toUpperCase()}
                                    onChange={(e) => handleColorChange('background', e.target.value)}
                                    className="text-sm font-mono text-slate-600 dark:text-slate-300 bg-transparent border-none outline-none focus:ring-0 p-0"
                                    maxLength={7}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Management */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Banner Management</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Manage promotional announcements on your homepage.</p>
                </div>
                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Banner Text</label>
                        <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white outline-none" type="text" defaultValue="Free shipping on all orders over $50! Shop now." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Banner Link</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-slate-400 material-icons-round text-lg">link</span>
                            <input className="w-full pl-10 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white outline-none" type="url" defaultValue="https://freshqo.com/collections/new-arrivals" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Typography</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Select font families for headings and body content.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Heading Font</label>
                        <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white outline-none">
                            <option>Inter</option>
                            <option>Plus Jakarta Sans</option>
                            <option>Satoshi</option>
                            <option>Montserrat</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold">Body Font</label>
                        <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white outline-none">
                            <option>Inter</option>
                            <option>Roboto</option>
                            <option>Open Sans</option>
                            <option>Outfit</option>
                        </select>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-end gap-6 mt-10">
                <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
                    Discard Changes
                </button>
                <button onClick={applyThemeToDocument} className="px-8 py-3 bg-primary hover:bg-[#94D12C] text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                    <span className="material-icons-round text-lg">check_circle</span>
                    Save Appearance
                </button>
            </div>
        </div>
    );
}

export default AdminSettingsAppearance;
