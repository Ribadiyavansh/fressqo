import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ImageSlider from '../components/ImageSlider';
import { ShoppingBag, ChevronRight, ChevronLeft, X, Check } from 'lucide-react';
import api from '../utils/api';

function Shop() {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Kept for UI consistency, though complex filtering would need backend updates
    const [activeFilter, setActiveFilter] = useState('All');
    const [sortOption, setSortOption] = useState('Price: Low to High');

    const itemsPerPage = 12; // 4 columns * 3 rows
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                // In a full implementation, sort & filter would be passed as query params here
                const { data } = await api.get(`/products?pageNumber=${currentPage}`);

                // If we were doing frontend sort on the current page data (basic approach):
                let pageProducts = [...data.products];

                if (sortOption === 'Price: Low to High') {
                    pageProducts.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
                } else if (sortOption === 'Price: High to Low') {
                    pageProducts.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
                }

                setProducts(pageProducts);
                setTotalPages(data.pages);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, sortOption, activeFilter]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 page-shop min-h-screen";
    }, []);

    // Disable background scroll when modal is open
    useEffect(() => {
        if (isFilterModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFilterModalOpen]);

    return (
        <div className="flex-1 w-full">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="flex flex-col gap-8">
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-wrap gap-2">
                                    <button onClick={() => handleFilterChange('All')} className={`px-4 py-2 rounded-full text-xs font-bold border ${activeFilter === 'All' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary'}`}>All</button>
                                    <button onClick={() => handleFilterChange('Popular')} className={`px-4 py-2 rounded-full text-xs font-bold border ${activeFilter === 'Popular' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary'}`}>Popular</button>
                                    <button onClick={() => handleFilterChange('New Arrive')} className={`px-4 py-2 rounded-full text-xs font-bold border ${activeFilter === 'New Arrive' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary'}`}>New Arrive</button>
                                    <button onClick={() => handleFilterChange('Best Seller')} className={`px-4 py-2 rounded-full text-xs font-bold border ${activeFilter === 'Best Seller' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary'}`}>Best Seller</button>
                                    <button onClick={() => handleFilterChange('Limited Adition')} className={`px-4 py-2 rounded-full text-xs font-bold border ${activeFilter === 'Limited Adition' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary'}`}>Limited Adition</button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-slate-500 hidden sm:block">Sort by:</span>
                                    <select value={sortOption} onChange={handleSortChange} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary max-w-[150px] sm:max-w-none">
                                        <option value="Price: Low to High">Price: Low to High</option>
                                        <option value="Price: High to Low">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft h-[400px]">
                                        <div className="w-full h-1/2 bg-gray-200 animate-pulse" />
                                        <div className="p-6 space-y-4">
                                            <div className="w-3/4 h-6 bg-gray-200 animate-pulse rounded" />
                                            <div className="w-full h-4 bg-gray-200 animate-pulse rounded" />
                                            <div className="w-1/2 h-8 bg-gray-200 animate-pulse rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product) => (
                                    <div
                                        key={product._id}
                                        className="product-card bg-white rounded-2xl overflow-hidden shadow-soft card-lift group cursor-pointer animate-fade-in flex flex-col"
                                        onClick={() => {
                                            navigate(`/product/${product.slug || product._id}`);
                                        }}
                                    >
                                        <div className="relative aspect-square overflow-hidden bg-fresqo-cream rounded-t-2xl">
                                            <ImageSlider images={product.images} productName={product.title} interval={3500} />
                                            {product.featured && (
                                                <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-30 bg-primary text-white`}>
                                                    Best Seller
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="font-oswald text-xl font-bold text-fresqo-dark mb-1">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm text-fresqo-gray mb-4 line-clamp-2 flex-1">{product.description}</p>
                                            <div className="flex items-center justify-between mt-auto">
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
                                            </div>
                                            <button
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    await addToCart(product);
                                                }}
                                                className="w-full mt-4 btn-primary flex items-center justify-center gap-2 relative z-10"
                                            >
                                                <ShoppingBag className="w-4 h-4" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500">
                                No products found matching criteria.
                            </div>
                        )}
                    </div>

                    {!isLoading && totalPages > 1 && (
                        <nav className="flex justify-center mt-16 space-x-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl border ${currentPage === 1 ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-700 cursor-not-allowed' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all'}`}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all ${currentPage === i + 1
                                        ? 'bg-primary border-primary text-white font-bold'
                                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl border ${currentPage === totalPages ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-700 cursor-not-allowed' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all'}`}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </nav>
                    )}
                </div>
            </main>

            {/* Filter Modal */}
            {isFilterModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in-up">
                        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">Filters</h2>
                            <button
                                onClick={() => setIsFilterModalOpen(false)}
                                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6 space-y-8 overflow-y-auto max-h-[70vh]">
                            <section>
                                <h3 className="font-display font-bold text-lg mb-4 text-slate-900 dark:text-white">Price Range</h3>
                                <div className="space-y-4">
                                    <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer accent-primary" max="200" min="10" type="range" />
                                    <div className="flex justify-between text-sm font-medium text-slate-600 dark:text-slate-400">
                                        <span>₹10</span>
                                        <span>₹200</span>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-200 dark:border-slate-800" />

                            <section>
                                <h3 className="font-display font-bold text-lg mb-4 text-slate-900 dark:text-white">Categories</h3>
                                <div className="space-y-4">
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input defaultChecked className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <Check className="absolute text-white w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">All Flavors</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <Check className="absolute text-white w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Citrus Blends</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <Check className="absolute text-white w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Berry Infusions</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <Check className="absolute text-white w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Tropical Hits</span>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
                            <button className="px-6 py-2.5 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" onClick={() => setIsFilterModalOpen(false)}>Clear</button>
                            <button className="px-6 py-2.5 rounded-xl bg-primary hover:bg-emerald-600 text-white font-bold transition-colors shadow-sm" onClick={() => setIsFilterModalOpen(false)}>Apply Filters</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;
