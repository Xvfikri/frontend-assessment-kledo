import React from 'react';
import RegionSelector from './RegionSelector';
import { Globe } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-slate-100 flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:h-screen
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-8 flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
            <Globe size={24} />
          </div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">Frontend Assessment</h1>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <div className="px-8 flex-1">
        <div className="mb-8">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Filter Wilayah</label>
          <div className="mt-4">
            <RegionSelector />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
