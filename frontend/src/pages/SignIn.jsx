import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const { login } = useAuth();

    const validate = () => {
        let newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!password || password.length === 0) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            login({ name: email.split('@')[0], email });
            navigate('/');
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
        <div className="bg-[#F9FAFB] dark:bg-[#111827] min-h-screen flex items-center justify-center p-4 transition-colors duration-200 font-display">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                        Fres<span className="text-primary">qo</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Welcome back! Please enter your details.</p>
                </div>
                <div className="bg-white dark:bg-[#1F2937] p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                    <form action="#" className="space-y-6" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">mail</span>
                                <input
                                    className={`block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary'} rounded-xl text-gray-900 dark:text-white transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600`}
                                    id="email" name="email" placeholder="you@example.com" type="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">lock</span>
                                <input
                                    className={`block w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-900 border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary'} rounded-xl text-gray-900 dark:text-white transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600`}
                                    id="password" name="password" placeholder="••••••••" type={showPassword ? "text" : "password"}
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex items-center justify-center p-1"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-icons-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900"
                                    id="remember-me" name="remember-me" type="checkbox"
                                />
                                <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link className="font-semibold text-primary hover:text-[#84CC16] transition-colors" to="/reset-password">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <button
                            className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-gray-900 bg-primary hover:bg-[#84CC16] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
                            type="submit"
                        >
                            SIGN IN
                        </button>
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-[#1F2937] text-gray-500 dark:text-gray-400">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" type="button">
                                <img alt="Google Logo" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8XQpw1NEMQMBzIuivuBobNrpti4uqNwgsMpat6gggs4ZPbXlCdWWyamhlN0T-ECmDoDL43KH1XfbeXCEzZxmI4doYp0CDXQ4tbFkGapDp-2G9-XIXhd6u7NhJw38c9E3neduFJ-RmBkeNQMt5m2kRR-lFhb0lescGjs2kItDnM1D3GGiKLhQg9ylFSbmebTGqkMOb0hqAIF5igVrSXH6qgXnZM9Wl914jv9accrFzg7ARS2zFr8Ckn629xx4PRFnsSH4deH6BWFj1" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
                            </button>
                            <button className="flex items-center justify-center px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" type="button">
                                <img alt="Apple Logo" className="h-5 w-5 mr-2 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj0S3Ito-3Glow9XPxNVezg2pKeUXc0Q8DVmq47zntjPtlPDIqE9KwsM_Ua9crFGq5Xnjwao7c558FXjfF31ldPNaKyXWqvYTM1NYQ290RgcrTajCwnU9zRGSCDb_qeoS6deIJDvaVjQ9yaeTw9U1SEoW4dJIy6gw_wG0EsOg1-qIJOAaJZrwHCNKyml9PbCBocoXbiOouuO3SttulFHy0TxfMXXg8jnw25OMgruuKWUr_CQ0gnv6GWSaNmdD2ezkOGag-4w7MiAAq" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Apple</span>
                            </button>
                        </div>
                    </form>
                </div>
                <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <Link className="font-semibold text-primary hover:text-[#84CC16] transition-colors" to="/signup">
                        Sign up for free
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
