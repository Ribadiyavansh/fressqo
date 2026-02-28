import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminAuth() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [password, setPassword] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // If already authenticated, redirect to admin
        if (sessionStorage.getItem('isAdminAuth') === 'true') {
            navigate('/admin');
        }
    }, [navigate]);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Any password works for trial
        if (password.length > 3) {
            setStep(2);
        } else {
            setError('Password must be at least 4 characters.');
        }
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Trial code is 123456
        if (authCode === '123456') {
            sessionStorage.setItem('isAdminAuth', 'true');
            navigate('/admin');
        } else {
            setError('Invalid authentication code.');
        }
    };

    return (
        <div className="bg-[#f0fdf4] min-h-screen flex flex-col items-center justify-center p-4 font-display">
            <div className="w-full max-w-md">
                <div className="text-center mb-8 flex flex-col items-center">
                    <img src="/fresqo-logo.png" alt="Fresqo Logo" className="w-20 h-20 object-contain mb-4" />
                    <h1 className="text-2xl font-bold text-slate-900">Admin Portal</h1>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                            {error}
                        </div>
                    )}

                    {step === 1 ? (
                        <form onSubmit={handlePasswordSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Admin Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all pb-3"
                                    placeholder="Enter password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-[#94D12C] text-slate-900 font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-lime-500/20 transition-all active:scale-[0.98]"
                            >
                                Continue
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleCodeSubmit} className="space-y-6">
                            <div className="text-center mb-4">
                                <p className="text-sm text-gray-600 mb-2">Step 2: Authentication</p>
                                <p className="text-xs text-gray-500 font-medium bg-gray-50 p-2 rounded block">Trial Code: <strong>123456</strong></p>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                                    Enter 6-Digit Code
                                </label>
                                <input
                                    type="text"
                                    required
                                    maxLength="6"
                                    value={authCode}
                                    onChange={(e) => setAuthCode(e.target.value.replace(/\D/g, ''))}
                                    className="block w-full px-4 py-3 text-center text-xl tracking-[0.5em] font-bold border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all pb-3"
                                    placeholder="------"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-[#94D12C] text-slate-900 font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-lime-500/20 transition-all active:scale-[0.98]"
                            >
                                Authenticate
                            </button>
                            <button
                                type="button"
                                onClick={() => { setStep(1); setAuthCode(''); setError(''); }}
                                className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium pt-2"
                            >
                                Back
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminAuth;
