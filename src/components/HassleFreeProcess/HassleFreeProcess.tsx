import React from 'react';
import { Slider } from '../shared/Slider';
import { HassleFreeProcessData } from './HassleFreeProcess.content';

const HassleFreeProcess: React.FC = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <h4 className="text-center py-14">Hassle free process</h4>
      <Slider images={HassleFreeProcessData} />
    </div>
  );
};

export { HassleFreeProcess };
