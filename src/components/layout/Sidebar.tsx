import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
interface MenuItemProps {
  to: string;
  label: string;
  toggleSidebar: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, label, toggleSidebar }) => (
  <Link to={to} className="hover:bg-gray-200 p-2 rounded border-b" onClick={toggleSidebar}>
    {label}
   </Link>
);


const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-40 pt-16`} // pt-16 to offset the height of the header
    >
      <div className="flex flex-col space-y-4 p-4">
        <MenuItem to="/" label="Home" toggleSidebar={toggleSidebar} />
        <MenuItem to="/wilson/bladeseries" label="Blade Series" toggleSidebar={toggleSidebar} />
        <MenuItem to="/about" label="About" toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
