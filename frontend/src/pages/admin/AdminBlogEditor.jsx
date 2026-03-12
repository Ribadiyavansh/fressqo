import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../utils/api';

function AdminBlogEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'Sustainability',
        image: ''
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(isEditMode);

    useEffect(() => {
        const fetchInitialData = async () => {
            if (isEditMode) {
                try {
                    const res = await api.get(`/blogs/${id}`);
                    const blog = res.data;
                    setFormData({
                        title: blog.title || '',
                        content: blog.content || '',
                        category: blog.category || 'Sustainability',
                        image: blog.image || ''
                    });
                    if (blog.image) {
                        setImagePreview(blog.image);
                    }
                } catch (err) {
                    console.error("Failed to fetch blog:", err);
                    alert("Error loading blog data.");
                } finally {
                    setPageLoading(false);
                }
            }
        };
        fetchInitialData();
    }, [id, isEditMode]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (isDraft) => {
        if (!formData.title || !formData.content) {
            alert("Title and Content are required.");
            return;
        }

        setLoading(true);
        try {
            // we aren't using draft effectively since there's no published status field in our schema, 
            // but we can just save it.
            const payload = { ...formData };

            if (isEditMode) {
                await api.put(`/blogs/${id}`, payload);
            } else {
                await api.post('/blogs', payload);
            }
            navigate('/admin/blog');
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Failed to save blog post");
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
        <div className="flex-1 flex flex-col font-display bg-background-light dark:bg-background-dark min-w-0">
            {/* Header */}
            <header className="h-16 bg-white dark:bg-[#1E293B] border-b border-border-light dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-50 shrink-0 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link to="/admin/blog" className="p-2 hover:bg-background-light dark:hover:bg-slate-800 rounded-full text-neutral-green dark:text-slate-400 transition-colors">
                        <span className="material-icons-round">arrow_back</span>
                    </Link>
                    <h2 className="text-xl font-bold text-charcoal dark:text-white">{isEditMode ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/admin/blog')} className="px-4 py-2 text-sm font-bold text-neutral-green dark:text-slate-300 bg-background-light dark:bg-slate-800 hover:bg-border-light dark:hover:bg-slate-700 rounded-lg transition-all border border-transparent">
                        Discard
                    </button>
                    <button onClick={() => handleSave(false)} disabled={loading} className="px-5 py-2 text-sm font-bold text-slate-900 bg-primary hover:bg-[#94D12C] hover:shadow-lg hover:shadow-primary/20 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50">
                        {loading && <span className="material-icons-round text-sm animate-spin">autorenew</span>}
                        {isEditMode ? 'Update Post' : 'Publish Post'}
                    </button>
                </div>
            </header>

            <div className="p-8 max-w-6xl mx-auto w-full overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Editor */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm">
                            <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-neutral-green dark:text-slate-400">Post Title <span className="text-red-500">*</span></label>
                            <input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full text-3xl font-black text-charcoal dark:text-white bg-transparent border-none outline-none focus:ring-0 placeholder:text-neutral-green/30 dark:placeholder:text-slate-500 p-0 mb-2"
                                placeholder="Enter post title..."
                                type="text"
                            />
                        </div>

                        {/* Content Editor */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-border-light dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="w-full min-h-[500px] p-8 bg-transparent border-none outline-none focus:ring-0 text-charcoal dark:text-slate-100 leading-relaxed placeholder:text-neutral-green/30 dark:placeholder:text-slate-500 text-lg resize-y"
                                placeholder="Start writing your story..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Right Column: Metadata */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Featured Image */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm">
                            <h3 className="text-sm font-bold text-charcoal dark:text-white mb-4">Featured Image</h3>
                            <label className="cursor-pointer block">
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                <div className="border-2 border-dashed border-border-light dark:border-slate-600 rounded-lg p-2 text-center hover:border-primary transition-colors group">
                                    <div className="aspect-video bg-background-light dark:bg-slate-900 rounded flex flex-col items-center justify-center gap-2 overflow-hidden relative">
                                        {imagePreview ? (
                                            <>
                                                <img className="absolute inset-0 w-full h-full object-cover" alt="Featured graphic" src={imagePreview} />
                                                <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 w-full h-full justify-center">
                                                    <span className="text-xs font-bold text-white">Replace Image</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="relative z-10 flex flex-col items-center">
                                                <span className="material-icons-round text-neutral-green dark:text-slate-300 text-3xl mb-1">add_photo_alternate</span>
                                                <span className="text-xs font-bold text-charcoal dark:text-white">Upload Image</span>
                                                <span className="text-[10px] text-neutral-green dark:text-slate-400">PNG, JPG up to 5MB</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </label>
                            {imagePreview && (
                                <button type="button" onClick={() => { setImagePreview(null); setFormData(p => ({ ...p, image: '' })) }} className="mt-4 text-red-500 text-sm font-bold flex items-center justify-center w-full gap-1 hover:text-red-600 transition-colors">
                                    <span className="material-icons-round text-[16px]">delete</span>
                                    Remove Image
                                </button>
                            )}
                        </div>

                        {/* Organization */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-border-light dark:border-slate-700 shadow-sm space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-charcoal dark:text-white mb-2">Category</label>
                                <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-white dark:bg-slate-900 border-border-light dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm text-charcoal dark:text-slate-200 outline-none px-3 py-2">
                                    <option value="Mocktail Recipes">Mocktail Recipes</option>
                                    <option value="Health & Wellness">Health & Wellness</option>
                                    <option value="Product Updates">Product Updates</option>
                                    <option value="Sustainability">Sustainability</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBlogEditor;
