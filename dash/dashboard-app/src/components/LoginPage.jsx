import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('token', token);
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleGoogleLogin = () => {
        window.location.href = 'YOUR_BACKEND_URL/accounts/google/login/';
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default LoginPage;
