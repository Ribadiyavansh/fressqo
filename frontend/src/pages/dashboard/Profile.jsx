import React, { useState } from 'react';

function Profile() {
    const avatars = [
        "/avatars/avatar1.png", // 1. only user icon
        "/avatars/avatar2.png", // 2. female:with the short hair
        "/avatars/avatar3.png", // 3. male with the short hair and the box beard
        "/avatars/avatar4.png", // 4. female with the long hair
        "/avatars/avatar5.png"  // 5. male with the hair and the full beard
    ];

    const [currentAvatar, setCurrentAvatar] = useState(avatars[0]);
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

    const handleAvatarSelect = (avatar) => {
        setCurrentAvatar(avatar);
        setIsAvatarModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Account Settings</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Manage your personal information and security preferences.</p>
            </header>

            <div className="space-y-8">
                {/* Profile Picture Card */}
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-slate-100 dark:bg-slate-800">
                                <img
                                    alt="Profile avatar"
                                    className="w-full h-full object-cover bg-white dark:bg-slate-800 scale-[1.15]"
                                    src={currentAvatar}
                                />
                            </div>
                            <button
                                onClick={() => setIsAvatarModalOpen(true)}
                                className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                                type="button"
                            >
                                <span className="material-icons-round text-sm">photo_camera</span>
                            </button>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Profile Picture</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">JPG, GIF or PNG. Max size of 800K</p>
                        </div>
                    </div>
                </div>

                {/* Personal Information Form */}
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-icons-round text-primary">badge</span>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">Full Name</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="Enter your full name"
                                type="text"
                                defaultValue="Alex Johnson"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">Email Address</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="name@example.com"
                                type="email"
                                defaultValue="alex.johnson@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">Phone Number</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="+1 (000) 000-0000"
                                type="tel"
                                defaultValue="+1 (555) 000-0000"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">Country / Region</label>
                            <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </form>
                </div>

                {/* Security Section */}
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-icons-round text-primary">security</span>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Security & Password</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">Current Password</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="Current password"
                                type="password"
                                defaultValue="••••••••••••"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-1">New Password</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="Minimum 8 characters"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg flex items-start gap-3">
                        <span className="material-icons-round text-primary text-xl mt-0.5">info</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Make sure your password is at least 8 characters long and includes a mix of letters, numbers, and symbols.</p>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-4 pb-12">
                    <button className="px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                        Cancel
                    </button>
                    <button className="px-8 py-3 bg-primary text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Avatar Selection Modal */}
            {isAvatarModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={() => setIsAvatarModalOpen(false)}>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 w-full max-w-lg" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Choose Avatar</h2>
                            <button onClick={() => setIsAvatarModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
                            {avatars.map((avatar, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAvatarSelect(avatar)}
                                    className={`relative aspect-square rounded-full overflow-hidden border-4 transition-all hover:scale-105 ${currentAvatar === avatar ? 'border-primary shadow-lg scale-110 z-10' : 'border-transparent hover:border-primary/50 bg-white dark:bg-slate-800'}`}
                                >
                                    <img src={avatar} alt={`Avatar option ${index + 1}`} className="w-full h-full object-cover bg-white dark:bg-slate-800 scale-[1.15]" />
                                    {currentAvatar === avatar && (
                                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                                            <span className="material-icons-round text-primary drop-shadow-md">check_circle</span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <p className="text-sm text-center text-slate-500 dark:text-slate-400">Select an avatar to instantly update your profile picture.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
