import React from 'react';
import { Slider } from '../shared/Slider';
import img1 from '../../../public/slider1.png';
import img2 from '../../../public/slider2.png';
import img3 from '../../../public/slider3.png';

const HassleFreeProcess: React.FC = () => {
  const images = [
    {
      image: img1,
      title: 'Hire elites',
      content: [
        'Post a job in different locations.',
        'Get video responses.',
        'No spam.'
      ]
    },
    {
      image: img2,
      title: 'Review applications',
      content: ['Review candidates applications with ease.']
    },
    {
      image: img3,
      title: 'Message candidate directly',
      content: [
        'Send and recieve messages easily on hiretable. Easy-to-use interface with much more features than other recruiting companies.'
      ]
    }
  ];

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
