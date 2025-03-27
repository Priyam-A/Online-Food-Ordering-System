import React from 'react';
import { Trash2, CreditCard } from 'lucide-react';
import { formatPrice } from '../lib/utils';

const MOCK_CART_ITEMS = [
  {
    id: '1',
    name: 'Classic Burger',
    price: 12.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
  },
  {
    id: '2',
    name: 'Cheese Fries',
    price: 6.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500'
  }
];

export function CartPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      <div className="flex gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {MOCK_CART_ITEMS.map(item => (
              <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <select
                      value={item.quantity}
                      onChange={() => {}}
                      className="border rounded px-2 py-1"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-80">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatPrice(32.97)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>{formatPrice(2.99)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>{formatPrice(2.50)}</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(38.46)}</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              Proceed to Payment
            </button>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter promo code"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}