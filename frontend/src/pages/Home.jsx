import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import HowItWorks from '../components/HowItWorks';
import ProductsGrid from '../components/ProductsGrid';
import ValueProposition from '../components/ValueProposition';
import Ingredients from '../components/Ingredients';
import Testimonials from '../components/Testimonials';
import ReferenceFAQ from '../components/ReferenceFAQ';
import BlogSection from '../components/BlogSection';
import { Sparkles } from 'lucide-react';

function Home() {
    const { addToCart } = useCart();

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
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-primary">Premium Cocktail Balls</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-black leading-tight">
                                Drop. <br />
                                <span className="text-primary italic">Fizz.</span> <br />
                                Sip.
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                                Elevate your sparkling water with artisanal drink bombs. Natural ingredients, zero sugar, and an explosion of flavor in every glass.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                                    Shop Now
                                </Link>
                                <Link to="/blog" className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold rounded shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all text-center">
                                    Learn More
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap items-center justify-start gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-mint dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <span className="text-lg">🌿</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Natural</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-peach dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <span className="text-lg">⚡</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">30 Sec Prep</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-mint dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <span className="text-lg">🇮🇳</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Made in India</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 pt-4">
                                <div className="flex -space-x-2">
                                    <img alt="Customer" fetchpriority="high" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbnLZ9OV33_LpQjQp1CGMSXc0p1l17FQfAsG1N39Ff3_81iwE_h4NW29OlG5Xx112sGTO6SZ4AZgk4xf33XglO5CrSqOzTGT86-UaIHr5NHgFoXruwDMig-ykm5eAh85wrCCzIb-QONqZkq7tkdzX6z2eHk3-43F6J3AVVilWvcULgeqqUrE92OTdVg3Jr4vab7traemBPlDarBHqj3GDIGPq2c7AtL7DtkxBOGZji6yUa-UGLRvakJMIxeGMjFpKjRM1WHRDKulo" />
                                    <img alt="Customer" fetchpriority="high" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB16V4U2QywiW-1CwFw4oUHrLaczfO7ne_qeHdNhEFA5_IPS38b_uU8oSk0M1eng-uG7Qmo3GuBBXnt-67WgTO28fH2pwCJsP6nPVe84-Hnu2PVukaA59ggJn4S-_XenU-5NNqK_BllsZfEO75MBkykyTcmeXLhFNhw0TH6mrscA8DaoD6m-NBwHD-6rMXbUUYJZKm2YhhH_AvDTT6It2AZd3gPvNlvyJltYGcodvvmiHm1mQ2xf9lxxhknWMiTedZkVPLxIbYgagPx" />
                                    <img alt="Customer" fetchpriority="high" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBob0qyDa_6UBoI7_Y2XSwrL7sE34Amk8S9J-LHsfcoXXOldX2QbYtIYvrLIOJFFHZuJUvgCMCBj5XDUqBdqMohhO1YgPJrHiJsqqD89E4jCQFqh3tEA3NSJ2-iQB6mZs3UV1S7GVHuWZdCVIyMi-uO8kqBbonc6vI_WuIyYOTnTJwK5nVrv8XI5dKdOsx-IUj5N3rUwsq_yuDK_4gsBll9ks2XnLi7o7SNVT9wfHZJxQklD5gslMm-BO7_Xl_tAwPrzr2K03jIr34L" />
                                </div>
                                <p className="text-sm font-medium"><span className="font-bold text-primary">12k+</span> happy sippers</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 hero-gradient rounded-3xl -rotate-2 scale-105 transition-transform group-hover:rotate-0"></div>
                            <div className="relative p-8 lg:p-12">
                                <img alt="Fresqo Fizz Bomb in glass" fetchpriority="high" className="rounded-2xl shadow-2xl transform transition-transform group-hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtC5Aft7uHs33AY1g9OsnoraITYTIH--A28RMdBAQp16nyuXvWRnOwRUSWeKIJpXsFHrAqe52lYiUczyRW1kF_BTJBkvSc55_ipNAJLjwgJ1Ka--3Mh4FphlTErPsjVBuL0V2BM24N0A8G4vgL7d9RITDP9CkIXrU0BvxOqhl8A-Imcd__CUQkOfvuhZUTdj3OfpUXNdYCHlVdQ0994p5zzbvFdNEPalFLx07dMbcu8LuuJZRjhkI4DRNqXjc8YcSmW_00TLJuLzg7" />
                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded shadow-xl border border-gray-100 dark:border-gray-700">
                                    <p className="text-3xl font-black text-primary">0%</p>
                                    <p className="text-xs font-bold uppercase text-gray-400">Added Sugar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HowItWorks />
            <ProductsGrid />
            <ValueProposition />
            <Ingredients />
            <Testimonials />
            <ReferenceFAQ />
            <BlogSection />

        </div>
    );
}

export default Home;
