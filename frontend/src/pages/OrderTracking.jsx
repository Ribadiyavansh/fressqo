import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function OrderTracking() {
    const [showFAQ, setShowFAQ] = useState(false);
    const [showReviewSuccess, setShowReviewSuccess] = useState(false);

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviewError, setReviewError] = useState('');
    const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

    useEffect(() => {
        return () => {
            // Clean up overflow in case we unmount while a modal is open
            document.body.style.overflow = 'auto';
        }
    }, []);

    const openFAQ = () => {
        setShowFAQ(true);
        document.body.style.overflow = 'hidden';
    };

    const closeFAQ = () => {
        setShowFAQ(false);
        document.body.style.overflow = 'auto';
    };

    const submitReview = () => {
        if (rating === 0) {
            setReviewError("Please select a star rating before submitting.");
            return;
        }
        if (reviewText.trim() === '') {
            setReviewError("Please share your thoughts before submitting.");
            return;
        }

        setReviewError('');
        setIsReviewSubmitted(true);
        setShowReviewSuccess(true);
        document.body.style.overflow = 'hidden';
    };

    const closeReviewSuccess = () => {
        setShowReviewSuccess(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-10 font-display">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>

                    <h1 className="text-4xl font-bold mb-2 text-slate-900">Order FQ-98234</h1>
                    <p className="text-slate-500 font-medium">Placed on Oct 20, 2023 • 12:45 PM</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-fresqo-charcoal shadow-inner">
                        <span className="material-icons">event</span>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Estimated Delivery</p>
                        <p className="text-2xl font-bold text-slate-900 font-display">Oct 24, 2023</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-8 mb-10 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between relative max-w-5xl mx-auto">
                    <div className="flex flex-col items-center gap-3 z-10 bg-white px-2">
                        <div className="w-10 h-10 rounded-full bg-primary text-fresqo-charcoal flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="material-icons text-sm font-bold">check</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">Order Placed</span>
                    </div>

                    <div className="h-1 flex-grow bg-primary mx-2"></div>

                    <div className="flex flex-col items-center gap-3 z-10 bg-white px-2">
                        <div className="w-10 h-10 rounded-full bg-primary text-fresqo-charcoal flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="material-icons text-sm font-bold">check</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">Processing</span>
                    </div>

                    <div className="h-1 flex-grow bg-primary mx-2"></div>

                    <div className="flex flex-col items-center gap-3 z-10 bg-white px-2">
                        <div className="w-12 h-12 rounded-full bg-primary border-4 border-primary/20 text-fresqo-charcoal flex items-center justify-center shadow-lg shadow-primary/30 scale-110">
                            <span className="material-icons">local_shipping</span>
                        </div>
                        <span className="text-sm font-bold text-primary">Shipped</span>
                    </div>

                    <div className="h-1 flex-grow bg-slate-200 mx-2"></div>

                    <div className="flex flex-col items-center gap-3 z-10 bg-white px-2">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center">
                            <span className="material-icons text-sm">inventory_2</span>
                        </div>
                        <span className="text-sm font-bold text-slate-400">Delivered</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm h-[500px] relative">
                        <img alt="Stylized map showing package transit route" className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS-XC8te_l51qJ5RwmSzndkpjWqAyZZIStFPTWTz7FbK76bkBucTDiNKUd2ZsDBR81Lb1jE1rM84pE6IUNVx_3cbD_acnWb3_YgXKkv4mHYlEsSOafJ_pmtvQFNLBQ18CWhWxLL_8ySvmJYWGDwrqzJdQyOKsPNjXY0WeeosdiDBSxwsodz2C9COfTZ3YbmwJ8v0mWdhzwv4hHGvWySehdTVddKjPuW_NEl46ZJ3quORML3WOYqx158kr5d2dh2igPnCkLaOxkJtdu" />
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-primary/40 rounded-full animate-ping"></div>
                                    <div className="relative bg-primary text-fresqo-charcoal w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 border-white pointer-events-auto cursor-pointer">
                                        <span className="material-icons text-lg">local_shipping</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white p-4 rounded-xl shadow-xl border border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-sm text-slate-700 font-medium">Currently in transit: <span className="font-bold text-slate-900">San Francisco, CA</span></span>
                            </div>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Updated 5 mins ago</span>
                        </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20 shadow-sm">
                        <div className="flex items-center gap-5 text-center md:text-left">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                <span className="material-icons text-3xl">help_outline</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-display text-slate-900">Need assistance?</h3>
                                <p className="text-slate-600 font-medium mt-1">Our customer heroes are ready to help you with your delivery.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Link to="/contact" className="flex-1 md:flex-none px-6 py-3 bg-primary text-fresqo-charcoal font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all text-center">Contact Support</Link>
                            <button onClick={openFAQ} className="flex-1 md:flex-none px-6 py-3 bg-white text-slate-900 font-bold rounded-lg border border-slate-300 hover:bg-slate-50 transition-all shadow-sm">View FAQ</button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 font-display text-slate-900">Shipment Details</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-slate-100 text-sm">
                                <span className="text-slate-500 font-medium">Carrier</span>
                                <span className="font-bold text-slate-900">GlobalExpress Logistics</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-slate-100 text-sm">
                                <span className="text-slate-500 font-medium">Tracking ID</span>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold font-mono text-slate-900 bg-slate-50 px-2 py-1 rounded">GEX-22938481</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-3 text-sm">
                                <span className="text-slate-500 font-medium">Service</span>
                                <span className="font-bold text-slate-900">Next Day Priority</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-2 font-display text-slate-900">How was your Freshqo experience?</h3>
                        <p className="text-sm text-slate-500 mb-6 font-medium">Your feedback helps us grow fresher every day.</p>

                        {isReviewSubmitted ? (
                            <div className="flex flex-col items-center justify-center p-6 bg-primary/10 rounded-xl border border-primary/20 text-center animate-fade-in">
                                <span className="material-icons text-primary text-5xl mb-3">verified</span>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Review Submitted Successfully!</h4>
                                <p className="text-sm text-slate-600">Thank you for sharing your thoughts on this order.</p>
                            </div>
                        ) : (
                            <>
                                {reviewError && (
                                    <p className="text-red-500 text-sm mb-4 font-bold bg-red-50 p-2 rounded border border-red-100">{reviewError}</p>
                                )}

                                <div className="flex justify-between mb-8 cursor-pointer">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`material-icons text-4xl transition-colors ${(hoverRating || rating) >= star ? 'text-primary' : 'text-slate-300 hover:text-primary/70'
                                                }`}
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                        >
                                            star
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <textarea
                                        className={`w-full bg-slate-50 border ${reviewError && reviewText.trim() === '' ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-slate-300 focus:ring-primary focus:border-primary'
                                            } rounded-lg p-4 text-sm outline-none transition-all min-h-[100px] resize-none`}
                                        placeholder="Share your thoughts..."
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                    ></textarea>
                                    <button onClick={submitReview} className="w-full py-4 bg-primary text-fresqo-charcoal font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all uppercase tracking-widest text-sm active:scale-[0.98]">
                                        Submit Review
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                        <h3 className="text-lg font-bold mb-6 font-display text-slate-900">Status Updates</h3>
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-200">

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary border-4 border-white z-10 shadow-sm"></div>
                                <p className="font-bold text-sm text-slate-900">Departed from Sorting Facility</p>
                                <p className="text-xs text-slate-500 mt-1 font-medium">San Jose Regional Hub • 10:45 AM</p>
                                <p className="text-[10px] text-primary font-bold mt-2 uppercase tracking-widest">Latest Update</p>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-300 border-4 border-white z-10 shadow-sm"></div>
                                <p className="font-bold text-sm text-slate-700">Arrived at sorting facility</p>
                                <p className="text-xs text-slate-500 mt-1 font-medium">San Jose Regional Hub • 08:20 AM</p>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-300 border-4 border-white z-10 shadow-sm"></div>
                                <p className="font-bold text-sm text-slate-700">Package processed</p>
                                <p className="text-xs text-slate-500 mt-1 font-medium">Fremont Distribution Center • Oct 21, 11:30 PM</p>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-300 border-4 border-white z-10 shadow-sm"></div>
                                <p className="font-bold text-sm text-slate-700">Picked up by carrier</p>
                                <p className="text-xs text-slate-500 mt-1 font-medium">Freshqo Warehouse • Oct 21, 04:15 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Success Modal */}
            {showReviewSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-8 relative overflow-hidden border border-slate-200">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                        <div className="flex flex-col items-center text-center space-y-8 pt-4">
                            <div className="relative">
                                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center relative shadow-inner">
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"></div>
                                    <div className="absolute top-4 -left-2 w-3 h-3 bg-primary/40 rounded-full"></div>
                                    <div className="absolute -bottom-2 right-4 w-5 h-5 bg-primary/60 rounded-full"></div>
                                    <span className="material-icons text-primary" style={{ fontSize: '56px' }}>auto_awesome</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-3xl font-extrabold text-slate-900 font-display leading-tight">
                                    Review Submitted!
                                </h2>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed px-2">
                                    Thank you for your feedback! It helps us keep the fizz perfect.
                                </p>
                            </div>
                            <button onClick={closeReviewSuccess} className="w-full bg-primary hover:bg-[#86d02e] text-fresqo-charcoal transition-colors py-4 rounded-xl font-extrabold text-lg shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide">
                                Back to Tracking
                                <span className="material-icons">arrow_forward</span>
                            </button>
                            <div className="flex items-center gap-1.5 opacity-50 select-none pt-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Freshqo Premium Delivery</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
                    </div>
                </div>
            )}

            {/* FAQ Modal */}
            {showFAQ && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={closeFAQ}>
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                            <h2 className="text-2xl font-bold font-display text-slate-900">Frequently Asked Questions</h2>
                            <button onClick={closeFAQ} className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-200">
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900 border-l-4 border-primary pl-4">How long does shipping take?</h4>
                                <p className="text-slate-600 pl-4 border-l-4 border-transparent leading-relaxed">Most standard shipping orders arrive within 3-5 business days. Expedited shipping takes 1-2 business days. You can track your specific order above for real-time updates.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900 border-l-4 border-primary pl-4">Can I change my delivery address?</h4>
                                <p className="text-slate-600 pl-4 border-l-4 border-transparent leading-relaxed">Address changes can only be made within 1 hour of placing the order before processing begins. Please contact support immediately if you need assistance.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900 border-l-4 border-primary pl-4">My package says delivered, but I can't find it.</h4>
                                <p className="text-slate-600 pl-4 border-l-4 border-transparent leading-relaxed">Sometimes carriers scan packages as "delivered" up to 24 hours before actual drop-off. Please check around your property, with neighbors, or your building's reception before contacting support.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900 border-l-4 border-primary pl-4">Do you ship internationally?</h4>
                                <p className="text-slate-600 pl-4 border-l-4 border-transparent leading-relaxed">Currently, we only ship within the contiguous United States. We are working hard to expand our refreshing operations globally in the near future.</p>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-200 bg-slate-50 text-center">
                            <p className="text-slate-500 font-medium mb-4">Still have questions?</p>
                            <Link to="/contact" className="inline-block bg-primary text-fresqo-charcoal hover:bg-primary/90 transition-colors px-8 py-3 rounded-xl font-bold uppercase tracking-wide">Contact Support Link</Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default OrderTracking;
