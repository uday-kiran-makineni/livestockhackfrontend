import React, { useState } from 'react';
import { Thermometer, Dna, Leaf, PlusCircle, MapPin, Menu, X, Mail, Lock, User, Phone, MessageSquare } from 'lucide-react';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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
            {children}
          </div>
        </div>
      </div>
    );
  };

  const LoginForm = () => (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
        Log In
      </button>
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          Sign up
        </button>
      </p>
    </form>
  );

  const SignupForm = () => (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your full name"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Create a password"
          />
        </div>
      </div>
      <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
        Sign Up
      </button>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button
          onClick={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }}
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          Log in
        </button>
      </p>
    </form>
  );

  return (
    <div className="min-h-screen bg-sky-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">SMART FARMING</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2">Home</a>
                <a href="#features" className="text-gray-700 hover:text-orange-600 px-3 py-2">Features</a>
                <a href="#about" className="text-gray-700 hover:text-orange-600 px-3 py-2">About</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 px-3 py-2">Contact</a>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-orange-600 hover:text-orange-700 px-3 py-2 font-medium"
                >
                  Log In
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Modern Farming Solutions for Better Results
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your agricultural practices with smart technology. Monitor your livestock, track health metrics, and optimize farm operations all from your mobile device.
              </p>
              <button 
              onClick={() => {
                // Assuming you're using React Router or similar for navigation
                window.location.href = '/dairyfarmers'; 
                // Or, if using React Router's useNavigate hook:
                // navigate('/dairyfarmers'); 
              }}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Started
            </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Cows grazing in a green field"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Features for Modern Farming</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive suite of tools helps you manage your farm more efficiently
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-sky-50 p-6 rounded-xl">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Temperature Monitoring</h3>
                <p className="text-gray-600">Real-time temperature tracking for optimal livestock conditions</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Dna className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
                <p className="text-gray-600">Comprehensive health monitoring and early warning system</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location Tracking</h3>
                <p className="text-gray-600">GPS tracking for livestock management and grazing patterns</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-24 bg-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                  alt="Modern farming technology"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Smart Farming</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're revolutionizing agriculture with cutting-edge technology that makes farm management simpler and more efficient. Our platform combines IoT sensors, data analytics, and mobile accessibility to give farmers unprecedented control over their operations.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Founded by agricultural experts and tech innovators, we understand the challenges modern farmers face and provide solutions that make a real difference.
                </p>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Join Our Platform
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our smart farming solutions? We're here to help!
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      rows={4}
                      className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        title="Log In"
      >
        <LoginForm />
      </Modal>

      {/* Signup Modal */}
      <Modal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        title="Sign Up"
      >
        <SignupForm />
      </Modal>
    </div>
  );
}

export default App;