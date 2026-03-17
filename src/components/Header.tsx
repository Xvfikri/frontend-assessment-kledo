import React from 'react';
import Breadcrumb from './Breadcrumb';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="h-16 border-b border-slate-100 flex items-center px-4 md:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10 w-full min-w-0">
      <button 
        onClick={onMenuToggle}
        className="lg:hidden p-2 mr-3 text-slate-500 hover:text-slate-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
      <div className="flex-1 min-w-0">
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header;
