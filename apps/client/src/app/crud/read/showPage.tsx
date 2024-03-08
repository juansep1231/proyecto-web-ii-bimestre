import React from 'react';
import ProductById from './components/ProductById';

const ShowPage: React.FC = () => {
  return (
    <div className="p-12 flex flex-col items-center gap-11">
      <h1 className="font-bold text-4xl">MOSTRAR PRODUCTO</h1>
      <div className="flex justify-center gap-12">
        <ProductById />
      </div>
    </div>
  );
};

export default ShowPage;
