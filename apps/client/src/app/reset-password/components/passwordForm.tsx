'use client';
import { useState } from 'react';
import MyInput from '../../components/generic/MyInput';
import MyButton from '../../components/generic/MyButton';

interface Props {
  onClick: () => void;
}

const PasswordForm = ({ onClick }: Props) => {
  const [username, setUsername] = useState('');

  return (
    <form
      className="flex flex-col gap-6 w-96 items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="text-center">
        <p className="text-2xl text-gray-700 dark:text-white">
          Reestablecer contaseña
        </p>
      </div>
      <div>
        <img src="/img/logoFF.png" alt="Logo FF" className="h-36" />
      </div>
      <MyInput
        label="Correo"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Ingrese su correo"
        icon="FiAtSign"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn btn-primary p-3 rounded-xl bg-[#0f70b7] w-28 text-white"
        >
          Continuar
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
