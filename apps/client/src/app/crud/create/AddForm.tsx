import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import MyInput from '../../components/generic/MyInput';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface Props {
  onSubmit: (formData: {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
  }) => void;
}

const AddForm: React.FC<Props> = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  //Cargar imagen al storage
  const uploadFile = async (file: File) => {
    const storageRef = ref(storage, `Imagenes/${name}`);
    try {
      await uploadBytes(storageRef, file);
      console.log('Uploaded file!');
      toast.success('Producto añadido exitosamente');
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error al añadir el producto');
    }
  };

  const getImageUrl = async (name: string) => {
    try {
      const downloadUrl = await getDownloadURL(
        ref(storage, `Imagenes/${name}`)
      );
      setUrl(downloadUrl);
      return downloadUrl;
    } catch (error) {
      console.error('Error getting image URL:', error);
      return '';
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await uploadFile(photo as File);
    const imageUrl = await getImageUrl(name as string); // Await the getImageUrl function call
    onSubmit({ id, name, description, price, url: imageUrl });
  };

  const handlePhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log('Nombre del archivo seleccionado:', file.name);
      setPhoto(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border bg-white rounded-2xl w-[450px] h-5/5 gap-8 py-10 shadow-md">
      <div>
        <h1 className="text-2xl text-gray-700">Añadir nuevo producto</h1>
      </div>
      <ToastContainer />
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
                onChange={(e) => setPhoto(e.target.files && e.target.files[0])}
                className="hidden"
              />
              <FiUpload className="text-blue-500" />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-40 text-white hover:bg-gray-400"
          >
            Añadir producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
