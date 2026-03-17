import React, { useMemo } from 'react';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import type { RegionsData } from '../types';
import { Landmark, ChevronDown, MapPin } from 'lucide-react';

const RegionSelector: React.FC = () => {
  const data = useLoaderData() as RegionsData;
  const [searchParams, setSearchParams] = useSearchParams();

  const provinceVal = searchParams.get('province') || '';
  const regencyVal = searchParams.get('regency') || '';
  const districtVal = searchParams.get('district') || '';

  const provinces = data.provinces;

  const regencies = useMemo(() => {
    if (!provinceVal) return [];
    const provinceId = provinces.find(p => p.name === provinceVal)?.id;
    return data.regencies.filter(r => r.province_id === provinceId);
  }, [provinceVal, provinces, data.regencies]);

  const districts = useMemo(() => {
    if (!regencyVal) return [];
    const regencyId = data.regencies.find(r => r.name === regencyVal)?.id;
    return data.districts.filter(d => d.regency_id === regencyId);
  }, [regencyVal, data.regencies, data.districts]);

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      setSearchParams({ province: val });
    } else {
      setSearchParams({});
    }
  };

  const handleRegencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set('regency', val);
      params.delete('district');
    } else {
      params.delete('regency');
      params.delete('district');
    }
    setSearchParams(params);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set('district', val);
    } else {
      params.delete('district');
    }
    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Provinsi</label>
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-1.447.894l-4.553-2.277a2 2 0 0 0-1.788 0l-3.412 1.706A2 2 0 0 1 8.906 18l-4.329-2.165A1 1 0 0 1 4 14.941V2.176a1 1 0 0 1 1.447-.894l4.553 2.277a2 2 0 0 0 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
          </div>
          <select
            name="province"
            value={provinceVal}
            onChange={handleProvinceChange}
            className="w-full h-14 pl-12 pr-10 bg-white border border-slate-300 rounded-2xl appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-700 font-semibold cursor-pointer text-sm"
          >
            <option value="">Pilih Provinsi</option>
            {provinces.map(p => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:rotate-180 transition-transform">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Kota/Kabupaten</label>
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
            <Landmark size={18} />
          </div>
          <select
            name="regency"
            value={regencyVal}
            onChange={handleRegencyChange}
            disabled={!provinceVal}
            className="w-full h-14 pl-12 pr-10 bg-white border border-slate-300 rounded-2xl appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-700 font-semibold disabled:bg-slate-50/50 disabled:text-slate-300 cursor-pointer disabled:cursor-not-allowed text-sm"
          >
            <option value="">Pilih Kota/Kabupaten</option>
            {regencies.map(r => (
              <option key={r.id} value={r.name}>{r.name}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:rotate-180 transition-transform">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Kecamatan</label>
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
            <MapPin size={18} />
          </div>
          <select
            name="district"
            value={districtVal}
            onChange={handleDistrictChange}
            disabled={!regencyVal}
            className="w-full h-14 pl-12 pr-10 bg-white border border-slate-300 rounded-2xl appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-700 font-semibold disabled:bg-slate-50/50 disabled:text-slate-300 cursor-pointer disabled:cursor-not-allowed text-sm"
          >
            <option value="">Pilih Kecamatan</option>
            {districts.map(d => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:rotate-180 transition-transform">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={handleReset}
          className="w-full h-14 flex items-center justify-center space-x-2 bg-blue-50/30 text-slate-300 font-bold rounded-2xl border-2 border-slate-200 hover:bg-blue-100 hover:text-slate-600 hover:border-blue-600 active:scale-[0.98] transition-all cursor-pointer shadow-sm group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter-x"><path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"/><path d="m15 3 6 6"/><path d="m21 3-6 6"/></svg>
          <span className="tracking-widest">RESET</span>
        </button>
      </div>
    </div>
  );
};

export default RegionSelector;
