import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const toggleDarkTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display antialiased page-home transition-colors duration-300";
    }, []);

    return (
        <div className="min-h-screen">
            

            <header className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-mint dark:bg-gray-800 rounded-full">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-primary">Now Available: Variety Pack</span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-serif font-black leading-tight">
                                Drop. <br />
                                <span className="text-primary italic">Fizz.</span> <br />
                                Sip.
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                                Elevate your sparkling water with artisanal drink bombs. Natural ingredients, zero sugar, and an explosion of flavor in every glass.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-primary text-white font-bold rounded shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                                    Shop Now
                                </button>
                                <button className="px-8 py-4 bg-charcoal text-white font-bold rounded shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all">
                                    Learn More
                                </button>
                            </div>
                            <div className="flex items-center space-x-4 pt-4">
                                <div className="flex -space-x-2">
                                    <img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbnLZ9OV33_LpQjQp1CGMSXc0p1l17FQfAsG1N39Ff3_81iwE_h4NW29OlG5Xx112sGTO6SZ4AZgk4xf33XglO5CrSqOzTGT86-UaIHr5NHgFoXruwDMig-ykm5eAh85wrCCzIb-QONqZkq7tkdzX6z2eHk3-43F6J3AVVilWvcULgeqqUrE92OTdVg3Jr4vab7traemBPlDarBHqj3GDIGPq2c7AtL7DtkxBOGZji6yUa-UGLRvakJMIxeGMjFpKjRM1WHRDKulo" />
                                    <img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB16V4U2QywiW-1CwFw4oUHrLaczfO7ne_qeHdNhEFA5_IPS38b_uU8oSk0M1eng-uG7Qmo3GuBBXnt-67WgTO28fH2pwCJsP6nPVe84-Hnu2PVukaA59ggJn4S-_XenU-5NNqK_BllsZfEO75MBkykyTcmeXLhFNhw0TH6mrscA8DaoD6m-NBwHD-6rMXbUUYJZKm2YhhH_AvDTT6It2AZd3gPvNlvyJltYGcodvvmiHm1mQ2xf9lxxhknWMiTedZkVPLxIbYgagPx" />
                                    <img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBob0qyDa_6UBoI7_Y2XSwrL7sE34Amk8S9J-LHsfcoXXOldX2QbYtIYvrLIOJFFHZuJUvgCMCBj5XDUqBdqMohhO1YgPJrHiJsqqD89E4jCQFqh3tEA3NSJ2-iQB6mZs3UV1S7GVHuWZdCVIyMi-uO8kqBbonc6vI_WuIyYOTnTJwK5nVrv8XI5dKdOsx-IUj5N3rUwsq_yuDK_4gsBll9ks2XnLi7o7SNVT9wfHZJxQklD5gslMm-BO7_Xl_tAwPrzr2K03jIr34L" />
                                </div>
                                <p className="text-sm font-medium"><span className="font-bold text-primary">12k+</span> happy sippers</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 hero-gradient rounded-3xl -rotate-2 scale-105 transition-transform group-hover:rotate-0"></div>
                            <div className="relative p-8 lg:p-12">
                                <img alt="Freshqo Fizz Bomb in glass" className="rounded-2xl shadow-2xl transform transition-transform group-hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtC5Aft7uHs33AY1g9OsnoraITYTIH--A28RMdBAQp16nyuXvWRnOwRUSWeKIJpXsFHrAqe52lYiUczyRW1kF_BTJBkvSc55_ipNAJLjwgJ1Ka--3Mh4FphlTErPsjVBuL0V2BM24N0A8G4vgL7d9RITDP9CkIXrU0BvxOqhl8A-Imcd__CUQkOfvuhZUTdj3OfpUXNdYCHlVdQ0994p5zzbvFdNEPalFLx07dMbcu8LuuJZRjhkI4DRNqXjc8YcSmW_00TLJuLzg7" />
                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded shadow-xl border border-gray-100 dark:border-gray-700">
                                    <p className="text-3xl font-black text-primary">0%</p>
                                    <p className="text-xs font-bold uppercase text-gray-400">Added Sugar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-black mb-4">Pure Magic in 4 Steps</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="group text-center">
                            <div className="w-32 h-32 bg-mint dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-charcoal dark:text-primary">water_drop</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Drop</h3>
                            <p className="text-gray-500 dark:text-gray-400">Choose your favorite flavor and drop the bomb into a glass.</p>
                        </div>
                        <div className="group text-center">
                            <div className="w-32 h-32 bg-peach dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-charcoal dark:text-primary">local_drink</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Add Soda</h3>
                            <p className="text-gray-500 dark:text-gray-400">Pour in your favorite sparkling water or soda base.</p>
                        </div>
                        <div className="group text-center">
                            <div className="w-32 h-32 bg-mint dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-charcoal dark:text-primary">auto_awesome</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Watch Fizz</h3>
                            <p className="text-gray-500 dark:text-gray-400">Wait a few seconds for the beautiful effervescent reaction.</p>
                        </div>
                        <div className="group text-center">
                            <div className="w-32 h-32 bg-peach dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-charcoal dark:text-primary">celebration</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                            <p className="text-gray-500 dark:text-gray-400">Sip and enjoy your fresh, artisanal beverage!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-4xl font-serif font-black mb-4">Our Signature Flavors</h2>
                            <p className="text-gray-600 dark:text-gray-400">Crafted with real fruit extracts and botanicals.</p>
                        </div>
                        <Link className="text-primary font-bold hover:underline flex items-center gap-1" to="/shop">
                            View All Products <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="product-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group transition-all">
                            <div className="relative overflow-hidden aspect-square">
                                <img alt="Lime Zest Fizz" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV55y0YHzvSDkFxLyDuFwDwO1BgXxu5-6koZusgyq31rmq7cKKENz5cZJ5hzlz5nOa7wpSy8zZkKDF5JAfxBy6P9aMp2yhdplF7DC-jaq9GLl6kUZbn9UWt1f1uFSCHOF0PZLbmnX2TkWhEdyN6juMnOFfRAAZXWjBNhwPRHFlxYQEpFpBvqS8W8IU2TP31YBNOxFE_IeJGh-pgplPrJPTCqmb6RIwCPWNVC6yXFwOljQ_Z4yPWotRYptTaLWGApeV_F8kdVCm1Bbm" />
                                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">New</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold text-gray-500">4.9 (128 reviews)</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1">Lime Zest Blast</h3>
                                <p className="text-primary font-black text-xl mb-4">$24.00 <span className="text-xs text-gray-400 font-normal">/ Pack of 6</span></p>
                                <button className="pre-order-btn w-full py-3 bg-charcoal text-white font-bold rounded flex items-center justify-center gap-2 transition-all">
                                    Pre-Order
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                </button>
                            </div>
                        </div>
                        <div className="product-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group transition-all">
                            <div className="relative overflow-hidden aspect-square">
                                <img alt="Peach Dream Fizz" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWMsCdV1D7Osg4jWuQlCiEP4CKkoT-cU9Wphd2LQDf1dCkTBmCKg-5TDD2oKtpGDwIVzdMyW3ylclO0PnjP8_5LxuAHuCw7cTBhqQYmoRTCrJYNn9wW3EtnmMkUYLTABmE17AdGJwDhRgAzLi9VC5JYh4jRLPwqX-77U0pK4VRPxBn3gtK6tBIrRS5RJaeAmX2kcY2eZYJEFJQkGD0uBYVkui47H02tKP00RolhZ7F_Ndx6XMWOWxoRHQprXAIR0FuVLR4gxa-_0P" />
                                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-charcoal">Delivery: Oct 12</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold text-gray-500">4.8 (94 reviews)</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1">Peach Dream</h3>
                                <p className="text-primary font-black text-xl mb-4">$24.00 <span className="text-xs text-gray-400 font-normal">/ Pack of 6</span></p>
                                <button className="pre-order-btn w-full py-3 bg-charcoal text-white font-bold rounded flex items-center justify-center gap-2 transition-all">
                                    Pre-Order
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                </button>
                            </div>
                        </div>
                        <div className="product-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group transition-all">
                            <div className="relative overflow-hidden aspect-square">
                                <img alt="Berry Bliss Fizz" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-h_rwVmBqr4HyXVx4v3pMsxKg9TvRbi6qUcNLyMU1cg5u9fUOGc9EOwjhJCTAUubTXXlTzLUNNuzhiBmE_xiP-CX9JOWbFiRI_HBAojZnvLpkC-b5vU8lOqnpVZKc0HFJlr7bcV5tyrUIzgAhHW7bhXmFrzCyL8RfYkENPyEXWmRHLUbeLbpcrYS0mmxHogGF5Dgbhb-CwfaHdaq0ZSrNQdgROI4yczKrnOznzWil8Sn2aKLG7pfHq_2_RNA-scrNj5gHJBEFtPUM" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold text-gray-500">5.0 (215 reviews)</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1">Wild Berry Bliss</h3>
                                <p className="text-primary font-black text-xl mb-4">$26.00 <span className="text-xs text-gray-400 font-normal">/ Pack of 6</span></p>
                                <button className="pre-order-btn w-full py-3 bg-charcoal text-white font-bold rounded flex items-center justify-center gap-2 transition-all">
                                    Pre-Order
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                </button>
                            </div>
                        </div>
                        <div className="product-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group transition-all">
                            <div className="relative overflow-hidden aspect-square">
                                <img alt="Variety Pack" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl18XUZ3jT3jPmXTpsipMcH_-oIPUEqyTjOMv4gXMAeAkKrArlT1WSdn7orv5raMSUSJ196NCHyAtlNg8Re25yOwZcb9KwMM7wkS22YNcDFi13YEaArp8qFSAJ73s9kk7h27Mr-qdoZniyRoJ7Zy_KQ7KJRISigFhDWljEudg0PTQ2_YEJLEoZvAdPHft-soyC13Hmvf_38XYQlJkppCWDBbg5HiUGEXzaLQvx9qgu-4b8Z2kX0pFciu4qZ_5vculDCYkFW9vZpuRo" />
                                <span className="absolute top-4 left-4 bg-charcoal text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Best Seller</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
                                    <span className="text-xs font-bold text-gray-500">4.9 (512 reviews)</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1">Classic Variety Pack</h3>
                                <p className="text-primary font-black text-xl mb-4">$45.00 <span className="text-xs text-gray-400 font-normal">/ Pack of 12</span></p>
                                <button className="pre-order-btn w-full py-3 bg-charcoal text-white font-bold rounded flex items-center justify-center gap-2 transition-all">
                                    Pre-Order
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-charcoal dark:bg-gray-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-serif font-black text-white mb-4">Why Freshqo</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[var(--color-card-dark)] border border-gray-800 p-8 rounded-2xl flex flex-col items-start transition-all hover:border-primary border-opacity-50 group">
                            <h3 className="text-2xl font-bold text-primary mb-6">Premium Ingredients</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Real fruit extracts, natural herbs, and zero artificial sweeteners. We use only the best nature has to offer.
                            </p>
                        </div>
                        <div className="bg-[var(--color-card-dark)] border border-gray-800 p-8 rounded-2xl flex flex-col items-start transition-all hover:border-peach border-opacity-50">
                            <h3 className="text-2xl font-bold text-peach mb-6">Party Ready</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Impress your guests with instant mocktails. Perfect for baby showers, brunches, and sober-curious gatherings.
                            </p>
                        </div>
                        <div className="bg-[var(--color-card-dark)] border border-gray-800 p-8 rounded-2xl flex flex-col items-start transition-all hover:border-primary border-opacity-50">
                            <h3 className="text-2xl font-bold text-primary mb-6">Easy to Use</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                No messy syrups, no complicated recipes. Consistent flavor every single time in a convenient tablet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900" id="faq">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-black mb-4">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="space-y-4">
                        <details className="group border-b border-gray-100 dark:border-gray-800 pb-4">
                            <summary className="flex justify-between items-center cursor-pointer py-4 focus:outline-none">
                                <h3 className="text-xl font-bold text-primary">Are Freshqo bombs sugar-free?</h3>
                                <span className="material-symbols-outlined expand-icon transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                                Yes! All Freshqo bombs are crafted with 100% natural sweeteners and fruit extracts, containing zero added sugars or artificial flavors.
                            </div>
                        </details>
                        <details className="group border-b border-gray-100 dark:border-gray-800 pb-4">
                            <summary className="flex justify-between items-center cursor-pointer py-4 focus:outline-none">
                                <h3 className="text-xl font-bold hover:text-primary transition-colors">How long do they take to dissolve?</h3>
                                <span className="material-symbols-outlined expand-icon transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                                Typically, a Freshqo bomb takes about 30-45 seconds to fully dissolve in sparkling water, creating a perfectly mixed, effervescent drink.
                            </div>
                        </details>
                        <details className="group border-b border-gray-100 dark:border-gray-800 pb-4" open>
                            <summary className="flex justify-between items-center cursor-pointer py-4 focus:outline-none">
                                <h3 className="text-xl font-bold hover:text-primary transition-colors">Do you ship internationally?</h3>
                                <span className="material-symbols-outlined expand-icon transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                                Currently we ship to the US, Canada, and UK. We're working on expanding to more countries soon!
                            </div>
                        </details>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
