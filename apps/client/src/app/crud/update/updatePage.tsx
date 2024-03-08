import React from 'react';
import UpdateForm from './UpdateForm';

const UpdatePage: React.FC = () => {
  const handleSubmit = (formData: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: File | null;
  }) => {
    // Lógica para manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  // Supongamos que tienes valores iniciales para el formulario
  const initialValues = {
    id: '1',
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 10,
    image: null,
  };

  return (
    <div className="flex p-12 justify-center">
      <UpdateForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

export default UpdatePage;
