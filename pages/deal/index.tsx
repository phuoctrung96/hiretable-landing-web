import React from 'react';
import { NextPage } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import DealForm from '@/components/DealForm';
import { AiOutlineCheck } from 'react-icons/ai';

import Image from 'next/image';
const deal: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex sm:flex-row flex-col items-start justify-evenly px-4 sm:px-20 py-16">
        <div className="flex flex-col justify-start sm:w-[618px] mb-8">
          <p className=" font-bold sm:text-[106px] text-[40px] flex-grow-0 text-center sm:text-left">
            Make a <span className="text-[#FCEA10]">deal</span>
          </p>
          <p className="font-medium text-xl my-8">
            Available for businesses and franchises with large application
            volume, custom branding or unique business models
          </p>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="p-1 mr-3">
                <AiOutlineCheck size={16} />
              </span>
              <p>Volume discounts</p>
            </div>
            <Image
              src="/questionCircle.svg"
              alt="questionCircle"
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="p-1 mr-3">
                <AiOutlineCheck size={16} />
              </span>
              <p>Custom branding</p>
            </div>
            <Image
              src="/questionCircle.svg"
              alt="questionCircle"
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="p-1 mr-3">
                <AiOutlineCheck size={16} />
              </span>
              <p>Multiple locations</p>
            </div>
            <Image
              src="/questionCircle.svg"
              alt="questionCircle"
              width={16}
              height={16}
            />
          </div>
        </div>
        <DealForm />
      </div>
      <Footer isCircle={false} />
    </div>
  );
};

export default deal;
