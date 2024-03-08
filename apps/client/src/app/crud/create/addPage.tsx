import React, { useEffect, useState } from 'react';
import AddForm from './AddForm';
import { db } from '../../../../../../firebase-shared/src/lib/firebase-shared';
import { collection, doc, setDoc } from "firebase/firestore";

const AddPage: React.FC = () => {
  // Aquí podrías tener lógica adicional relacionada con esta página si es necesario

  const handleSubmit = async (formData: {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
  }) => {
    const { id, name, description, price, url } = formData;
    try {
      const response = await fetch('/products/new-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          name: name,
          description: description,
          price: price,
          url: url
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Response:", data);
      // Puedes hacer algo con la respuesta aquí, por ejemplo, mostrar un mensaje de éxito.
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Manejo de errores, como mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div className="flex p-12 justify-center">
      <AddForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPage;
