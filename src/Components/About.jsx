import React from "react";

function About() {
  return (
    <div id="about" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=2669&q=80"
              alt="Modern farming technology"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Smart Farming</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're revolutionizing agriculture with cutting-edge technology that makes farm management simpler and more efficient.
            </p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Join Our Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
