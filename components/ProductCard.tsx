import { Product } from '@/lib/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <span className="absolute inset-0 flex items-center justify-center text-gray-400">
          [Produktbild]
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">{product.price}€</span>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
          >
            Kaufen
          </button>
        </div>
      </div>
    </div>
  );
}
