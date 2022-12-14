import Image from 'next/image';
import React, { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';
import Button from '../shared/Button';
import img1 from '../../../public/Frame3589.png';
import img2 from '../../../public/Frame1570.png';
import img3 from '../../../public/image3.png';
import Slider from '../Slider';

const HassleFreeProcess: React.FC = () => {
  const images = [img1, img2, img3];
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="sm:mx-20 mx-5">
      <p className="text-[#212121] text-center font-bold text-[56px] px-[74px] py-16">
        Hassle free process
      </p>
      <Slider />
    </div>
  );
};

export default HassleFreeProcess;
