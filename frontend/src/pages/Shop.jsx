import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ImageSlider from '../components/ImageSlider';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const SHOP_PRODUCTS = [
    {
        id: 1,
        name: 'Variety Pack',
        description: '4 unique flavors in one pack',
        price: 349,
        originalPrice: 449,
        discount: '22% OFF',
        images: ['/images/product-variety.jpg', '/images/product-variety.jpg'],
        badge: 'Best Seller',
        badgeColor: 'bg-primary text-white',
        reviews: 48,
        rating: 5,
    },
    {
        id: 2,
        name: 'Cosmopolitan Ball',
        description: 'Classic cranberry-citrus blend',
        price: 349,
        originalPrice: 449,
        discount: '22% OFF',
        images: ['/images/product-cosmopolitan.jpg', '/images/product-cosmopolitan.jpg'],
        reviews: 32,
        rating: 4,
    },
    {
        id: 3,
        name: 'Sex on the Beach',
        description: 'Tropical peach-orange delight',
        price: 349,
        originalPrice: 449,
        discount: '22% OFF',
        images: ['/images/product-sexonthebeach.jpg', '/images/product-sexonthebeach.jpg'],
        badge: 'New Arrive',
        badgeColor: 'bg-accent text-brand-dark',
        reviews: 15,
        rating: 5,
    },
    {
        id: 4,
        name: 'Kala Khatta Ball',
        description: 'Authentic Indian flavor',
        price: 349,
        originalPrice: 449,
        discount: '22% OFF',
        images: ['/images/product-kalakhatta.jpg', '/images/product-kalakhatta.jpg'],
        badge: 'Limited Adition',
        badgeColor: 'bg-red-500 text-white',
        reviews: 67,
        rating: 4.5,
    },
    {
        id: 5,
        name: 'Watermelon Mint',
        description: 'Refreshing summer favorite',
        price: 349,
        originalPrice: 449,
        discount: '22% OFF',
        images: ['/images/product-watermelon.jpg', '/images/product-watermelon.jpg'],
        badge: 'Popular',
        badgeColor: 'bg-purple-500 text-white',
        reviews: 89,
        rating: 4,
    },
];

// Duplicate products to test pagination
const ALL_PRODUCTS = [
    ...SHOP_PRODUCTS,
    ...SHOP_PRODUCTS.map(p => ({ ...p, id: p.id + 10, name: p.name + ' (Pack)' })),
    ...SHOP_PRODUCTS.map(p => ({ ...p, id: p.id + 20, name: p.name + ' (Mini)' }))
];

function Shop() {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('All');
    const [sortOption, setSortOption] = useState('Price: Low to High');
    const itemsPerPage = 12; // 4 columns * 3 rows
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // Filter & Sort Logic
    let filteredProducts = [...ALL_PRODUCTS];

    if (activeFilter === 'New Arrive') {
        filteredProducts = filteredProducts.filter(p => p.badge === 'New Arrive');
    } else if (activeFilter === 'Popular') {
        filteredProducts = filteredProducts.filter(p => p.badge === 'Popular' || p.reviews >= 40);
    } else if (activeFilter === 'Best Seller') {
        filteredProducts = filteredProducts.filter(p => p.badge === 'Best Seller');
    } else if (activeFilter === 'Limited Adition') {
        filteredProducts = filteredProducts.filter(p => p.badge === 'Limited Adition');
    }

    if (sortOption === 'Price: Low to High') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Pagination Logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Auto-adjust page if filter makes current page out of bounds
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        } else if (totalPages === 0 && currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [filteredProducts.length, totalPages, currentPage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

        // Cleanup function to ensure scroll is restored if component unmounts while modal is open
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {currentProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="product-card bg-white rounded-2xl overflow-hidden shadow-soft card-lift group cursor-pointer animate-fade-in"
                                    onClick={() => {
                                        navigate(`/product/${product.id}`);
                                    }}
                                >
                                    <div className="relative aspect-square overflow-hidden bg-fresqo-cream rounded-t-2xl">
                                        <ImageSlider images={product.images} productName={product.name} interval={3500 + (product.id * 500)} />
                                        {product.badge && (
                                            <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-30 ${product.badgeColor}`}>
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-oswald text-xl font-bold text-fresqo-dark mb-1">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-fresqo-gray mb-4">{product.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-2xl text-fresqo-dark">₹{product.price}</span>
                                                <span className="text-sm text-fresqo-gray line-through">₹{product.originalPrice}</span>
                                                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{product.discount}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                alert("Pre-Orders Open | Cash on Delivery Available Across Rajkot");
                                                addToCart({
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    image: product.images[0],
                                                    description: product.description
                                                });
                                            }}
                                            className="w-full mt-4 btn-primary flex items-center justify-center gap-2"
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                            Pre-Order – COD
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <nav className="flex justify-center mt-16 space-x-2">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl border ${currentPage === 1 ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-700 cursor-not-allowed' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all'}`}
                            >
                                <span className="material-symbols-rounded">chevron_left</span>
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
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl border ${currentPage === totalPages ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-700 cursor-not-allowed' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all'}`}
                            >
                                <span className="material-symbols-rounded">chevron_right</span>
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
                                <span className="material-symbols-rounded">close</span>
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
                                            <span className="material-symbols-rounded absolute text-white text-sm pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">All Flavors</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <span className="material-symbols-rounded absolute text-white text-sm pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Citrus Blends</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <span className="material-symbols-rounded absolute text-white text-sm pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
                                        </div>
                                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Berry Infusions</span>
                                    </label>
                                    <label className="flex items-center group cursor-pointer">
                                        <div className="relative flex items-center justify-center">
                                            <input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors" type="checkbox" />
                                            <span className="material-symbols-rounded absolute text-white text-sm pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
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
