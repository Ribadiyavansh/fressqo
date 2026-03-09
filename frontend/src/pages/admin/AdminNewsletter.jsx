import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function AdminNewsletter() {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSubscribers = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get('/newsletter');
            setSubscribers(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch subscribers');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this subscriber?')) {
            try {
                await api.delete(`/newsletter/${id}`);
                fetchSubscribers();
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete subscriber');
            }
        }
    };

    const handleExport = () => {
        if (subscribers.length === 0) return;

        const csvContent = "data:text/csv;charset=utf-8,"
            + "Email,Subscribed On\n"
            + subscribers.map(s => `${s.email},${new Date(s.createdAt).toISOString()}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "newsletter_subscribers.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Newsletter Subscribers</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your mailing list subscribers.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={handleExport} disabled={subscribers.length === 0} className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all disabled:opacity-50">
                        <span className="material-icons-round text-[18px]">download</span>
                        Export CSV
                    </button>
                </div>
            </header>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden min-h-[400px] relative">
                {error && <div className="p-4 bg-red-50 text-red-600 border-b border-red-200">{error}</div>}

                {loading && (
                    <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 flex justify-center items-center z-10 backdrop-blur-sm">
                        <div className="w-10 h-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                                <th className="px-6 py-4 font-semibold">Email</th>
                                <th className="px-6 py-4 font-semibold text-center">Subscribed On</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {subscribers.length === 0 && !loading && (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-slate-500">No subscribers found.</td>
                                </tr>
                            )}
                            {subscribers.map(sub => (
                                <tr key={sub._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium">{sub.email}</td>
                                    <td className="px-6 py-4 text-sm text-center text-slate-500">{new Date(sub.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => handleDelete(sub._id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-icons-round text-lg">delete_outline</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                    <p className="text-sm text-slate-500">Total Subscribers: <span className="font-medium text-slate-900 dark:text-white">{subscribers.length}</span></p>
                </div>
            </div>
        </div>
    );
}

export default AdminNewsletter;
