import React, { useState } from 'react';

function AdminSettingsSecurity() {
    const [currentPassword, setCurrentPassword] = useState('admin123');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordChange = () => {
        setError('');
        if (!newPassword || !confirmPassword) {
            setError('Please enter a new password.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }

        // Simulating password change success
        setCurrentPassword(newPassword);
        setNewPassword('');
        setConfirmPassword('');
        alert("Password successfully changed! (Mock)");
    };

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="bg-white dark:bg-panel-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold">Password Management</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Ensure your account is using a long, random password to stay secure.</p>
                </div>
                <div className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold">Current Password</label>
                            <div className="relative">
                                <input
                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none pr-10"
                                    type={showCurrentPassword ? "text" : "password"}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
                                >
                                    <span className="material-icons-round text-[20px]">
                                        {showCurrentPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">New Password</label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none pr-10"
                                        placeholder="••••••••••••"
                                        type={showNewPassword ? "text" : "password"}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
                                    >
                                        <span className="material-icons-round text-[20px]">
                                            {showNewPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Confirm New Password</label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none pr-10"
                                        placeholder="••••••••••••"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
                                    >
                                        <span className="material-icons-round text-[20px]">
                                            {showConfirmPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                    </div>
                    <div className="pt-2">
                        <button
                            onClick={handlePasswordChange}
                            className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-bold rounded-xl transition-all"
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-panel-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold">Two-Factor Authentication (2FA)</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Add an extra layer of security to your account.</p>
                </div>
                <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">Enable 2FA</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Use an authenticator app like Google Authenticator or Authy.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input className="sr-only peer" type="checkbox" value="" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                            <p className="text-xs text-slate-500 leading-relaxed">
                                When two-factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Authenticator application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-panel-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-bold">Login Activity</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Review your recent login sessions and active devices.</p>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:underline">Log out of all devices</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900/50">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Login</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">IP Address</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Device</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr>
                                <td className="px-6 py-4 text-sm">Just now</td>
                                <td className="px-6 py-4 text-sm font-mono">192.168.1.1</td>
                                <td className="px-6 py-4 text-sm flex items-center gap-2">
                                    <span className="material-icons-round text-lg">laptop_mac</span> Chrome, MacOS
                                </td>
                                <td className="px-6 py-4 text-sm">Miami, FL</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm text-slate-500">2 hours ago</td>
                                <td className="px-6 py-4 text-sm font-mono text-slate-500">192.168.1.42</td>
                                <td className="px-6 py-4 text-sm flex items-center gap-2 text-slate-500">
                                    <span className="material-icons-round text-lg">smartphone</span> iPhone 13, Safari
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">Miami, FL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex items-center justify-end gap-6 mt-10">
                <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-all underline decoration-slate-200 underline-offset-4">
                    Discard Changes
                </button>
                <button className="px-8 py-3 bg-primary hover:bg-lime-400 text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 transition-all">
                    Save Security Settings
                </button>
            </div>
        </div>
    );
}

export default AdminSettingsSecurity;
