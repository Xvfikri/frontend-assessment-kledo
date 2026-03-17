  import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const province = searchParams.get('province');
  const regency = searchParams.get('regency');
  const district = searchParams.get('district');

  if (!province) {
    return (
      <div className="h-full flex flex-col items-center pt-20 text-center space-y-4">
        <div className="p-4 bg-blue-50 rounded-full text-blue-500 animate-bounce">
          <ArrowDown size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Mulai Pilih Wilayah</h2>
        <p className="text-slate-400 max-w-sm">Gunakan filter di sebelah kiri untuk melihat detail wilayah Indonesia.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center pt-10 space-y-10 px-6">
      <div className="flex flex-col items-center text-center space-y-3">
        <span className="text-[12px] font-bold text-blue-500 uppercase tracking-[0.2em]">Provinsi</span>
        <h1 className="text-8xl font-black text-slate-900 tracking-tight leading-none">{province}</h1>
      </div>

      {regency && (
        <>
          <div className="text-slate-100 flex flex-col items-center">
            <div className="w-px h-12 bg-slate-100 mb-4"></div>
            <ArrowDown size={32} strokeWidth={1.5} className="text-slate-200" />
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <span className="text-[12px] font-bold text-blue-500 uppercase tracking-[0.2em]">Kota / Kabupaten</span>
            <h2 className="text-7xl font-black text-slate-800 tracking-tight leading-none">{regency}</h2>
          </div>
        </>
      )}

      {district && (
        <>
          <div className="text-slate-100 flex flex-col items-center">
            <div className="w-px h-12 bg-slate-100 mb-4"></div>
            <ArrowDown size={32} strokeWidth={1.5} className="text-slate-200" />
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <span className="text-[12px] font-bold text-blue-500 uppercase tracking-widest">Kecamatan</span>
            <h3 className="text-6xl font-black text-slate-700 tracking-tight leading-none">{district}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
