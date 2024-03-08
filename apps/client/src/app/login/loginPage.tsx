import React from 'react';
import LoginForm from './components/loginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (formData: { username: string; password: string }) => {
    console.log('Formulario de login enviado:', formData);
  };

  return (
    <div>
      <div className="flex justify-center h-screen pt-14 bg-neutral-100">
        <LoginForm onSubmit={handleLogin} />
        <div className="flex flex-col items-center justify-center bg-[#5f9ea0] rounded-tr-2xl rounded-br-2xl w-96 h-4/5 gap-5 px-5">
          <div>
            <img src="/img/logoFFLight.png" alt="Logo FF" className="h-72" />
          </div>
          <div className="text-center">
            <p className="text-neutral-100 text-base px-5">
              Empieza a adquirir los más nuevos diseños de ropa directo a la
              puerta de tu casa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
