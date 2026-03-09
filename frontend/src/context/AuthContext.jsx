import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [avatar, setAvatar] = useState(() => {
        return localStorage.getItem('fresqo_avatar') || "/avatars/avatar1.png";
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const storedUser = localStorage.getItem('userInfo');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);

                    // Verify token by fetching profile
                    api.defaults.headers.common['Authorization'] = `Bearer ${parsedUser.token}`;
                    const { data } = await api.get('/users/profile');
                    setUser({ ...parsedUser, ...data });
                }
            } catch (error) {
                console.error("Auth check failed", error);
                localStorage.removeItem('userInfo');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkLoggedIn();
    }, []);

    const loginUser = async (email, password) => {
        const { data } = await api.post('/users/login', { email, password });
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        return data;
    };

    const registerUser = async (userData) => {
        const { data } = await api.post('/users', userData);
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        return data;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('fresqo_avatar');
        delete api.defaults.headers.common['Authorization'];
    };

    const updateAvatar = (newAvatar) => {
        setAvatar(newAvatar);
        localStorage.setItem('fresqo_avatar', newAvatar);
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, registerUser, logout, avatar, updateAvatar, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
