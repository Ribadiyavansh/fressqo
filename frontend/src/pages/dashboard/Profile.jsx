import React from 'react';

function Profile() {
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
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV1n-omnT7CMWnu18-dUE9UUFtKbc21G5LRpBZHYoFgKqHmm6qKgSrHpzgd3mPtB-UZvJQuM1MdzEIqsB7lbS-InntCcJ9Zi5n7q0gG1zNlj3lMpDHQjWW7hi9Ah25IYfgp0xqWjnJt9j1QTOz5AjuOqEccAGfjUmjdqjdn5wb_j657KwSzr71LPshUrxdJNyDw4KQirfySL-9dF7Yyb9bhgPeMRAGZT7OY_7dm4lriqpX9IHj9mRL5RLHG8x-ya1T-cVdocUaWvBd"
                                />
                            </div>
                            <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <span className="material-icons-round text-sm">photo_camera</span>
                            </button>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Profile Picture</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">JPG, GIF or PNG. Max size of 800K</p>
                            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                                <button className="px-4 py-2 bg-primary text-slate-900 font-semibold rounded-lg hover:brightness-105 transition-all">Upload New</button>
                                <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Delete</button>
                            </div>
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
        </div>
    );
}

export default Profile;
