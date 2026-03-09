import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import api from '../utils/api';

function Blog() {
    const [activeCategory, setActiveCategory] = useState('All Posts');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 page-blog min-h-screen";
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            try {
                const { data } = await api.get(`/blogs?pageNumber=${currentPage}`);

                let fetchedBlogs = data.blogs;
                // Optional: Basic frontend filtering if category selected
                if (activeCategory !== 'All Posts') {
                    fetchedBlogs = fetchedBlogs.filter(post => post.tags?.includes(activeCategory));
                }

                setBlogs(fetchedBlogs);
                setTotalPages(data.pages);
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, activeCategory]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const categories = ['All Posts', 'Entertaining', 'Behind the Scenes', 'Recipes', 'Pairings'];

    const getExcerpt = (htmlString) => {
        if (!htmlString) return '';
        const text = htmlString.replace(/<[^>]+>/g, '');
        return text.length > 150 ? text.substring(0, 150) + '...' : text;
    };

    return (
        <div className="flex-1 w-full">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Fresqo Blog Feed</h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Discover the art of mixology, cocktail tips, and stories behind our favorite flavors. Elevate your home bar experience.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
                    <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-start gap-2 pb-2 w-full no-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setCurrentPage(1);
                                }}
                                className={`whitespace-nowrap flex-shrink-0 px-6 py-2 rounded-full font-medium transition-colors ${activeCategory === category
                                    ? 'bg-primary text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden h-[450px]">
                                <div className="w-full h-64 bg-gray-200 animate-pulse" />
                                <div className="p-8 space-y-4">
                                    <div className="w-1/4 h-4 bg-gray-200 animate-pulse rounded" />
                                    <div className="w-full h-6 bg-gray-200 animate-pulse rounded" />
                                    <div className="w-3/4 h-20 bg-gray-200 animate-pulse rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post) => (
                            <Link to={`/blog/${post.slug || post._id}`} key={post._id} className="block group cursor-pointer">
                                <article className={`bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl h-full`}>
                                    <div className="relative h-64 overflow-hidden">
                                        <img alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={post.thumbnail} />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                                {post.tags && post.tags.length > 0 ? post.tags[0] : 'Article'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                                            {new Date(post.publishedDate).toLocaleDateString()}
                                        </span>
                                        <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight group-hover:text-primary transition-colors">{post.title}</h2>
                                        <p className="text-slate-600 dark:text-slate-400 flex-grow">
                                            {getExcerpt(post.content)}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-slate-500">
                        No blog posts found.
                    </div>
                )}

                {!isLoading && totalPages > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentPage === 1 ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-700 cursor-not-allowed' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`w-12 h-12 rounded-full font-bold transition-colors ${currentPage === i + 1 ? 'bg-primary text-white' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentPage === totalPages ? 'border-slate-100 text-slate-300 dark:border-slate-800 dark:text-slate-700 cursor-not-allowed' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Blog;
