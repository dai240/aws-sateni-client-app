import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo_banar from '../../assets/images/logo_banar.png';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

interface MenuItemProps {
  to: string;
  label: string;
}

const MenuItem1: React.FC<MenuItemProps> = ({ to, label }) => (
  <Link to={to} className="hover:text-gray-400 hover:border-gray-500 font-segoe text-sm border border-black px-3 py-1 whitespace-nowrap">
    {label}
  </Link>
);

const MenuItem2: React.FC<MenuItemProps> = ({ to, label }) => (
  <Link to={to} className="hover:text-gray-400 hover:border-gray-500 font-segoe text-sm border border-black rounded-full px-3 py-1 whitespace-nowrap">
    {label}
  </Link>
);

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white text-black p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} className="mr-2">
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link to="/" className="mr-auto">
            <img src={logo_banar} alt="Sauna De Tennis" className="h-9 bg-white" />
          </Link>
          <nav className="flex space-x-2 ml-5">
            <MenuItem1 to="/Sauna" label="Sauna" />
            <MenuItem1 to="/Tennis" label="Tennis" />
          </nav>
        </div>
        <nav className="flex space-x-2">
          <MenuItem2 to="/wilson/bladeseries" label="Blade Series" />
          <MenuItem2 to="/about" label="About" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
