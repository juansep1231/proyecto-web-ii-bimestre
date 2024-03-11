import React from 'react';
import MyIcon from '../../components/generic/MyIcon';

interface Product {
  id: string; // Agrega el ID del producto al tipo Product
  name: string;
  url: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onDelete: (productId: string) => void; // Función para manejar el evento de borrar
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(product.id); // Envía el ID del producto al componente padre al hacer clic en el botón de eliminar
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg w-80 p-8 flex flex-col items-center justify-between gap-3 h-56">
      <div className="flex justify-end w-full">
        <img src={product.url} className="h-3 w-3" />
        <button
          onClick={handleDeleteClick} // Usa la función de manejo de clic para eliminar
          className="rounded-xl border bg-gray-50 text-gray-400 hover:bg-neutral-200 focus:outline-none p-2"
        >
          <MyIcon icon="FiTrash2" />
        </button>
      </div>
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

export default ProductCard;
