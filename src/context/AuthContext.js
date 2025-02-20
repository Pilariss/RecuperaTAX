import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); setLoading(false);});
        return () => unsubscribe();
    }, []);

    const register = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            console.error("Erro ao registrar:", error.message);
            return false;
        }
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            return true;
        } catch (error) {
            console.error("Erro ao autenticar com Google:", error.message);
            return false;
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            console.error("Erro ao fazer login:", error.message);
            return false;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Erro ao fazer logout:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, register, login, logout, loginWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};