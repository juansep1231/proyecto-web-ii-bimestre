import React, { useState } from 'react';
import MyInput from '../../components/generic/MyInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer } from 'react-toastify';

interface Props {
  onSubmit: (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<void>;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    try {
      await signup(email, password);
      onSubmit({ email, password, confirmPassword });
      toast.success('Su registro se realizó con exito');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border bg-white rounded-tr-2xl rounded-br-2xl w-96 h-4/5 gap-5">
      <div>
        <h1 className="text-2xl text-gray-700">Registrar cuenta nueva</h1>
      </div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <MyInput
            label="Correo"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo"
            icon="FiAtSign"
          />
          <MyInput
            label="Contraseña"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            icon="FiLock"
          />
          <MyInput
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Ingrese nuevamente su contraseña"
            icon="FiLock"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-2/5 text-white hover:bg-gray-400"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
