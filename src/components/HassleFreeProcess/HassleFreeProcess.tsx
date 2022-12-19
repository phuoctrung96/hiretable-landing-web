import React from 'react';
import { Slider } from '../shared/Slider';
import { HassleFreeProcessData } from './HassleFreeProcess.content';

const HassleFreeProcess: React.FC = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <p className="text-[#212121] text-center font-bold text-[56px] px-[74px] py-16">
        Hassle free process
      </p>
      <Slider images={HassleFreeProcessData} />
    </div>
  );
};

export { HassleFreeProcess };
