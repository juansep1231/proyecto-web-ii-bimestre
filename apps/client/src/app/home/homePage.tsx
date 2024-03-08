import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const HomePage: React.FC = () => {
  //const [products, setProducts] = useState<any[]>([]);

  /*useEffect(() => {
    // Llama a la función fetchProducts para obtener los datos de los productos
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
    }
    fetchData();
  }, []);*/

  // Arreglo de productos
  const products = [
    {
      id: 1,
      name: 'Vestido',
      image: '/img/vestido.png',
      description: 'Vestido floreado casual de manga corta',
      price: 35.0,
    },
    {
      id: 2,
      name: 'Producto 2',
      image: '/img/vestido.png',
      description: 'Vestido floreado casual de manga corta',
      price: 20.99,
    },
    // Más productos...
  ];

  const handleDelete = () => {
    // Lógica para manejar el evento de borrar
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
