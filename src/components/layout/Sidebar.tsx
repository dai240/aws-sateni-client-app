import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-40`}
      style={{ marginTop: '60px' }} 
    >
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200">
              ホーム
            </a>
            <hr className="border-gray-600 my-2" />
          </li>
          <li>
            <a href="/wilson/bladeseries" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200">
              Bladeシリーズ
            </a>
            <hr className="border-gray-600 my-2" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
