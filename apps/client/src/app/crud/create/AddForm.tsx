import React, { useState } from 'react';
import { FiAtSign, FiLock, FiUpload } from 'react-icons/fi';
import MyInput from '../../components/generic/MyInput';
import MyLink from '../../components/generic/MyLink';

interface Props {
  onSubmit: (formData: {
    id: string;
    name: string;
    description: string;
    price: number;
    photo: File;
  }) => void;
}

const AddForm: React.FC<Props> = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ id, name, description, price, photo: photo as File });
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border bg-white rounded-2xl w-[450px] h-5/5 gap-8 py-10 shadow-md">
      <div>
        <h1 className="text-2xl text-gray-700">Añadir nuevo producto</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <MyInput
            label="Identificador del producto"
            name="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ingrese el identificador del producto"
            icon="FiAlertCircle"
          />
          <MyInput
            label="Nombre del producto"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese el nombre del producto"
            icon="FiShoppingBag"
          />
          <MyInput
            label="Descripción del producto"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ingrese la descripción del producto"
            icon="FiEdit2"
          />
          <MyInput
            label="Precio del producto"
            name="price"
            type="number"
            value={price.toString()}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Ingrese el precio del producto"
            icon="FiDollarSign"
          />
          <div>
            <label htmlFor="photo" className="text-gray-700 flex items-center">
              <span className="mr-2">Foto del producto:</span>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <FiUpload className="text-blue-500" />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-40 text-white"
          >
            Añadir producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
