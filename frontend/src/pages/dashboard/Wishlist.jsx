import React from 'react';
import { Link } from 'react-router-dom';

function Wishlist() {
    return (
        <div className="flex-1 overflow-y-auto">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-gray-100 dark:border-slate-800">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                        <span className="material-icons-round text-primary text-4xl">favorite</span>
                        My Wishlist
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-medium">4 items saved for later</p>
                </div>
                <div className="mt-4 sm:mt-0 flex gap-3">
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold flex items-center gap-2">
                        <span className="material-icons-round text-[18px]">share</span> Share
                    </button>
                </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* Item 1 */}
                <div className="group bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative border border-slate-100 dark:border-slate-800">
                    <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-all shadow-sm">
                        <span className="material-icons-round text-[18px]">delete_outline</span>
                    </button>
                    <div className="relative">
                        <div className="h-56 bg-slate-50 flex items-center justify-center rounded-t-[28px] overflow-hidden">
                            <img
                                alt="Watermelon Mint Punch"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu"
                            />
                        </div>
                        <div className="absolute -bottom-3 left-6 z-10">
                            <span className="bg-[#94e339] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-[3px] border-white">IN STOCK</span>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow pt-8">
                        <div className="flex-grow">
                            <p className="text-[11px] text-[#94e339] font-bold uppercase tracking-widest mb-1.5">BEVERAGES</p>
                            <Link to="/shop">
                                <h3 className="font-extrabold text-[18px] text-[#1e293b] leading-tight line-clamp-2 min-h-[44px]">Watermelon Mint Punch</h3>
                            </Link>

                            <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm text-slate-400 line-through font-medium">$28.00</span>
                                    <div className="flex items-baseline gap-1 flex-wrap">
                                        <span className="text-2xl font-black text-[#1e293b]">$24.00</span>
                                        <span className="text-sm text-slate-400 font-medium italic">/pack</span>
                                    </div>
                                </div>
                                <div className="bg-[#f0fdf4] text-[#84cc16] px-2.5 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                                    <span className="material-icons-round text-[14px]">star</span>
                                    <span className="text-sm font-bold">4.8</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="w-full bg-[#94e339] hover:bg-[#86d02e] text-[#1e293b] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                <span className="material-icons-round text-[20px]">shopping_cart</span>
                                <span className="text-[15px]">Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="group bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative border border-slate-100 dark:border-slate-800">
                    <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-all shadow-sm">
                        <span className="material-icons-round text-[18px]">delete_outline</span>
                    </button>
                    <div className="relative">
                        <div className="h-56 bg-slate-50 flex items-center justify-center rounded-t-[28px] overflow-hidden">
                            <img
                                alt="Variety Pack"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-"
                            />
                        </div>
                        <div className="absolute -bottom-3 left-6 z-10">
                            <span className="bg-[#94e339] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-[3px] border-white">IN STOCK</span>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow pt-8">
                        <div className="flex-grow">
                            <p className="text-[11px] text-[#94e339] font-bold uppercase tracking-widest mb-1.5">ASSORTED KITS</p>
                            <Link to="/shop">
                                <h3 className="font-extrabold text-[18px] text-[#1e293b] leading-tight line-clamp-2 min-h-[44px]">Party Variety Pack</h3>
                            </Link>

                            <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm text-slate-400 line-through font-medium opacity-0">$0.00</span>
                                    <div className="flex items-baseline gap-1 flex-wrap">
                                        <span className="text-2xl font-black text-[#1e293b]">$42.00</span>
                                        <span className="text-sm text-slate-400 font-medium italic">/pack</span>
                                    </div>
                                </div>
                                <div className="bg-[#f0fdf4] text-[#84cc16] px-2.5 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                                    <span className="material-icons-round text-[14px]">star</span>
                                    <span className="text-sm font-bold">4.9</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="w-full bg-[#94e339] hover:bg-[#86d02e] text-[#1e293b] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                <span className="material-icons-round text-[20px]">shopping_cart</span>
                                <span className="text-[15px]">Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="group bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative border border-slate-100 dark:border-slate-800 opacity-80">
                    <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-all shadow-sm">
                        <span className="material-icons-round text-[18px]">delete_outline</span>
                    </button>
                    <div className="relative">
                        <div className="h-56 bg-slate-50 flex items-center justify-center rounded-t-[28px] overflow-hidden relative">
                            <img
                                alt="Mango Tango Splash"
                                className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSe2uRXyItlHClo4A3hFbmuOsPW0h_gqBEVV2mUbHVXiykzyaxREnvAZs4wjUz-uwXIhyDkLdNsimzXaL71AYdSHtOKgmcL3FZKtpyoRv6FLSTlX-UD1s808h6dveJjgRQGxAxMjqHHJBFAQj23KXxHJxXTkWOvMoUfNVUKUl_IcPQ7zyDq3sS2dbiL-9f-DgiXay7XF8nQdrAQtcOYR47Alo3xaOv1rLQGAiquPSoaq25yYKAucojw8CJ9JVthGSzMOHmpwEU_bG"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/60 backdrop-blur-[2px]">
                                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-xl hover:scale-105 transition-transform">Notify Me</button>
                            </div>
                        </div>
                        <div className="absolute -bottom-3 left-6 z-10">
                            <span className="bg-slate-400 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-[3px] border-white">OUT OF STOCK</span>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow pt-8">
                        <div className="flex-grow">
                            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">LIMITED EDITION</p>
                            <Link to="/shop">
                                <h3 className="font-extrabold text-[18px] text-slate-600 leading-tight line-clamp-2 min-h-[44px]">Mango Tango Splash</h3>
                            </Link>

                            <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm text-slate-300 line-through font-medium opacity-0">$0.00</span>
                                    <div className="flex items-baseline gap-1 flex-wrap">
                                        <span className="text-2xl font-black text-slate-600">$18.50</span>
                                        <span className="text-sm text-slate-400 font-medium italic">/pack</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 text-slate-400 px-2.5 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
                                    <span className="material-icons-round text-[14px]">star</span>
                                    <span className="text-sm font-bold">4.7</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button disabled className="w-full bg-slate-100 text-slate-400 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                                <span className="material-icons-round text-[20px]">remove_shopping_cart</span>
                                <span className="text-[15px]">Out of Stock</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Empty State Card (Just for demo/UI feel) */}
                <Link to="/shop" className="group border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center min-h-[350px] p-8 text-center hover:border-primary hover:bg-primary/5 transition-all">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                        <span className="material-icons-round text-3xl text-slate-400 group-hover:text-primary transition-colors">add</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Explore More</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Discover new flavors and add them to your wishlist.</p>
                    <span className="mt-6 text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Go to Shop <span className="material-icons-round text-[16px]">arrow_forward</span>
                    </span>
                </Link>

            </div>
        </div>
    );
}

export default Wishlist;
