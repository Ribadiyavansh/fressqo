import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Instagram, Twitter } from 'lucide-react';
import api from '../utils/api';

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await api.post('/contact', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Failed to send message', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
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
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal dark:text-slate-100">Email Us</h3>
                                    <p className="text-sage dark:text-slate-400">hello@fresqo.in</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 rounded-xl border border-border-light bg-white dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-charcoal dark:text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal dark:text-slate-100">Call Us</h3>
                                    <p className="text-sage dark:text-slate-400">+91 97148 48011</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 rounded-xl border border-border-light bg-white dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-charcoal dark:text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal dark:text-slate-100">Visit Us</h3>
                                    <p className="text-sage dark:text-slate-400">Vrajbhumi Township Part-4, Parvat Patiya, Surat, Gujarat 395010</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h4 className="text-charcoal dark:text-slate-100 font-bold mb-4">Connect with us</h4>
                            <div className="flex gap-4">
                                <Link className="flex flex-col items-center gap-2 group" to="/">
                                    <div className="rounded-full bg-white dark:bg-slate-800 border border-border-light p-3 group-hover:bg-primary/20 transition-colors">
                                        <Instagram className="w-6 h-6 text-charcoal dark:text-slate-300" />
                                    </div>
                                    <span className="text-xs font-semibold text-charcoal dark:text-slate-400">Instagram</span>
                                </Link>
                                <Link className="flex flex-col items-center gap-2 group" to="/">
                                    <div className="rounded-full bg-white dark:bg-slate-800 border border-border-light p-3 group-hover:bg-primary/20 transition-colors">
                                        <Twitter className="w-6 h-6 text-charcoal dark:text-slate-300" />
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
                                        <CheckCircle2 className="w-10 h-10 text-primary" />
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
                                                <input name="name" value={formData.name} onChange={handleChange} required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-charcoal dark:text-slate-300">Email Address</label>
                                                <input name="email" value={formData.email} onChange={handleChange} required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" type="email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-charcoal dark:text-slate-300">Subject</label>
                                            <input name="subject" value={formData.subject} onChange={handleChange} required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="How can we help?" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-charcoal dark:text-slate-300">Message</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} required className="px-4 py-3 border rounded-lg border-border-light bg-background-light dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:ring-primary focus:border-primary focus:outline-none transition-colors" placeholder="Your message here..." rows="5"></textarea>
                                        </div>
                                        <button disabled={isLoading} className="w-full md:w-auto px-10 py-4 bg-primary text-charcoal font-black rounded-xl hover:shadow-lg transition-all disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]" type="submit">
                                            {isLoading ? 'Sending...' : 'Submit Message'}
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
                        <a href="/#faq" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-border-light rounded-xl font-bold text-charcoal dark:text-slate-100 hover:bg-background-light dark:hover:bg-slate-700 transition-colors shadow-sm">
                            Visit FAQ Page
                            <ArrowRight className="w-6 h-6" />
                        </a>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Contact;
