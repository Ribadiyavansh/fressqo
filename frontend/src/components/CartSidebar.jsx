import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartSidebar({ isOpen, onClose }) {
    const { cartItems, handleQuantityChange, handleRemoveItem, totalItems, subtotal } = useCart();
    const navigate = useNavigate();

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-fade-in"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Sidebar Content */}
            <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col animate-slide-in-right">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-2xl text-charcoal dark:text-white">shopping_cart</span>
                        <h2 className="text-xl font-bold font-display text-charcoal dark:text-white">Your Cart</h2>
                        <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">{totalItems} Items</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center justify-center"
                        aria-label="Close cart"
                    >
                        <span className="material-symbols-rounded">close</span>
                    </button>
                </div>

                {/* Cart Items (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-slate-500 py-10">Your cart is empty.</div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 flex-shrink-0 border border-slate-100 dark:border-slate-700">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start gap-2 mb-1">
                                            <h3 className="font-bold text-sm text-charcoal dark:text-white line-clamp-2">{item.name}</h3>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                                aria-label="Remove item"
                                            >
                                                <span className="material-symbols-rounded text-sm">delete</span>
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                                disabled={item.quantity <= 1}
                                                className="w-7 h-7 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors disabled:opacity-50"
                                                aria-label="Decrease quantity"
                                            >
                                                <span className="material-symbols-rounded text-sm">remove</span>
                                            </button>
                                            <span className="w-7 text-center text-sm font-semibold text-charcoal dark:text-white">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                                className="w-7 h-7 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <span className="material-symbols-rounded text-sm">add</span>
                                            </button>
                                        </div>
                                        <span className="font-bold text-charcoal dark:text-white">${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / Checkout */}
                <div className="border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/50">
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                            <span>Subtotal</span>
                            <span className="font-semibold text-charcoal dark:text-white">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="border-t border-slate-200 dark:border-slate-700 pt-2 flex justify-between">
                            <span className="font-bold text-base text-charcoal dark:text-white">Total</span>
                            <span className="font-bold text-xl text-charcoal dark:text-white">${subtotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            onClose();
                            navigate('/checkout');
                        }}
                        disabled={cartItems.length === 0}
                        className="w-full bg-primary hover:bg-[#8ebf25] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Proceed to Checkout
                        <span className="material-symbols-rounded text-sm">arrow_forward</span>
                    </button>

                    <button
                        onClick={onClose}
                        className="w-full mt-2 py-2 text-sm font-bold text-slate-500 hover:text-charcoal dark:hover:text-white transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>

            </div>
        </div>
    );
}

export default CartSidebar;
