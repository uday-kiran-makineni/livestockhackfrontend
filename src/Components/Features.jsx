import React from "react";
import { Thermometer, Dna, MapPin } from "lucide-react";

function Features() {
  return (
    <div id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Features for Modern Farming</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you manage your farm more efficiently.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-sky-50 p-6 rounded-xl">
            <Thermometer className="h-6 w-6 text-orange-600 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Temperature Monitoring</h3>
            <p className="text-gray-600">Real-time temperature tracking for optimal livestock conditions.</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-xl">
            <Dna className="h-6 w-6 text-orange-600 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
            <p className="text-gray-600">Comprehensive health monitoring and early warning system.</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-xl">
            <MapPin className="h-6 w-6 text-orange-600 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Location Tracking</h3>
            <p className="text-gray-600">GPS tracking for livestock management and grazing patterns.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
