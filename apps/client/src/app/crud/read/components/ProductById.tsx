import React, { useState } from 'react';
import MyInput from '../../../components/generic/MyInput';
import ProductCardShow from './ProductCardShow';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // Cambiado a 'photo' en lugar de 'photoRef'
}

interface Props {
  products: Product[];
}

const ProductById: React.FC<Props> = ({ products }) => {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState<Product | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(event.target.value);
  };

  const handleSearch = () => {
    const foundProduct = products.find((product) => product.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
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
          className="rounded-xl bg-[#0f70b7] w-20 text-white h-12"
        >
          Buscar
        </button>
      </div>
      {product && (
        <div>
          <ProductCardShow product={product} />
        </div>
      )}
      {!product && productId && (
        <p>No se encontró ningún producto con ese identificador.</p>
      )}
    </div>
  );
};

export default ProductById;
