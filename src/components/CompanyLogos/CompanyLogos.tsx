import React from 'react';
import Image from 'next/image';
import { logoList } from './CompanyLogos.content';

const CompanyLogos: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between sm:px-16 py-[74px]">
      {logoList.map((logo, index) => (
        <Image
          src={logo.url}
          width={79}
          height={77}
          alt={logo.url}
          key={logo.id}
        />
      ))}
    </div>
  );
};

export { CompanyLogos };
