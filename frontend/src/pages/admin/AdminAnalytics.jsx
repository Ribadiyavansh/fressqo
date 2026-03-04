import React, { useState, useEffect } from 'react';

function AdminAnalytics() {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                // We will create this endpoint in the backend
                const response = await fetch('/api/admin/analytics');
                if (response.ok) {
                    const data = await response.json();
                    setAnalyticsData(data);
                } else {
                    console.error('Failed to fetch analytics');
                }
            } catch (error) {
                console.error('Error fetching analytics:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    // Dummy data while API is pending or failed
    const data = analyticsData || {
        revenue: { total: '₹52,431.89', growth: '+15.2%' },
        sales: { total: '1,452', growth: '+10.5%' },
        visitors: { total: '12,849', growth: '+18.1%' },
        conversion: { total: '3.2%', growth: '+1.1%' },
        topProducts: [
            { name: "Premium Cocktail Balls", sales: 450, revenue: "₹22,500" },
            { name: "Classic Mojito Mix", sales: 320, revenue: "₹10,240" },
            { name: "Margarita Blend", sales: 280, revenue: "₹8,960" }
        ],
        recentActivity: [
            { id: 1, action: "New Order #FQ-8922", time: "10 mins ago", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", icon: "shopping_cart" },
            { id: 2, action: "New user registered", time: "1 hour ago", color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30", icon: "person_add" },
            { id: 3, action: "Low stock alert: Mojito Mix", time: "3 hours ago", color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30", icon: "warning" },
        ]
    };

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Analytics & Reports</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Detailed breakdown of your store's performance.</p>
                </div>
            </header>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                                    <span className="material-icons-round">trending_up</span>
                                </div>
                                <span className="text-xs font-bold text-emerald-500">{data.revenue.growth}</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Total Revenue</p>
                            <h3 className="text-2xl font-bold mt-1">{data.revenue.total}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                                    <span className="material-icons-round">shopping_bag</span>
                                </div>
                                <span className="text-xs font-bold text-blue-500">{data.sales.growth}</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Total Sales</p>
                            <h3 className="text-2xl font-bold mt-1">{data.sales.total}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                                    <span className="material-icons-round">groups</span>
                                </div>
                                <span className="text-xs font-bold text-purple-500">{data.visitors.growth}</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Unique Visitors</p>
                            <h3 className="text-2xl font-bold mt-1">{data.visitors.total}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                                    <span className="material-icons-round">swap_calls</span>
                                </div>
                                <span className="text-xs font-bold text-amber-500">{data.conversion.growth}</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Conversion Rate</p>
                            <h3 className="text-2xl font-bold mt-1">{data.conversion.total}</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Top Products */}
                        <div className="lg:col-span-2">
                            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden h-full">
                                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                    <h2 className="font-bold text-lg">Top Performing Products</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                                                <th className="px-6 py-4 font-semibold">Product Name</th>
                                                <th className="px-6 py-4 font-semibold text-center">Units Sold</th>
                                                <th className="px-6 py-4 font-semibold text-right">Revenue</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                            {data.topProducts.map((item, index) => (
                                                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium">{item.name}</td>
                                                    <td className="px-6 py-4 text-sm text-center">{item.sales}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right text-emerald-600 dark:text-emerald-400">{item.revenue}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>

                        {/* Recent Activity */}
                        <div className="lg:col-span-1">
                            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-bold text-lg">Recent Activity</h2>
                                </div>
                                <div className="space-y-6">
                                    {data.recentActivity.map((activity) => (
                                        <div key={activity.id} className="flex gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.bg} ${activity.color}`}>
                                                <span className="material-icons-round text-lg">{activity.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.action}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default AdminAnalytics;
