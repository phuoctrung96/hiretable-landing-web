import React from 'react';
import { Slider } from '../shared/Slider';
import img1 from '../../../public/slider1.png';
import img2 from '../../../public/slider2.png';
import img3 from '../../../public/slider3.png';

const HassleFreeProcess: React.FC = () => {
  const images = [img1, img2, img3];

  return (
    <div className="sm:mx-20 mx-5">
      <p className="text-[#212121] text-center font-bold text-[56px] px-[74px] py-16">
        Hassle free process
      </p>
      <Slider images={images} />
    </div>
  );
};

export { HassleFreeProcess };
