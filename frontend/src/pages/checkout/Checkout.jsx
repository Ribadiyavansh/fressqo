import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Enforce light mode for checkout flow
        document.documentElement.classList.remove('dark');
        document.body.className = "bg-slate-50 text-slate-900 font-sans min-h-screen";

        // Cleanup function if needed when leaving checkout
        return () => {
            document.body.className = "bg-background-light dark:bg-background-dark text-fresqo-charcoal dark:text-gray-100 transition-colors duration-200";
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/checkout/payment');
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
            <nav className="mb-12">
                <ol className="flex items-center justify-center space-x-4 md:space-x-12">
                    <li className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-fresqo-charcoal flex items-center justify-center font-bold text-sm">1</span>
                        <span className="font-display text-xl md:text-2xl text-primary uppercase tracking-wide">Shipping</span>
                    </li>
                    <li className="h-px w-8 md:w-16 bg-slate-300"></li>
                    <li className="flex items-center gap-2 opacity-50">
                        <span className="w-8 h-8 rounded-full border-2 border-slate-300 text-slate-400 flex items-center justify-center font-bold text-sm">2</span>
                        <span className="font-display text-xl md:text-2xl text-slate-500 uppercase tracking-wide">Payment</span>
                    </li>
                    <li className="h-px w-8 md:w-16 bg-slate-300"></li>
                    <li className="flex items-center gap-2 opacity-50">
                        <span className="w-8 h-8 rounded-full border-2 border-slate-300 text-slate-400 flex items-center justify-center font-bold text-sm">3</span>
                        <span className="font-display text-xl md:text-2xl text-slate-500 uppercase tracking-wide">Review</span>
                    </li>
                </ol>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="font-display text-3xl mb-8 border-b border-slate-100 pb-4">Shipping Information</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="John" type="text" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Doe" type="text" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="+1 00000 00000" type="tel" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Shipping Address</label>
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none mb-4" placeholder="House No, Street Name" type="text" required />
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Landmark, Area (Optional)" type="text" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="New York" type="text" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" required>
                                        <option value="">Select State</option>
                                        <option value="NY">New York</option>
                                        <option value="CA">California</option>
                                        <option value="TX">Texas</option>
                                        <option value="FL">Florida</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Zipcode</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="10001" type="text" required />
                                </div>
                            </div>
                            <div className="pt-8">
                                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-fresqo-charcoal font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-2">
                                    Continue to Payment
                                    <span className="material-icons">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="bg-fresqo-charcoal text-white p-8 rounded-2xl shadow-xl sticky top-28">
                        <h2 className="font-display text-3xl mb-8 border-b border-gray-700 pb-4">Order Summary</h2>
                        <div className="space-y-6 mb-8">
                            <div className="flex gap-4">
                                <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                                    <img alt="Variety Pack Fizz Bombs" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEQQ0QOxehJd6Zaf5oexaQYPW4dwu5NUeKADCkQOpj9y0O0pnIMh9t3JVfCKaYHU0GrXqH8fIlRGVaIwN7QYbfyiCsVjjA19AfJk4jKu90r0-zkJo9rJDYZqYf62E_4sBot30riNoYZNu5tVUoVgqmFQEHREBFmXPWgZWz_Iu--Vp7GnBfigoACovbRjxsAgCZbHsR6yKYihASzWnMTvmYWzEbZU1JS40KSXnQMTc822iXt1-zDRd46bXE8sfUU4Zdf95NMh6Mn52-" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-lg">Variety Pack of 4</h3>
                                    <p className="text-gray-400 text-sm">Qty: 2</p>
                                    <p className="text-white font-bold mt-1">$42.00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                                    <img alt="Cosmopolitan Pack" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdmVyt6OXLBlgsOKPEQ6boL2nr2Fq0ofpVtMqWqE47vRu0DQYbMCZKJX7zGFT59Kihrdcb1AwhOBC6GFly6DKltJ7QIjrwEdAoz3T8mm5JFSKhzQtP6oYvG2ONB7l0k52VZStwSthVzFRMjQ02KYe2pkQvRMKb3wPX-lYPKmPt0oeasCKj8jSQTLzpV4qbwjGzAX5jUyyDQZv7_YUjiQ1mK4CTNey6ghpGodJeKxmUmER6hzUURjuthN0PEGDrtQKwKckz8kvcgWu" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-lg">Watermelon Mint Punch</h3>
                                    <p className="text-gray-400 text-sm">Qty: 1</p>
                                    <p className="text-white font-bold mt-1">$24.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-8">
                            <input className="flex-grow bg-gray-800 border bg-transparent border-gray-700 outline-none rounded-lg px-4 py-2 focus:ring-primary focus:border-primary transition-all text-white placeholder-gray-500" placeholder="Discount Code" type="text" />
                            <button className="bg-white text-fresqo-charcoal font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors uppercase text-sm tracking-wider">Apply</button>
                        </div>
                        <div className="space-y-3 border-t border-gray-700 pt-6 mb-8">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>$108.00</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span className="text-primary font-medium uppercase text-xs tracking-wider mt-1">Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-display font-bold tracking-wider border-t border-gray-700 pt-4 mt-4 text-white">
                                <span>Total Payable</span>
                                <span>$108.00</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-500 text-xs mt-6 flex items-center justify-center gap-2">
                            <span className="material-icons text-sm">lock</span>
                            Secure 256-bit SSL Encrypted Checkout
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Checkout;
