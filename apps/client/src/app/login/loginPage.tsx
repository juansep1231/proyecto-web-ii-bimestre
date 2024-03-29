// LoginPage.tsx
import React from 'react';
import LoginForm from './components/loginForm';
import MyLink from '../components/generic/MyLink';

const LoginPage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center h-screen items-center bg-neutral-100">
        <LoginForm />
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
          <div>
            <MyLink
              href={`/register`}
              className="text-small m-auto text-blue-800"
            >
              ¿No tienes cuenta? Regístrate
            </MyLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
