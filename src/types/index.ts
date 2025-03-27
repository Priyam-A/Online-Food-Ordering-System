export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  featured: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  total: number;
  restaurantId: string;
  userId: string;
  createdAt: string;
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  orders: Order[];
}