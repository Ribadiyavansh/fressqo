import React from 'react';
import { Link } from 'react-router-dom';

function AdminBlogEditor() {
    return (
        <div className="flex-1 flex flex-col font-display bg-background-light dark:bg-background-dark min-w-0">
            {/* Header */}
            <header className="h-16 bg-white dark:bg-[#1E293B] border-b border-border-light dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <Link to="/admin/blog" className="p-2 hover:bg-background-light dark:hover:bg-slate-800 rounded-full text-neutral-green dark:text-slate-400 transition-colors">
                        <span className="material-icons-round">arrow_back</span>
                    </Link>
                    <h2 className="text-xl font-bold text-charcoal dark:text-white">Add New Blog Post</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-bold text-neutral-green dark:text-slate-300 bg-background-light dark:bg-slate-800 hover:bg-border-light dark:hover:bg-slate-700 rounded-lg transition-all border border-transparent">
                        Save as Draft
                    </button>
                    <button className="px-5 py-2 text-sm font-bold text-slate-900 bg-primary hover:bg-[#94D12C] hover:shadow-lg hover:shadow-primary/20 rounded-lg transition-all">
                        Publish Post
                    </button>
                </div>
            </header>

            <div className="p-8 max-w-6xl mx-auto w-full overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Editor */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm">
                            <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-neutral-green dark:text-slate-400">Post Title</label>
                            <input
                                className="w-full text-3xl font-black text-charcoal dark:text-white bg-transparent border-none outline-none focus:ring-0 placeholder:text-neutral-green/30 dark:placeholder:text-slate-500 p-0 mb-2"
                                placeholder="Enter post title..."
                                type="text"
                                defaultValue="Sustainable Farming: The Freshqo Way"
                            />
                            <div className="flex items-center gap-2 text-sm text-neutral-green dark:text-slate-400">
                                <span className="material-icons-round text-sm">link</span>
                                <span>freshqo.com/blog/</span>
                                <span className="bg-primary/10 px-1 rounded text-charcoal dark:text-slate-300">sustainable-farming-the-freshqo-way</span>
                            </div>
                        </div>

                        {/* Content Editor */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-border-light dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                            <div className="bg-background-light/50 dark:bg-slate-900/50 border-b border-border-light dark:border-slate-700 p-2 flex flex-wrap gap-1">
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_bold</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_italic</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_underlined</span></button>
                                <div className="w-px h-6 bg-border-light dark:bg-slate-700 mx-1 self-center"></div>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_h1</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_h2</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_quote</span></button>
                                <div className="w-px h-6 bg-border-light dark:bg-slate-700 mx-1 self-center"></div>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_list_bulleted</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">format_list_numbered</span></button>
                                <div className="w-px h-6 bg-border-light dark:bg-slate-700 mx-1 self-center"></div>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">link</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">image</span></button>
                                <button className="p-2 rounded hover:bg-primary/20 text-charcoal dark:text-slate-300 flex items-center justify-center"><span className="material-icons-round">code</span></button>
                            </div>
                            <textarea
                                className="w-full min-h-[500px] p-8 bg-transparent border-none outline-none focus:ring-0 text-charcoal dark:text-slate-100 leading-relaxed placeholder:text-neutral-green/30 dark:placeholder:text-slate-500 text-lg resize-y"
                                placeholder="Start writing your story..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Right Column: Metadata */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Featured Image */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm">
                            <h3 className="text-sm font-bold text-charcoal dark:text-white mb-4">Featured Image</h3>
                            <div className="border-2 border-dashed border-border-light dark:border-slate-600 rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer group">
                                <div className="aspect-video bg-background-light dark:bg-slate-900 rounded flex flex-col items-center justify-center gap-2 overflow-hidden relative">
                                    <img className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-60" alt="Featured graphic" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <span className="material-icons-round text-neutral-green dark:text-slate-300 text-3xl mb-1">add_photo_alternate</span>
                                        <span className="text-xs font-bold text-charcoal dark:text-white">Replace Image</span>
                                        <span className="text-[10px] text-neutral-green dark:text-slate-400">PNG, JPG up to 10MB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Organization */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-charcoal dark:text-white mb-2">Category</label>
                                <select className="w-full bg-white dark:bg-slate-900 border-border-light dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm text-charcoal dark:text-slate-200 outline-none">
                                    <option>Mocktail Recipes</option>
                                    <option>Health & Wellness</option>
                                    <option>Product Updates</option>
                                    <option defaultValue>Sustainability</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-charcoal dark:text-white mb-2">Author</label>
                                <div className="flex items-center gap-2 border border-border-light dark:border-slate-700 rounded-lg p-2 bg-background-light/30 dark:bg-slate-900/50">
                                    <div className="size-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">AR</div>
                                    <span className="text-sm font-medium text-charcoal dark:text-slate-200 flex-1">Alex Rivers</span>
                                    <span className="material-icons-round text-neutral-green dark:text-slate-400 text-sm">unfold_more</span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-bold text-charcoal dark:text-white">Immediate Publish</label>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                                <p className="text-xs text-neutral-green dark:text-slate-400 italic">The post will be visible to everyone as soon as you hit publish.</p>
                            </div>
                        </div>

                        {/* SEO & Tags */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm">
                            <h3 className="text-sm font-bold text-charcoal dark:text-white mb-4">SEO Tags</h3>
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-primary/20 text-charcoal dark:text-primary-light text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                        Organic <span className="material-icons-round text-[14px] cursor-pointer">close</span>
                                    </span>
                                    <span className="bg-primary/20 text-charcoal dark:text-primary-light text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                        Farm-to-Table <span className="material-icons-round text-[14px] cursor-pointer">close</span>
                                    </span>
                                </div>
                                <input className="w-full text-sm bg-transparent border-border-light dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary outline-none text-charcoal dark:text-slate-200" placeholder="Add a tag..." type="text" />
                                <p className="text-[10px] text-neutral-green dark:text-slate-400">Separate tags with commas or press enter.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Actions Floating Bar Alternative */}
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center sm:gap-4 gap-6 bg-white dark:bg-slate-800 p-4 rounded-xl border border-border-light dark:border-slate-700 shadow-lg">
                    <div className="flex items-center gap-4 text-sm w-full sm:w-auto justify-center sm:justify-start">
                        <span className="flex items-center gap-1 text-neutral-green dark:text-slate-400">
                            <span className="material-icons-round text-base">schedule</span>
                            Last saved 2 minutes ago
                        </span>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-2.5 text-sm font-bold text-charcoal dark:text-white bg-white dark:bg-slate-800 border border-border-light dark:border-slate-600 hover:bg-background-light dark:hover:bg-slate-700 rounded-lg transition-all">
                            <span className="material-icons-round text-base">visibility</span>
                            Preview
                        </button>
                        <button className="flex-1 sm:flex-none px-8 py-2.5 text-sm font-bold text-slate-900 bg-primary hover:shadow-lg hover:shadow-primary/30 rounded-lg transition-all text-center">
                            Publish Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBlogEditor;
