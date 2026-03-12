import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../utils/api';

function AdminProductEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        images: []
    });

    const [categories, setCategories] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(isEditMode);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const catsRes = await api.get('/categories');
                setCategories(catsRes.data);

                if (isEditMode) {
                    const prodRes = await api.get(`/products/${id}`);
                    const prod = prodRes.data;
                    setFormData({
                        title: prod.title || '',
                        description: prod.description || '',
                        price: prod.price || '',
                        stock: prod.stock || '',
                        category: prod.category?._id || prod.category || '',
                        images: prod.images || []
                    });
                }
            } catch (err) {
                console.error("Failed to fetch data:", err);
                alert("Error loading data.");
            } finally {
                setPageLoading(false);
            }
        };
        fetchInitialData();
    }, [id, isEditMode]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newImages = [];
            files.forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newImages.push(reader.result);
                    if (newImages.length === files.length) {
                        setFormData(prev => ({ ...prev, images: [...prev.images, ...newImages] }));
                        setShowToast(true);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        if (!formData.title || !formData.price || !formData.category || !formData.description) {
            alert("Title, Price, Category, and Description are required.");
            return;
        }

        if (formData.images.length === 0) {
            alert("At least one product image is required.");
            return;
        }

        setLoading(true);
        try {
            // Slugify title
            const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            const payload = { ...formData, slug, price: Number(formData.price), stock: Number(formData.stock) };

            if (isEditMode) {
                await api.put(`/products/${id}`, payload);
            } else {
                await api.post('/products', payload);
            }
            navigate('/admin/products');
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Failed to save product");
        } finally {
            setLoading(false);
        }
    };

    if (pageLoading) {
        return (
            <div className="flex-1 flex justify-center items-center font-display bg-background-light dark:bg-background-dark">
                <div className="w-10 h-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto font-display bg-background-light dark:bg-background-dark text-charcoal dark:text-slate-100 relative">
            {/* Success Toast */}
            {showToast && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
                    <div className="bg-[#f0fdf4] border border-[#bbf7d0] px-6 py-4 rounded-3xl shadow-lg flex items-center gap-4 min-w-[320px]">
                        <div className="bg-[#16a34a] text-white rounded-full p-1 flex items-center justify-center">
                            <span className="material-icons-round text-sm">check</span>
                        </div>
                        <span className="text-[#166534] font-medium text-lg">Image successfully uploaded</span>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-border-light dark:border-slate-800 px-8 py-6 sticky top-0 z-10 shadow-sm flex items-center justify-between">
                <div>
                    <Link to="/admin/products" className="inline-flex items-center text-sm font-medium text-neutral-green dark:text-slate-400 hover:text-primary transition-colors mb-2">
                        <span className="material-icons-round text-sm mr-1">arrow_back</span>
                        Back to Products
                    </Link>
                    <h2 className="text-2xl font-black text-charcoal dark:text-white">{isEditMode ? 'Edit Product' : 'Add New Product'}</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/admin/products')} className="px-5 py-2.5 rounded-lg text-sm font-bold border border-border-light dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-800 transition-colors">
                        Discard
                    </button>
                    <button onClick={handleSave} disabled={loading} className="px-5 py-2.5 rounded-lg text-sm font-bold bg-primary text-slate-900 hover:bg-[#94D12C] transition-all shadow-sm disabled:opacity-50 flex items-center gap-2">
                        {loading && <span className="material-icons-round text-sm animate-spin">autorenew</span>}
                        Save Product
                    </button>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Primary Information */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Basic Info Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm">
                            <h3 className="text-lg font-bold mb-6">Product Details</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Product Name <span className="text-red-500">*</span></label>
                                    <input name="title" value={formData.title} onChange={handleChange} className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="e.g. Organic Avocado" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Description</label>
                                    <div className="rounded-lg border border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800">
                                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full bg-transparent border-none outline-none focus:ring-0 min-h-[160px] p-4 text-charcoal dark:text-slate-100 placeholder:text-neutral-green/50 dark:placeholder:text-slate-500 resize-y" placeholder="Tell your customers about this product..."></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Product Category <span className="text-red-500">*</span></label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="w-full rounded-lg border-border-light dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none">
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat._id} value={cat._id}>{cat.categoryName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Pricing & Stock Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm">
                            <h3 className="text-lg font-bold mb-6">Pricing & Inventory</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Price (₹) <span className="text-red-500">*</span></label>
                                    <input name="price" value={formData.price} onChange={handleChange} className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="0.00" step="0.01" type="number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Stock Quantity</label>
                                    <input name="stock" value={formData.stock} onChange={handleChange} className="w-full rounded-lg border-border-light dark:border-slate-700 bg-background-light/50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 outline-none" placeholder="0" type="number" />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Media */}
                    <div className="space-y-8">
                        {/* Media Section */}
                        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border-light dark:border-slate-800 shadow-sm relative">
                            <h3 className="text-lg font-bold mb-4">Product Images ({formData.images.length})</h3>
                            
                            {formData.images.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                                    {formData.images.map((img, index) => (
                                        <div key={index} className="relative aspect-square border border-border-light dark:border-slate-700 rounded-lg overflow-hidden group">
                                            <img src={img} alt={`Product Preview ${index}`} className="w-full h-full object-cover" />
                                            <button 
                                                type="button" 
                                                onClick={() => setFormData(p => ({ ...p, images: p.images.filter((_, i) => i !== index) }))}
                                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center shadow-md"
                                            >
                                                <span className="material-icons-round text-[16px]">close</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <label className="cursor-pointer block">
                                <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageUpload} />
                                <div className="border-2 border-dashed border-border-light dark:border-slate-700 rounded-xl flex flex-col items-center justify-center text-center p-6 bg-background-light/20 dark:bg-slate-800 hover:border-primary transition-colors cursor-pointer">
                                    <span className="material-icons-round text-4xl text-neutral-green dark:text-slate-400 mb-3">upload_file</span>
                                    <p className="text-sm font-semibold text-charcoal dark:text-white">Click to upload images</p>
                                </div>
                            </label>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProductEditor;
