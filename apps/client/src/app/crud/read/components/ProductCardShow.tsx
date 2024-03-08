import React from 'react';

interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCardShow: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg w-80 px-5 py-8 flex flex-col items-center justify-between gap-3 h-56">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="mt-4">
          <p className="text-gray-800 text-lg font-semibold">
            Precio: ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardShow;
