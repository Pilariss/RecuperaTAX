import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storeUser = localStorage.getItem('user');
        if (storeUser) {
            setUser(JSON.parse(storeUser));
        }
    }, []);

    const login = (email, password) => {
        if (email === 'admin@example.com' && password === '123456') {
            const userData = { email };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};