import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminProductEditor() {
    const [imagePreview, setImagePreview] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setShowToast(true);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className="flex-1 overflow-y-auto font-display bg-background-light dark:bg-background-dark text-charcoal dark:text-slate-100 relative">

            {/* Success Toast */}
            {showToast && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
                    <div className="bg-[#f0fdf4] border border-[#bbf7d0] px-6 py-4 rounded-3xl shadow-lg flex items-center gap-4 min-w-[320px]">
                        <div className="bg-[#16a34a] text-white rounded-full p-1 flex items-center justify-center">
                            <span className="material-icons-round text-sm">check</span>
                        </div>
                        <span className="text-[#166534] font-medium text-lg">Image successfully uploaded</span>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-border-light dark:border-slate-800 px-8 py-6 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div>
                        <Link to="/admin/products" className="inline-flex items-center text-sm font-medium text-neutral-green dark:text-slate-400 hover:text-primary transition-colors mb-2">
                            <span className="material-icons-round text-sm mr-1">arrow_back</span>
                            Back to Products
                        </Link>
                        <h2 className="text-2xl font-black text-charcoal dark:text-white">Add New Product</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 rounded-lg text-sm font-bold border border-border-light dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-800 transition-colors">
                            Discard
                        </button>
                        <button className="px-5 py-2.5 rounded-lg text-sm font-bold bg-primary text-slate-900 hover:bg-[#94D12C] transition-all shadow-sm">
                            Save Product
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Primary Information */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Basic Info Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm">
                            <h3 className="text-lg font-bold mb-6">Product Details</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Product Name</label>
                                    <input className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="e.g. Organic Avocado" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Description</label>
                                    <div className="rounded-lg border border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800">
                                        <div className="flex items-center gap-4 px-4 py-2 border-b border-border-light dark:border-slate-700">
                                            <span className="material-icons-round text-xl cursor-pointer text-neutral-green dark:text-slate-400 hover:text-charcoal dark:hover:text-white">format_bold</span>
                                            <span className="material-icons-round text-xl cursor-pointer text-neutral-green dark:text-slate-400 hover:text-charcoal dark:hover:text-white">format_italic</span>
                                            <span className="material-icons-round text-xl cursor-pointer text-neutral-green dark:text-slate-400 hover:text-charcoal dark:hover:text-white">format_list_bulleted</span>
                                            <span className="material-icons-round text-xl cursor-pointer text-neutral-green dark:text-slate-400 hover:text-charcoal dark:hover:text-white">link</span>
                                        </div>
                                        <textarea className="w-full bg-transparent border-none outline-none focus:ring-0 min-h-[160px] p-4 text-charcoal dark:text-slate-100 placeholder:text-neutral-green/50 dark:placeholder:text-slate-500 resize-y" placeholder="Tell your customers about this product..."></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Product Category</label>
                                    <select className="w-full rounded-lg border-border-light dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none">
                                        <option>Select Category</option>
                                        <option>Popular</option>
                                        <option>New Arrive</option>
                                        <option>Best Seller</option>
                                        <option>Limited Adition</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Pricing & Stock Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm">
                            <h3 className="text-lg font-bold mb-6">Pricing & Inventory</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Regular Price ($)</label>
                                    <input className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="0.00" step="0.01" type="number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Discount Price ($)</label>
                                    <input className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="0.00" step="0.01" type="number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Stock Quantity</label>
                                    <input className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="0" type="number" />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Media & Meta Information */}
                    <div className="space-y-8">
                        {/* Media Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm relative">
                            <h3 className="text-lg font-bold mb-4">Product Images</h3>
                            <label className="cursor-pointer block">
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                <div className="aspect-square w-full border-2 border-dashed border-border-light dark:border-slate-700 rounded-xl flex flex-col items-center justify-center text-center p-6 bg-background-light/20 dark:bg-slate-800 group hover:border-primary transition-colors overflow-hidden relative">
                                    {imagePreview ? (
                                        <>
                                            <img src={imagePreview} alt="Product Preview" className="absolute inset-0 w-full h-full object-cover" />
                                            {/* Overlay for uploaded image */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                                <span className="material-icons-round text-white text-3xl">autorenew</span>
                                                <span className="text-white text-sm font-bold">Change Image</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-icons-round text-4xl text-neutral-green dark:text-slate-400 group-hover:text-primary transition-colors mb-3">upload_file</span>
                                            <p className="text-sm font-semibold text-charcoal dark:text-white">Drag and drop images here</p>
                                            <p className="text-xs text-neutral-green dark:text-slate-400 mt-2">Supports JPG, PNG, WEBP (Max 5MB)</p>
                                        </>
                                    )}
                                </div>
                            </label>
                        </section>

                        {/* Pre-Order Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold">Pre-Order Settings</h3>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full dark:bg-slate-700 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div className="space-y-4 opacity-40 pointer-events-none select-none">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-green dark:text-slate-400 mb-2">Estimated Delivery</label>
                                    <div className="relative">
                                        <input className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" type="date" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-green dark:text-slate-400 mb-2">Pre-Order Goal (Qty)</label>
                                    <input className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="100" type="number" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Sticky Mobile Footer (Small screens only) */}
                <div className="lg:hidden mt-12 flex flex-col gap-3 pb-8">
                    <button className="w-full py-4 rounded-xl text-sm font-bold bg-primary text-slate-900 shadow-lg">Save Product</button>
                    <button className="w-full py-4 rounded-xl text-sm font-bold border border-border-light dark:border-slate-700">Discard Changes</button>
                </div>
            </div>
        </div>
    );
}

export default AdminProductEditor;
