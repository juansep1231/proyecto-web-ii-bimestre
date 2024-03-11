import React, { useState } from 'react';
import axios from 'axios';
import MyInput from '../../../components/generic/MyInput';
import ProductCardShow from './ProductCardShow';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string; // Cambiado a 'photo' en lugar de 'photoRef'
}

const ProductById: React.FC = () => {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://productms-jgvgw6iyea-uc.a.run.app/products/get-product/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex items-end gap-1">
        <MyInput
          label=""
          name="idProduct"
          type="text"
          value={productId}
          onChange={handleInputChange}
          placeholder="Ingrese el identificador del producto"
          icon="FiSearch"
        />
        <button
          onClick={handleSearch}
          className="rounded-xl bg-[#0f70b7] w-20 text-white h-12 hover:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Buscar'}
        </button>
      </div>
      {product && (
        <div>
          <ProductCardShow product={product} />
        </div>
      )}
      {!product && productId && !loading && (
        <p>No se encontró ningún producto con ese identificador.</p>
      )}
    </div>
  );
};

export default ProductById;
