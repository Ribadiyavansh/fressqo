import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get('/users');
            setUsers(data);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await api.delete(`/users/${id}`);
                fetchUsers();
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete user');
            }
        }
    };

    const handleRoleChange = async (id, newRole) => {
        try {
            await api.put(`/users/${id}`, { role: newRole });
            fetchUsers();
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to update user role');
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === '' || user.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="p-6 lg:p-10 font-display text-slate-900 dark:text-slate-100 min-h-full">
            <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and monitor registered user accounts.</p>
                </div>
            </header>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-6">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                        <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="Search by name, email..." type="text" />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {/* Admin Accounts Table */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden relative">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="text-xl font-bold font-display">Admin Accounts</h2>
                        <span className="bg-primary/20 text-primary-dark text-xs font-bold px-3 py-1 rounded-full">{filteredUsers.filter(u => u.role === 'admin').length} Admins</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                                    <th className="px-6 py-4 font-semibold">User</th>
                                    <th className="px-6 py-4 font-semibold">Email</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {filteredUsers.filter(u => u.role === 'admin').length === 0 && !loading && (
                                    <tr>
                                        <td colSpan="3" className="px-6 py-8 text-center text-slate-500">No admin accounts found.</td>
                                    </tr>
                                )}
                                {filteredUsers.filter(u => u.role === 'admin').map(user => (
                                    <tr key={user._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 uppercase">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <span className="text-sm font-medium">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{user.email}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => handleDelete(user._id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                                <span className="material-icons-round text-lg">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* User Accounts Table */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden relative">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="text-xl font-bold font-display">User Accounts</h2>
                        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full">{filteredUsers.filter(u => u.role !== 'admin').length} Users</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                                    <th className="px-6 py-4 font-semibold">User</th>
                                    <th className="px-6 py-4 font-semibold">Email</th>
                                    <th className="px-6 py-4 font-semibold">Join Date</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {filteredUsers.filter(u => u.role !== 'admin').length === 0 && !loading && (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-8 text-center text-slate-500">No regular users found.</td>
                                    </tr>
                                )}
                                {filteredUsers.filter(u => u.role !== 'admin').map(user => (
                                    <tr key={user._id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 uppercase">
                                                    {(user.name && typeof user.name === 'string') ? user.name.charAt(0) : '?'}
                                                </div>
                                                <span className="text-sm font-medium">{user.name || 'Unknown User'}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{user.email || 'No Email'}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => handleDelete(user._id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                                <span className="material-icons-round text-lg">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUsers;
