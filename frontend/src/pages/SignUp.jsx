import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignUp() {
    const navigate = useNavigate();
    const { registerUser } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isRobotChecked, setIsRobotChecked] = useState(false);

    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        let newErrors = {};

        if (name.length < 2) newErrors.name = 'Name must be at least 2 characters';

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) newErrors.email = 'Please enter a valid email address';

        if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        else if (!/[A-Z]/.test(password)) newErrors.password = 'Must contain at least 1 uppercase letter';
        else if (!/[a-z]/.test(password)) newErrors.password = 'Must contain at least 1 lowercase letter';
        else if (!/[0-9]/.test(password)) newErrors.password = 'Must contain at least 1 number';
        else if (!/[@$!%*?&]/.test(password)) newErrors.password = 'Must contain at least 1 special symbol (@$!%*?&)';
        else if (/\s/.test(password)) newErrors.password = 'Must not contain spaces';

        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        if (!termsAccepted) newErrors.terms = 'You must accept the terms and conditions';

        if (!isRobotChecked) newErrors.robot = 'Please verify you are not a robot';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');
        if (validate()) {
            setIsLoading(true);
            try {
                await registerUser({ name, email, password });
                navigate('/');
            } catch (error) {
                setApiError(error.response?.data?.message || 'Failed to create account. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
    };

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
        <div className="bg-[#f0fdf4] dark:bg-[#0f172a] min-h-screen flex items-center justify-center p-4 transition-colors duration-300 font-display py-12">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-4">
                        <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-20 h-20 object-contain" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Join Fresqo</h1>
                    <p className="text-slate-600 dark:text-slate-400">Experience freshness like never before.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
                    {apiError && (
                        <div className="mb-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-xl text-sm border border-red-200 dark:border-red-800">
                            {apiError}
                        </div>
                    )}
                    <form action="#" className="space-y-5" method="POST" onSubmit={handleSubmit} autoComplete="off">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="name">Full Name</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">person</span>
                                <input
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4`}
                                    id="name" name="name" placeholder="John Doe" type="text"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">alternate_email</span>
                                <input
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4`}
                                    id="email" name="email" placeholder="name@example.com" type="text" autoComplete="off"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">lock</span>
                                <input
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4`}
                                    id="password" name="password" placeholder="••••••••" type="password" autoComplete="new-password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="confirm-password">Confirm Password</label>
                            <div className="relative">
                                <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">verified_user</span>
                                <input
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all focus:outline-none focus:ring-4`}
                                    id="confirm-password" name="confirm-password" placeholder="••••••••" type="password" autoComplete="new-password"
                                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>

                        {/* Custom Simple Captcha */}
                        <div className={`p-4 border rounded-xl flex items-center gap-3 ${errors.robot ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50'}`}>
                            <button
                                type="button"
                                className="focus:outline-none flex items-center justify-center text-slate-700 dark:text-slate-300"
                                onClick={() => setIsRobotChecked(!isRobotChecked)}
                            >
                                <span className={`material-icons-round text-2xl ${isRobotChecked ? 'text-primary' : ''}`}>
                                    {isRobotChecked ? 'check_box' : 'check_box_outline_blank'}
                                </span>
                            </button>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">I am not a robot</span>
                        </div>
                        {errors.robot && <p className="text-red-500 text-sm mt-1">{errors.robot}</p>}

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-900 cursor-pointer"
                                    id="terms" name="terms" type="checkbox"
                                    checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                            </div>
                            <div className="ml-3 text-xs">
                                <label className="text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="terms">
                                    I agree to the <a className="text-primary hover:underline font-semibold" href="#">Terms of Service</a> and <a className="text-primary hover:underline font-semibold" href="#">Privacy Policy</a>.
                                </label>
                                {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
                            </div>
                        </div>

                        <button
                            disabled={isLoading}
                            className={`w-full bg-primary hover:bg-[#84CC16] text-slate-900 font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all mt-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-[0.98]'}`}
                            type="submit"
                        >
                            {isLoading ? 'CREATING ACCOUNT...' : 'Create Account'}
                        </button>
                    </form>
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
