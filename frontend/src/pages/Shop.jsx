import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 page-shop min-h-screen";
    }, []);

    return (
        <div className="flex-1 w-full">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4">
                        Beverage <span className="text-primary">Bombs</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Experience the explosion of flavor with our premium cocktail and mocktail bombs. Simply drop, fizz, and enjoy.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <aside className="w-full lg:w-64 space-y-8 flex-shrink-0 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 lg:bg-transparent lg:p-0 lg:border-none">
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
                                    <img alt="Variety Pack of 4" loading="lazy" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS26s_J-TFEwI1jWbDQ1fwHQtjY9F6t8LBXqktBfVLY8XZ_Tew3p9xkLS_C9mAaCFrpVGmYxkaKtjkHhBZ3N83mNugzGMuXvYjOZgSN0FMzbOT02lFrkfu9ON9VthDsc98RX0sAPrWWWF_mQ3yJV_R7UxoPzGafued0LTtbW0-5yhd8h9v9gW34d41eOBiLtzwKYMMFl8k7h3CD0u4pb-matnJEpi7bcrL24lVB-O85Y0YvOMEUuhgsIQ8_-228g6v6p-3zbpzdZzm" />
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
                                    <img alt="Cosmopolitan Bomb" loading="lazy" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB35W357N0GqFe2yNpzLmCB9jiBoTDIXV5DrphIeVbaMdEuqsCcE25RXHx-lhoj-2OJe-R8uQOXM710hhlzNHe8f6E6qNYG271xHhqDJLAEQturjkF3Bxuu4AEHAILTkoZr2UmpUOqst6yLv_FbvndJMpP6OPjLlO4p-X-YnueSIDpDb5ktAly13KpsrQ-tND32JwSv5vlol1lnY3vZVsSNkYSzgZQbs87RhUAKjVo0IXq20vr_d8d6lOxAdEsQVQYI7gxq3nruRL6z" />
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
                                    <img alt="Orange Mimosa Bomb" loading="lazy" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpa9ZYkms3DqmFFSn_Qq1Z5MEMBDogxU38LdWk79l0_FtUIUvdHHm18i77oMybgZqh3BS8zXQBAxajLkyOkVGs2alBk8iu6b-5hXydIUg5XpF9GaZjm4yJwdOrwVBpCtrA_rKj47yni6Vir7N9c0ge3T7ug3JeMR6i_9wsIsM2PTi82YVbpzrHHvcbWG6wru8KlPjcqfBRUhWe4sRB0ppUDFEfbboriKFSni-7xzjgyd9177xNfOiclGb5ITxsIx84-l3QW0yP2FPw" />
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
                                    <img alt="Margarita Bomb" loading="lazy" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6vzpgMkTdd5yURclxu4Nla640I1WC6aya_9R5IOnMth5woi7bVYYT6VJ4OdFuNi1RdVA8njsZW2YVMr9r3W4Abu0V4CjTOw1LYhUhK1Kq-8z116xWv8QVRmxKe9PG1C75-A3PL89EOYHutYKnFFcGDJfWPk7dJfnPa-M2EapTEasglt96IADLm_7_7ztw5ViO0GBzdIhw4oNPJ7XIMFvyLeY6uAONec1UKp1-15UHBswuW_CxFvWf-U-DgRx1VYjHvv-ONMmsCtq" />
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
                                    <img alt="Purple Rain" loading="lazy" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPBXwWxvpRSnR3bYxhLmklgvMlnPoEWU9TKvhZUvUTvAEO-3yIhfWGzNfsVYKnJHnZfOZ18UpKNMVIpmGfKhme2LwRKHi2jw13DRZhv9MTE0l8khPpIU9JkLdsxJxRB4iB6Ifc1XDb0AbR7ez27jVua-dhrs_JfwcWoq24MsjS_leTioGx5WafUN3q-RGWuZbYSt-Lhyaw6adR7-MNPByHE2aZ_F2VTm0B6L2fyB1DAcxvatul1PJZIAFNyQonVCLUZc4T1lvKROf" />
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
                                    <img alt="Watermelon Fizz" loading="lazy" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBParfUWvUMXx_6QAryRnPo68RyDYfL1UlNLpGnjcN7dmCYfu6CLHkPN7VBH6T1erydSNHqVUESvn6sRVjMYrvjJtUJDaleUD6uOXIc3c-33srByiQl1roXz38oDqDAle35YE8iPOnqjxpiqTsKXV67e54DtM_rt83-el3rfrfSO-IbH62056sfYJ5qMwpwJZom0AJ8GCRuDbkfR2B9_FDPEM8JwbplCQErjaxzMfQ3_8TrNauxIFi561Ou02w2vIXpTAFlx_MsU-PD" />
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
        </div>
    );
}

export default Shop;
