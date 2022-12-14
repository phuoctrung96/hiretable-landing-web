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
const HassleFreeProcess: React.FC = () => {
  const images = [img1, img2, img3];
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSliderHandler = (id: number) => {
    if (id === 0) {
      setActiveSlide(images.length - 1);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };
  const nextSliderHandler = (id: number) => {
    if (id === images.length - 1) {
      setActiveSlide(0);
    } else if (id < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };
  return (
    <div className="sm:mx-20 mx-5">
      <p className="text-[#212121] text-center font-bold text-[56px] px-[74px] py-16">
        Hassle free process
      </p>
      {images.map((item, index) => (
        <div
          key={index}
          className={`${
            activeSlide === index
              ? 'flex justify-evenly sm:h-[820px] bg-[#E0E0E0] pb-5 sm:rounded-[128px] rounded-[64px] relative'
              : 'hidden'
          } `}
        >
          <button
            onClick={() => prevSliderHandler(index)}
            className="absolute -left-3 sm:-left-8 top-1/2 bg-white rounded-full"
          >
            <BsFillArrowLeftCircleFill className="sm:h-[64px] sm:w-[64px] h-[30px] w-[30px]" />
          </button>

          <Image
            src={item}
            alt="item"
            width={539}
            height={820}
            className="hidden sm:flex"
          />
          <div className="flex flex-col">
            <div className="flex items-center justify-between sm:mt-[74px] mt-5">
              <Button
                title="Post"
                color="text-[#090909]"
                bg="bg-[#FCEA10]"
                size="medium"
              />
              <Button
                title="Review"
                color="text-[#090909]"
                bg=""
                size="medium"
              />
              <Button
                title="Message"
                color="text-[#090909]"
                bg=""
                size="medium"
              />
            </div>
            <div className="flex-1 flex items-start justify-center flex-col">
              <p className="font-bold sm:text-[56px] mb-8 text-base">
                Hire elites
              </p>
              <ul style={{ listStyleType: 'disc' }}>
                <li>Post a job in different locations.</li>
                <li>Get video responses.</li>
                <li>No spam.</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => nextSliderHandler(index)}
            className="absolute -right-3 sm:-right-8 top-1/2 bg-white rounded-full"
          >
            <BsFillArrowRightCircleFill className="sm:h-[64px] sm:w-[64px] h-[30px] w-[30px]" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default HassleFreeProcess;
