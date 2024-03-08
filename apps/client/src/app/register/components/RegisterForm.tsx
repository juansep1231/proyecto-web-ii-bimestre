import React, { useState } from 'react';
import MyInput from '../../components/generic/MyInput';
import MyLink from '../../components/generic/MyLink';

interface Props {
  onSubmit: (formData: {
    username: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ username, password, confirmPassword });
  };

  return (
    <div className="flex flex-col items-center justify-center border bg-white rounded-tr-2xl rounded-br-2xl w-96 h-4/5 gap-8">
      <div>
        <h1 className="text-2xl text-gray-700">Registrar nueva cuenta</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <MyInput
            label="Correo"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            label="Contraseña"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Ingrese nuevamente su contraseña"
            icon="FiLock"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-2/5 text-white"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
