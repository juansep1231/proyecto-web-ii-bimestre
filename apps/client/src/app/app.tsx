// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/generic/Navbar';
import HomePage from './home/homePage';
import AddPage from './crud/create/addPage';
import UpdatePage from './crud/update/updatePage';
import ShowPage from './crud/read/showPage';
import LoginPage from './login/loginPage';
import ResetPasswordPage from './reset-password/resetPasswordPage';
import SignupPage from './register/registerPage';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/generic/ProtectedRoute';

export function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update"
            element={
              <ProtectedRoute>
                <UpdatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show"
            element={
              <ProtectedRoute>
                <ShowPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
      {/* END: routes */}
    </div>
  );
}

export default App;
