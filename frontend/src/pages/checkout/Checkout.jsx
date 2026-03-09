import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Checkout() {
    const navigate = useNavigate();
    const { cartItems, getCartTotal } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const shippingAddress = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            addressLine1: formData.get('addressLine1'),
            addressLine2: formData.get('addressLine2') || '',
            city: formData.get('city'),
            state: formData.get('state'),
            zipCode: formData.get('zipCode')
        };

        navigate('/checkout/payment', { state: { shippingAddress } });
    };

    // If cart is empty, redirect to shop
    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/shop');
        }
    }, [cartItems, navigate]);

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
                                    <input name="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="John" type="text" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input name="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Doe" type="text" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="+91 00000 00000" type="tel" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Shipping Address</label>
                                <input name="addressLine1" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none mb-4" placeholder="House No, Street Name" type="text" required />
                                <input name="addressLine2" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Landmark, Area (Optional)" type="text" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                                    <input name="city" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Rajkot" type="text" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                                    <select name="state" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" required>
                                        <option value="">Select State</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Karnataka">Karnataka</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Zipcode</label>
                                    <input name="zipCode" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="360001" type="text" required />
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
                        <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {cartItems.map((item) => (
                                <div key={item.product._id} className="flex gap-4">
                                    <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                                        <img alt={item.product.title} className="w-full h-full object-cover" src={item.product.images?.[0] || 'https://via.placeholder.com/150'} />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg leading-tight line-clamp-2">{item.product.title}</h3>
                                        <p className="text-gray-400 text-sm mt-1">Qty: {item.quantity}</p>
                                        <p className="text-white font-bold mt-1">₹{(item.product.discountPrice || item.product.price) * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 mb-8">
                            <input className="flex-grow bg-gray-800 border bg-transparent border-gray-700 outline-none rounded-lg px-4 py-2 focus:ring-primary focus:border-primary transition-all text-white placeholder-gray-500" placeholder="Discount Code" type="text" />
                            <button className="bg-white text-fresqo-charcoal font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors uppercase text-sm tracking-wider">Apply</button>
                        </div>
                        <div className="space-y-3 border-t border-gray-700 pt-6 mb-8">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>₹{getCartTotal()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span className="text-primary font-medium uppercase text-xs tracking-wider mt-1">Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-display font-bold tracking-wider border-t border-gray-700 pt-4 mt-4 text-white">
                                <span>Total Payable</span>
                                <span>₹{getCartTotal()}</span>
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
