import React from 'react';
import RegionSelector from './RegionSelector';
import { Globe } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 h-screen border-r border-slate-100 flex flex-col bg-white overflow-y-auto shrink-0">
      <div className="p-8 flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
          <Globe size={24} />
        </div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">Frontend Assessment</h1>
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
