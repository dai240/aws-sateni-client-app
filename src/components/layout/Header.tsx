import React from 'react';
import { Link } from 'react-router-dom'; // Linkコンポーネントをインポート
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          {isSidebarOpen ? <MenuIcon /> : <MenuIcon />}
        </IconButton>
        <Link to="/" className="flex items-center ml-3">
          <img src={logo} alt="Tennis Site Logo" className="h-9 rounded-full" />
          <div className="text-2xl font-bold ml-3">SAUNA DE TENNIS</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
