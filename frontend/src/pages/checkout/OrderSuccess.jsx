import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
    useEffect(() => {
        // Enforce light mode for checkout flow
        document.documentElement.classList.remove('dark');
        document.body.className = "bg-slate-50 text-slate-900 font-sans min-h-screen";

        return () => {
            document.body.className = "bg-background-light dark:bg-background-dark text-fresqo-charcoal dark:text-gray-100 transition-colors duration-200";
        }
    }, []);

    return (
        <main className="font-display text-slate-900 min-h-screen flex items-center justify-center p-6 py-12">
            <div className="max-w-2xl w-full flex flex-col items-center">

                {/* Success Celebration Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative mt-8">
                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shadow-inner">
                            <span className="material-icons text-primary text-6xl">check_circle</span>
                        </div>
                        {/* Decorative Sparkles */}
                        <div className="absolute -top-2 -right-2 text-primary">
                            <span className="material-icons text-xl">auto_awesome</span>
                        </div>
                        <div className="absolute -bottom-1 -left-3 text-primary/60">
                            <span className="material-icons text-lg">celebration</span>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3 text-slate-900 font-display">Cheers! Your order is confirmed.</h1>
                    <p className="text-slate-600 text-lg">
                        Order <span className="font-semibold text-slate-900">#FQ-98234</span>. We've sent a confirmation email to you.<br />
                        Get ready for some fizz!
                    </p>
                </div>

                {/* Order Summary Card */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 mb-8">

                    {/* Delivery Info */}
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl mb-8 border border-slate-200">
                        <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                            <span className="material-icons text-primary">local_shipping</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Delivery Estimate</p>
                            <p className="font-bold text-slate-900">Arriving by Thursday, Oct 24th</p>
                        </div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-6 mb-8 mt-4">
                        <h3 className="font-bold text-lg border-b border-slate-100 pb-3 font-display">Order Summary</h3>

                        {/* Item 1 */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-slate-50 overflow-hidden border border-slate-100">
                                    <img className="w-full h-full object-cover p-1" data-alt="Sparkling lime water bottle packaging" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Variety Pack of 4</p>
                                    <p className="text-sm text-slate-500 font-medium">Pack of 4 • Qty: 2</p>
                                </div>
                            </div>
                            <span className="font-bold text-lg">$84.00</span>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-slate-50 overflow-hidden border border-slate-100">
                                    <img className="w-full h-full object-cover p-1" data-alt="Citrus infusion botanical beverage bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Watermelon Mint Punch</p>
                                    <p className="text-sm text-slate-500 font-medium">Pack of 4 • Qty: 1</p>
                                </div>
                            </div>
                            <span className="font-bold text-lg">$24.00</span>
                        </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t border-dashed border-slate-300 pt-6 space-y-3">
                        <div className="flex justify-between text-sm text-slate-600 font-medium">
                            <span>Subtotal</span>
                            <span>$108.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-600 font-medium">
                            <span>Shipping</span>
                            <span className="text-primary font-bold uppercase tracking-wider text-xs">Free</span>
                        </div>
                        <div className="flex justify-between text-2xl font-bold text-slate-900 pt-4 font-display">
                            <span>Total Paid</span>
                            <span>$108.00</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/order-tracking" className="bg-primary hover:bg-primary/90 text-fresqo-charcoal font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]">
                        <span className="material-icons text-xl">map</span>
                        Track Order
                    </Link>
                    <Link to="/shop" className="bg-fresqo-charcoal hover:bg-slate-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]">
                        <span className="material-icons text-xl">shopping_bag</span>
                        Continue Shopping
                    </Link>
                </div>

                {/* Help Link */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm font-medium">
                        Need help with your order?
                        <Link to="/contact" className="text-primary hover:underline font-bold ml-1">Contact Support</Link>
                    </p>
                </div>

            </div>
        </main>
    );
}

export default OrderSuccess;
