import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
    const navigate = useNavigate();
    const [isFaqOpen, setIsFaqOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const applyTheme = (e) => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        applyTheme(mediaQuery);
        mediaQuery.addEventListener('change', applyTheme);
        return () => mediaQuery.removeEventListener('change', applyTheme);
    }, []);

    return (
        <div className="bg-[#F9FAFB] dark:bg-[#111827] min-h-screen flex items-center justify-center p-4 transition-colors duration-200 font-display">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                        Fresqo
                    </h1>
                </div>
                <div className="bg-white dark:bg-[#1F2937] rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 transition-all">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <form action="#" className="space-y-6" method="POST" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400 text-lg">mail_outline</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
                                    id="email" name="email" placeholder="you@example.com" required type="email"
                                />
                            </div>
                        </div>
                        <button
                            className="w-full bg-primary hover:bg-[#94D12C] text-gray-900 font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-lime-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            type="submit"
                        >
                            Send Reset Link
                        </button>
                    </form>
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                        <Link className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" to="/login">
                            <span className="material-icons text-base mr-1">arrow_back</span>
                            Back to Login
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
                    <p>Need help? <button onClick={() => setIsFaqOpen(true)} className="text-primary font-medium hover:underline bg-transparent border-none p-0 cursor-pointer">FAQs</button></p>
                </div>
            </div>

            {/* FAQ Modal */}
            {isFaqOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                            <button
                                onClick={() => setIsFaqOpen(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>
                        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg drop-shadow-sm">I didn't receive the reset email?</h3>
                                <p className="text-slate-600 dark:text-slate-400">Please check your spam or junk folder. If it's not there, ensure you entered the email address associated with your Fresqo account.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg drop-shadow-sm">How long is the reset link valid?</h3>
                                <p className="text-slate-600 dark:text-slate-400">For security reasons, password reset links expire after 30 minutes. You can always request a new one.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg drop-shadow-sm">I still can't log in?</h3>
                                <p className="text-slate-600 dark:text-slate-400">If you're still experiencing issues, please reach out to our dedicated support team at <a href="mailto:support@fresqo.com" className="text-primary hover:underline">support@fresqo.com</a>.</p>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
                            <button
                                onClick={() => setIsFaqOpen(false)}
                                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold rounded-xl transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResetPassword;
