import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone_number: '',
    password: '',
    profile: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', formData);
      toast.success(response.data.detail);
      navigate('/Dashboard');
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response?.data?.detail || 'An error occurred while processing the request');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80">
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
        <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Welcome to KingsCutz
        </p>
        <form onSubmit={onSubmitHandler}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            />
            <input
              type="text"
              name="profile"
              placeholder="Profile"
              value={formData.profile}
              onChange={handleInputChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
            >
              Create Account
            </button>
            <p className="mt-4 text-sm">
              Already have an account?{' '}
              <Link to="/Login" className="has-text-primary">
                <span className="underline cursor-pointer">Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
