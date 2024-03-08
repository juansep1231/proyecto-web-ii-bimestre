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
    const productosCollection = collection(db, "productos");
    const productoDoc = doc(productosCollection, id);
    try {
      await setDoc(productoDoc, {
        name: name,
        description: description,
        price: price,
        url: url
      });
      console.log("Producto guardado correctamente.");
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
    console.log(formData);
  };

  return (
    <div className="flex p-12 justify-center">
      <AddForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPage;
