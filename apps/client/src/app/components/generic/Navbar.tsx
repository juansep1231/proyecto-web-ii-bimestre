import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserLarge } from 'react-icons/fa6';

const Navbar: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-[#5f9ea0] text-gray-700 text-lg font-medium py-4 px-8">
      <div className="flex items-center">
        <Link to="/login" className="text-xl font-bold">
          <img
            src="/img/logoImg.png"
            alt="LogoFashionFushion"
            className="h-10"
          />
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="mr-6">
            <Link to="/home">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/add">Añadir praducto</Link>
          </li>
          <li className="mr-6">
            <Link to="/delete">Borrar producto</Link>
          </li>
          <li>
            <Link to="/update">Actualizar producto</Link>
          </li>
        </ul>
      </div>
      <div className="rounded-full border border-gray-700 p-2">
        <Link to="/user">
          <FaUserLarge className="size-5 text-gray-700" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
