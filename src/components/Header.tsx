import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold">FoodHub</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/orders" className="text-gray-600 hover:text-orange-500">
              Orders
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-orange-500">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-orange-500">
              <User className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}