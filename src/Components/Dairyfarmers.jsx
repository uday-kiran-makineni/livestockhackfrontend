import React, { useState } from 'react';
import { 
  Milk, 
  Users, 
  BarChart3,
  Stethoscope
} from 'lucide-react';

const Role = 'dairy-farmers' | 'commercial-operations' | 'veterinarians' | null;

function DairyFarmers() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);

  const DairyFarmersDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Milk className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-800">Dairy Farmers Dashboard</h1>
          </div>
          <button
            onClick={() => setSelectedRole(null)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Change Role
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Users className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Cattle</h3>
            <p className="text-3xl font-bold text-blue-600">245</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Milk className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Production</h3>
            <p className="text-3xl font-bold text-green-600">1,250 L</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BarChart3 className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">$12,450</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CommercialDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BarChart3 className="h-8 w-8 text-green-600" />
            <h1 className="text-xl font-semibold text-gray-800">Commercial Operations Dashboard</h1>
          </div>
          <button
            onClick={() => setSelectedRole(null)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Change Role
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BarChart3 className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Sales</h3>
            <p className="text-3xl font-bold text-green-600">$45,250</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Users className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Active Clients</h3>
            <p className="text-3xl font-bold text-blue-600">128</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Milk className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Lines</h3>
            <p className="text-3xl font-bold text-purple-600">12</p>
          </div>
        </div>
      </div>
    </div>
  );

  const VeterinarianDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Stethoscope className="h-8 w-8 text-red-600" />
            <h1 className="text-xl font-semibold text-gray-800">Veterinarian Dashboard</h1>
          </div>
          <button
            onClick={() => setSelectedRole(null)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Change Role
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Users className="h-8 w-8 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Active Cases</h3>
            <p className="text-3xl font-bold text-red-600">24</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Stethoscope className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Checkups Today</h3>
            <p className="text-3xl font-bold text-blue-600">8</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BarChart3 className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Treatment Success</h3>
            <p className="text-3xl font-bold text-purple-600">95%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const RoleSelection = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <Milk className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">Dairy Management System</h1>
          <p className="text-gray-600 mt-2">Please select your role to continue</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setSelectedRole('dairy-farmers')}
            className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Users className="h-6 w-6 text-blue-500 mr-3" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Dairy Farmers</h3>
              <p className="text-sm text-gray-600">Manage your dairy farm operations</p>
            </div>
          </button>

          <button
            onClick={() => setSelectedRole('commercial-operations')}
            className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
          >
            <BarChart3 className="h-6 w-6 text-green-500 mr-3" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Commercial Operations</h3>
              <p className="text-sm text-gray-600">Oversee business and sales</p>
            </div>
          </button>

          <button
            onClick={() => setSelectedRole('veterinarians')}
            className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 transition-colors"
          >
            <Stethoscope className="h-6 w-6 text-red-500 mr-3" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Veterinarians</h3>
              <p className="text-sm text-gray-600">Manage animal health records</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => {
    switch (selectedRole) {
      case 'dairy-farmers':
        return <DairyFarmersDashboard />;
      case 'commercial-operations':
        return <CommercialDashboard />;
      case 'veterinarians':
        return <VeterinarianDashboard />;
      default:
        return <RoleSelection />;
    }
  };

  return renderDashboard();
}

export default DairyFarmers;