import React from 'react';
import RegisterForm from './components/RegisterForm';
import MyLink from '../components/generic/MyLink';

const SignupPage: React.FC = () => {
  const handleSignup = async (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      try {
        console.log('Formulario de registro enviado:', formData);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center h-screen pt-14 bg-neutral-100">
        <div className="flex flex-col items-center justify-center bg-[#5f9ea0] rounded-tl-2xl rounded-bl-2xl w-96 h-4/5 gap-5 px-5">
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
              href={`/login`}
              className="text-small m-auto text-blue-800 tex"
            >
              ¡Empieza ya! Inicia sesión
            </MyLink>
          </div>
        </div>

        <RegisterForm onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;
