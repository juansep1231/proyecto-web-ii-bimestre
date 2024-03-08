import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://productms-jgvgw6iyea-uc.a.run.app/products'
        );
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = () => {
    console.log('Producto borrado');
  };

  return (
    <div className="p-12 flex flex-col items-center gap-12">
      <h1 className="font-bold text-4xl">FASHION FUSION</h1>
      <div className="flex justify-center gap-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
