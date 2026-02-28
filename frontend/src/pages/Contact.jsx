import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const toggleDarkTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        document.body.className = "bg-background-light dark:bg-background-dark text-charcoal dark:text-slate-100 font-display transition-colors duration-300 page-contact min-h-screen";
    }, []);

    return (
        <div className="flex-1 w-full">

            <main className="flex-1 px-6 md:px-20 lg:px-40 py-12">
                <div className="max-w-6xl mx-auto mb-12">
                    <h1 className="text-charcoal dark:text-slate-100 text-5xl font-black leading-tight tracking-[-0.033em] mb-4">Contact &amp; Support</h1>
                    <p className="text-sage dark:text-slate-400 text-lg max-w-2xl">We're here to help you with any questions or feedback. Reach out to our team and we'll get back to you within 24 hours.</p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-5 rounded-xl border border-border-light bg-white dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-charcoal dark:text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal dark:text-slate-100">Email Us</h3>
                                    <p className="text-sage dark:text-slate-400">support@fresqo.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 rounded-xl border border-border-light bg-white dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-charcoal dark:text-primary">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal dark:text-slate-100">Call Us</h3>
                                    <p className="text-sage dark:text-slate-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 rounded-xl border border-border-light bg-white dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-charcoal dark:text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal dark:text-slate-100">Visit Us</h3>
                                    <p className="text-sage dark:text-slate-400">123 Fresh Way, Orchard City, CA 90210</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h4 className="text-charcoal dark:text-slate-100 font-bold mb-4">Connect with us</h4>
                            <div className="flex gap-4">
                                <Link className="flex flex-col items-center gap-2 group" to="/">
                                    <div className="rounded-full bg-white dark:bg-slate-800 border border-border-light p-3 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-charcoal dark:text-slate-300">photo_camera</span>
                                    </div>
                                    <span className="text-xs font-semibold text-charcoal dark:text-slate-400">Instagram</span>
                                </Link>
                                <Link className="flex flex-col items-center gap-2 group" to="/">
                                    <div className="rounded-full bg-white dark:bg-slate-800 border border-border-light p-3 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-charcoal dark:text-slate-300">video_library</span>
                                    </div>
                                    <span className="text-xs font-semibold text-charcoal dark:text-slate-400">TikTok</span>
                                </Link>
                                <Link className="flex flex-col items-center gap-2 group" to="/">
                                    <div className="rounded-full bg-white dark:bg-slate-800 border border-border-light p-3 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-charcoal dark:text-slate-300">terminal</span>
                                    </div>
                                    <span className="text-xs font-semibold text-charcoal dark:text-slate-400">Twitter</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-slate-900/80 p-8 rounded-xl border border-border-light shadow-sm h-full flex flex-col justify-center">
                            {isSubmitted ? (
                                <div className="text-center py-12 animate-fade-in">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-charcoal dark:text-slate-100 mb-4 tracking-tight">Thank you for contacting us!</h2>
                                    <p className="text-sage dark:text-slate-400 text-lg mb-8 max-w-sm mx-auto">
                                        Our team will reach out to you soon.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-8 py-3 bg-charcoal dark:bg-slate-800 text-white font-bold rounded-xl hover:bg-sage dark:hover:bg-slate-700 transition-colors shadow-sm"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-charcoal dark:text-slate-100 mb-6">Send us a Message</h2>
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-charcoal dark:text-slate-300">Full Name</label>
                                                <input required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-charcoal dark:text-slate-300">Email Address</label>
                                                <input required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" type="email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-charcoal dark:text-slate-300">Subject</label>
                                            <input required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="How can we help?" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-charcoal dark:text-slate-300">Message</label>
                                            <textarea required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="Your message here..." rows="5"></textarea>
                                        </div>
                                        <button className="w-full md:w-auto px-10 py-4 bg-primary text-charcoal font-black rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]" type="submit">
                                            Submit Message
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <section className="max-w-6xl mx-auto mt-20">
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-slate-100 mb-2">Have a common question?</h3>
                            <p className="text-sage dark:text-slate-400">Our FAQ might have the answer you're looking for right now.</p>
                        </div>
                        <Link className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-border-light rounded-xl font-bold text-charcoal dark:text-slate-100 hover:bg-background-light dark:hover:bg-slate-700 transition-colors shadow-sm" to="/">
                            Visit FAQ Page
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Contact;
