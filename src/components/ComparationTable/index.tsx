/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ImCheckmark } from 'react-icons/im';
import { BsDashLg } from 'react-icons/bs';

const ComparationTable: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="hidden sm:flex flex-col w-full px-[74px]">
      <div className="flex items-start  px-4 border-b border-gray-100">
        <div className="w-1/2"></div>
        {data.map((item: any, index: number) => (
          <div
            className="flex-grow text-lg font-semibold text-center w-1/6 mb-3"
            key={index}
          >
            <p className="mb-3">{item.title}</p>
            {item.type !== 3 && (
              <>
                <div className="flex items-end justify-center mb-3">
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-xl ">${item.price}</p>
                  </div>
                  <p className="font-medium text-base text-gray-400">/mo</p>
                </div>
                <p className="text-gray-400 font-medium  text-base mb-3">
                  billed yearly
                </p>
              </>
            )}
            <p className=" text-center text-base font-medium ">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center h-12 px-4 ">
        <div className="font-medium">What's included</div>
      </div>
      <div className="flex items-center h-12 px-4">
        <div className="w-1/2">Unlimited candidates</div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
      </div>
      <div className="flex items-center h-12 px-4">
        <div className="w-1/2">Unlimited job postings</div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
      </div>
      <div className="flex items-center h-12 px-4">
        <div className="w-1/2">Unlimited messages</div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
      </div>
      <div className="flex items-center h-12 px-4">
        <div className="w-1/2">Multiple locations</div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
      </div>
      <div className="flex items-center h-12 px-4">
        <div className="w-1/2">Volume discounts</div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
      </div>
      <div className="flex items-center h-12 px-4">
        <div className="w-1/2">Custom branding</div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <BsDashLg size={16} color="#757575" />
          </span>
        </div>
        <div className="flex justify-center flex-grow w-0">
          <span className="p-1 mr-3">
            <ImCheckmark size={16} color="#5043FF" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComparationTable;
