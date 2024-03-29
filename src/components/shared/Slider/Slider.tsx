import React, { useState, useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

const Slider: React.FC<{ images: any[] }> = ({ images }) => {
  const [indexCurrent, setIndexCurrent] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current?.classList.remove('animate-fade');
    contentRef.current?.classList.remove('animate-fade');
  };

  useEffect(() => {
    slideRef.current?.addEventListener('animationend', removeAnimation);
    contentRef.current?.addEventListener('animationend', removeAnimation);
  }, []);

  const prevSliderHandler = () => {
    if (indexCurrent === 0) {
      setIndexCurrent(images.length - 1);
    } else {
      setIndexCurrent(indexCurrent - 1);
    }
    slideRef.current?.classList.add('animate-fade');
    contentRef.current?.classList.add('animate-fade');
  };
  const nextSliderHandler = () => {
    if (indexCurrent === images.length - 1) {
      setIndexCurrent(0);
    } else {
      setIndexCurrent(indexCurrent + 1);
    }
    slideRef.current?.classList.add('animate-fade');
    contentRef.current?.classList.add('animate-fade');
  };

  return (
    <div className="flex sm:h-[820px] bg-[#E0E0E0] rounded-[64px] relative mx-4">
      <button
        className="absolute z-10 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block"
        onClick={prevSliderHandler}
      >
        <Image
          src="/arrow-left.svg"
          alt="icon"
          width={30}
          height={30}
          className="sm:w-16 sm:h-16"
        />
      </button>
      <div
        className="hidden sm:hidden sm:flex-auto items-end justify-center md:hidden lg:hidden xl:flex 2xl:flex pl-8"
        ref={slideRef}
      >
        <Image
          src={images[indexCurrent].image}
          alt="item"
          width={539}
          height={820}
        />
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="flex flex-col w-[327px] sm:w-[539px] h-full">
          <div className="flex items-center justify-between sm:justify-start sm:mt-[74px] mt-6 px-3 sm:px-5">
            <button
              className={`text-[#090909] transition duration-200 ease-in-out font-medium text-sm sm:text-base leading-[150%] flex justify-center items-center rounded-[64px] ${
                indexCurrent === 0 && ' bg-[#FCEA10]'
              } px-7 sm:px-14 py-3`}
              onClick={() => setIndexCurrent(0)}
            >
              Post
            </button>
            <button
              className={`text-[#090909] transition duration-200 ease-in-out font-medium text-sm sm:text-base leading-[150%] flex justify-center items-center rounded-[64px] ${
                indexCurrent === 1 && ' bg-[#FCEA10]'
              } px-7 sm:px-14 py-3`}
              onClick={() => setIndexCurrent(1)}
            >
              Review
            </button>
            <button
              className={`text-[#090909] transition duration-200 ease-in-out font-medium text-sm sm:text-base leading-[150%] flex justify-center items-center rounded-[64px] ${
                indexCurrent === 2 && ' bg-[#FCEA10]'
              } px-7 sm:px-14 py-3`}
              onClick={() => setIndexCurrent(2)}
            >
              Message
            </button>
          </div>
          <div
            ref={contentRef}
            className="flex-1 flex items-start justify-center flex-col w-full h-full pt-4 sm:pt-0 pb-20 sm:pb-14 px-6"
          >
            <p className="font-bold sm:text-[44px] leading-[150%] mb-3 sm:mb-8 text-base break-normal">
              {images[indexCurrent].title}
            </p>
            {images[indexCurrent].content.length > 1 ? (
              <ul className="px-6" style={{ listStyleType: 'disc' }}>
                {images[indexCurrent].content.map(
                  (item: string, index: number) => (
                    <li key={index} className="text-sm sm:text-base">
                      {item}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p className="text-sm sm:text-base font-normal leading-[150%]">
                {images[indexCurrent].content[0]}
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={nextSliderHandler}
        className="absolute top-1/2 z-10 right-0 transform translate-x-1/2 -translate-y-1/2 hidden sm:block"
      >
        <Image
          src="/arrow-right.svg"
          alt="icon"
          width={30}
          height={30}
          className="sm:w-16 sm:h-16"
        />
      </button>
    </div>
  );
};
export { Slider };
