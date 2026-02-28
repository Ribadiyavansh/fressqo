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
                <div className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full relative">
                    <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                        <span className="material-icons-round text-[20px]">delete_outline</span>
                    </button>
                    <div className="relative h-48 overflow-hidden bg-slate-50 dark:bg-slate-800/50">
                        <img
                            alt="Watermelon Mint Punch"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                            <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">In Stock</span>
                            <span className="bg-fresqo-yellow text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                <span className="material-icons-round text-[12px]">star</span> Best Seller
                            </span>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                        <div className="flex-grow">
                            <Link to="/shop" className="hover:text-primary transition-colors">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2">Watermelon Mint Punch</h3>
                            </Link>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Pack of 4 Sensation Mixes</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-end justify-between">
                            <div>
                                <span className="text-xs text-slate-400 dark:text-slate-500 line-through mr-2">$28.00</span>
                                <span className="text-2xl font-black text-slate-900 dark:text-white">$24.00</span>
                            </div>
                            <button className="bg-slate-100 hover:bg-primary dark:bg-slate-800 dark:hover:bg-primary text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:shadow-lg">
                                <span className="material-icons-round">add_shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full relative">
                    <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                        <span className="material-icons-round text-[20px]">delete_outline</span>
                    </button>
                    <div className="relative h-48 overflow-hidden bg-slate-50 dark:bg-slate-800/50">
                        <img
                            alt="Variety Pack"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                            <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">In Stock</span>
                            <span className="bg-primary text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">New</span>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                        <div className="flex-grow">
                            <Link to="/shop" className="hover:text-primary transition-colors">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2">Party Variety Pack</h3>
                            </Link>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">12-Pack Assorted Flavors</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-end justify-between">
                            <div>
                                <span className="text-2xl font-black text-slate-900 dark:text-white">$42.00</span>
                            </div>
                            <button className="bg-primary text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg shadow-primary/30 hover:scale-110">
                                <span className="material-icons-round">add_shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full relative opacity-75">
                    <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                        <span className="material-icons-round text-[20px]">delete_outline</span>
                    </button>
                    <div className="relative h-48 overflow-hidden bg-slate-50 dark:bg-slate-800/50">
                        <img
                            alt="Mango Tango"
                            className="w-full h-full object-cover grayscale mix-blend-luminosity"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSe2uRXyItlHClo4A3hFbmuOsPW0h_gqBEVV2mUbHVXiykzyaxREnvAZs4wjUz-uwXIhyDkLdNsimzXaL71AYdSHtOKgmcL3FZKtpyoRv6FLSTlX-UD1s808h6dveJjgRQGxAxMjqHHJBFAQj23KXxHJxXTkWOvMoUfNVUKUl_IcPQ7zyDq3sS2dbiL-9f-DgiXay7XF8nQdrAQtcOYR47Alo3xaOv1rLQGAiquPSoaq25yYKAucojw8CJ9JVthGSzMOHmpwEU_bG"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40"></div>
                        <div className="absolute top-3 left-3 flex gap-2">
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Out of Stock</span>
                        </div>
                        {/* Notify Me Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/60 backdrop-blur-[2px]">
                            <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-xl hover:scale-105 transition-transform">Notify Me</button>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                        <div className="flex-grow">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2">Mango Tango Splash</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Tropical Limited Edition</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-end justify-between">
                            <div>
                                <span className="text-2xl font-black text-slate-900 dark:text-white">$18.50</span>
                            </div>
                            <button disabled className="bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 w-10 h-10 rounded-full flex items-center justify-center cursor-not-allowed">
                                <span className="material-icons-round">remove_shopping_cart</span>
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
