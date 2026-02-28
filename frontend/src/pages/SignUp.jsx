import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignUp() {
    const navigate = useNavigate();
    const { login } = useAuth();

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
        <div className="bg-[#f0fdf4] dark:bg-[#0f172a] min-h-screen flex items-center justify-center p-4 transition-colors duration-300 font-display">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-4">
                        <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-20 h-20 object-contain" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Join Fresqo</h1>
                    <p className="text-slate-600 dark:text-slate-400">Experience freshness like never before.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
                    <form action="#" className="space-y-5" method="POST" onSubmit={(e) => {
                        e.preventDefault();
                        login({ name: 'New User', email: 'new@fresqo.com' });
                        navigate('/');
                    }}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="name">Full Name</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">person</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
                                    id="name" name="name" placeholder="John Doe" required type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">alternate_email</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
                                    id="email" name="email" placeholder="name@example.com" required type="email"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">lock</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
                                    id="password" name="password" placeholder="••••••••" required type="password"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="confirm-password">Confirm Password</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">verified_user</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
                                    id="confirm-password" name="confirm-password" placeholder="••••••••" required type="password"
                                />
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-900"
                                    id="terms" name="terms" required type="checkbox"
                                />
                            </div>
                            <div className="ml-3 text-xs">
                                <label className="text-slate-600 dark:text-slate-400" htmlFor="terms">
                                    I agree to the <a className="text-primary hover:underline font-semibold" href="#">Terms of Service</a> and <a className="text-primary hover:underline font-semibold" href="#">Privacy Policy</a>.
                                </label>
                            </div>
                        </div>
                        <button
                            className="w-full bg-primary hover:bg-[#84CC16] text-slate-900 font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98] mt-2"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-3 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">Or join with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center py-2.5 px-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <img alt="Google" className="w-5 h-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFp-_-waPC0sfQAtFbYOnJTaIXlZSz7xoOSX916YRYqqbOma8QYfX7GM3afIqxGRfnQNToog2SPa01lTjYMNMkCxg41vpazp7fEIEbf5EcjKeyAKZ773KMJlsAr4FPeEU7Yv1F0fzRrFxhmdCzfWprrljE3u3LTl9dewMZmM4_-JRAe2MbsmKQFikNhHZCGhtRDb51RxDQLIevUK0hUx9yQ4r7wLButmr6NlHPAM4P0HfIIqMKuCk3llPoYp0DWe1tnpz9boqWBCou" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google</span>
                        </button>
                        <button className="flex items-center justify-center py-2.5 px-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <img alt="Apple" className="w-5 h-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmsANz_YX3JF-y5zALC4cBO2ckqDSvPLwA8S8SLfUn_5Cv0g5jLoPcVZvZzV2fJD5XDyapt-c3fv18NL5-dHGK4FieSXdDSbD8OGUAxhp_oA_O3_FamCCCV2xFT65ofhJpK_4HYIdvxWcuMGryiiuFeEHi8K8p34l_dpJotznv7nAHIEEB69NjzexQNA9cjoFfBlDv01OO-2I1zkqwEECRWBylcX3VfBKZqc9JBvG3XFcCuQxc23hTEoE5wOzo_p5uKxBRNmAMH-bS" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apple</span>
                        </button>
                    </div>
                </div>
                <p className="text-center mt-8 text-slate-600 dark:text-slate-400 text-sm">
                    Already have an account?{' '}
                    <Link className="text-primary font-bold hover:underline transition-all" to="/login">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
