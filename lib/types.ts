export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'shipped';
  createdAt: Date;
}
