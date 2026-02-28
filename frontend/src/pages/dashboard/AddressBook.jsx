import React, { useState } from 'react';

function AddressBook() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div className="flex-1 overflow-y-auto">
            {/* Header */}
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Address Book</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Manage your delivery locations for faster checkout.</p>
            </header>

            <div className="space-y-8">
                {/* Address Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Add New Address Card */}
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="group relative h-full min-h-[220px] rounded-xl border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center justify-center p-6 text-center"
                    >
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round text-primary text-3xl">add_location_alt</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Add New Address</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Set up a new delivery destination</p>
                    </button>

                    {/* Address Card 1 (Default) */}
                    <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 relative group">
                        <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                <span className="material-icons-round text-[18px]">edit</span>
                            </button>
                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-50 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                                <span className="material-icons-round text-[18px]">delete</span>
                            </button>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                            Default Address
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Home (John Doe)</h3>
                        <div className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                            <p>123 Fresh Lane, Suite 400</p>
                            <p>Green City, California</p>
                            <p>94105, United States</p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                            <span className="material-icons-round text-primary text-[18px]">phone</span>
                            +1 (555) 000-0000
                        </div>
                    </div>

                    {/* Address Card 2 */}
                    <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 relative group">
                        <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                <span className="material-icons-round text-[18px]">edit</span>
                            </button>
                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-50 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                                <span className="material-icons-round text-[18px]">delete</span>
                            </button>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Office</h3>
                        <div className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                            <p>888 Startup Plaza</p>
                            <p>Innovation District</p>
                            <p>94103, United States</p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                            <span className="material-icons-round text-primary text-[18px]">phone</span>
                            +1 (555) 222-3333
                        </div>
                    </div>

                    {/* Address Card 3 */}
                    <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 relative group">
                        <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                <span className="material-icons-round text-[18px]">edit</span>
                            </button>
                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-50 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                                <span className="material-icons-round text-[18px]">delete</span>
                            </button>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Parents' House</h3>
                        <div className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                            <p>42 Meadow View</p>
                            <p>Sunrise Valley, Arizona</p>
                            <p>85001, United States</p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                            <span className="material-icons-round text-primary text-[18px]">phone</span>
                            +1 (555) 999-8888
                        </div>
                    </div>
                </div>

                {/* Recent Activity/Map Preview Section */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Last Delivery Location</h2>
                    <div className="bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row h-auto md:h-72 shadow-sm">
                        <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                            <img
                                alt="Map view"
                                className="w-full h-full object-cover grayscale opacity-50"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYu4Gnw73ZutiW1QJSzfOzxQVPV_gdTNamLBNk8kye3SOmp23coIU5ACP4yiRpLVHZBoLeLyozqbC1ILpFJ4we5GiW1nPdNniebSJ6gshULNzYNGGXvOfTtF5gjZVP2kFwSjEQYbv_rQu5gF5NlfvS3jXxXRWaBMzfzkfr38P3jMEX4RNhzTLZikxLUBhINtBuIyu3r8Z-wWLQzHIk2prm_pC-PdAU2_RAYugxtO87ewygPhibCHbeHryXrMzbtROereHIEAxJa0F"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-primary rounded-full shadow-xl shadow-primary/40 flex items-center justify-center animate-pulse">
                                    <span className="material-icons-round text-white">location_on</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2">Last Order Destination</span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">123 Fresh Lane, Suite 400</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Delivered on Oct 24, 2023 via Freshqo Express.</p>
                            <div>
                                <button className="bg-primary hover:bg-primary/90 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors shadow-sm">
                                    Reorder to this address
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay for Add New Address */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    {/* Modal Container */}
                    <div className="bg-white dark:bg-background-dark w-full max-w-[640px] rounded-xl shadow-2xl overflow-hidden mx-4">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Add New Address</h2>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <span className="material-icons-round text-slate-400">close</span>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="px-8 py-8 h-[60vh] overflow-y-auto custom-scrollbar">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white" placeholder="e.g., John Doe" type="text" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                                        <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white" placeholder="+1 234 567 890" type="tel" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Pincode</label>
                                        <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white" placeholder="e.g., 10001" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Street Address</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white" placeholder="House number and street name" type="text" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Apartment/Suite <span className="text-slate-400 font-normal">(Optional)</span></label>
                                        <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white" placeholder="Apt, Suite, Unit, etc." type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">City</label>
                                        <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white" placeholder="City name" type="text" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">State</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none text-slate-900 dark:text-white">
                                            <option disabled selected value="">Select state</option>
                                            <option value="NY">New York</option>
                                            <option value="CA">California</option>
                                            <option value="TX">Texas</option>
                                            <option value="FL">Florida</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-3 py-3">
                                        <label className="relative flex items-center cursor-pointer">
                                            <input className="sr-only peer" type="checkbox" />
                                            <div className="w-5 h-5 bg-white dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-md peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all">
                                                <span className="material-icons-round text-slate-900 text-[16px] hidden peer-checked:block">check</span>
                                            </div>
                                            <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300 select-none">Set as default address</span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-8 py-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-4">
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="px-6 py-3 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="px-8 py-3 bg-primary hover:bg-primary/90 text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                            >
                                Add Address
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddressBook;
