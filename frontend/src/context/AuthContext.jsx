import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [avatar, setAvatar] = useState(() => {
        return localStorage.getItem('fresqo_avatar') || "/avatars/avatar1.png";
    });

    useEffect(() => {
        // Mock checking local storage or session
        const storedUser = localStorage.getItem('fresqo_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('fresqo_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('fresqo_user');
        localStorage.removeItem('fresqo_avatar');
    };

    const updateAvatar = (newAvatar) => {
        setAvatar(newAvatar);
        localStorage.setItem('fresqo_avatar', newAvatar);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, avatar, updateAvatar, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
