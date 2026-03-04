import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingBag, ChevronRight } from 'lucide-react';

import ImageSlider from '../components/ImageSlider';
import { referenceProducts as products } from '../data/referenceProducts';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <Navigate to="/shop" replace />;
    }

    const suggestedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

    const onAddToCartClick = () => {
        alert("Pre-Orders Open | Cash on Delivery Available Across Rajkot");
        // Our cart context assumes adding an item increments quantity if we do it once, but to add multiple we might need to call it multiple times or update the context.
        // Assuming the current addToCart adds 1 item, we will call it 'quantity' times if needed or just pass a payload (depends on cart context).
        // For now, let's call it `quantity` times.
        for (let i = 0; i < quantity; i++) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                description: product.description
            });
        }
        setQuantity(1);
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-[#F9FAFB] dark:bg-[#0F172A] font-display">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <button onClick={() => navigate('/')} className="hover:text-slate-800 dark:hover:text-white transition-colors">Home</button>
                    <ChevronRight className="w-4 h-4" />
                    <button onClick={() => navigate('/shop')} className="hover:text-slate-800 dark:hover:text-white transition-colors">Shop</button>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-800 dark:text-white">{product.name}</span>
                </div>

                <div className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 mb-16">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Product Image Slider */}
                        <div className="aspect-square md:aspect-auto md:h-full bg-slate-50 dark:bg-slate-900 relative">
                            <ImageSlider
                                images={product.images}
                                productName={product.name}
                                interval={4000}
                                showDots={true}
                                showArrows={true}
                            />
                        </div>

                        {/* Product Details Info */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="font-oswald text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">{product.description}</p>

                                {/* Price */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-bold text-4xl text-slate-900 dark:text-white">₹{product.price}</span>
                                        <span className="text-xl text-slate-400 line-through">₹{product.originalPrice}</span>
                                        <span className="text-sm font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-3 py-1.5 rounded-full">{product.discount}</span>
                                    </div>
                                    <span className="text-sm text-slate-500">per pack</span>
                                </div>

                                {/* Ingredients */}
                                <div className="mb-10">
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Ingredients</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.ingredients && product.ingredients.map((ingredient, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700"
                                            >
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="mb-10">
                                    <div className="flex items-center gap-6 mb-2">
                                        <span className="font-semibold text-slate-900 dark:text-white text-lg">Quantity</span>
                                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 rounded-2xl p-1.5 border border-slate-200 dark:border-slate-700">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-12 h-12 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all shadow-sm text-slate-600 dark:text-slate-300"
                                            >
                                                <Minus className="w-5 h-5" />
                                            </button>
                                            <span className="w-8 text-center font-bold text-lg text-slate-900 dark:text-white">{quantity}</span>
                                            <button
                                                onClick={() => setQuantity(Math.min(4, quantity + 1))}
                                                className="w-12 h-12 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-300"
                                                disabled={quantity >= 4}
                                            >
                                                <Plus className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500">*maximum 4 per order</p>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={onAddToCartClick}
                                    className="w-full bg-primary hover:bg-[#94D12C] text-slate-900 py-4 text-lg font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all"
                                >
                                    <ShoppingBag className="w-6 h-6" />
                                    Add to Pre-Order – ₹{product.price * quantity}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Suggested Products Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-10">
                        <h3 className="font-oswald text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            You May Also Like
                        </h3>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Explore more unique flavours from our collection.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {suggestedProducts.map((p) => (
                            <div
                                key={p.id}
                                className="bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                                onClick={() => {
                                    navigate(`/product/${p.id}`);
                                }}
                            >
                                <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-900 rounded-t-2xl">
                                    <ImageSlider images={p.images} productName={p.name} interval={3500 + (p.id * 500)} />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-oswald text-xl font-bold text-slate-900 dark:text-white mb-1">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4">{p.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-2xl text-slate-900 dark:text-white">₹{p.price}</span>
                                            <span className="text-sm text-slate-400 line-through">₹{p.originalPrice}</span>
                                            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">{p.discount}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert("Pre-Orders Open | Cash on Delivery Available Across Rajkot");
                                            addToCart({
                                                id: p.id,
                                                name: p.name,
                                                price: p.price,
                                                image: p.images[0],
                                                description: p.description
                                            });
                                        }}
                                        className="w-full mt-4 bg-primary hover:bg-[#94D12C] text-slate-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Pre-Order – COD
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
