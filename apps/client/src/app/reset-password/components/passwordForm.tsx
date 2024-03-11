import React, { useState } from 'react';
import MyInput from '../../components/generic/MyInput';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface Props {
  onClick: () => void;
}

const PasswordForm = ({ onClick }: Props) => {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error('Error al enviar el correo');
      return;
    }
    try {
      await resetPassword(email);
      toast.success('El email fue enviado, revisa tu correo');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <form
        className="flex flex-col gap-6 w-96 items-center"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <p className="text-2xl text-gray-700 dark:text-white">
            Reestablecer contraseña
          </p>
        </div>
        <div>
          <img src="/img/logoFF.png" alt="Logo FF" className="h-36" />
        </div>
        <MyInput
          label="Correo"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingrese su correo"
          icon="FiAtSign"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-28 text-white hover:bg-gray-400"
            onClick={onClick}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
