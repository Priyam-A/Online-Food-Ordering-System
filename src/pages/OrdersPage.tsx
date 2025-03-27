import React from 'react';
import { Clock, CheckCircle, Truck } from 'lucide-react';
import { formatPrice } from '../lib/utils';

const MOCK_ORDERS = [
  {
    id: '1',
    items: [
      { id: '1', menuItemId: '1', quantity: 2, price: 12.99 },
      { id: '2', menuItemId: '2', quantity: 1, price: 6.99 }
    ],
    status: 'delivering',
    total: 32.97,
    restaurantId: '1',
    userId: '1',
    createdAt: '2024-03-15T10:30:00Z'
  }
];

const STATUS_STEPS = [
  { status: 'confirmed', icon: CheckCircle, label: 'Order Confirmed' },
  { status: 'preparing', icon: Clock, label: 'Being Prepared' },
  { status: 'delivering', icon: Truck, label: 'Out for Delivery' },
  { status: 'delivered', icon: CheckCircle, label: 'Delivered' }
];

export function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Your Orders</h1>
      
      <div className="space-y-6">
        {MOCK_ORDERS.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                <p className="text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatPrice(order.total)}</p>
                <p className="text-sm text-gray-500">2 items</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="relative flex justify-between">
                {STATUS_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = STATUS_STEPS.findIndex(s => s.status === order.status) >= index;
                  return (
                    <div key={step.status} className="flex flex-col items-center relative z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-green-500 text-white' : 'bg-gray-200'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{step.label}</p>
                    </div>
                  );
                })}
                <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-10">
                  <div
                    className="h-full bg-green-500 transition-all"
                    style={{
                      width: `${
                        (STATUS_STEPS.findIndex(s => s.status === order.status) /
                          (STATUS_STEPS.length - 1)) *
                        100
                      }%`
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <button className="text-orange-500 hover:text-orange-600 font-medium">
                View Order Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}