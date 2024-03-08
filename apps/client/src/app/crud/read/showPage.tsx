import React from 'react';
import ProductById from './components/ProductById';

const ShowPage: React.FC = () => {
  const products = [
    {
      id: '1',
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 10,
      image: 'ruta/a/la/imagen1.jpg', // Cambia photoRef a photo
    },
    {
      id: '2',
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 20,
      image: 'ruta/a/la/imagen2.jpg', // Cambia photoRef a photo
    },
  ];

  return (
    <div className="p-12 flex flex-col items-center gap-11">
      <h1 className="font-bold text-4xl">MOSTRAR PRODUCTO</h1>
      <div className="flex justify-center gap-12">
        <ProductById products={products} />
      </div>
    </div>
  );
};

export default ShowPage;
