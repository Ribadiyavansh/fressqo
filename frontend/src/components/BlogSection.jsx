import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import api from '../utils/api';

export default function BlogSection() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await api.get('/blogs?pageNumber=1');
                setBlogs(data.blogs.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Helper function to extract text and estimate read time
    const getExcerpt = (htmlString) => {
        if (!htmlString) return '';
        const text = htmlString.replace(/<[^>]+>/g, '');
        return text.length > 120 ? text.substring(0, 120) + '...' : text;
    };

    const getReadTime = (htmlString) => {
        if (!htmlString) return '1 min read';
        const words = htmlString.replace(/<[^>]+>/g, '').split(' ').length;
        const minutes = Math.ceil(words / 200); // Assume 200 words per min
        return `${minutes} min read`;
    };

    return (
        <section id="blog" className="py-24 bg-fresqo-cream relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-oswald text-4xl md:text-5xl font-bold text-fresqo-dark mb-6"
                    >
                        The <span className="gradient-text">Fresqo</span> Journal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="text-lg text-fresqo-gray"
                    >
                        Tips, recipes, and inspiration for making every celebration unforgettable.
                    </motion.p>
                </div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-soft h-[350px]">
                                <div className="w-full h-[200px] bg-gray-200 animate-pulse" />
                                <div className="p-6 space-y-4">
                                    <div className="w-full h-6 bg-gray-200 animate-pulse rounded" />
                                    <div className="w-2/3 h-4 bg-gray-200 animate-pulse rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {blogs.map((post, index) => (
                                <motion.article
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={post._id}
                                    onClick={() => navigate(`/blog/${post.slug || post._id}`)}
                                    className="bg-white rounded-3xl overflow-hidden shadow-soft card-lift flex flex-col group cursor-pointer border border-fresqo-border"
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden bg-fresqo-cream">
                                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-fresqo-dark uppercase tracking-wider">
                                            {post.tags && post.tags.length > 0 ? post.tags[0] : 'Lifestyle'}
                                        </div>
                                        <img
                                            src={post.thumbnail}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs font-medium text-fresqo-gray mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {getReadTime(post.content)}
                                            </span>
                                        </div>
                                        <h3 className="font-oswald text-xl font-bold text-fresqo-dark mb-3 leading-tight group-hover:text-fresqo-aqua transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-fresqo-gray text-sm line-clamp-3 mb-6 flex-1">
                                            {getExcerpt(post.content)}
                                        </p>
                                        <div className="mt-auto">
                                            <span className="inline-flex items-center gap-2 text-sm font-bold text-fresqo-dark group-hover:text-fresqo-lime transition-colors">
                                                Read Article <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {!isLoading && blogs.length === 3 && (
                    <motion.div
                        layout
                        className="mt-16 flex justify-center"
                    >
                        <button
                            onClick={() => navigate('/blog')}
                            className="btn-primary"
                        >
                            Read More Articles
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
