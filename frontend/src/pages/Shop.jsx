import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    const toggleDarkTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 page-shop min-h-screen";
    }, []);

    return (
        <>
            <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <span className="material-symbols-rounded text-white">eco</span>
                            </div>
                            <span className="font-display text-2xl font-bold tracking-tight text-brand-dark dark:text-white">Freshqo</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium" to="/">Home</Link>
                            <Link className="text-primary font-bold border-b-2 border-primary" to="/shop">Shop</Link>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium" to="/dashboard">Dashboard</Link>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium" to="/blog">Blog</Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-rounded">search</span>
                            </button>
                            <button className="p-2 text-slate-500 hover:text-primary transition-colors relative">
                                <span className="material-symbols-rounded">shopping_bag</span>
                                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-[10px] text-white rounded-full flex items-center justify-center">2</span>
                            </button>
                            <button className="p-2 text-slate-500 hover:text-primary transition-colors" onClick={toggleDarkTheme} id="darkModeToggle">
                                <span className="material-symbols-rounded dark:hidden">dark_mode</span>
                                <span className="material-symbols-rounded hidden dark:block">light_mode</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12">
                    <nav aria-label="Breadcrumb" className="flex text-sm mb-4 text-slate-500 dark:text-slate-400">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link className="hover:text-primary" to="/">Home</Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <span className="material-symbols-rounded text-sm">chevron_right</span>
                                    <Link className="ml-1 md:ml-2 hover:text-primary font-semibold text-slate-900 dark:text-white" to="/shop">Shop</Link>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4">
                        Beverage <span className="text-primary">Bombs</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Experience the explosion of flavor with our premium cocktail and mocktail bombs. Simply drop, fizz, and enjoy.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
                        <section>
                            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                                Price Range
                            </h3>
                            <div className="space-y-4">
                                <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer" max="200" min="10" type="range" />
                                <div className="flex justify-between text-sm font-medium text-slate-600 dark:text-slate-400">
                                    <span>$10</span>
                                    <span>$200</span>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200 dark:border-slate-800" />

                        <section>
                            <h3 className="font-display font-bold text-lg mb-4">Categories</h3>
                            <div className="space-y-3">
                                <label className="flex items-center group cursor-pointer">
                                    <input defaultChecked className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">All Flavors</span>
                                </label>
                                <label className="flex items-center group cursor-pointer">
                                    <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Citrus Blends</span>
                                </label>
                                <label className="flex items-center group cursor-pointer">
                                    <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Berry Infusions</span>
                                </label>
                                <label className="flex items-center group cursor-pointer">
                                    <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Tropical Hits</span>
                                </label>
                            </div>
                        </section>

                        <hr className="border-slate-200 dark:border-slate-800" />

                        <section>
                            <h3 className="font-display font-bold text-lg mb-4">Quick Filters</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 rounded-full text-xs font-bold border border-primary bg-primary/10 text-primary">New Arrivals</button>
                                <button className="px-4 py-2 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary">Popular</button>
                                <button className="px-4 py-2 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary">Best Sellers</button>
                            </div>
                        </section>
                    </aside>

                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Showing <span className="text-slate-900 dark:text-white">12</span> results</p>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-slate-500">Sort by:</span>
                                <select className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest First</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                            <div className="product-card-hover bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group">
                                <div className="relative aspect-square overflow-hidden">
                                    <img alt="Variety Pack of 4" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS26s_J-TFEwI1jWbDQ1fwHQtjY9F6t8LBXqktBfVLY8XZ_Tew3p9xkLS_C9mAaCFrpVGmYxkaKtjkHhBZ3N83mNugzGMuXvYjOZgSN0FMzbOT02lFrkfu9ON9VthDsc98RX0sAPrWWWF_mQ3yJV_R7UxoPzGafued0LTtbW0-5yhd8h9v9gW34d41eOBiLtzwKYMMFl8k7h3CD0u4pb-matnJEpi7bcrL24lVB-O85Y0YvOMEUuhgsIQ8_-228g6v6p-3zbpzdZzm" />
                                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Bestseller</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-accent">
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-2">(48)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Variety Pack of 4</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">4 Unique Flavors</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$34.00</span>
                                        <button className="bg-primary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors flex items-center gap-2">
                                            Pre-Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-hover bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group">
                                <div className="relative aspect-square overflow-hidden">
                                    <img alt="Cosmopolitan Bomb" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB35W357N0GqFe2yNpzLmCB9jiBoTDIXV5DrphIeVbaMdEuqsCcE25RXHx-lhoj-2OJe-R8uQOXM710hhlzNHe8f6E6qNYG271xHhqDJLAEQturjkF3Bxuu4AEHAILTkoZr2UmpUOqst6yLv_FbvndJMpP6OPjLlO4p-X-YnueSIDpDb5ktAly13KpsrQ-tND32JwSv5vlol1lnY3vZVsSNkYSzgZQbs87RhUAKjVo0IXq20vr_d8d6lOxAdEsQVQYI7gxq3nruRL6z" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-accent">
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm text-slate-300">star</span>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-2">(32)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Cosmopolitan Chill</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Classic Cranberry</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$12.00</span>
                                        <button className="bg-primary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors">
                                            Pre-Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-hover bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group">
                                <div className="relative aspect-square overflow-hidden">
                                    <img alt="Orange Mimosa Bomb" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpa9ZYkms3DqmFFSn_Qq1Z5MEMBDogxU38LdWk79l0_FtUIUvdHHm18i77oMybgZqh3BS8zXQBAxajLkyOkVGs2alBk8iu6b-5hXydIUg5XpF9GaZjm4yJwdOrwVBpCtrA_rKj47yni6Vir7N9c0ge3T7ug3JeMR6i_9wsIsM2PTi82YVbpzrHHvcbWG6wru8KlPjcqfBRUhWe4sRB0ppUDFEfbboriKFSni-7xzjgyd9177xNfOiclGb5ITxsIx84-l3QW0yP2FPw" />
                                    <span className="absolute top-4 left-4 bg-accent text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">New</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-accent">
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-2">(15)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Sunset Mimosa</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Citrus Burst</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$12.00</span>
                                        <button className="bg-primary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors">
                                            Pre-Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-hover bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group">
                                <div className="relative aspect-square overflow-hidden">
                                    <img alt="Margarita Bomb" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6vzpgMkTdd5yURclxu4Nla640I1WC6aya_9R5IOnMth5woi7bVYYT6VJ4OdFuNi1RdVA8njsZW2YVMr9r3W4Abu0V4CjTOw1LYhUhK1Kq-8z116xWv8QVRmxKe9PG1C75-A3PL89EOYHutYKnFFcGDJfWPk7dJfnPa-M2EapTEasglt96IADLm_7_7ztw5ViO0GBzdIhw4oNPJ7XIMFvyLeY6uAONec1UKp1-15UHBswuW_CxFvWf-U-DgRx1VYjHvv-ONMmsCtq" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-accent">
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star_half</span>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-2">(67)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Classic Margarita</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Zesty Lime &amp; Salt</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$12.00</span>
                                        <button className="bg-primary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors">
                                            Pre-Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-hover bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group">
                                <div className="relative aspect-square overflow-hidden">
                                    <img alt="Purple Rain" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPBXwWxvpRSnR3bYxhLmklgvMlnPoEWU9TKvhZUvUTvAEO-3yIhfWGzNfsVYKnJHnZfOZ18UpKNMVIpmGfKhme2LwRKHi2jw13DRZhv9MTE0l8khPpIU9JkLdsxJxRB4iB6Ifc1XDb0AbR7ez27jVua-dhrs_JfwcWoq24MsjS_leTioGx5WafUN3q-RGWuZbYSt-Lhyaw6adR7-MNPByHE2aZ_F2VTm0B6L2fyB1DAcxvatul1PJZIAFNyQonVCLUZc4T1lvKROf" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-accent">
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-2">(21)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Purple Haze</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Lavender Dream</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$14.00</span>
                                        <button className="bg-primary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors">
                                            Pre-Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-hover bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group">
                                <div className="relative aspect-square overflow-hidden">
                                    <img alt="Watermelon Fizz" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBParfUWvUMXx_6QAryRnPo68RyDYfL1UlNLpGnjcN7dmCYfu6CLHkPN7VBH6T1erydSNHqVUESvn6sRVjMYrvjJtUJDaleUD6uOXIc3c-33srByiQl1roXz38oDqDAle35YE8iPOnqjxpiqTsKXV67e54DtM_rt83-el3rfrfSO-IbH62056sfYJ5qMwpwJZom0AJ8GCRuDbkfR2B9_FDPEM8JwbplCQErjaxzMfQ3_8TrNauxIFi561Ou02w2vIXpTAFlx_MsU-PD" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-accent">
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm">star</span>
                                            <span className="material-symbols-rounded text-sm text-slate-300">star</span>
                                        </div>
                                        <span className="text-xs text-slate-400 ml-2">(89)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Watermelon Fizz</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Summer Refreshment</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$12.00</span>
                                        <button className="bg-primary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors">
                                            Pre-Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav className="flex justify-center mt-16 space-x-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <span className="material-symbols-rounded">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all">3</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <span className="material-symbols-rounded">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </main>

            <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <span className="material-symbols-rounded text-white">eco</span>
                                </div>
                                <span className="font-display text-2xl font-bold tracking-tight text-white">Freshqo</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Elevating your drink experience one bomb at a time. Natural flavors, premium ingredients, and pure joy in every glass.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-display font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><Link className="hover:text-primary transition-colors" to="/">Privacy Policy</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Terms &amp; Conditions</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Shipping Policy</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Return Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-display font-bold mb-6">Information</h4>
                            <ul className="space-y-4">
                                <li><Link className="hover:text-primary transition-colors" to="/">Home Page</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">FAQs</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Contact Us</Link></li>
                                <li><Link className="hover:text-primary transition-colors" to="/">Membership</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-display font-bold mb-6">Newsletter</h4>
                            <p className="text-sm text-slate-400 mb-4">Stay updated with our latest flavors.</p>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input className="bg-slate-800 border-none rounded-lg text-sm focus:ring-primary w-full px-4" placeholder="Email address" type="email" />
                                <button className="bg-primary hover:bg-emerald-600 p-2 rounded-lg text-white transition-colors">
                                    <span className="material-symbols-rounded">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">© 2024 Freshqo Bombs. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" to="/">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </Link>
                            <Link className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" to="/">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Shop;
