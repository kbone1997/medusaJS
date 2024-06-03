"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) =>
{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() =>
    {
        const token = localStorage.getItem('token');
        if (token)
        {
            // Ideally, you should verify the token here
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const login = async (email, password) =>
    {
        try
        {
            const response = await axios.post('/api/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setUser({ token });
            router.push('/products'); // Redirect to products page after login
        } catch (error)
        {
            console.error('Login failed:', error);
        }
    };

    const signup = async (email, password) =>
    {
        try
        {
            await axios.post('/api/auth/signup', { email, password });
            login(email, password); // Auto-login after signup
            router.push('/products'); // Redirect to products page after signup
        } catch (error)
        {
            console.error('Signup failed:', error);
        }
    };

    const logout = () =>
    {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
