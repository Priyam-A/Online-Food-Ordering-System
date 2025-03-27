import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, DollarSign, Plus, Minus } from 'lucide-react';
import { formatPrice } from '../lib/utils';

const MOCK_MENU_ITEMS = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomato, and our special sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    category: 'Burgers',
    restaurantId: '1'
  },
  {
    id: '2',
    name: 'Cheese Fries',
    description: 'Crispy fries topped with melted cheddar cheese',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500',
    category: 'Sides',
    restaurantId: '1'
  }
];

export function RestaurantPage() {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<Record<string, number>>({});

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  return (
    <div>
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200"
          alt="Restaurant cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Burger Palace</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.5</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>25-35 min</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-5 h-5" />
                <span>$$</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            <div className="flex gap-4 mb-6">
              {['All', 'Burgers', 'Sides', 'Drinks'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="space-y-6">
              {MOCK_MENU_ITEMS.map(item => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <p className="font-semibold">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {cart[item.id] ? (
                      <>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{cart[item.id]}</span>
                      </>
                    ) : null}
                    <button
                      onClick={() => addToCart(item.id)}
                      className="p-1 rounded-full bg-orange-500 text-white hover:bg-orange-600"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h3 className="text-lg font-semibold mb-4">Your Order</h3>
            {Object.keys(cart).length > 0 ? (
              <>
                <div className="space-y-4 mb-4">
                  {Object.entries(cart).map(([itemId, quantity]) => {
                    const item = MOCK_MENU_ITEMS.find(i => i.id === itemId);
                    if (!item) return null;
                    return (
                      <div key={itemId} className="flex justify-between">
                        <span>{item.name} x {quantity}</span>
                        <span>{formatPrice(item.price * quantity)}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(
                      Object.entries(cart).reduce((total, [itemId, quantity]) => {
                        const item = MOCK_MENU_ITEMS.find(i => i.id === itemId);
                        return total + (item ? item.price * quantity : 0);
                      }, 0)
                    )}</span>
                  </div>
                  <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}