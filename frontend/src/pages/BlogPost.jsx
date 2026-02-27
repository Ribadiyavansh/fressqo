import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';

function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [suggestedPosts, setSuggestedPosts] = useState([]);

    useEffect(() => {
        // Reset scroll position when loading a new post
        window.scrollTo(0, 0);

        // Find the post
        const foundPost = BLOG_POSTS.find(p => p.id === parseInt(id));

        if (foundPost) {
            setPost(foundPost);

            // Get 3 suggested posts (excluding the current one)
            const suggestions = BLOG_POSTS.filter(p => p.id !== foundPost.id).slice(0, 3);
            setSuggestedPosts(suggestions);
        } else {
            // Post not found, redirect to blog home
            navigate('/blog');
        }
    }, [id, navigate]);

    if (!post) return null; // Or a loading spinner

    return (
        <div className="flex-1 w-full bg-background-light dark:bg-background-dark min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] bg-slate-900 overflow-hidden">
                <img
                    fetchpriority="high"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-slate-300 font-medium text-lg">
                            {post.date}
                        </p>
                    </div>
                </div>
            </div>



            {/* Main Content (Simulated) */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
                <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
                    {post.excerpt}
                </p>

                <h2>The Essentials Required</h2>
                <p>
                    When preparing this masterpiece, the foundation is everything. You cannot skimp on the quality of your base ingredients. Whether you are using a top-shelf spirit or fresh, organic fruits, the difference in the final product is unmistakable.
                </p>
                <p>
                    Ensure your glassware is properly chilled. A warm glass will immediately raise the temperature of the drink, altering the dilution rate and affecting the delicate balance of flavors we are trying to achieve.
                </p>

                <blockquote>
                    "The devil is in the details, and in mixology, those details are often invisible to the eye but obvious to the palate."
                </blockquote>

                <h2>Step-by-Step Methodology</h2>
                <p>
                    Begin by gathering all your tools. A sturdy shaker, an accurate jigger, a fine strainer, and plenty of high-quality ice.
                    <br /><br />
                    1. First, add the less expensive ingredients to your tin. This ensures that if you make a mistake, you aren't throwing away your premium bottles.<br />
                    2. Next, add your spirits.<br />
                    3. Fill the shaker entirely with ice. This is crucial for proper chilling without excessive dilution.<br />
                    4. Shake vigorously for 10-15 seconds. You should feel the tin become almost too cold to hold.<br />
                    5. Double strain into your prepared glass to catch any small ice shards or fruit pulp.
                </p>

                <h2>Final Touches</h2>
                <p>
                    The garnish isn't just for looking at; it provides essential aromatic cues before the liquid even hits your lips. A quick twist of citrus peel expressed over the surface deposits essential oils that change the entire drinking experience.
                </p>
            </main>

            {/* Suggested Posts Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-3xl font-display font-bold mb-8 text-slate-900 dark:text-slate-100">Keep Reading</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {suggestedPosts.map((suggestedPost) => (
                        <Link to={`/blog/${suggestedPost.id}`} key={suggestedPost.id} className="block group cursor-pointer h-full">
                            <article className={`${suggestedPost.colorClass} rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl h-full`}>
                                <div className="relative h-48 overflow-hidden">
                                    <img alt={suggestedPost.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={suggestedPost.image} />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                            {suggestedPost.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">{suggestedPost.date}</span>
                                    <h4 className="text-xl font-display font-bold mb-3 text-slate-900 dark:text-slate-100 leading-tight group-hover:text-primary transition-colors">{suggestedPost.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                                        {suggestedPost.excerpt.substring(0, 80)}...
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default BlogPost;
