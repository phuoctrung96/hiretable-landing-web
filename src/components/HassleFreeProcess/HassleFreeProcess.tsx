import React from 'react';
import { Slider } from '../shared/Slider';
import { HassleFreeProcessData } from './HassleFreeProcess.content';

const HassleFreeProcess: React.FC = () => {
  return (
    <div className="sm:mx-20 mx-5">
      <p className="text-[#212121] text-center font-bold text-[56px] px-[74px] py-16">
        Hassle free process
      </p>
      <Slider images={HassleFreeProcessData} />
    </div>
  );
};

export { HassleFreeProcess };
