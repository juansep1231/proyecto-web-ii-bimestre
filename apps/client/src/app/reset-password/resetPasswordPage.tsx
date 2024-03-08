'use client';

import { useState } from 'react';
import PasswordForm from './components/passwordForm';

const ResetPasswordPage = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex w-full h-screen justify-center bg-white pt-24">
      <div className="rounded-2xl bg-gray-100 px-6 py-10 dark:bg-dark_d h-fit flex items-center">
        <PasswordForm onClick={() => setSuccess(true)} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
