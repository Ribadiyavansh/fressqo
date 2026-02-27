import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function OrderReview() {
    const navigate = useNavigate();

    useEffect(() => {
        // Enforce light mode for checkout flow
        document.documentElement.classList.remove('dark');
        document.body.className = "bg-slate-50 text-slate-900 font-sans min-h-screen";

        return () => {
            document.body.className = "bg-background-light dark:bg-background-dark text-fresqo-charcoal dark:text-gray-100 transition-colors duration-200";
        }
    }, []);

    const handleSubmit = () => {
        navigate('/checkout/success');
    };

    return (
        <main className="flex flex-1 justify-center py-10 px-6 lg:px-20">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Progress Section */}
                <div className="mb-10">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-6 justify-between items-end">
                            <h1 className="text-slate-900 font-display text-3xl font-bold tracking-tight">Review Your Order</h1>
                            <p className="text-primary text-sm font-bold uppercase tracking-wider">Step 3 of 3</p>
                        </div>
                        <div className="rounded-full bg-slate-200 h-2 w-full overflow-hidden">
                            <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Order Details */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Section 1: Shipping Details */}
                        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-icons text-primary text-2xl">local_shipping</span>
                                    <h3 className="text-slate-900 font-display text-xl font-bold">Shipping Details</h3>
                                </div>
                                <Link to="/checkout" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                                    Edit <span className="material-icons text-[18px]">edit</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600">
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">Delivery Address</p>
                                    <p className="text-slate-900 font-bold mb-1">Alex Thompson</p>
                                    <p>123 Fresh Lane, Green Valley</p>
                                    <p>California, 90210</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">Shipping Method</p>
                                    <p className="text-slate-900 font-bold mb-1">Express Courier Delivery</p>
                                    <p>Estimated: 2-3 Business Days</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Payment Method */}
                        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-icons text-primary text-2xl">payments</span>
                                    <h3 className="text-slate-900 font-display text-xl font-bold">Payment Method</h3>
                                </div>
                                <Link to="/checkout/payment" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                                    Edit <span className="material-icons text-[18px]">edit</span>
                                </Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-14 bg-slate-100 rounded flex items-center justify-center border border-slate-200">
                                    <span className="material-icons text-slate-500">local_shipping</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold">Cash on Delivery</p>
                                    <p className="text-slate-500 text-sm">Pay with cash upon delivery</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Order Items */}
                        <section className="space-y-4">
                            <h3 className="text-slate-900 text-xl font-bold font-display flex items-center gap-3">
                                <span className="material-icons text-primary text-2xl">shopping_basket</span>
                                Order Items (3)
                            </h3>
                            <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                                {/* Item 1 */}
                                <div className="flex items-center gap-4 p-4">
                                    <div className="h-20 w-20 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                                        <img className="w-full h-full object-cover" data-alt="Variety Pack Fizz Bombs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-slate-900 font-bold truncate">Variety Pack of 4</h4>
                                        <p className="text-slate-500 text-sm">The Ultimate Party Starter</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-bold">$42.00</p>
                                        <p className="text-slate-500 text-sm font-medium">Qty: 2</p>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="flex items-center gap-4 p-4">
                                    <div className="h-20 w-20 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                                        <img className="w-full h-full object-cover" data-alt="Cosmopolitan Pack" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-slate-900 font-bold truncate">Watermelon Mint Punch</h4>
                                        <p className="text-slate-500 text-sm">Pack of 4 Sensation Mixes</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-bold">$24.00</p>
                                        <p className="text-slate-500 text-sm font-medium">Qty: 1</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Summary & CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 rounded-xl border border-slate-200 bg-fresqo-charcoal text-white p-8 space-y-6 shadow-xl">
                            <h3 className="text-white text-3xl font-bold font-display border-b border-gray-700 pb-4">Order Summary</h3>
                            <div className="space-y-4 pt-2">
                                <div className="flex justify-between text-gray-400 text-sm font-medium">
                                    <span>Subtotal</span>
                                    <span>$108.00</span>
                                </div>
                                <div className="flex justify-between text-gray-400 text-sm font-medium">
                                    <span>Shipping</span>
                                    <span className="text-primary font-bold uppercase tracking-wider text-xs">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-400 text-sm font-medium">
                                    <span>Tax</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                                    <span className="text-white font-bold text-lg">Total</span>
                                    <span className="text-primary font-display font-bold text-3xl tracking-tight">$108.00</span>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary/90 text-fresqo-charcoal py-4 rounded-xl font-bold text-lg uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 mt-4 active:scale-[0.98]">
                                Place Order
                                <span className="material-icons">check_circle</span>
                            </button>

                            <div className="space-y-4 pt-2">
                                <p className="text-gray-500 text-xs text-center leading-relaxed font-medium">
                                    By placing your order, you agree to Freshqo's
                                    <a className="underline text-gray-400 hover:text-white mx-1" href="#">Terms of Service</a> and
                                    <a className="underline text-gray-400 hover:text-white" href="#">Privacy Policy</a>.
                                </p>
                                <div className="flex items-center justify-center gap-4 pt-2 border-t border-gray-800">
                                    <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">
                                        <span className="material-icons text-[14px]">lock</span>
                                        Secure Checkout
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center sticky top-[600px]">
                            <Link to="/checkout/payment" className="inline-flex items-center justify-center gap-2 text-slate-500 hover:text-primary transition-colors py-2 font-bold text-sm bg-white border border-slate-200 rounded-xl px-6 w-full shadow-sm">
                                <span className="material-icons text-sm">arrow_back</span>
                                Back to Payment Information
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrderReview;
