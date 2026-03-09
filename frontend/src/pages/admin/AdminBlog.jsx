import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../utils/api';

function AdminBlog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);

    const [blogs, setBlogs] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get(`/blogs?page=${page}&limit=10`);
            setBlogs(data.blogs);
            setTotalPages(data.pages);
            setTotalItems(data.count);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch blogs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setSearchParams({ page: newPage });
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                await api.delete(`/blogs/${id}`);
                fetchBlogs();
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete blog post');
            }
        }
    };

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Blog Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your stories and articles.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/admin/blog/new" className="bg-primary hover:bg-[#94D12C] text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm">
                        <span className="material-icons-round text-lg">add</span>
                        Add New Post
                    </Link>
                </div>
            </header>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden min-h-[400px] relative">
                {error && <div className="p-4 bg-red-50 text-red-600 border-b border-red-200">{error}</div>}

                {loading && (
                    <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 flex justify-center items-center z-10 backdrop-blur-sm">
                        <div className="w-10 h-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                                <th className="px-6 py-4 font-semibold">Post Details</th>
                                <th className="px-6 py-4 font-semibold text-center">Category</th>
                                <th className="px-6 py-4 font-semibold text-center">Author</th>
                                <th className="px-6 py-4 font-semibold text-center">Date</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {blogs.length === 0 && !loading && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-slate-500">No blog posts found.</td>
                                </tr>
                            )}
                            {blogs.map(blog => (
                                <tr key={blog._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 min-w-[300px]">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-16 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                                                <img alt={blog.title} className="w-full h-full object-cover" src={blog.image || 'https://via.placeholder.com/150'} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{blog.title}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center">
                                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">{blog.category || 'General'}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-sm font-medium">{blog.author?.name || 'Admin'}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-slate-500">{new Date(blog.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            {/* Link to edit if we have an editor, else just delete for now */}
                                            <button onClick={() => handleDelete(blog._id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                                <span className="material-icons-round text-lg">delete_outline</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/20">
                        <p className="text-sm text-slate-500">Showing page <span className="font-medium text-slate-900 dark:text-white">{page}</span> of <span className="font-medium text-slate-900 dark:text-white">{totalPages}</span></p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                            >
                                <span className="material-icons-round text-sm">chevron_left</span>
                            </button>
                            <button className="px-3.5 py-1.5 rounded-lg bg-primary text-slate-900 font-bold text-sm">{page}</button>
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPages}
                                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                            >
                                <span className="material-icons-round text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminBlog;
