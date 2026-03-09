import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import ImageSlider from './ImageSlider';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useCart } from '../context/CartContext';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsGrid() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch featured products or just first 6
                const { data } = await api.get('/products?pageNumber=1');
                setProducts(data.products.slice(0, 6)); // Display max 6 on homepage
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (!isLoading && products.length > 0) {
            const ctx = gsap.context(() => {
                const cards = gridRef.current?.querySelectorAll('.product-card');

                if (cards && cards.length > 0) {
                    gsap.fromTo(
                        cards,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                }
            }, sectionRef);

            return () => ctx.revert();
        }
    }, [isLoading, products]);

    return (
        <section ref={sectionRef} id="products" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-sm font-medium text-fresqo-aqua uppercase tracking-wider mb-4">
                        Our Collection
                    </span>
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-fresqo-dark mb-4">
                        Featured Flavours
                    </h2>
                    <p className="text-fresqo-gray max-w-2xl mx-auto">
                        Choose from our carefully crafted selection of cocktail balls, each designed to deliver a unique taste experience.
                    </p>
                </div>

                {/* Products Grid */}
                <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft h-[400px]">
                                <div className="w-full h-1/2 bg-gray-200 animate-pulse" />
                                <div className="p-6 space-y-4">
                                    <div className="w-3/4 h-6 bg-gray-200 animate-pulse rounded" />
                                    <div className="w-full h-4 bg-gray-200 animate-pulse rounded" />
                                    <div className="w-1/2 h-8 bg-gray-200 animate-pulse rounded" />
                                </div>
                            </div>
                        ))
                    ) : products.length > 0 ? (
                        products.map((product, index) => (
                            <div
                                key={product._id}
                                className="product-card bg-white rounded-2xl overflow-hidden shadow-soft card-lift group cursor-pointer fade-in"
                                onClick={() => {
                                    navigate(`/product/${product.slug || product._id}`);
                                }}
                            >
                                {/* Product Image Slider */}
                                <div className="relative aspect-square overflow-hidden bg-fresqo-cream rounded-t-2xl">
                                    <ImageSlider images={product.images} productName={product.title} interval={3500 + (index * 500)} />
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="font-oswald text-xl font-bold text-fresqo-dark mb-1">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-fresqo-gray mb-4 line-clamp-2">{product.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-2xl text-fresqo-dark">₹{product.discountPrice || product.price}</span>
                                            {product.discountPrice && product.discountPrice < product.price && (
                                                <>
                                                    <span className="text-sm text-fresqo-gray line-through">₹{product.price}</span>
                                                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                                        {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/product/${product.slug || product._id}`);
                                            }}
                                            className="flex items-center gap-2 text-fresqo-aqua hover:text-fresqo-dark font-medium text-sm transition-colors"
                                        >
                                            View Details
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={async (e) => {
                                            e.stopPropagation();
                                            await addToCart(product);
                                            // Provide some visual feedback? Actually CartSidebar opens or similar.
                                        }}
                                        className="w-full mt-4 btn-primary flex items-center justify-center gap-2 relative z-10"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-gray-500">No products found.</div>
                    )}
                </div>

                {!isLoading && products.length > 0 && (
                    <div className="mt-16 text-center">
                        <button onClick={() => navigate('/shop')} className="btn-secondary">
                            View All Products
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
