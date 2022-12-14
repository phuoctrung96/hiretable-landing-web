import React from 'react';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button';

import Image from 'next/image';
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 z-10 right-0 transform translate-x-1/2 -translate-y-1/2"
      onClick={onClick}
    >
      <Image
        src="/arrow-right.png"
        alt="icon"
        width={30}
        height={30}
        className="sm:w-16 sm:h-16"
      />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
      onClick={onClick}
    >
      <Image
        src="/arrow-left.png"
        alt="icon"
        width={30}
        height={30}
        className="sm:w-16 sm:h-16"
      />
    </button>
  );
}

const Slider: React.FC<{ images: any[] }> = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <ReactSlick {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <div className="flex justify-evenly sm:h-[820px] bg-[#E0E0E0] pb-5 sm:rounded-[128px] rounded-[64px] relative">
              <div className="sm:hidden md:hidden lg:hidden xl:flex 2xl:flex">
                <Image src={item} alt="item" width={539} height={820} />
              </div>
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
            </div>
          </div>
        ))}
      </ReactSlick>
    </div>
  );
};
export default Slider;
