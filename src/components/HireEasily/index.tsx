import React from 'react';
import FAQItem from '../FAQs/FAQItem';
import Video from '../VideoPlayer';
import { HireEasilyData } from '@/constants/HireEasily.content';
const HireEasily: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="sm:px-[74px] sm:py-16 text-center">
        Hire easily with HireTable.
      </h4>
      <div className="flex-align-justify-center ">
        <div className="flex flex-col sm:mr-16 sm:w-[614px] gap-2">
          {HireEasilyData.map((item, index) => (
            <FAQItem key={item.id} title={item.title} desc={item.desc} />
          ))}
        </div>
        <div className="hidden sm:flex">
          <Video height={1002} width={608} />
        </div>
      </div>
    </div>
  );
};

export default HireEasily;
