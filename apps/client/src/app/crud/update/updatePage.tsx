import React from 'react';
import UpdateForm from './UpdateForm';

const UpdatePage: React.FC = () => {
  const handleSubmit = async (formData: {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
  }) => {
    try {
      const { id, name, description, price, url } = formData;
      const response = await fetch(
        `https://productms-jgvgw6iyea-uc.a.run.app/products/update-product/${id}`,
        {
          method: 'PUT', // Usamos el método PUT para la actualización
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            url: url,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);
      return data;
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }

    // Lógica para manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="flex p-12 justify-center">
      <UpdateForm onSubmit={handleSubmit} />
    </div>
  );
};

export default UpdatePage;
