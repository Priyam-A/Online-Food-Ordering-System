import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantCard } from '../components/RestaurantCard';
import { Filter, ChevronDown } from 'lucide-react';

const MOCK_RESTAURANTS = [
  {
    id: '1',
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: '25-35 min',
    priceRange: '$$',
    featured: true
  },
  {
    id: '2',
    name: 'Pizza Paradise',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '30-40 min',
    priceRange: '$$$',
    featured: true
  },
  {
    id: '3',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: '35-45 min',
    priceRange: '$$$',
    featured: true
  }
];

export function HomePage() {
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  return (
    <div>
      <section className="mb-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Delicious food delivered to your door</h1>
              <p className="text-xl mb-8">Order from the best local restaurants</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Restaurants</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <span>Cuisine: {selectedCuisine}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_RESTAURANTS.map((restaurant) => (
            <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}