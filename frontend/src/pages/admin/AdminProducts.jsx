import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../../utils/api';

function AdminProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);

    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get(`/products?page=${page}&limit=10`);
            setProducts(data.products);
            setTotalPages(data.pages);
            setTotalItems(data.count);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setSearchParams({ page: newPage });
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await api.delete(`/products/${id}`);
                fetchProducts(); // Refresh list
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete product');
            }
        }
    };

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100">
            <header className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Products Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your inventory, pricing, and availability.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/admin/products/new" className="bg-primary hover:bg-[#94D12C] text-slate-900 px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-sm">
                        <span className="material-icons-round">add</span> Add New Product
                    </Link>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <span className="material-icons-round">inventory</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Total Items</p>
                        <p className="text-xl font-bold">{totalItems}</p>
                    </div>
                </div>
                {/* Dummy stats for now, as backend doesn't provide low stock aggregates API out of box */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                        <span className="material-icons-round">warning</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Low Stock</p>
                        <p className="text-xl font-bold">{products.filter(p => p.stock < 10 && p.stock > 0).length || '--'}</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                        <span className="material-icons-round">error_outline</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Out of Stock</p>
                        <p className="text-xl font-bold">{products.filter(p => p.stock === 0).length || '--'}</p>
                    </div>
                </div>
            </div>

            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                {error && <div className="p-4 bg-red-50 text-red-600">{error}</div>}

                <div className="overflow-x-auto">
                    <table className="w-full text-left relative">
                        {loading && (
                            <div className="absolute inset-0 bg-white/50 flex justify-center items-center z-10 dark:bg-slate-800/50">
                                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
                                <th className="px-6 py-4 font-semibold">Product</th>
                                <th className="px-6 py-4 font-semibold text-center">Category</th>
                                <th className="px-6 py-4 font-semibold text-center">Stock</th>
                                <th className="px-6 py-4 font-semibold text-center">Price</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {products.length === 0 && !loading ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-slate-500">No products found.</td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                                    <img alt={product.title} className="w-full h-full object-cover" src={product.images?.[0] || 'https://via.placeholder.com/150'} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold">{product.title}</p>
                                                    <p className="text-xs text-slate-500 line-clamp-1">{product.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-500 text-center tracking-tighter">{(product.category && product.category.categoryName) || 'N/A'}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`text-sm font-semibold ${product.stock < 10 ? 'text-amber-500' : ''} ${product.stock === 0 ? 'text-red-500' : ''}`}>
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-bold">₹{product.price}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <Link to={`/admin/products/edit/${product._id}`} className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-icons-round text-[20px]">edit</span>
                                                </Link>
                                                <button onClick={() => handleDelete(product._id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                                    <span className="material-icons-round text-[20px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            Showing page <span className="font-medium text-slate-900 dark:text-white">{page}</span> of <span className="font-medium text-slate-900 dark:text-white">{totalPages}</span>
                        </p>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                                className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                            >
                                <span className="material-icons-round text-sm leading-none">chevron_left</span>
                            </button>

                            <button className="px-3 py-1 bg-primary text-slate-900 rounded-lg font-bold">{page}</button>

                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPages}
                                className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                            >
                                <span className="material-icons-round text-sm leading-none">chevron_right</span>
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default AdminProducts;
