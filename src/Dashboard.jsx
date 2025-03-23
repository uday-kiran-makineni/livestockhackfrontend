import React, { useState } from 'react';
import axios from 'axios';
import { X, Mail, Lock, User } from 'lucide-react';

function Dashboard() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            {errorMessage && <p className="text-red-600 text-sm mb-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-600 text-sm mb-2">{successMessage}</p>}
            {children}
          </div>
        </div>
      </div>
    );
  };

  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setErrorMessage('');
      setSuccessMessage('');

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/signin', { email, password });
        try {
          localStorage.setItem('token', response.data.token);
        } catch (err) {
          console.error('LocalStorage is not accessible:', err);
        }
        setSuccessMessage('Login successful! Redirecting...');
        setTimeout(() => {
          setIsLoginOpen(false);
          setSuccessMessage('');
        }, 2000);
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Login failed! Please check your credentials.');
      }
    };

    return (
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
          Log In
        </button>
      </form>
    );
  };

  const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
      e.preventDefault();
      setErrorMessage('');
      setSuccessMessage('');

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/signup', { name, email, password });
        setSuccessMessage('Signup successful! You can now log in.');
        setTimeout(() => {
          setIsSignupOpen(false);
          setSuccessMessage('');
          setIsLoginOpen(true);
        }, 2000);
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Signup failed! Please try again.');
      }
    };

    return (
      <form className="space-y-4" onSubmit={handleSignup}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Create a password"
              required
            />
          </div>
        </div>
        <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
          Sign Up
        </button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-sky-100">
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Log In">
        <LoginForm />
      </Modal>
      <Modal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} title="Sign Up">
        <SignupForm />
      </Modal>
      <div className="flex justify-center items-center h-screen space-x-4">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
        <button
          onClick={() => setIsSignupOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Dashboard;