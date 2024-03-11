import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string>('');

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

  const handleDelete = async (productId: string) => {
    try {
      const response = await fetch(
        `https://productms-jgvgw6iyea-uc.a.run.app/products/delete-product/${productId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Error al eliminar el producto');
      }
      console.log('Producto eliminado');
      // Actualiza la lista de productos después de eliminar el producto
      setProducts(products.filter((product) => product.id !== productId));

      toast.success('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      toast.error('Error al eliminar el producto');
    }
    closeModal();
  };

  const openModal = (productId: string) => {
    setProductToDelete(productId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-12 flex flex-col items-center gap-12">
      <h1 className="font-bold text-4xl">FASHION FUSION</h1>
      <div className="flex flex-wrap justify-center gap-12">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onDelete={() => openModal(product.id)}
            />
            {modalIsOpen && product.id === productToDelete && (
              <div className="fixed inset-0 flex items-start justify-center">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h2 className="text-lg mb-4">
                    ¿Está seguro de eliminar este producto?
                  </h2>
                  <div className="flex justify-center gap-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(product.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
