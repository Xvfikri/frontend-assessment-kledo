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
    <div className="h-full flex flex-col items-center pt-4 space-y-10 lg:space-y-16 px-4 md:px-6 min-w-0">
      <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 min-w-0">
        <span className="text-[10px] md:text-[12px] font-bold text-blue-500 uppercase tracking-[0.2em]">Provinsi</span>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 tracking-tight leading-tight md:leading-none break-words w-full px-2">{province}</h1>
      </div>

      {regency && (
        <>
          <div className="text-slate-100 flex flex-col items-center">
            <div className="w-px h-8 md:h-12 bg-slate-100 mb-4"></div>
            <ArrowDown size={window.innerWidth < 768 ? 24 : 32} strokeWidth={1.5} className="text-slate-200" />
          </div>
          <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 min-w-0">
            <span className="text-[10px] md:text-[12px] font-bold text-blue-500 uppercase tracking-[0.2em]">Kota / Kabupaten</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight md:leading-none break-words w-full px-2">{regency}</h2>
          </div>
        </>
      )}

      {district && (
        <>
          <div className="text-slate-100 flex flex-col items-center">
            <div className="w-px h-8 md:h-12 bg-slate-100 mb-4"></div>
            <ArrowDown size={window.innerWidth < 768 ? 24 : 32} strokeWidth={1.5} className="text-slate-200" />
          </div>
          <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 min-w-0">
            <span className="text-[10px] md:text-[12px] font-bold text-blue-500 uppercase tracking-widest">Kecamatan</span>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-700 tracking-tight leading-tight md:leading-none break-words w-full px-2">{district}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
