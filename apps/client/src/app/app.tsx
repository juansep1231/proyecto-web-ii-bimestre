// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/generic/Navbar';
import HomePage from './home/homePage';
import AddPage from './crud/create/addPage';
import DeletePage from './crud/delete/deletePage';
import UpdatePage from './crud/update/updatePage';
import ShowPage from './crud/read/showPage';
import LoginPage from './login/loginPage';
import ResetPasswordPage from './reset-password/resetPasswordPage';
import SignupPage from './register/registerPage';

export function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/show" element={<ShowPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
