import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const [searchParams] = useSearchParams();
  const province = searchParams.get('province');
  const regency = searchParams.get('regency');
  const district = searchParams.get('district');

  return (
    <nav className="breadcrumb text-sm text-slate-400 font-medium">
      <ul className="flex items-center space-x-2">
        <li>Indonesia</li>
        {province && (
          <>
            <li className="before:content-['>'] before:mx-2 before:text-slate-300">{province}</li>
            {regency && (
              <>
                <li className="before:content-['>'] before:mx-2 before:text-slate-300">{regency}</li>
                {district && (
                  <li className="before:content-['>'] before:mx-2 before:text-slate-300 text-blue-500">{district}</li>
                )}
              </>
            )}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
