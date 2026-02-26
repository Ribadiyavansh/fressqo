import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 page-blog min-h-screen";
    }, []);

    return (
        <div className="flex-1 w-full">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Freshqo Blog Feed</h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Discover the art of mixology, cocktail tips, and stories behind our favorite flavors. Elevate your home bar experience.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        <button className="px-6 py-2 rounded-full bg-primary text-white font-medium">All Posts</button>
                        <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium">Mixology</button>
                        <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium">Lifestyle</button>
                        <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium">Recipes</button>
                    </div>
                    <div className="relative w-full md:w-80">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-transparent focus:ring-2 focus:ring-primary rounded-full text-sm" placeholder="Search articles..." type="text" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="blog-card-mint rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Cocktail preparation with mint" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvflghOs_0m4wr7n5BDgxzUp7XKhSxGBo6ptm_VLP4eL3EQ9ZylJlCspYfi9SLEPPTRoq7ESZ8AUohJXqJs1swbLl2zpioVwTxvH7qpHcU3hSMdFqvkAnt-O2iGdYS3UCMrxrPJU96abj6GgRSrmPhdvKS9EfH-2FTqGqYF4XhESHAMek0hvXidbMIE0D5wdfTeHEP_LMo3lJFqqZask3mtkVkQoTUX_G3wuAl9sreLAiDLKtDQybWPiy8t_6fAAGaGkiu62TgcSsw" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Mixology</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">October 12, 2023</span>
                            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">Mastering the Art of the Perfect Garnish</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                Learn how to transform a simple cocktail into a visual masterpiece with these professional garnishing techniques...
                            </p>
                            <Link className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all" to="/blog">
                                Read More
                                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    <article className="blog-card-beige rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Sophisticated party scene" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSRwX4rsSXpVyasBuzGwfibwqgPvhz5FqEj9E4RtxFCciI530eVAPbaH0-b0VsCCVa02Ax9uWc-iZ3h0DlIPyM30vNQzFOAPkSgsAlm95rvgXai4liQQ3FMow1JIDjzpq60HGsr2XGZ0jNhxjJZa97B6jJebADFGkNCm9YY0Ty20wyX4tw9pXxuzBqj8hepcEAZb6OqTJzjQfxHB1T9ja2LwCmlBnB2avR12wP047dYN6GF-WHlZyxL1oF6fkHvVjSNNsVDDJoi_7x" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Lifestyle</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">October 10, 2023</span>
                            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">The Ultimate Guide to Hosting a Home Party</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                Everything you need to know about planning, hosting, and enjoying your own cocktail soirée without the stress...
                            </p>
                            <Link className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all" to="/blog">
                                Read More
                                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    <article className="blog-card-mint rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Close up of a vibrant fruit cocktail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-5rIPZ0GNXeYezI-3Kc1pABfTCv9OkHVQ8qvoHuy6DN5BIgMA7QiV_0e_AsRdgvrBJBoqfGY2BiGJHVEF5nQEmsH7LvxfBmtWoD6RL7tlgwI8qh-Pt1Yaf38VCMpzum6WpurhLr46f0lx3TQ4jNYmv7ICS-rW6AHlNEZZpW8zowjCsjUPUFRrMgfu3cuVUvPbD3Urn0r_cjtt5LtK3ZVgqv5a5orQzx7LmWxfWxnXzgQtFGy1YmxicF57K4EdCbTorv6Y3o65K-rZ" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Recipes</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">October 05, 2023</span>
                            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">Top 5 Seasonal Cocktails for Autumn</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                Embrace the cozy vibes with our curated list of seasonal cocktail recipes featuring warm spices and rich flavors...
                            </p>
                            <Link className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all" to="/blog">
                                Read More
                                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    <article className="blog-card-beige rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Classic bartender pouring drink" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANk5TSLtdFABhiRmErGXGrNYCEHu19WT3iB3S6IzcvQ5SH0T-PkuL8vmyhfaqATxEhR3tRgskd9xR_F2m1rAiph3fQKcAesm53G0-S39uuS0O3SIKaRxHQgvlOIkxCPdms-nsp05mQUNauBepFOdjo3eo574SfTDLrCJEMm-HJRWlA8KSpTY5tyrfwSovBc5qMzNnawFpWOkS6VR8dQuccn9hpCyf9h5Lpui5wmw6l4Kk0PrjcDgDgTwD8BvEfBScJyLTUzzQiFc6o" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Mixology</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">September 28, 2023</span>
                            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">Why Ice Quality Matters More Than You Think</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                The secret ingredient to a great drink isn't just the spirit—it's the science of dilution and ice clarity...
                            </p>
                            <Link className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all" to="/blog">
                                Read More
                                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    <article className="blog-card-mint rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Vibrant neon bar atmosphere" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9tQ1WdAyTCcG_QaGvWpHROMlKIwNlk41YzOXrxo5v9CH9tHYIBzMbGcA05vl3Sj5botLwKXc0A81kk-Sn7SmqJaMfq1fSFqDPbxjmn_KmErSHdjoKLq3j_psy4-3Viyzw4rWeP-zZApUOcRBi__014aUW3Zul0WnWD9hk-K6WL7xRFQpCdfU5nZvPkp_1tYXIiYFC-lK-GHkZthXeQUkuXogYAX060xsUKRtzSfZLu5RK7aWj7GtDYz6OsP6cGWsvANx5-Rd2Vc2P" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Lifestyle</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">September 20, 2023</span>
                            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">From Office to Happy Hour in 5 Minutes</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                Quick tips and effortless drink solutions for those who want to unwind immediately after a busy workday...
                            </p>
                            <Link className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all" to="/blog">
                                Read More
                                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    <article className="blog-card-beige rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Healthy ingredients and juices" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYRK1XgFU5YBcbo645kGc9l9ssgmQW3gLlJfutlgxetjn4MKQt3cDXLSwBzzt2m_sce_qC1KSOehx3kUpeJE7RZIjO_vP5xIGPaFxcH0PK0i1pBkKVdehULuinsU8UGIDpg3sAtHnUfjT3486nMtZx_RqiYEgQqt8-RLI09wCk9RMve2z7lHwYe3voCjbENO6C_G7RK9uKZq8KMvvSQbnjh5C_CXRKc1tfeIx5kL3BSMR7mtduCjEd3KrG8gqMGZAlil9ERjPMuwTx" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">Recipes</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">September 15, 2023</span>
                            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight">Fresh Ingredients: The Heart of Every Sip</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                Exploring why we prioritize natural extracts and real fruit flavors in every Freshqo product we create...
                            </p>
                            <Link className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all" to="/blog">
                                Read More
                                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>
                </div>

                <div className="mt-20 flex justify-center items-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full bg-primary text-white font-bold">1</button>
                        <button className="w-12 h-12 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 font-bold transition-colors">2</button>
                        <button className="w-12 h-12 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 font-bold transition-colors">3</button>
                    </div>
                    <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Blog;
