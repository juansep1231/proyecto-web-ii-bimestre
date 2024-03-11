import React, { useState } from 'react';
import MyInput from '../../components/generic/MyInput';
import MyLink from '../../components/generic/MyLink';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const LoginForm: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      toast('Bienvenido');
      navigate('/home');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate('/home');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border bg-white rounded-tl-2xl rounded-bl-2xl w-96 h-4/5 gap-8">
      <div>
        <h1 className="text-2xl text-gray-700">Inicio de sesión</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <MyInput
            label="Correo"
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
            placeholder="Ingrese su correo"
            icon="FiAtSign"
          />
          <MyInput
            label="Contraseña"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
            icon="FiLock"
          />
        </div>
        <div className="text-right">
          <MyLink
            href={`/reset-password`}
            className="text-small m-auto text-[#0f70b7]"
          >
            ¿Olvidaste tu contraseña?
          </MyLink>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            type="submit"
            className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-60 text-white hover:bg-gray-400"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
