import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems, getCartTotal } = useCart();
    const { shippingAddress } = location.state || {};

    useEffect(() => {
        if (!shippingAddress || cartItems.length === 0) {
            navigate('/checkout');
        }
    }, [shippingAddress, cartItems, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const paymentMethod = formData.get('payment_method');
        navigate('/checkout/review', { state: { shippingAddress, paymentMethod } });
    };

    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-10">
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-12 max-w-3xl mx-auto w-full">
                {/* Shipping Step (Completed) */}
                <div className="flex flex-col items-center flex-1 relative">
                    <div className="w-10 h-10 rounded-full bg-primary text-fresqo-charcoal flex items-center justify-center z-10">
                        <span className="material-icons text-xl font-bold">check</span>
                    </div>
                    <span className="mt-2 text-sm font-semibold">Shipping</span>
                    <div className="absolute top-5 left-1/2 w-full h-[2px] bg-primary"></div>
                </div>
                {/* Payment Step (Current) */}
                <div className="flex flex-col items-center flex-1 relative">
                    <div className="w-10 h-10 rounded-full bg-primary text-fresqo-charcoal flex items-center justify-center z-10 ring-4 ring-primary/20">
                        <span className="material-icons text-xl font-bold">payments</span>
                    </div>
                    <span className="mt-2 text-sm font-semibold">Payment</span>
                    <div className="absolute top-5 left-1/2 w-full h-[2px] bg-slate-200"></div>
                </div>
                {/* Review Step (Upcoming) */}
                <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center z-10">
                        <span className="material-icons text-xl">visibility</span>
                    </div>
                    <span className="mt-2 text-sm font-medium text-slate-400">Review</span>
                </div>
            </div>

            {/* Checkout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Payment Methods */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <section>
                        <h1 className="text-3xl font-bold mb-2 font-display">Payment Method</h1>
                        <p className="text-slate-500 mb-6">Select a secure payment option for your order.</p>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                            {/* Cash on Delivery Option (Default & Active) */}
                            <label className="flex items-center gap-4 rounded-2xl border-2 border-primary bg-primary/5 p-6 cursor-pointer shadow-sm relative overflow-hidden">
                                <input defaultChecked className="w-5 h-5 border-2 border-slate-300 text-primary focus:ring-primary" name="payment_method" type="radio" value="cod" />
                                <div className="flex-1">
                                    <p className="font-bold text-lg text-slate-900">Cash on Delivery</p>
                                    <p className="text-sm text-slate-600 font-medium">Pay with cash upon delivery</p>
                                </div>
                                <div className="text-fresqo-charcoal">
                                    <span className="material-icons text-3xl">local_shipping</span>
                                </div>
                            </label>

                            {/* Credit/Debit Option (Disabled) */}
                            <label className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 cursor-not-allowed opacity-50 relative">
                                <input disabled className="w-5 h-5 border-2 border-slate-300 text-primary disabled:cursor-not-allowed" name="payment_method" type="radio" value="card" />
                                <div className="flex-1">
                                    <p className="font-bold text-lg text-slate-700">Credit or Debit Card</p>
                                    <p className="text-sm text-slate-500">Currently unavailable</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-5 bg-slate-200 rounded flex items-center justify-center border border-slate-300">
                                        <span className="material-icons text-xs text-slate-400">credit_card</span>
                                    </div>
                                </div>
                            </label>

                            {/* PayPal Option (Disabled) */}
                            <label className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 cursor-not-allowed opacity-50 relative">
                                <input disabled className="w-5 h-5 border-2 border-slate-300 text-primary disabled:cursor-not-allowed" name="payment_method" type="radio" value="paypal" />
                                <div className="flex-1">
                                    <p className="font-bold text-lg text-slate-700">PayPal</p>
                                    <p className="text-sm text-slate-500">Currently unavailable</p>
                                </div>
                                <div className="text-slate-400">
                                    <span className="material-icons text-3xl">account_balance_wallet</span>
                                </div>
                            </label>

                            {/* Apple Pay Option (Disabled) */}
                            <label className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 cursor-not-allowed opacity-50 relative">
                                <input disabled className="w-5 h-5 border-2 border-slate-300 text-primary disabled:cursor-not-allowed" name="payment_method" type="radio" value="apple" />
                                <div className="flex-1">
                                    <p className="font-bold text-lg text-slate-700">Apple Pay</p>
                                    <p className="text-sm text-slate-500">Currently unavailable</p>
                                </div>
                                <div className="text-slate-400 text-2xl font-bold">
                                    Pay
                                </div>
                            </label>

                            <button type="submit" className="hidden" id="submit-payment">Submit Form</button>
                        </form>
                    </section>
                </div>

                {/* Right Column: Order Summary (Sticky) */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32 flex flex-col gap-6">
                        <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <h2 className="text-xl font-bold mb-6 font-display">Order Summary</h2>

                            {/* Items List Mini */}
                            <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-slate-200 max-h-[300px] overflow-y-auto">
                                {cartItems.map((item) => (
                                    <div key={item.product._id} className="flex justify-between text-sm">
                                        <span className="text-slate-600 font-medium line-clamp-1">{item.product.title} (x{item.quantity})</span>
                                        <span className="font-bold ml-2">₹{(item.product.discountPrice || item.product.price) * item.quantity}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Cost Breakdown */}
                            <div className="flex flex-col gap-3 mb-6">
                                <div className="flex justify-between text-base">
                                    <span className="text-slate-500">Subtotal</span>
                                    <span className="font-bold">₹{getCartTotal()}</span>
                                </div>
                                <div className="flex justify-between text-base">
                                    <span className="text-slate-500">Shipping</span>
                                    <span className="text-primary font-bold">FREE</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8 pt-4 border-t border-slate-200">
                                <span className="text-lg font-bold">Total</span>
                                <span className="text-3xl font-bold tracking-tight font-display text-fresqo-charcoal">₹{getCartTotal()}</span>
                            </div>

                            <button onClick={() => document.getElementById('submit-payment').click()} className="w-full bg-primary hover:bg-primary/90 text-fresqo-charcoal font-bold h-16 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 text-lg">
                                Continue to Review
                                <span className="material-icons">arrow_forward</span>
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-6 font-medium">By clicking, you agree to our Terms of Service and Privacy Policy.</p>
                        </div>

                        {/* Back to Shipping */}
                        <Link to="/checkout" className="flex items-center justify-center gap-2 text-slate-500 hover:text-primary transition-colors py-2 font-bold text-sm bg-white border border-slate-200 rounded-xl">
                            <span className="material-icons text-sm">arrow_back</span>
                            Back to Shipping Information
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Payment;
