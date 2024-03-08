import React, { useEffect, useState } from 'react';
import AddForm from './AddForm';

const AddPage: React.FC = () => {
  // Aquí podrías tener lógica adicional relacionada con esta página si es necesario

  const handleSubmit = (formData: {
    id: string;
    name: string;
    description: string;
    price: number;
    photo: File | null;
  }) => {
    // Aquí podrías manejar la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <div className="flex p-12 justify-center">
      <AddForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPage;
