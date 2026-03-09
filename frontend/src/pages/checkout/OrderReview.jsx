import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import api from '../../utils/api';

function OrderReview() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems, getCartTotal, clearCart } = useCart();
    const { shippingAddress, paymentMethod } = location.state || {};
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!shippingAddress || !paymentMethod || cartItems.length === 0) {
            navigate('/checkout');
        }
    }, [shippingAddress, paymentMethod, cartItems, navigate]);

    if (!shippingAddress) return null;

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError('');
        try {
            const formattedShippingAddress = `${shippingAddress.firstName} ${shippingAddress.lastName}, ${shippingAddress.addressLine1}, ${shippingAddress.addressLine2 ? shippingAddress.addressLine2 + ', ' : ''}${shippingAddress.city}, ${shippingAddress.state} - ${shippingAddress.zipCode}. Phone: ${shippingAddress.phone}`;

            const orderData = {
                orderItems: cartItems.map(item => ({
                    productId: item.product._id,
                    quantity: item.quantity,
                    price: item.product.discountPrice || item.product.price
                })),
                shippingAddress: formattedShippingAddress,
                paymentStatus: paymentMethod === 'cod' ? 'Pending' : 'Paid', // Assuming COD right now
                totalPrice: getCartTotal()
            };

            await api.post('/orders', orderData);
            clearCart();
            // Pass order data down logic if desired
            navigate('/checkout/success');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to place order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
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

                {error && (
                    <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-xl border border-red-200">
                        {error}
                    </div>
                )}

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
                                    <p className="text-slate-900 font-bold mb-1">{shippingAddress.firstName} {shippingAddress.lastName}</p>
                                    <p>{shippingAddress.addressLine1}</p>
                                    {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                                    <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.zipCode}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">Shipping Method</p>
                                    <p className="text-slate-900 font-bold mb-1">Standard Delivery</p>
                                    <p>Estimated: 3-5 Business Days</p>
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
                                <Link to="/checkout/payment" state={{ shippingAddress }} className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
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
                                Order Items ({cartItems.length})
                            </h3>
                            <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                                {cartItems.map((item) => (
                                    <div key={item.product._id} className="flex items-center gap-4 p-4">
                                        <div className="h-20 w-20 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                                            <img className="w-full h-full object-cover" alt={item.product.title} src={item.product.images?.[0] || 'https://via.placeholder.com/150'} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-slate-900 font-bold truncate">{item.product.title}</h4>
                                            <p className="text-slate-500 text-sm line-clamp-1">{item.product.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-900 font-bold">₹{item.product.discountPrice || item.product.price}</p>
                                            <p className="text-slate-500 text-sm font-medium">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
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
                                    <span>₹{getCartTotal()}</span>
                                </div>
                                <div className="flex justify-between text-gray-400 text-sm font-medium">
                                    <span>Shipping</span>
                                    <span className="text-primary font-bold uppercase tracking-wider text-xs">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-400 text-sm font-medium">
                                    <span>Tax</span>
                                    <span>₹0.00</span>
                                </div>
                                <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                                    <span className="text-white font-bold text-lg">Total</span>
                                    <span className="text-primary font-display font-bold text-3xl tracking-tight">₹{getCartTotal()}</span>
                                </div>
                            </div>

                            <button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-fresqo-charcoal py-4 rounded-xl font-bold text-lg uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 mt-4 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Placing Order...' : 'Place Order'}
                                {!isSubmitting && <span className="material-icons">check_circle</span>}
                            </button>

                            <div className="space-y-4 pt-2">
                                <p className="text-gray-500 text-xs text-center leading-relaxed font-medium">
                                    By placing your order, you agree to Fresqo's
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


                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrderReview;
