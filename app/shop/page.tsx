'use client';

import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Pikachu Puppe',
    price: 49.99,
    image: '/pikachu.jpg',
    description: 'Realistische Pikachu Puppe - Premium Qualität',
  },
  {
    id: 2,
    name: 'Charizard Puppe',
    price: 59.99,
    image: '/charizard.jpg',
    description: 'Majestätischer Charizard mit Details',
  },
  {
    id: 3,
    name: 'Blastoise Puppe',
    price: 59.99,
    image: '/blastoise.jpg',
    description: 'Imposanter Blastoise mit Panzerdetails',
  },
];

export default function Shop() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    alert('Zur Warenkorn hinzugefügt!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">🛍️ Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
            <div className="bg-gray-300 h-48 flex items-center justify-center">
              <span className="text-gray-500">[Produktbild]</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">{product.price}€</span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  In den Warenkorb
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
