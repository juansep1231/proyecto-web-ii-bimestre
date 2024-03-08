import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserLarge } from 'react-icons/fa6';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-[#5f9ea0] text-neutral-100 text-lg py-4 px-8 shadow-lg">
      <div className="flex items-center">
        <Link to="/login" className="text-xl font-bold ">
          <img
            src="/img/logoImg.png"
            alt="LogoFashionFushion"
            className="h-10"
          />
        </Link>
      </div>
      <div className="ml-20">
        <ul className="flex">
          <li className="hover:text-gray-700 rounded-md px-3 py-1">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-gray-700 rounded-md px-3 py-1">
            <Link to="/add">Añadir praducto</Link>
          </li>
          <li className="hover:text-gray-700 rounded-md px-3 py-1">
            <Link to="/show">Mostrar producto</Link>
          </li>
          <li className="hover:text-gray-700 rounded-md px-3 py-1">
            <Link to="/update">Actualizar producto</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <button
            className="btn btn-primary rounded-xl w-fit text-white hover:bg-gray-400"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
        <div className="rounded-full border border-gray-700 p-3">
          <Link to="/user">
            <FaUserLarge className="size-5 text-gray-700" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
