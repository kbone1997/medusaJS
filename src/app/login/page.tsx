// Import useState and useAuth hook from React
"use client"
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    // Define state variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Use the useAuth hook to get the login function
    const { login } = useAuth();

    // Define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the login function from the useAuth hook with email and password
        login(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
