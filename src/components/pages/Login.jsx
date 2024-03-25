// Login.js (React frontend)

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login(props) {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const onChangeForm = (label, event) => {
    switch (label) {
      case 'username':
        setLoginForm({ ...loginForm, username: event.target.value });
        break;
      case 'password':
        setLoginForm({ ...loginForm, password: event.target.value });
        break;
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', loginForm.username);
      formData.append('password', loginForm.password);

      const response = await axios.post('http://localhost:8000/token', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      localStorage.setItem('auth_token', response.data.access_token);
      localStorage.setItem('auth_token_type', response.data.token_type);
      toast.success('Login successful');
      navigate('/Dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error(error.response?.data?.detail || 'An error occurred while processing the request');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome to KingsCutz</h1>
        <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Please login to your account!
        </p>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm('username', event);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm('password', event);
            }}
          />
          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
            >
              Sign In
            </button>
            <p className="mt-4 text-sm">
              You don't have an account?{' '}
              <Link to="/register" className="underline cursor-pointer">
                Register
              </Link>{' '}
             
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
