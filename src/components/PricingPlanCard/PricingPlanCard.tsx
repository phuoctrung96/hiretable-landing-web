/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { HiReceiptPercent } from 'react-icons/hi2';
import { Card } from '../shared/Card';

const PricingPlanCard: React.FC<{ data: any }> = ({ data }) => {
  const bgColor =
    data.type === 1
      ? 'bg-[#E0E0E0]'
      : data.type === 2
      ? 'bg-[#FAFAFA]'
      : 'bg-[#212121]';
  const textCardColor = data.type === 3 ? 'text-white' : 'text-[#212121]';
  const bgBtn =
    data.type === 1
      ? 'bg-[#757575]'
      : data.type === 2
      ? 'bg-[#5043FF]'
      : 'bg-[#FAFAFA]';
  const textBtnColor = data.type === 3 ? 'text-[#212121]' : 'text-white';

  return (
    <Card
      className={`${bgColor} ${
        data.type === 2 &&
        'border-2 border-[#5043FF] shadow-[0_10px_24px_rgba(80,67,255,0.24)]'
      }`}
    >
      <div className="flex h-[204px] flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className={`font-bold text-3xl ${textCardColor}`}>{data.title}</p>
          {data.type === 2 && (
            <button
              className={`bg-[#BFBAFF] py-2 px-3 w-16 font-medium text-sm flex justify-center items-center rounded-[40px] h-[34px] text-[#1C1689] `}
            >
              Popular
            </button>
          )}
        </div>
        {data.type !== 3 && (
          <div className="flex items-end justify-start">
            <div className="flex items-center justify-center py-2">
              <p className="font-bold text-5xl ">${data.price}</p>
            </div>
            <p className="font-medium text-xl">/month</p>
          </div>
        )}
        <p className={`font-medium text-base mt-8 ${textCardColor}`}>
          {data.desc}
        </p>
      </div>
      <div className="w-full my-8">
        <Link
          href={`${data.type === 3 && '/customize'}`}
          className={`${bgBtn} w-full font-medium text-sm flex justify-center items-center rounded-[32px]  h-[45px] ${textBtnColor} `}
        >
          {data.titleBtn}
        </Link>
      </div>
      <div className="w-full">
        {data.includes.map((item: any, index: number) => (
          <div className="flex justify-between items-center mb-3" key={index}>
            <div className="flex items-center">
              <span className="p-1 mr-3">
                <AiOutlineCheck size={16} className={`${textCardColor}`} />
              </span>
              <p className={`${textCardColor}`}>{item.content}</p>
            </div>
            <Image
              src="/questionCircle.svg"
              alt="questionCircle"
              width={16}
              height={16}
            />
          </div>
        ))}
      </div>
      {data.type === 2 && (
        <Link
          className="flex items-center justify-center w-full mt-5 cursor-pointer"
          href="/deal"
        >
          <HiReceiptPercent color="#5043FF" size={24} />
          <p className="text-[#5043FF] decoration-dashed underline underline-offset-8 font-medium text-sm">
            Or, let's make a deal
          </p>
        </Link>
      )}
    </Card>
  );
};

export { PricingPlanCard };
