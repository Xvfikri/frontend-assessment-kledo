import React from 'react';
import Breadcrumb from './Breadcrumb';

const Header: React.FC = () => {
  return (
    <header className="h-16 border-b border-slate-100 flex items-center px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
      <Breadcrumb />
    </header>
  );
};

export default Header;
