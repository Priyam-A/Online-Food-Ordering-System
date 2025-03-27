import React from 'react';
import { User, MapPin, CreditCard, Gift, History, Settings } from 'lucide-react';

const MOCK_USER = {
  name: 'John Doe',
  email: 'john@example.com',
  points: 250,
  addresses: [
    {
      id: '1',
      type: 'Home',
      address: '123 Main St, New York, NY 10001'
    }
  ],
  paymentMethods: [
    {
      id: '1',
      type: 'Credit Card',
      last4: '4242',
      expiry: '12/24'
    }
  ]
};

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{MOCK_USER.name}</h1>
            <p className="text-gray-600">{MOCK_USER.email}</p>
            <div className="mt-2 inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
              <Gift className="w-4 h-4" />
              <span>{MOCK_USER.points} points</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Delivery Addresses</h2>
          </div>
          
          {MOCK_USER.addresses.map(address => (
            <div key={address.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{address.type}</h3>
                  <p className="text-gray-600">{address.address}</p>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Edit</button>
              </div>
            </div>
          ))}
          
          
          
          <button className="mt-4 w-full border border-dashed rounded-lg p-4 text-gray-500 hover:text-gray-600 hover:border-gray-400">
            + Add New Address
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Payment Methods</h2>
          </div>
          
          {MOCK_USER.paymentMethods.map(method => (
            <div key={method.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{method.type}</h3>
                  <p className="text-gray-600">•••• {method.last4} | Expires {method.expiry}</p>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Edit</button>
              </div>
            </div>
          ))}
          
          <button className="mt-4 w-full border border-dashed rounded-lg p-4 text-gray-500 hover:text-gray-600 hover:border-gray-400">
            + Add New Payment Method
          </button>
        </div>

        <div className="col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <History className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold">Order Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Default Delivery Instructions</h3>
                  <p className="text-gray-600">Leave at door</p>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Edit</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dietary Preferences</h3>
                  <p className="text-gray-600">Vegetarian</p>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Edit</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold">Account Settings</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left py-2 hover:text-orange-500">
                Change Password
              </button>
              <button className="w-full text-left py-2 hover:text-orange-500">
                Notification Preferences
              </button>
              <button className="w-full text-left py-2 hover:text-orange-500">
                Privacy Settings
              </button>
              <button className="w-full text-left py-2 text-red-500 hover:text-red-600">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}