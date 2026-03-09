import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { referenceBlogs as BLOG_POSTS } from '../data/referenceBlogs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Blog() {
    const [activeCategory, setActiveCategory] = React.useState('All Posts');
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 page-blog min-h-screen";

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categories = ['All Posts', 'Entertaining', 'Behind the Scenes', 'Recipes', 'Pairings'];

    const filteredPosts = activeCategory === 'All Posts'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    const displayedPosts = filteredPosts.slice(0, isMobile ? 6 : 9);

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
                                onClick={() => setActiveCategory(category)}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedPosts.map((post) => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="block group cursor-pointer">
                            <article className={`${post.colorClass || 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800'} rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl h-full`}>
                                <div className="relative h-64 overflow-hidden">
                                    <img alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={post.image} />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">{post.date}</span>
                                    <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100 leading-tight group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="text-slate-600 dark:text-slate-400 flex-grow">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 flex justify-center items-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full bg-primary text-white font-bold">1</button>
                        <button className="w-12 h-12 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 font-bold transition-colors">2</button>
                        <button className="w-12 h-12 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 font-bold transition-colors">3</button>
                    </div>
                    <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Blog;
