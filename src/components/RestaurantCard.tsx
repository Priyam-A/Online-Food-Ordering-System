import React from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';
import { Restaurant } from '../types';
import { cn } from '../lib/utils';

interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

export function RestaurantCard({ restaurant, className }: RestaurantCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <img 
        src={restaurant.image} 
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
        <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{restaurant.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{restaurant.priceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
}